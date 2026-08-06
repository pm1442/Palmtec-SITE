import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Checkmark from "@/components/ui/Checkmark";
import Reveal from "@/components/ui/Reveal";
import { QUALIFIERS } from "@/lib/constants";

export default function Qualifiers() {
  return (
    <section aria-labelledby="qualifiers-heading" className="bg-cream">
      <Container className="pb-20 sm:pb-24">
        <Reveal>
          <div className="rounded-card bg-cream-tint px-6 py-12 sm:px-12 sm:py-14">
            <SectionHeading
              id="qualifiers-heading"
              title="This is a fit if you're nodding right now."
              align="center"
            />
            <ul className="mx-auto mt-8 grid max-w-3xl gap-x-10 gap-y-4 sm:grid-cols-2">
              {QUALIFIERS.map((item) => (
                <Checkmark key={item}>{item}</Checkmark>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
