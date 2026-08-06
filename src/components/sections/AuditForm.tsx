import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AuditFormClient from "@/components/forms/AuditFormClient";

export default function AuditForm() {
  return (
    <section id="audit" aria-labelledby="audit-heading" className="bg-pine-950">
      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col justify-center">
          <SectionHeading
            id="audit-heading"
            eyebrow="Start with clarity"
            title="Let's find out where your ad dollars are actually going before you spend the next one."
            tone="dark"
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper-muted">
            Send me a few details and I&rsquo;ll personally look at what&rsquo;s
            working, what&rsquo;s not, and what I&rsquo;d fix first. No script,
            no pressure. I read these myself.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="eyebrow text-gold">Practical next steps</li>
            <li className="eyebrow text-gold">No-pressure conversation</li>
          </ul>
        </Reveal>

        <Reveal delayMs={120}>
          <AuditFormClient />
        </Reveal>
      </Container>
    </section>
  );
}
