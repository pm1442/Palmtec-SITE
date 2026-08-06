import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhyPalmTec() {
  return (
    <section id="why-palmtec" aria-labelledby="why-palmtec-heading" className="bg-cream">
      <Container className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="why-palmtec-heading"
            eyebrow="Why PalmTec"
            title="No jargon. No mystery. No disappearing act."
          />
          <div className="mt-5 max-w-xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              I&rsquo;ve sat across from enough business owners to know the
              pattern. You sign with somebody who promises the moon, get
              handed a login to a dashboard full of numbers that don&rsquo;t
              mean much, and can&rsquo;t get a straight answer the day the
              phone stops ringing. That&rsquo;s not a strategy. That&rsquo;s
              just a subscription.
            </p>
            <p>
              PalmTec is the opposite, on purpose. One person owns your
              account today, next quarter, and the quarter after that.
              You&rsquo;ll always know where your money is going, what
              it&rsquo;s teaching us, and how that connects back to your
              bottom line. If something stops making sense for your business,
              you&rsquo;ll hear it from me before you notice it on an invoice.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="flex flex-col justify-center gap-8">
          <div className="relative max-w-md">
            <span
              aria-hidden="true"
              className="absolute -top-3 left-8 h-6 w-14 -rotate-2 rounded-sm bg-gold shadow-sm"
            />
            <blockquote className="relative rounded-card bg-white p-8 shadow-[0_16px_32px_rgba(27,23,18,0.08)]">
              <p className="font-serif text-xl italic leading-relaxed text-ink">
                &ldquo;I just want to know if this is working, and I want to
                hear it from a person, not a login.&rdquo;
              </p>
              <footer className="eyebrow mt-4 text-ink-muted">
                A remodeling contractor we work with, on his first call with us
              </footer>
            </blockquote>
          </div>

          <div>
            <p className="pb-1 font-serif text-2xl italic leading-snug text-ink">Philip Miller</p>
            <p className="eyebrow mt-1 text-ink-muted">
              Founder, PalmTec. Cave City, Arkansas.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
