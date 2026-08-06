import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function TrustGap() {
  return (
    <section aria-labelledby="trust-gap-heading" className="bg-pine-950">
      <Container className="py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <SectionHeading
            id="trust-gap-heading"
            title="Here's the part nobody tells you straight."
            tone="dark"
          />
        </Reveal>

        <Reveal delayMs={100} className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-paper-muted sm:text-lg">
          <p>
            You&rsquo;ve watched the numbers move. Clicks climbing, impressions
            up, some chart trending the right way on a screen you didn&rsquo;t
            ask to read. Meanwhile the phone stays quiet. That&rsquo;s not a
            strategy working. That&rsquo;s a subscription you&rsquo;re not sure
            you should renew.
          </p>
          <p>
            PalmTec exists to close that gap between the report and the truth.
            You&rsquo;ll see your <strong className="font-semibold text-gold">real cost per lead</strong> and
            your <strong className="font-semibold text-gold">real cost per booked job</strong> inside the
            first 30 days, explained in plain English, by the one person
            actually running your account.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
