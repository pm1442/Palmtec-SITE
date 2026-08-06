import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const CLARITY_ROWS = [
  ["Which ads create calls", "Tracked"],
  ["Cost per real lead", "Visible"],
  ["What we change next", "Explained"],
] as const;

export default function Hero() {
  return (
    <section id="top" className="bg-pine-900">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-5 text-gold">Paid ads, without the agency fog</p>
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-[3.25rem]">
            You don&rsquo;t distrust ads. You distrust whoever says they&rsquo;re
            working.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-muted sm:text-lg">
            PalmTec runs Google, Facebook, Instagram, TikTok, and Reddit ads
            for small businesses. You get one accountable person, clear numbers,
            and an honest answer when something isn&rsquo;t working.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="#audit">Get your free ad audit</Button>
            <Button href="#how-it-works" variant="secondary" className="text-paper-muted hover:text-paper">
              See how this works
            </Button>
          </div>
          <p className="mt-5 text-xs text-paper-muted/80">
            Free review · No hard sell · You keep control of your accounts
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-paper/10 bg-pine-950 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between border-b border-paper/10 px-6 py-5">
              <div>
                <p className="eyebrow text-gold">The weekly plain-English view</p>
                <p className="mt-1 text-sm text-paper-muted">What your ad spend is actually doing</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.10)]" />
            </div>
            <div className="space-y-2 p-4 sm:p-6">
              {CLARITY_ROWS.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-xl bg-paper/[0.05] px-4 py-4">
                  <span className="text-sm text-paper-muted">{label}</span>
                  <span className="rounded-pill bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">{value}</span>
                </div>
              ))}
            </div>
            <div className="relative mx-6 h-24 overflow-hidden rounded-xl border border-paper/10 bg-paper/[0.025] px-3 pt-3">
              <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-paper/10" />
              <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-paper/10" />
              <svg aria-hidden="true" viewBox="0 0 360 90" preserveAspectRatio="none" className="relative h-full w-full text-gold">
                <defs>
                  <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity=".25" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 76 C35 72, 48 58, 78 62 S130 72, 158 47 S210 55, 235 32 S285 41, 360 10 V90 H0Z" fill="url(#hero-chart-fill)" />
                <path d="M0 76 C35 72, 48 58, 78 62 S130 72, 158 47 S210 55, 235 32 S285 41, 360 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="absolute right-3 top-2 rounded-pill bg-emerald-400/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">Example view</span>
            </div>
            <div className="mx-6 mb-6 border-l-2 border-gold pl-4">
              <p className="text-sm leading-relaxed text-paper">
                “Here&rsquo;s what happened, why it happened, and what I&rsquo;m doing next.”
              </p>
              <p className="eyebrow mt-2 text-paper-muted">The whole reporting philosophy</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
