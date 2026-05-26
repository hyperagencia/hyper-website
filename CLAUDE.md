# Hyper Website — Guía del Proyecto

> Documento vivo. Actualizar cada vez que cambie el estado, las decisiones de diseño o la arquitectura.

---

## Qué es esto

Re-diseño completo de la web de **Hyper** (hyperagencia.com), agencia de branding y tecnología. La web anterior estaba en WordPress; esta es la evolución: moderna, rápida, escalable y bilingüe (ES/EN).

**Objetivo:** Posicionar a Hyper como referente en diseño y tecnología en Chile/LATAM, con una web que compita visualmente con las mejores agencias del mundo.

**Referencias de diseño:**
- Saffron Brand Consultants
- Dept Agency
- Koto Studio

**Web actual (a superar):** hyperagencia.com (WordPress)

---

## Stack Tecnológico

| Herramienta | Versión | Uso |
|---|---|---|
| Next.js | ^15.5 | Framework principal (App Router) |
| React | ^19 | UI |
| TypeScript | ^5 | Tipado |
| Tailwind CSS | ^3.4 | Estilos |
| Framer Motion | ^12 | Animaciones de UI |
| GSAP | ^3.13 | Animaciones avanzadas/scroll |
| Lenis | ^1.3 | Smooth scroll |
| Three.js + R3F | ^0.180 | Elementos 3D (si aplica) |
| next-intl | ^4.3 | Internacionalización (ES/EN) |
| Lucide React | ^0.542 | Iconos |

---

## Sistema de Diseño — Tema "Coloress"

El tema se basa en un sistema cromático minimalista: blanco, negro y amarillo como único acento.

### Paleta de colores

```
brand-yellow  #f1e066   → Acento principal, CTAs, dots decorativos
brand-dark    #111111   → Fondos oscuros, secciones negras
brand-gray    #e8e8e8   → Fondos grises suaves (About, Footer)
white         #ffffff   → Fondo base
black         #000000   → Tipografía principal
```

### Tipografía

- **Familia:** Inter (300 — 900)
- **Headlines editoriales:** `font-medium` (500) + `tracking-tighter`
- **Tamaños hero:** Escalado responsive desde `4rem` → `10rem`
- **Nota:** Se evita `font-black` (900) — los títulos usan 500 para un look más refinado

### Principios visuales

- Mucho espacio negativo. Menos es más.
- Tipografía editorial como elemento gráfico principal, no ultra-bold
- Transiciones suaves con Framer Motion (ease `[0.25, 0.1, 0.25, 1]`)
- Bordes redondeados medianos (`rounded-xl md:rounded-2xl`) para cards de proyectos
- Sin sombras dramáticas — sombras sutiles o nada
- **Padding global unificado:** `px-6 lg:px-8` en todas las secciones y header (≈2-3% en pantallas grandes)
- No usar `max-w-7xl` — el contenido ocupa casi todo el ancho de pantalla

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/          ← Todas las páginas van aquí
│   │   ├── layout.tsx     ← Header + Footer globales
│   │   ├── page.tsx       ← Home
│   │   ├── agencia/       ← Sobre la agencia
│   │   ├── proyectos/     ← Lista + detalle de proyectos
│   │   ├── expertices/    ← Servicios + detalle de servicio
│   │   ├── blog/          ← Blog + artículo
│   │   ├── contacto/      ← Formulario de contacto
│   │   └── not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── GlassmorphismHeader.tsx  ← Header principal (pill nav + logo SVG)
│   │   └── footer.tsx               ← Footer con watermark HYPER
│   ├── sections/          ← Secciones de la home y otras páginas
│   └── ui/                ← Componentes atómicos (Button, Card, Modal)
├── i18n/                  ← Configuración next-intl
├── lib/
│   ├── animations.ts      ← Variantes Framer Motion reutilizables
│   ├── constants.ts       ← Datos estáticos (proyectos, clientes)
│   └── utils.ts
└── middleware.ts           ← Routing i18n
messages/
├── es.json
└── en.json
public/
└── assets/                ← Todos los archivos estáticos del sitio
    ├── README.md          ← Guía de specs y nombres de archivos esperados
    ├── logo/              ← hyper-logo-dark.svg ✅ | hyper-logo-light.svg ✅
    ├── video/             ← hero.webm ✅
    ├── projects/          ← Covers de proyectos (pendiente)
    ├── clients/           ← Logos SVG de clientes (pendiente)
    └── team/              ← Fotos del equipo (pendiente)
