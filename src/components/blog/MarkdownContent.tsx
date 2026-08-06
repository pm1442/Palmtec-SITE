type MarkdownContentProps = { content: string };

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^\s)]+\))/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-cream-tint px-1.5 py-0.5 text-[0.9em]">{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]} className="text-gold-ink underline decoration-gold/60 underline-offset-4 hover:text-ink">{link[1]}</a>;
    }
    return part;
  });
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = content.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="space-y-6 text-[1.05rem] leading-relaxed text-ink-muted sm:text-lg">
      {blocks.map((block, index) => {
        const lines = block.split("\n");
        const heading = block.match(/^##\s+(.+)$/);
        if (heading) return <h2 key={index} className="pt-4 font-serif text-3xl leading-tight tracking-tight text-ink">{inline(heading[1])}</h2>;

        const subheading = block.match(/^###\s+(.+)$/);
        if (subheading) return <h3 key={index} className="pt-2 font-serif text-2xl leading-tight text-ink">{inline(subheading[1])}</h3>;

        if (lines.every((line) => line.startsWith("- "))) {
          return <ul key={index} className="space-y-3 pl-5 marker:text-gold-ink">{lines.map((line) => <li key={line}>{inline(line.slice(2))}</li>)}</ul>;
        }

        if (lines.every((line) => /^\d+\.\s/.test(line))) {
          return <ol key={index} className="space-y-3 pl-5 marker:font-semibold marker:text-gold-ink">{lines.map((line) => <li key={line}>{inline(line.replace(/^\d+\.\s/, ""))}</li>)}</ol>;
        }

        if (lines.every((line) => line.startsWith("> "))) {
          return <blockquote key={index} className="border-l-2 border-gold pl-5 font-serif text-xl italic leading-relaxed text-ink">{inline(lines.map((line) => line.slice(2)).join(" "))}</blockquote>;
        }

        return <p key={index}>{inline(lines.join(" "))}</p>;
      })}
    </div>
  );
}
