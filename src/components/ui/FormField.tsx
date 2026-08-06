type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

/** Labeled wrapper for an input/select/textarea, with an inline error slot
 * wired via aria-describedby so assistive tech announces the error text. */
export default function FormField({ id, label, error, children, className = "" }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="eyebrow mb-2 block text-ink-muted">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none">
            <path
              fill="currentColor"
              d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V6ZM10 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
