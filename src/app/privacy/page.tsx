import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How PalmTec collects, uses, and protects information submitted through its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-cream">
      <Container className="py-16 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold-ink">PalmTec LLC</p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">Privacy notice</h1>
          <p className="mt-5 text-sm text-ink-muted">Last updated: August 7, 2026</p>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-muted">
            <section><h2 className="font-serif text-2xl text-ink">What we collect</h2><p className="mt-3">When you request a free ad audit, we collect the information you provide, including your name, email address, advertising platform, and a description of what feels stuck. Our hosting provider may also process basic technical information, such as IP address, browser type, and request logs, to deliver and secure the website.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">How we use it</h2><p className="mt-3">We use your information to respond to your request, prepare an audit, communicate about your inquiry and PalmTec&apos;s services, maintain business records, and protect the site from misuse. We do not sell personal information.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Service providers</h2><p className="mt-3">We use service providers to operate the site and manage inquiries. Vercel hosts this website, and GoHighLevel stores and helps us respond to audit-form submissions. These providers process information for PalmTec under their own terms and privacy practices. We may also disclose information when required by law or to protect our rights, users, or services.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Cookies and advertising technology</h2><p className="mt-3">PalmTec uses the Google tag to measure the effectiveness of Google Ads and submitted audit requests after an ad interaction. Google may use cookies or similar identifiers for measurement. We do not currently use the Google tag for remarketing audiences. Our providers may also use essential technical cookies or similar technologies needed to run and secure their services. If we add analytics, remarketing, or other advertising technology, we will update this notice and provide any required choices or notices.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Retention and security</h2><p className="mt-3">We keep inquiry information only for as long as reasonably necessary for the purposes above, to resolve disputes, or to meet legal obligations. We use reasonable administrative and technical measures to protect information, but no online system is completely secure.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Your choices</h2><p className="mt-3">You may ask us to update or delete information you submitted, or opt out of future marketing emails, by contacting <a className="underline decoration-gold underline-offset-4 hover:text-ink" href="mailto:support@palmtec.biz">support@palmtec.biz</a>. Marketing emails also include an unsubscribe option.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Changes to this notice</h2><p className="mt-3">We may update this notice as our website or services change. The current version will always be posted on this page.</p></section>
          </div>
        </article>
      </Container>
    </main>
  );
}
