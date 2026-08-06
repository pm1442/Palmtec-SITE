import Image from "next/image";

type PlaceholderPhotoProps = {
  src: string | null;
  alt: string;
  className?: string;
};

/**
 * Single place the founder photo is rendered. When `src` is null (no real
 * photo supplied yet) this renders an honest, clearly-labeled placeholder —
 * never a generated stand-in face for a real, named person. Swapping in the
 * real photo later only requires setting FOUNDER_PHOTO_SRC in
 * src/lib/constants.ts; no component code changes.
 */
export default function PlaceholderPhoto({ src, alt, className = "" }: PlaceholderPhotoProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label="Placeholder for founder photo, to be added"
        className={`flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-card border border-paper-muted/40 bg-gradient-to-br from-pine-900/[0.06] to-pine-900/[0.02] ${className}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-10 w-10 text-ink-muted/50"
        >
          <path
            fill="currentColor"
            d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.14 0-8 2.12-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.88-3.86-5-8-5Z"
          />
        </svg>
        <span className="eyebrow text-ink-muted/70">Photo coming soon</span>
      </div>
    );
  }

  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-card ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
    </div>
  );
}
