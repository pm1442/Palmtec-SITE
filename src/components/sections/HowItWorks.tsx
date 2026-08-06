import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "We find the leak",
    body: "We look at your offer, tracking, account, and follow-up—not just the ads. You get the clearest next move before any pitch.",
  },
  {
    number: "02",
    title: "We start where intent is strongest",
    body: "No platform package for the sake of it. We choose the channel most likely to produce a real lead, then build outward only when the numbers earn it.",
  },
  {
    number: "03",
    title: "You see business results",
    body: "Calls, forms, booked work, and cost per lead—connected to spend and explained without hiding behind impressions or clicks.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="bg-cream-tint">
      <Container className="py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <SectionHeading id="how-heading" eyebrow="A lower-risk first step" title="First, prove where the opportunity is." />
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Small businesses don&rsquo;t need more marketing activity. They need a sensible path from money out to customers in.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 80}>
              <article className="h-full rounded-card border border-ink/10 bg-cream p-7 sm:p-8">
                <span className="font-serif text-3xl text-gold-ink">{step.number}</span>
                <h3 className="mt-8 font-serif text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