```

---

## Páginas y Secciones

### Home (`/`)

Secciones en orden:

1. **HeroSection** — Headline editorial "Future of / brands" en `font-medium` (500). Fondo blanco. Sin botón CTA — solo headline + subtítulo a la derecha.
2. **VideoHeroSection** — Video en loop automático (`hero.webm`). `aspect-[4/5]` en mobile, `aspect-video` en desktop. IntersectionObserver para play/pause en scroll.
3. **AboutSection** — Fondo `#e8e8e8`. Párrafo manifesto + CTA "Ver servicios" → `/expertices`.
4. **ProjectsSection** — 6 proyectos. Mobile: todos en columna única cuadrada. Desktop: grid `half` (cuadrado) / `full` (span 2, proporción 5:2). Placeholders de gradiente → pendiente imágenes reales.
5. **ClientsMarquee** — CSS marquee. Heading: "Hemos hecho un gran equipo juntos". Logos de clientes en texto por ahora.
6. **ExperticesSection** — Fondo negro. 2 cards: Branding (oscuro + acento amarillo) / Tecnología (fondo amarillo).

### Proyectos en `constants.ts`

| ID | Layout | Estado imagen |
|---|---|---|
| long-king | half (cuadrado) | Gradiente placeholder |
| kurrupt | half (cuadrado) | Gradiente placeholder |
| zhapn | full (5:2 panorámica) | Gradiente placeholder |
| audi | half (cuadrado) | Gradiente placeholder |
| amava | half (cuadrado) | Gradiente placeholder |
| twilio | full (5:2 panorámica) | Gradiente placeholder |

### Páginas internas (todas con soporte ES/EN)

| Ruta | Estado | Descripción |
|---|---|---|
| `/agencia` | Stub vacío | Historia, equipo, valores, manifesto |
| `/proyectos` | Stub vacío | Grilla filtrable de todos los proyectos |
| `/proyectos/[slug]` | Stub vacío | Case study de cada proyecto |
| `/expertices` | Stub vacío | Overview de servicios |
| `/expertices/[servicio]` | Stub vacío | Detalle de branding / tecnología |
| `/blog` | Stub vacío | Listado de artículos |
| `/blog/[slug]` | Stub vacío | Artículo individual |
| `/contacto` | Stub vacío | Formulario de contacto + info |

---

## Internacionalización (i18n)

- **Idiomas:** Español (`es`) como default, Inglés (`en`)
- **Implementación:** next-intl v4 con App Router
- **Archivos:** `messages/es.json` y `messages/en.json`
- **Rutas:** `hyperagencia.com/es/...` y `hyperagencia.com/en/...`
- El locale switcher está en el header (ícono globo → dropdown `ES — Español` / `EN — English`, sin banderas)

**Regla:** Todo texto visible al usuario debe estar en ambos archivos `messages/`. Nunca hardcodear strings en los componentes.

---

## Componentes Clave

### GlassmorphismHeader
- Fixed, z-50
- Logo SVG (`/assets/logo/hyper-logo-dark.svg`) `h-7`, a la izquierda
- Nav central en píldora con glassmorphism (`bg-white/50 backdrop-blur-md`)
- Selector de idioma (globo) sin banderas: `ES — Español` / `EN — English`
- Menú hamburguesa mobile → panel lateral deslizante desde la derecha
- Padding: `px-6 lg:px-8` (sin `max-w-7xl`)

### Footer
- Fondo `#e8e8e8`
- CTA newsletter | Dirección Chile | Nav links
- Redes sociales: LinkedIn, Instagram, TikTok (links placeholder)
- Marca de agua "HYPER": `text-[30vw] font-normal` — ocupa todo el ancho de pantalla con peso 400

### Button (variantes)
- `primary` — negro con texto blanco
- `outline` — borde negro
- `pill-yellow` — píldora con fondo amarillo `#f1e066`
- Implementado con `<button>` nativo + CSS `hover:scale-[1.03] active:scale-[0.97]` (sin Framer Motion para evitar conflictos de tipos en v12)

### VideoHeroSection
- Para cambiar el video: editar `VIDEO_SRC` en `src/components/sections/VideoHero.tsx`
- Archivo actual: `/assets/video/hero.webm`
- Atributos: `autoPlay loop muted playsInline` + IntersectionObserver (pausa fuera de viewport)

---

## Assets

Ver `public/assets/README.md` para la guía completa de specs y nombres de archivos.

### Estado actual de assets

