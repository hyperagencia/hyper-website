'use client';

import { useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { contactSchema, type ContactRequestBody } from '@/lib/contact-schema';
import { getCountryOptions } from '@/lib/countries';
import { CONTACT_SERVICE_GROUPS } from '@/lib/contact-options';

type FieldName = 'firstName' | 'lastName' | 'email' | 'company' | 'jobTitle' | 'country' | 'service' | 'message';

const INITIAL_VALUES: Record<FieldName, string> = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  jobTitle: '',
  country: '',
  service: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const locale = useLocale() as 'es' | 'en';
  const t = useTranslations('pages.contact.form');
  const tCommon = useTranslations('common.forms');

  const [values, setValues] = useState<Record<FieldName, string>>(INITIAL_VALUES);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<Record<FieldName | 'consent', string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const startedAtRef = useRef(Date.now());

  const countryOptions = useMemo(() => getCountryOptions(locale), [locale]);

  function updateField(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: ContactRequestBody = {
      ...values,
      consentAccepted: consent as true,
      locale,
      website: honeypot,
      startedAt: startedAtRef.current,
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors: Partial<Record<FieldName | 'consent', string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (field === 'consentAccepted') {
          nextErrors.consent = t('errors.consent_required');
        } else if (field === 'email') {
          nextErrors.email = t('errors.invalid_email');
        } else if (typeof field === 'string') {
          nextErrors[field as FieldName] = tCommon('required');
        }
      }
      setErrors(nextErrors);
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: false }));

      if (res.ok && data.ok) {
        setStatus('success');
        return;
      }

      if (res.status === 429) {
        setStatus('error');
        setStatusMessage(t('error_rate_limited'));
        return;
      }

      setStatus('error');
      setStatusMessage(t('error_generic'));
    } catch {
      setStatus('error');
      setStatusMessage(t('error_generic'));
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl bg-black/[0.04] p-8 md:p-10">
        <p className="font-display text-2xl font-medium text-black tracking-tight">{t('success_title')}</p>
        <p className="mt-2 text-black/70">{t('success_body')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot — visually hidden (not display:none, so naive bots still fill it), unreachable
          by keyboard/AT so a real visitor never encounters it. Clip technique instead of an
          off-screen offset, which would otherwise widen the page's scrollable area. */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
        style={{ clip: 'rect(0,0,0,0)', clipPath: 'inset(50%)' }}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={tCommon('nombre')} htmlFor="firstName" required error={errors.firstName}>
          <Input
            id="firstName"
            value={values.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            placeholder={t('first_name_placeholder')}
            error={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
        </Field>
        <Field label={t('last_name')} htmlFor="lastName" error={errors.lastName}>
          <Input
            id="lastName"
            value={values.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            placeholder={t('last_name_placeholder')}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={tCommon('email')} htmlFor="email" required error={errors.email}>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder={tCommon('email')}
            error={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </Field>
        <Field label={tCommon('empresa')} htmlFor="company" error={errors.company}>
          <Input
            id="company"
            value={values.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder={t('company_placeholder')}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t('job_title')} htmlFor="jobTitle" required error={errors.jobTitle}>
          <Input
            id="jobTitle"
            value={values.jobTitle}
            onChange={(e) => updateField('jobTitle', e.target.value)}
            placeholder={t('job_title_placeholder')}
            error={!!errors.jobTitle}
            aria-describedby={errors.jobTitle ? 'jobTitle-error' : undefined}
          />
        </Field>
        <Field label={t('country')} htmlFor="country" required error={errors.country}>
          <Select
            id="country"
            value={values.country}
            onChange={(e) => updateField('country', e.target.value)}
            error={!!errors.country}
            aria-describedby={errors.country ? 'country-error' : undefined}
          >
            <option value="">{t('country_placeholder')}</option>
            {countryOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label={t('service')} htmlFor="service" required error={errors.service}>
        <Select
          id="service"
          value={values.service}
          onChange={(e) => updateField('service', e.target.value)}
          error={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="">{t('service_placeholder')}</option>
          {CONTACT_SERVICE_GROUPS.map((group) => (
            <optgroup key={group.label[locale]} label={group.label[locale]}>
              {group.options.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.label[locale]}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </Field>

      <Field label={tCommon('mensaje')} htmlFor="message" required error={errors.message}>
        <Textarea
          id="message"
          value={values.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder={t('message_placeholder')}
          error={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>

      <Checkbox
        id="consent"
        checked={consent}
        onChange={(e) => {
          setConsent(e.target.checked);
          setErrors((prev) => ({ ...prev, consent: undefined }));
        }}
        label={t.rich('consent', {
          terms: (chunks) => (
            <Link
              href="/terminos"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="underline underline-offset-2 hover:text-black"
            >
              {chunks}
            </Link>
          ),
          privacy: (chunks) => (
            <Link
              href="/privacidad"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="underline underline-offset-2 hover:text-black"
            >
              {chunks}
            </Link>
          ),
        })}
        error={!!errors.consent}
      />
      {errors.consent && <p className="-mt-4 text-xs text-red-500">{errors.consent}</p>}

      <div>
        <Button type="submit" size="lg" className="rounded-full" disabled={status === 'submitting'}>
          {status === 'submitting' ? t('submitting') : t('submit')}
        </Button>
      </div>

      <p role="status" aria-live="polite" className={status === 'error' ? 'text-sm text-red-500' : 'sr-only'}>
        {statusMessage}
      </p>
    </form>
  );
}
