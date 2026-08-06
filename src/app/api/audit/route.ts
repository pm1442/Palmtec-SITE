import { NextResponse } from "next/server";
import { validateAuditForm, type AuditFormValues } from "@/lib/validation";

const GHL_API_URL = "https://services.leadconnectorhq.com";

function ghlHeaders(token: string) {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };
}

function splitName(name: string) {
  const [firstName, ...remaining] = name.trim().split(/\s+/);
  return { firstName, lastName: remaining.join(" ") || undefined };
}

export async function POST(request: Request) {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error("GHL environment variables are not configured.");
    return NextResponse.json({ error: "The form is not configured yet." }, { status: 503 });
  }

  let values: AuditFormValues;
  try {
    values = await request.json();
  } catch {
    return NextResponse.json({ error: "Please try again." }, { status: 400 });
  }

  const errors = validateAuditForm(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const { firstName, lastName } = splitName(values.name);

  try {
    const contactResponse = await fetch(`${GHL_API_URL}/contacts/upsert`, {
      method: "POST",
      headers: ghlHeaders(token),
      body: JSON.stringify({
        firstName,
        lastName,
        email: values.email.trim().toLowerCase(),
        locationId,
        source: "PalmTec website audit form",
      }),
      cache: "no-store",
    });

    if (!contactResponse.ok) {
      console.error("GHL contact upsert failed.", contactResponse.status);
      return NextResponse.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
    }

    const contactPayload = (await contactResponse.json()) as { contact?: { id?: string } };
    const contactId = contactPayload.contact?.id;
    if (!contactId) {
      console.error("GHL contact upsert returned no contact ID.");
      return NextResponse.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
    }

    const auditNote = [
      "PalmTec website audit request",
      `Advertising on: ${values.advertisingOn}`,
      "",
      "What feels stuck:",
      values.stuck.trim(),
    ].join("\n");

    const [tagResponse, noteResponse] = await Promise.all([
      fetch(`${GHL_API_URL}/contacts/${contactId}/tags`, {
        method: "POST",
        headers: ghlHeaders(token),
        body: JSON.stringify({ tags: ["palmtec-audit"] }),
        cache: "no-store",
      }),
      fetch(`${GHL_API_URL}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: ghlHeaders(token),
        body: JSON.stringify({ body: auditNote }),
        cache: "no-store",
      }),
    ]);

    if (!tagResponse.ok || !noteResponse.ok) {
      console.error("GHL audit details failed to save.", { tagStatus: tagResponse.status, noteStatus: noteResponse.status });
      return NextResponse.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("GHL audit submission failed.", error);
    return NextResponse.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
  }
}
