import { ImageResponse } from 'next/og';

export const alt = 'Hyper — Agencia de Branding y Tecnología';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Imagen OG por defecto para todas las páginas sin imagen propia (los proyectos usan su cover de Cloudinary).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#111111',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
        }}
      >
        <div style={{ width: 28, height: 28, borderRadius: 14, background: '#f1e066' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 220, fontWeight: 500, letterSpacing: -10, lineHeight: 1 }}>HYPER</div>
          <div style={{ fontSize: 40, color: '#f1e066', marginTop: 24 }}>Branding & Technology Agency</div>
        </div>
      </div>
    ),
    size,
  );
}
