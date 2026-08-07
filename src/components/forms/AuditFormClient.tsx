"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import FormField from "@/components/ui/FormField";
import { ADVERTISING_OPTIONS } from "@/lib/constants";
import { validateAuditForm, type AuditFormErrors, type AuditFormValues } from "@/lib/validation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const INITIAL_VALUES: AuditFormValues = {
  name: "",
  email: "",
  advertisingOn: ADVERTISING_OPTIONS[0],
  stuck: "",
};

const inputClasses = "focus-gold w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60";

const GOOGLE_ADS_CONVERSION = "AW-18376635504/OAN6CKOs6d0cEPDo1LpE";

function reportGoogleAdsConversion() {
  window.gtag?.("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION,
    value: 1.0,
    currency: "USD",
  });
}

export default function AuditFormClient() {
  const [values, setValues] = useState<AuditFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<AuditFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function update<K extends keyof AuditFormValues>(key: K, value: AuditFormValues[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateAuditForm(values);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Submission failed");
      reportGoogleAdsConversion();
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong while sending your request. Please try again, or email support@palmtec.biz.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-card bg-white p-8 shadow-[0_16px_32px_rgba(27,23,18,0.10)]">
        <p className="eyebrow text-gold-ink">Got it</p>
        <h3 className="mt-3 font-serif text-xl font-medium text-ink">Thanks, {values.name.split(" ")[0] || "there"}.</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          I&rsquo;ll personally look at what you sent and follow up at <span className="text-ink">{values.email}</span> with what I&rsquo;d actually prioritize first within one business day. No sales call unless you want one.
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
            <input id="audit-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" value={values.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "audit-name-error" : undefined} className={`${inputClasses} ${errors.name ? "border-red-400" : "border-ink/15"}`} />
          </FormField>

          <FormField id="audit-email" label="Business email" error={errors.email}>
            <input id="audit-email" name="email" type="email" autoComplete="email" placeholder="jane@yourcompany.com" value={values.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "audit-email-error" : undefined} className={`${inputClasses} ${errors.email ? "border-red-400" : "border-ink/15"}`} />
          </FormField>
        </div>

        <FormField id="audit-advertising" label="Where are you advertising?">
          <select id="audit-advertising" name="advertisingOn" value={values.advertisingOn} onChange={(event) => update("advertisingOn", event.target.value)} className={`${inputClasses} border-ink/15`}>
            {ADVERTISING_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </FormField>

        <FormField id="audit-stuck" label="What feels stuck?" error={errors.stuck}>
          <textarea id="audit-stuck" name="stuck" rows={3} placeholder="Tell me what you want your ads to do…" value={values.stuck} onChange={(event) => update("stuck", event.target.value)} aria-invalid={Boolean(errors.stuck)} aria-describedby={errors.stuck ? "audit-stuck-error" : undefined} className={`${inputClasses} resize-none ${errors.stuck ? "border-red-400" : "border-ink/15"}`} />
        </FormField>

        <button type="submit" disabled={isSubmitting} className="focus-gold inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gold px-6 py-3 text-sm font-semibold text-pine-950 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? "Sending your request…" : <>Show me the opportunity <span aria-hidden="true">→</span></>}
        </button>

        {submitError && <p role="alert" className="text-center text-sm text-red-700">{submitError}</p>}
        <p className="text-center text-xs leading-relaxed text-ink-muted">You&rsquo;ll hear from Philip within one business day. No sales call unless you want one. By submitting, you agree to our <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">Privacy Notice</Link> and <Link href="/terms" className="underline underline-offset-2 hover:text-ink">Terms of Use</Link>, and may receive relevant follow-up about your request. You can unsubscribe from marketing emails anytime.</p>
      </form>
    </div>
  );
}
