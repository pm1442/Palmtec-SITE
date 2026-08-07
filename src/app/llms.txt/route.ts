import { getAllPosts } from "@/lib/posts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const postLinks = posts.length
    ? posts.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`).join("\n")
    : "- No articles have been published yet.";
  const content = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

PalmTec is a U.S.-based paid advertising service founded by Philip Miller. It helps small businesses understand, improve, and manage their Google Ads and other paid advertising campaigns with straightforward reporting and personal accountability.

## Core services

- [Google Ads management for small businesses](${SITE_URL}/#services): Campaign management, optimization, lead-quality review, and clear reporting.
- [Paid advertising management](${SITE_URL}/#services): Google, Facebook, Instagram, TikTok, and Reddit advertising support.
- [Free ad opportunity audit](${SITE_URL}/#audit): A practical review of what may be limiting a business's ad performance. A personal reply is provided within one business day; no sales call is required unless requested.

## Key pages

- [Home](${SITE_URL}/)
- [Blog](${SITE_URL}/blog)
- [Privacy](${SITE_URL}/privacy)

## Published articles

${postLinks}

## Contact

- Email: support@palmtec.biz
`;
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
