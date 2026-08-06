type CheckmarkProps = {
  children: React.ReactNode;
};

export default function Checkmark({ children }: CheckmarkProps) {
  return (
    <li className="flex items-start gap-3">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="mt-0.5 h-5 w-5 flex-none text-gold-ink"
      >
        <path
          fill="currentColor"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
        />
      </svg>
      <span className="text-ink">{children}</span>
    </li>
  );
}
