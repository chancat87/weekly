import rss from "@astrojs/rss";
import { getIndex, parseTitle, toNumericUrl } from "@/util";
import { renderSupportCalloutForRSS } from "@/supportCallout";
import { SITE } from "@/config";

export async function GET() {
  let allPosts = import.meta.glob("./posts/*.md", { eager: true });
  let posts = Object.values(allPosts);

  posts = posts.sort((a, b) => getIndex(b.url) - getIndex(a.url));

  // Only 12 are kept
  posts = posts.slice(0, 12);

  // Process Markdown content, return the original content of unfiltered tags
  const processContent = async (item) => {
    const content = await item.compiledContent();
    return content;
  };

  return rss({
    title: "Tw93 Weekly",
    description: "Recording engineer Tw93's non-boring life",
    site: "https://weekly.tw93.fun/en/",
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<atom:icon>${SITE.icon}</atom:icon><atom:logo>${SITE.icon}</atom:logo><image><url>${SITE.icon}</url><title>Tw93 Weekly</title><link>${SITE.homePage}/en/</link></image><follow_challenge><feedId>41147805276726276</feedId><userId>42909600318350336</userId></follow_challenge>`,
    items: await Promise.all(
      posts.map(async (item) => {
        const numericLink =
          item.frontmatter.numericUrl ?? toNumericUrl(item.url);
        // Add /en prefix to link if not present
        const enLink = numericLink.startsWith("/en")
          ? numericLink
          : `/en${numericLink}`;
        const title = parseTitle(
          numericLink,
          item.frontmatter.legacySlug,
          item.frontmatter.issueTitle,
          "en",
        );
        return {
          link: enLink,
          title,
          description: `${await processContent(item)}${renderSupportCalloutForRSS("en")}`,
          pubDate: item.frontmatter.date,
        };
      }),
    ),
  });
}
