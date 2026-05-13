# Assets de Hyper Website

Carpeta raíz de todos los archivos estáticos del sitio.
Agrega los archivos en la subcarpeta correspondiente y actualiza las referencias en el código.

---

## /logo

Logo de Hyper en sus variantes.

| Archivo esperado | Uso |
|---|---|
| `logo.svg` | Logo principal (negro) — usado en el header |
| `logo-white.svg` | Logo blanco — para fondos oscuros |
| `logo-yellow.svg` | Logo con acento amarillo (opcional) |
| `favicon.png` | Favicon 32×32 o 64×64 |

Referencia en código: `src/components/layout/GlassmorphismHeader.tsx`

---

## /video

Video del Hero principal.

| Archivo esperado | Uso |
|---|---|
| `hero.mp4` | Video principal (H.264, formato web-optimizado) |
| `hero.webm` | Alternativa WebM para mejor compresión en browsers modernos |
| `hero-poster.jpg` | Frame de portada mientras carga el video |

**Specs recomendadas:**
- Resolución: 1920×1080 mínimo
- Duración: 15–45 segundos (loop)
- Sin audio
- Bitrate: ~3–5 Mbps para web

Para activar el video: editar `VIDEO_SRC` en `src/components/sections/VideoHero.tsx`

```ts
const VIDEO_SRC = '/assets/video/hero.mp4';
```

---

## /projects

Imágenes de portada de cada proyecto.

| Archivo esperado | Proyecto | Proporción |
|---|---|---|
| `long-king.jpg` | Long King | 1:1 (cuadrada) |
| `kurrupt.jpg` | Kurrupt | 1:1 (cuadrada) |
| `zhapn.jpg` | ZHAPN | 5:2 (panorámica) |
| `audi.jpg` | Audi | 1:1 (cuadrada) |
| `amava.jpg` | AMAVA | 1:1 (cuadrada) |
| `twilio.jpg` | Twilio | 5:2 (panorámica) |

**Specs recomendadas:**
- Formato: JPG o WebP
- Calidad: 85–90%
- Cuadradas: 1200×1200 px
- Panorámicas: 2400×960 px

Para activar: reemplazar el `<div>` con gradiente en `src/components/sections/projects.tsx` por `<Image>` de `next/image`.

---

## /clients

Logos de clientes para el marquee.

Formato SVG preferido (fondo transparente, monocromo).
Nombres de archivo: kebab-case del nombre del cliente.

Ejemplos: `antofagasta-minerals.svg`, `entel.svg`, `cencosud.svg`

Para activar logos: actualizar `src/components/sections/ClientsMarquee.tsx`

---

## /team

Fotos del equipo para la página `/agencia`.

Formato: JPG o WebP
Proporción: 3:4 (portrait) o 1:1 (cuadrada)
Resolución: 800×800 px mínimo

---

## Convención de nombrado

- Usar `kebab-case` para todos los archivos
- Sin espacios ni caracteres especiales
- Preferir WebP sobre JPG para mejor performance (con JPG como fallback)
