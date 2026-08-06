import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { PLATFORMS } from "@/lib/constants";

// Desktop placement for the asymmetric bento layout: Google spans the tall
// left column, Meta/TikTok stack on the right, Reddit sits full-width
// beneath Google. Collapses to a single stacked column below lg.
const GRID_POSITION = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-2", // Google
  "lg:col-start-2 lg:row-start-1", // Meta
  "lg:col-start-2 lg:row-start-2", // TikTok
  "lg:col-start-1 lg:row-start-3", // Reddit
];

export default function PlatformGrid() {
  return (
    <section aria-labelledby="platforms-heading" className="bg-cream">
      <Container className="py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <SectionHeading
            id="platforms-heading"
            title="Where your next customer is already looking."
          />
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Google, Meta, TikTok, and Reddit each work differently. We run the
            ones that fit how your business actually gets found.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {PLATFORMS.map((platform, i) => (
            <Reveal key={platform.name} delayMs={i * 80} className={GRID_POSITION[i]}>
              <Card tone={platform.featured ? "dark" : "paper"} className="flex h-full flex-col justify-center">
                <div className="mb-5 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${platform.featured ? "bg-paper/10 text-gold" : "bg-cream-tint text-gold-ink"}`}>
                    {platform.mark}
                  </span>
                  <p className={`eyebrow ${platform.featured ? "text-gold" : "text-gold-ink"}`}>{platform.eyebrow}</p>
                </div>
                <h3
                  className={`font-serif text-xl font-medium leading-snug sm:text-2xl ${
                    platform.featured ? "text-paper" : "text-ink"
                  }`}
                >
                  {platform.headline}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    platform.featured ? "text-paper-muted" : "text-ink-muted"
                  }`}
                >
                  {platform.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
