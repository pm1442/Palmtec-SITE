import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const PROMISES = [
  ["Your accounts", "Stay yours. Always."],
  ["Your reporting", "Tied to leads, not likes."],
  ["Your contact", "The person doing the work."],
] as const;

export default function Ownership() {
  return (
    <section aria-label="Client ownership promise" className="border-y border-ink/10 bg-cream">
      <Container className="py-10 sm:py-12">
        <Reveal className="grid gap-8 sm:grid-cols-3 sm:gap-0">
          {PROMISES.map(([label, value], index) => (
            <div key={label} className={`sm:px-8 ${index ? "sm:border-l sm:border-ink/10" : ""} ${index === 0 ? "sm:pl-0" : ""}`}>
              <p className="eyebrow text-gold-ink">{label}</p>
              <p className="mt-2 font-serif text-xl text-ink">{value}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
