// rehype-customize-image-src.js
import { visit } from "unist-util-visit";
import fs from "fs";
import path from "path";

// Cache for the metadata to avoid reading from disk too often
let imageMetadataCache = null;

function getImageMetadata() {
  const METADATA_PATH = path.resolve("./src/data/image-metadata.json");
  if (!fs.existsSync(METADATA_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(METADATA_PATH, "utf-8"));
  } catch (e) {
    console.error("Failed to parse image-metadata.json", e);
    return {};
  }
}

const getHeroImage = (tree, homePage) => {
  let heroUrl = null;
  visit(tree, "raw", (node) => {
    if (heroUrl) return;
    const match = /<img\s+[^>]*src="([^"]+)"/.exec(node.value);
    if (match) {
      const url = match[1];
      const domainRegex =
        /https:\/\/(?:cdn\.(?:fliggy\.com|alipayobjects\.com)|gw\.(?:alipayobjects\.com|alicdn\.com)|img\.alicdn\.com|raw\.githubusercontent\.com|camo\.githubusercontent\.com|cdn\.tw93\.fun)/;
      const skipRegex = /\.(?:gif|svg|GIF|SVG)(?:\?.*)?$/;
      if (url.match(domainRegex) && !url.match(skipRegex)) {
        const separator = url.includes("?") ? "&" : "?";
        heroUrl = `${url}${separator}x-oss-process=image/auto-orient,1/resize,w_2000/format,webp`;
      }
    }
  });
  return heroUrl;
};

export default function rehypeCustomizeImageSrc() {
  return (tree, file) => {
    // In dev mode, we want to pick up changes to the JSON file
    // In production/build, it's fine to read once
    const imageMetadata = getImageMetadata();
    let imageIndex = 0;

    // Attach hero image to file metadata so layouts can access it for preloading
    const heroImage = getHeroImage(tree);
    if (heroImage) {
      if (!file.data.astro) file.data.astro = {};
      if (!file.data.astro.frontmatter) file.data.astro.frontmatter = {};
      file.data.astro.frontmatter.heroImage = heroImage;
    }

    visit(tree, "raw", (node) => {
      // 1. Process <img> tags
      const fullImgRegex = /<img\s+[^>]*src="([^"]+)"[^>]*>/g;
      node.value = node.value.replace(fullImgRegex, (fullMatch, p1) => {
        const urlLower = p1.toLowerCase();
        const isSvgOrGif =
          urlLower.includes(".svg") ||
          urlLower.includes(".gif") ||
          p1.includes("2e737667") || // .svg
          p1.includes("2e676966"); // .gif

        if (isSvgOrGif) {
          return fullMatch;
        }

        const domainRegex =
          /https:\/\/(?:cdn\.(?:fliggy\.com|alipayobjects\.com)|gw\.(?:alipayobjects\.com|alicdn\.com)|img\.alicdn\.com|raw\.githubusercontent\.com|camo\.githubusercontent\.com|cdn\.tw93\.fun)/;
        if (!p1.match(domainRegex)) {
          return fullMatch;
        }

        imageIndex++;
        const isFirstImage = imageIndex === 1;
        const separator = p1.includes("?") ? "&" : "?";
        const meta = imageMetadata[p1];

        // Extract original width/height if they exist
        const originalWidthMatch = fullMatch.match(/width="([^"]*)"/);
        const originalHeightMatch = fullMatch.match(/height="([^"]*)"/);
        const origWidth = originalWidthMatch
          ? originalWidthMatch[1].replace("px", "")
          : null;
        const origHeight = originalHeightMatch
          ? originalHeightMatch[1].replace("px", "")
          : null;

        let newAttrs = `src="${p1}${separator}x-oss-process=image/auto-orient,1/resize,w_2000/format,webp" data-lightense-src="${p1}"`;

        const finalWidth = meta?.width || origWidth;
        const finalHeight = meta?.height || origHeight;

        if (finalWidth && finalHeight) {
          const ratio = (Number(finalWidth) / Number(finalHeight)).toFixed(4);
          const loadingAttr = isFirstImage
            ? 'loading="eager" fetchpriority="high"'
            : 'loading="lazy"';
          newAttrs += ` width="${finalWidth}" height="${finalHeight}" style="aspect-ratio: ${ratio};" ${loadingAttr}`;
        } else if (isFirstImage) {
          newAttrs += ' loading="eager" fetchpriority="high"';
        } else {
          newAttrs += ' loading="lazy"';
        }

        const otherAttrs = fullMatch
          .replace(/<img\s+/, "")
          .replace(/\s*\/?>$/, "")
          .replace(/\s*src="[^"]*"/, "")
          .replace(/\s*width="[^"]*"/g, "")
          .replace(/\s*height="[^"]*"/g, "")
          .replace(/\s*loading="[^"]*"/g, "")
          .replace(/\s*fetchpriority="[^"]*"/g, "")
          .replace(/\s*style="[^"]*"/g, "");

        return `<img ${newAttrs} ${otherAttrs} />`;
      });

      // 2. Process <video> tags for posters
      const videoRegex = /<video\s+([^>]*src="([^"]+)"[^>]*)>/g;
      const videoTagRegex = /<video\s+([^>]*)>/g;

      node.value = node.value.replace(videoTagRegex, (fullMatch, attrs) => {
        // If it already has a poster, don't touch it
        if (attrs.includes("poster=")) {
          return fullMatch;
        }

        // Use frontmatter 'image' if available as poster
        const frontmatterImage = file.data.astro?.frontmatter?.image;
        const posterUrl = frontmatterImage || heroImage;

        if (posterUrl) {
          const separator = posterUrl.includes("?") ? "&" : "?";
          const processedPoster = posterUrl.includes("x-oss-process")
            ? posterUrl
            : `${posterUrl}${separator}x-oss-process=image/auto-orient,1/resize,w_2000/format,webp`;

          let videoAttrs = `poster="${processedPoster}"`;

          // Try to get dimensions of the poster to prevent layout shift for video
          const meta = imageMetadata[posterUrl];

          // Extract original values for fallback
          const originalWidthMatch = attrs.match(/width="([^"]*)"/);
          const originalHeightMatch = attrs.match(/height="([^"]*)"/);
          const origWidth = originalWidthMatch
            ? originalWidthMatch[1].replace("px", "")
            : null;
          const origHeight = originalHeightMatch
            ? originalHeightMatch[1].replace("px", "")
            : null;

          const finalWidth = meta?.width || origWidth;
          const finalHeight = meta?.height || origHeight;

          if (finalWidth && finalHeight) {
            const ratio = (Number(finalWidth) / Number(finalHeight)).toFixed(4);
            videoAttrs += ` width="${finalWidth}" height="${finalHeight}" style="aspect-ratio: ${ratio};"`;
          }

          // Clean up conflicting attributes from the original video tag
          const otherAttrs = attrs
            .replace(/\s*poster="[^"]*"/g, "")
            .replace(/\s*width="[^"]*"/g, "")
            .replace(/\s*height="[^"]*"/g, "")
            .replace(/\s*style="[^"]*"/g, "");

          return `<video ${videoAttrs} ${otherAttrs}>`;
        }

        return fullMatch;
      });
    });
  };
}
