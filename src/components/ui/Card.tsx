type CardProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "dark";
};

/** Base card used by the platform grid, the pull-quote, and the audit form.
 * Handles the shared radius/shadow/hover-lift so each usage only needs to
 * describe its own content. */
export default function Card({ children, className = "", tone = "paper" }: CardProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-pine-950 text-paper"
      : "bg-white text-ink shadow-[0_1px_2px_rgba(27,23,18,0.06)]";

  return (
    <div
      className={`rounded-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(27,23,18,0.10)] ${toneClasses} ${className}`}
    >
      {children}
    </div>
  );
}
