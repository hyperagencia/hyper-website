import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema, type ContactRequestBody } from '@/lib/contact-schema';
import { supabaseAdmin } from '@/lib/supabase';
import { buildContactNotificationEmail } from '@/lib/contact-email';

export const runtime = 'nodejs';

const MIN_SUBMIT_TIME_MS = 3000;
const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;

function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip');
}

export async function POST(request: Request) {
  let body: Partial<ContactRequestBody>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // 1. Honeypot — a bot fills every field, including this hidden one. Pretend success and discard.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // 2. Timing — a bot submits far faster than a human can fill the form.
  if (typeof body.startedAt !== 'number' || Date.now() - body.startedAt < MIN_SUBMIT_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const ipAddress = getClientIp(request);

  // 3. Rate limit — cap submissions per IP using the table itself, no extra service.
  if (ipAddress) {
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from('contact_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('ip_address', ipAddress)
      .gte('created_at', windowStart);

    if (!countError && (count ?? 0) >= RATE_LIMIT_MAX_SUBMISSIONS) {
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
    }
  }

  // 4. Validate.
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'invalid_fields', fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const values = parsed.data;

  // 5. Persist — the lead is safe even if the email below fails.
  const { error: insertError } = await supabaseAdmin.from('contact_submissions').insert({
    first_name: values.firstName,
    last_name: values.lastName || null,
    email: values.email,
    company: values.company || null,
    job_title: values.jobTitle,
    country: values.country,
    service: values.service,
    message: values.message,
    consent_accepted: values.consentAccepted,
    locale: values.locale,
    ip_address: ipAddress,
  });

  if (insertError) {
    console.error('[contact] insert failed', insertError);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }

  // 6. Notify — best-effort. The lead is already saved, so a failure here doesn't fail the request.
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (resendApiKey && toEmail && fromEmail) {
      const resend = new Resend(resendApiKey);
      const { subject, html } = buildContactNotificationEmail(values);
      const { error: resendError } = await resend.emails.send({
        from: `Hyper Website <${fromEmail}>`,
        to: toEmail,
        replyTo: values.email,
        subject,
        html,
      });
      // The SDK resolves (doesn't throw) on API-level failures — e.g. an unverified sender domain.
      if (resendError) console.error('[contact] Resend API error', resendError);
    } else {
      console.warn('[contact] Resend env vars missing — skipping notification email');
    }
  } catch (emailError) {
    console.error('[contact] email send failed', emailError);
  }

  return NextResponse.json({ ok: true });
}
