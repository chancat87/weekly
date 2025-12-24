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
    title: "潮流周刊",
    description: "记录工程师 Tw93 的不枯燥生活",
    site: "https://weekly.tw93.fun/",
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<atom:icon>${SITE.icon}</atom:icon><atom:logo>${SITE.icon}</atom:logo><image><url>${SITE.icon}</url><title>${SITE.title}</title><link>${SITE.homePage}/</link></image><follow_challenge><feedId>41147805276726275</feedId><userId>42909600318350336</userId></follow_challenge>`,
    items: await Promise.all(
      posts.map(async (item) => {
        const numericLink =
          item.frontmatter.numericUrl ?? toNumericUrl(item.url);
        const title = parseTitle(
          numericLink,
          item.frontmatter.legacySlug,
          item.frontmatter.issueTitle,
        );
        return {
          link: numericLink,
          title,
          description: `${await processContent(item)}${renderSupportCalloutForRSS()}`,
          pubDate: item.frontmatter.date,
        };
      }),
    ),
  });
}
