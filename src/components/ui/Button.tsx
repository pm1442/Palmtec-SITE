import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * primary  — solid gold pill, used for every CTA on the page.
 * secondary — plain text link with an animated underline, used for the
 *             lower-commitment "See how this works" style links.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`focus-gold group inline-flex items-center gap-1 text-sm font-semibold text-current ${className}`}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`focus-gold inline-flex items-center justify-center rounded-pill bg-gold px-6 py-3 text-sm font-semibold text-pine-950 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg active:translate-y-0 ${className}`}
    >
      {children}
    </Link>
  );
}