| Asset | Archivo | Estado |
|---|---|---|
| Logo dark | `/assets/logo/hyper-logo-dark.svg` | ✅ Activo |
| Logo light | `/assets/logo/hyper-logo-light.svg` | ✅ Disponible |
| Video hero | `/assets/video/hero.webm` | ✅ Activo |
| Covers proyectos | `/assets/projects/*.jpg` | 🔴 Pendiente |
| Logos clientes | `/assets/clients/*.svg` | 🔴 Pendiente |
| Fotos equipo | `/assets/team/*.jpg` | 🔴 Pendiente |

---

## Animaciones

Variantes Framer Motion en `src/lib/animations.ts`:
- `fadeInUp` — Entrada desde abajo con fade
- `staggerContainer` — Contenedor que escala los hijos en cascada
- `slideInRight` — Entrada desde la derecha
- `scaleIn` — Entrada con scale

Uso estándar para secciones con scroll trigger:
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  variants={staggerContainer}
>
```

---

## Estado Actual (Mayo 2026)

### Completado ✅
- Setup Next.js 15 + TypeScript + Tailwind
- Configuración i18n (next-intl) con rutas ES/EN
- Sistema de diseño base (colores, tipografía, tokens Tailwind)
- Header: logo SVG real, glassmorphism, mobile menu, language switcher sin banderas
- Footer: watermark HYPER full-width a peso 400, socials, nav
- Home — todas las secciones funcionales:
  - Hero editorial (font-medium, sin CTA)
  - Video hero con `hero.webm` en autoplay loop
  - About con nuevo manifiesto
  - Proyectos: 6 cards con layout half/full, mobile en columna única
  - Clients marquee CSS
  - Expertices (Branding / Tecnología)
- Padding global unificado (`px-6 lg:px-8`) en header, secciones y footer
- Estructura de assets (`public/assets/`) con subcarpetas y README
- Animaciones base con Framer Motion
- Smooth scroll con Lenis
- Estructura de rutas para todas las páginas (stubs)

### Pendiente de contenido real 🟡
- Imágenes de proyectos (actualmente gradientes de color)
- Logos de clientes en marquee (actualmente texto)
- Links reales de redes sociales (LinkedIn, Instagram, TikTok)

### Pendiente de construir 🔴
- Página `/agencia` (equipo, historia, valores)
- Página `/proyectos` (grilla filtrable)
- Páginas de case study `/proyectos/[slug]`
- Página `/expertices` + detalle por servicio
- Blog (listado + artículo)
- Página `/contacto` con formulario funcional
- Formulario de contacto (backend / email service)
- Newsletter (integración con servicio de email marketing)
- SEO: metadata dinámica, OG tags, sitemap.xml, robots.txt
- Optimización de imágenes con `next/image`
- Fuentes locales (evitar Google Fonts en producción)
- Deploy en Vercel + dominio hyperagencia.com
- Analytics (Google Analytics / Plausible)
- Página 404 con diseño completo

---

## Principios de Desarrollo

1. **Performance primero:** Imágenes con `next/image`, fuentes con `font-display: swap`, sin JavaScript innecesario en el cliente.
2. **Mobile first:** Diseñar desde mobile hacia arriba. La web debe verse perfecta en cualquier pantalla.
3. **Padding consistente:** Siempre `px-6 lg:px-8`. Nunca romper este patrón agregando `max-w-*` o padding diferente.
4. **Sin texto hardcodeado:** Todo string visible en `messages/es.json` y `messages/en.json`.
5. **Semántica HTML:** Usar `<section>`, `<article>`, `<nav>`, `<main>`, `<footer>` correctamente.
6. **Sin over-engineering:** No crear abstracciones hasta que se necesiten al menos 3 veces.

---

## Convenciones de Nombrado

- Componentes: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase con prefijo `use-` (`use-smooth-scroll.ts`)
- Páginas: siempre `page.tsx` dentro de su carpeta de ruta
- Claves i18n: snake_case (`hero_subtitle`, `title_line1`)
- IDs de proyectos: kebab-case (`long-king`, `zhapn`)
- Assets: kebab-case, sin espacios (`hyper-logo-dark.svg`, `hero.webm`)

---

## Datos de Contacto / Empresa

- **Agencia:** Hyper (Hyperagencia)
- **Email:** luis@hyperagencia.com
- **Dirección:** Av. Pdte. Kennedy 5600, Ofic 507, Vitacura, Santiago, Chile
- **Fundada:** 2013
- **Redes:** LinkedIn, Instagram, TikTok (links reales pendientes)
