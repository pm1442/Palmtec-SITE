// Small hand-rolled validators for the audit form. A 3-field form doesn't
// need a schema library — if the form grows real complexity later, zod is
// the natural upgrade path.

export type AuditFormValues = {
  name: string;
  email: string;
  advertisingOn: string;
  stuck: string;
};

export type AuditFormErrors = Partial<Record<keyof AuditFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateAuditForm(values: AuditFormValues): AuditFormErrors {
  const errors: AuditFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Let me know who I'm talking to.";
  }

  if (!values.email.trim()) {
    errors.email = "I'll need an email to send the audit to.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "That doesn't look like a valid email yet.";
  }

  if (!values.stuck.trim()) {
    errors.stuck = "A sentence or two is plenty, just tell me what's stuck.";
  }

  return errors;
}
