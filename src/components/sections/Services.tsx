import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-pine-900">
      <Container className="py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <SectionHeading
            id="services-heading"
            title="A great ad can't fix a broken next step."
            tone="dark"
          />
          <p className="mt-4 text-base leading-relaxed text-paper-muted sm:text-lg">
            If the rest of your online presence is quietly losing the leads
            your ads just paid for, we&rsquo;ll tell you and fix it, without
            losing focus on the campaigns actually bringing people in.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`pt-6 ${i > 0 ? "lg:border-l lg:border-paper-muted/20 lg:pl-8" : ""}`}
            >
              <h3 className="font-semibold text-paper">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{service.body}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
