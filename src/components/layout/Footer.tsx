import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <Container className="grid gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 font-serif text-lg font-medium tracking-tight">
            <Image src="/images/palmtec-mark.png" alt="" width={34} height={34} className="h-8 w-8 object-contain mix-blend-multiply" />
            <span>
              Palm<span className="text-gold-ink">Tec</span>
            </span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-ink-muted">
            Paid media and local growth for business owners who&rsquo;d rather have a
            straight answer than a dashboard.
          </p>
          <p className="mt-6 text-xs text-ink-muted">
            © {new Date().getFullYear()} PalmTec LLC. When details matter, don&rsquo;t
            settle for less.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-sm text-ink">
            <a href="mailto:support@palmtec.biz" className="focus-gold hover:text-gold-ink">
              support@palmtec.biz
            </a>
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Cave City, Arkansas · Serving businesses nationwide
          </p>
        </div>
      </Container>
    </footer>
  );
}
