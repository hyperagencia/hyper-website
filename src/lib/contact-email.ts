import type { ContactFormValues } from './contact-schema';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label: string, value: string | null | undefined): string {
  if (!value) return '';
  return `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:4px 0;color:#111;">${escapeHtml(value)}</td></tr>`;
}

export function buildContactNotificationEmail(values: ContactFormValues): { subject: string; html: string } {
  const fullName = [values.firstName, values.lastName].filter(Boolean).join(' ');
  const subject = `Nuevo contacto: ${fullName}${values.company ? ` (${values.company})` : ''}`;

  const html = `
    <div style="font-family:-apple-system,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="font-weight:600;margin:0 0 16px;">Nuevo mensaje desde hyperagencia.com</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        ${row('Nombre', fullName)}
        ${row('Email', values.email)}
        ${row('Empresa', values.company)}
        ${row('Cargo', values.jobTitle)}
        ${row('País', values.country)}
        ${row('Servicio', values.service)}
        ${row('Idioma', values.locale)}
      </table>
      <p style="margin:16px 0 4px;color:#666;font-size:14px;">Mensaje</p>
      <p style="white-space:pre-wrap;font-size:14px;color:#111;border-left:3px solid #f1e066;padding-left:12px;">${escapeHtml(values.message)}</p>
    </div>
  `.trim();

  return { subject, html };
}
