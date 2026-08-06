import fs from "node:fs";
import path from "node:path";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  content: string;
};

type Frontmatter = Omit<Post, "slug" | "content">;

function parseFrontmatter(file: string): { frontmatter: Frontmatter; content: string } {
  const normalized = file.replace(/^\uFEFF/, "");
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Each blog post needs frontmatter wrapped in --- lines.");
  }

  const values = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");
        if (separator === -1) throw new Error(`Invalid frontmatter line: ${line}`);
        return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^"|"$/g, "")];
      }),
  );

  if (!values.title || !values.description || !values.date) {
    throw new Error("Each blog post needs title, description, and date frontmatter.");
  }

  return {
    frontmatter: {
      title: values.title,
      description: values.description,
      date: values.date,
      draft: values.draft === "true",
    },
    content: match[2].trim(),
  };
}

function getPostFromFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const file = fs.readFileSync(path.join(POSTS_DIRECTORY, fileName), "utf8");
  const { frontmatter, content } = parseFrontmatter(file);
  return { slug, ...frontmatter, content };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(getPostFromFile)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  const fileName = `${slug}.md`;
  if (!fs.existsSync(path.join(POSTS_DIRECTORY, fileName))) return undefined;

  const post = getPostFromFile(fileName);
  return post.draft ? undefined : post;
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
