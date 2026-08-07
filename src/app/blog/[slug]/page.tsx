import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/blog/MarkdownContent";
import Container from "@/components/ui/Container";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { jsonLd } from "@/lib/structured-data";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: `${post.date}T12:00:00Z`,
      images: post.image ? [{ url: post.image, alt: post.imageAlt || post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T12:00:00Z`,
    dateModified: `${post.date}T12:00:00Z`,
    author: { "@type": "Person", name: "Philip Miller" },
    publisher: { "@id": `${SITE_URL}/#organization`, name: SITE_NAME },
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
  };

  return (
    <article className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="focus-gold text-sm font-semibold text-ink-muted underline decoration-gold underline-offset-4 hover:text-ink">← Back to blog</Link>
          <p className="eyebrow mt-10 text-gold-ink">{formatPostDate(post.date)}</p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{post.description}</p>
          {post.image ? <figure className="mt-10 overflow-hidden rounded-card border border-ink/10 bg-cream-tint"><Image src={post.image} alt={post.imageAlt || post.title} width={1600} height={900} className="h-auto w-full" priority /></figure> : null}
          <div className="mt-12 border-t border-ink/10 pt-10"><MarkdownContent content={post.content} /></div>
          <div className="mt-14 rounded-card bg-pine-900 p-7 sm:p-8">
            <p className="font-serif text-2xl text-paper">Want a straight answer about your ads?</p>
            <p className="mt-2 text-paper-muted">Send the details. Philip will reply within one business day.</p>
            <Link href="/#audit" className="focus-gold mt-5 inline-flex rounded-pill bg-gold px-5 py-2.5 text-sm font-semibold text-pine-950 hover:bg-gold-hover">Get your free ad audit</Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
