"use client";

import { useState, type FormEvent } from "react";
import FormField from "@/components/ui/FormField";
import { ADVERTISING_OPTIONS } from "@/lib/constants";
import {
  validateAuditForm,
  type AuditFormErrors,
  type AuditFormValues,
} from "@/lib/validation";

const INITIAL_VALUES: AuditFormValues = {
  name: "",
  email: "",
  advertisingOn: ADVERTISING_OPTIONS[0],
  stuck: "",
};

const inputClasses =
  "focus-gold w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60";

export default function AuditFormClient() {
  const [values, setValues] = useState<AuditFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<AuditFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof AuditFormValues>(key: K, value: AuditFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateAuditForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // TODO: wire to backend API route (or a form service) once a
      // destination for leads is decided — for now this just confirms the
      // front-end flow end-to-end.
      console.log("Audit request (front-end only, not yet submitted anywhere):", values);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-card bg-white p-8 shadow-[0_16px_32px_rgba(27,23,18,0.10)]">
        <p className="eyebrow text-gold-ink">Got it</p>
        <h3 className="mt-3 font-serif text-xl font-medium text-ink">
          Thanks, {values.name.split(" ")[0] || "there"}.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          I&rsquo;ll personally look at what you sent and follow up at{" "}
          <span className="text-ink">{values.email}</span> with what I&rsquo;d
          actually prioritize first. No script, no pressure.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-card bg-white p-6 shadow-[0_16px_32px_rgba(27,23,18,0.10)] sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-lg font-medium text-ink">Free ad opportunity audit</h3>
        <span className="eyebrow shrink-0 text-ink-muted">~60 seconds</span>
      </div>

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="audit-name" label="Your name" error={errors.name}>
            <input
              id="audit-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "audit-name-error" : undefined}
              className={`${inputClasses} ${errors.name ? "border-red-400" : "border-ink/15"}`}
            />
          </FormField>

          <FormField id="audit-email" label="Business email" error={errors.email}>
            <input
              id="audit-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@yourcompany.com"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "audit-email-error" : undefined}
              className={`${inputClasses} ${errors.email ? "border-red-400" : "border-ink/15"}`}
            />
          </FormField>
        </div>

        <FormField id="audit-advertising" label="Where are you advertising?">
          <select
            id="audit-advertising"
            name="advertisingOn"
            value={values.advertisingOn}
            onChange={(e) => update("advertisingOn", e.target.value)}
            className={`${inputClasses} border-ink/15`}
          >
            {ADVERTISING_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="audit-stuck" label="What feels stuck?" error={errors.stuck}>
          <textarea
            id="audit-stuck"
            name="stuck"
            rows={3}
            placeholder="Tell me what you want your ads to do…"
            value={values.stuck}
            onChange={(e) => update("stuck", e.target.value)}
            aria-invalid={Boolean(errors.stuck)}
            aria-describedby={errors.stuck ? "audit-stuck-error" : undefined}
            className={`${inputClasses} resize-none ${errors.stuck ? "border-red-400" : "border-ink/15"}`}
          />
        </FormField>

        <button
          type="submit"
          className="focus-gold inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gold px-6 py-3 text-sm font-semibold text-pine-950 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg active:translate-y-0"
        >
          Show me the opportunity <span aria-hidden="true">→</span>
        </button>

        <p className="text-center text-xs text-ink-muted">
          No spam. No hard sell. Just useful answers.
        </p>
      </form>
    </div>
  );
}
