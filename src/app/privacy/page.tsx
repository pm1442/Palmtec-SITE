import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "PalmTec's privacy notice for website visitors and ad-audit inquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-cream">
      <Container className="py-16 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold-ink">PalmTec</p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">Privacy notice</h1>
          <p className="mt-5 text-sm text-ink-muted">Last updated: August 6, 2026</p>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-muted">
            <section><h2 className="font-serif text-2xl text-ink">Information we collect</h2><p className="mt-3">When you request a free ad audit, we collect the information you provide, such as your name, email address, advertising platform, and a description of what feels stuck.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">How we use it</h2><p className="mt-3">We use that information to respond to your request, prepare an audit, communicate with you about PalmTec&apos;s services, and maintain our business records.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Sharing and retention</h2><p className="mt-3">PalmTec does not sell your personal information. We retain inquiry information only as long as reasonably needed for the purposes described here or to meet legal obligations.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Your choices</h2><p className="mt-3">You may ask us to update or delete the information you provided, or opt out of future marketing emails, by contacting us at <a className="underline decoration-gold underline-offset-4 hover:text-ink" href="mailto:support@palmtec.biz">support@palmtec.biz</a>.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Changes to this notice</h2><p className="mt-3">We may update this notice as our website or services change. The current version will always be posted on this page.</p></section>
          </div>
        </article>
      </Container>
    </main>
  );
}
