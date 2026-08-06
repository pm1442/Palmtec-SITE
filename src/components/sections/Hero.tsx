import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import { FOUNDER_PHOTO_SRC } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="bg-pine-900">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-[3.25rem]">
            You don&rsquo;t distrust ads. You distrust whoever says they&rsquo;re
            working.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-muted sm:text-lg">
            PalmTec runs your Google, Meta, TikTok, and Reddit ads. One person,
            not a rotating team, tells you why they&rsquo;re working.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="#audit">Get your free ad audit</Button>
            <Button href="#why-palmtec" variant="secondary" className="text-paper-muted hover:text-paper">
              See how this works
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs lg:max-w-none">
          <PlaceholderPhoto
            src={FOUNDER_PHOTO_SRC}
            alt="Philip Miller, founder of PalmTec"
          />
          <p className="eyebrow mt-3 text-paper-muted">
            Philip Miller, founder. He reads every message himself.
          </p>
        </div>
      </Container>
    </section>
  );
}
