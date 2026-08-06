import Link from "next/link";
import Container from "@/components/ui/Container";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "PalmTec Blog | Straight answers about paid ads",
  description: "Practical notes on paid ads, lead quality, and making marketing decisions with clearer numbers.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="bg-cream">
      <Container className="py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-ink">PalmTec blog</p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">Straight answers about paid ads.</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">Useful notes for business owners who want to understand what is working, what is not, and what to do next.</p>
        </div>

        {posts.length ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-card border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(27,23,18,0.06)] transition-transform hover:-translate-y-0.5 sm:p-8">
                <p className="eyebrow text-gold-ink">{formatPostDate(post.date)}</p>
                <h2 className="mt-4 font-serif text-2xl leading-snug text-ink"><Link href={`/blog/${post.slug}`} className="focus-gold hover:text-gold-ink">{post.title}</Link></h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="focus-gold mt-6 inline-flex text-sm font-semibold text-ink underline decoration-gold underline-offset-4 hover:text-gold-ink">Read article</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 max-w-2xl rounded-card border border-ink/10 bg-cream-tint p-8">
            <p className="font-serif text-2xl text-ink">The first notes are on their way.</p>
            <p className="mt-3 leading-relaxed text-ink-muted">Check back soon for clear, practical guidance on getting more from your advertising.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
