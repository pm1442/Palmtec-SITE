import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhyPalmTec() {
  return (
    <section id="why-palmtec" aria-labelledby="why-palmtec-heading" className="bg-cream">
      <Container className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
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
              phone stops ringing. That&rsquo;s not a strategy. That&rsquo;s just a
              subscription.
            </p>
            <p>
              PalmTec is the opposite, on purpose. I own your account today,
              next quarter, and the quarter after that. You&rsquo;ll always know
              where your money is going, what it&rsquo;s teaching us, and how that
              connects back to your bottom line. If something stops making
              sense for your business, you&rsquo;ll hear it from me before you
              notice it on an invoice.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="flex flex-col justify-center gap-7">
          <figure className="overflow-hidden rounded-card bg-cream-tint shadow-[0_16px_32px_rgba(27,23,18,0.08)]">
            <Image
              src="/images/philip-miller.png"
              alt="Philip Miller, founder of PalmTec"
              width={1080}
              height={1451}
              className="aspect-[3/4] w-full object-cover object-top"
            />
            <figcaption className="px-6 py-4 sm:px-7">
              <p className="font-serif text-2xl leading-snug text-ink">Philip Miller</p>
              <p className="eyebrow mt-1 text-ink-muted">Founder, PalmTec</p>
            </figcaption>
          </figure>

          <blockquote className="border-l-2 border-gold pl-5">
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              &ldquo;I can&rsquo;t thank you enough for this service—it&rsquo;s been a relief during a genuinely stretched, high-pressure season for our family. And it just works, reliably, every time.&rdquo;
            </p>
            <footer className="eyebrow mt-4 text-ink-muted">
              Former PalmTec client, travel services
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
