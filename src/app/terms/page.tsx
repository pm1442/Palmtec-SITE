import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the PalmTec website and free ad opportunity audit request.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-cream">
      <Container className="py-16 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold-ink">PalmTec LLC</p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">Terms of use</h1>
          <p className="mt-5 text-sm text-ink-muted">Last updated: August 7, 2026</p>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-muted">
            <section><h2 className="font-serif text-2xl text-ink">Using this website</h2><p className="mt-3">By using palmtec.biz, you agree to these Terms of Use. If you do not agree, please do not use the site. PalmTec may update these terms from time to time by posting a revised version here.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Information, not a promise of results</h2><p className="mt-3">The website and blog provide general information about paid advertising. They are not legal, financial, tax, or business advice. Advertising results depend on many factors outside PalmTec&apos;s control, so we do not promise specific results, lead volume, revenue, ad approvals, or platform performance.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Free audit requests</h2><p className="mt-3">Submitting an audit request asks PalmTec to review the information you provide and respond to your inquiry. It does not create a client, agency, fiduciary, or other professional relationship, and it does not obligate either party to enter into a paid engagement. Paid services require a separate written agreement.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Your submissions</h2><p className="mt-3">Please provide accurate information and do not submit content that is unlawful, confidential to another party without permission, or harmful to the site or its users. Do not send passwords, payment-card details, or other sensitive information through the audit form.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Ownership and links</h2><p className="mt-3">PalmTec owns or has the right to use the website&apos;s text, design, graphics, and other content. You may view and share it for personal or internal business use, but may not reproduce it commercially without permission. Links to third-party websites are provided for convenience; PalmTec does not control or endorse their content.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Limits and governing law</h2><p className="mt-3">To the fullest extent allowed by law, the site is provided as is and as available. PalmTec is not liable for indirect, incidental, special, or consequential damages arising from use of the site. These terms are governed by the laws of Arkansas, without regard to conflict-of-law principles.</p></section>
            <section><h2 className="font-serif text-2xl text-ink">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="underline decoration-gold underline-offset-4 hover:text-ink" href="mailto:support@palmtec.biz">support@palmtec.biz</a>.</p></section>
          </div>
        </article>
      </Container>
    </main>
  );
}
