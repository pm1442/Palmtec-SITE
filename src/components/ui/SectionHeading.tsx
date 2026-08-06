type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  tone = "light",
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const eyebrowColor = tone === "dark" ? "text-gold" : "text-gold-ink";
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && <p className={`eyebrow mb-3 ${eyebrowColor}`}>{eyebrow}</p>}
      <Heading
        id={id}
        className={`font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </Heading>
    </div>
  );
}
