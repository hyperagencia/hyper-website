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
| next-intl | ^4.3 | Internacionalización (ES/EN) |
| Lucide React | ^0.542 | Iconos |
| next-cloudinary | ^6.17 | Imágenes/video de proyectos y clientes servidos desde Cloudinary |
| @supabase/supabase-js | ^2.112 | Cliente admin para persistir leads del formulario de contacto |
| resend | ^6.22 | Envío del email de notificación cuando llega un lead |
| zod | ^4.4 | Validación de formularios (compartida entre cliente y API route) |
| clsx | ^2.1 | Utilidad para clases condicionales |

> **Nota:** GSAP, Lenis y Three.js/R3F aparecían en versiones anteriores de esta guía pero no están instalados ni se usan en el código actual. Si se retoman (smooth scroll, elementos 3D), agregarlos aquí junto con su primer uso real.

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

- **Familia:** Neue Haas Grotesk, servida vía Adobe Fonts (Typekit, kit `mtg6fon`) — reemplazó a Inter. Dos variantes registradas en `tailwind.config.js`:
  - `font-sans` → `neue-haas-grotesk-text` (cuerpo de texto)
  - `font-display` → `neue-haas-grotesk-display` (headlines, títulos de sección, números)
- El `<link rel="stylesheet" href="https://use.typekit.net/mtg6fon.css">` + preconnects a `use.typekit.net` / `p.typekit.net` están en `src/app/[locale]/layout.tsx`
- **Headlines editoriales:** `font-display font-medium` (500) + `tracking-tighter`
- **Tamaños hero:** Escalado responsive desde `4rem` → `10rem`
- **Nota:** Se evita el peso 900 — los títulos usan 500 para un look más refinado

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
│   │   ├── layout.tsx     ← Header + Footer globales + fuente Adobe (Typekit)
│   │   ├── page.tsx       ← Home
│   │   ├── agencia/       ← Sobre la agencia ✅ construida
│   │   ├── proyectos/     ← Lista + detalle de proyectos ✅ construida
│   │   ├── expertices/    ← Servicios + detalle de servicio ✅ construida
│   │   ├── blog/          ← Blog + artículo — 🔴 stub (`return null`)
│   │   ├── contacto/      ← Formulario de contacto ✅ construida y funcional
│   │   ├── privacidad/    ← Política de privacidad ✅
│   │   ├── terminos/      ← Términos y condiciones ✅
│   │   ├── [...rest]/page.tsx ← catch-all que dispara notFound()
│   │   └── not-found.tsx  ← 404 negro con "404" en puntos (DotMatrix404)
│   ├── api/
│   │   └── contact/route.ts  ← Recibe el form, valida, guarda en Supabase, notifica por Resend
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── GlassmorphismHeader.tsx  ← Header principal (pill nav + logo SVG)
│   │   ├── footer.tsx               ← Footer con watermark HYPER
│   │   └── ProgressiveBlur.tsx      ← Blur progresivo (overlay decorativo)
│   ├── sections/          ← Secciones de la home y otras páginas
│   ├── contact/           ← ContactForm.tsx + RotatingGreeting.tsx
│   ├── legal/             ← LegalPageLayout.tsx (usado por /privacidad y /terminos)
│   ├── projects/          ← ProjectCard.tsx, ProjectsFilterGrid.tsx
│   ├── services/          ← PillarCard.tsx, ProcessSteps.tsx, ServiceHero.tsx, ValueBlockRow.tsx
│   └── ui/                ← Componentes atómicos: Button, CloudinaryImage, CloudinaryVideo,
│                              AnimatedLink, checkbox, field, input, select, textarea, modal
├── i18n/                  ← Configuración next-intl (routing.ts define slugs traducidos por locale)
├── lib/
│   ├── animations.ts      ← Variantes Framer Motion reutilizables
│   ├── constants.ts       ← Datos estáticos (expertices/pillars)
│   ├── contact-schema.ts  ← Schema Zod del form (compartido entre ContactForm y api/contact)
│   ├── contact-options.ts ← Opciones de servicio del select del form
│   ├── contact-email.ts   ← Arma el HTML del email de notificación (Resend)
│   ├── countries.ts       ← Lista de países para el select del form
│   ├── supabase.ts        ← Cliente admin de Supabase (server-only, usa SUPABASE_SECRET_KEY)
│   └── utils.ts
├── data/
│   ├── projects/          ← Un archivo por proyecto + types.ts + index.ts (PROJECTS)
│   ├── clients/           ← Registro de clientes (logo Cloudinary, industria) — index.ts (CLIENTS)
│   ├── legal/             ← privacy-policy.ts, terms-and-conditions.ts, types.ts, index.ts
│   └── agencia.ts         ← AGENCY_VALUES, AGENCY_WORK_BLOCKS, AGENCY_STATS para /agencia
└── middleware.ts           ← Routing i18n
messages/
├── es.json
└── en.json
supabase/
└── migrations/
    └── 0001_contact_submissions.sql  ← Tabla contact_submissions (leads del form)
public/
└── assets/                ← Assets estáticos que no viven en Cloudinary
    ├── README.md          ← Guía de specs y nombres de archivos esperados
    ├── logo/              ← hyper-logo-dark.svg ✅ | hyper-logo-light.svg ✅
    └── video/             ← hero.webm ✅
```

> Covers de proyectos y logos de clientes ya no van en `public/assets/` — se sirven desde Cloudinary (ver sección Assets).

---

## Páginas y Secciones

### Home (`/`)

Secciones en orden:

1. **HeroSection** — Headline editorial "Future of / brands" en `font-medium` (500). Fondo blanco. Sin botón CTA — solo headline + subtítulo a la derecha.
2. **VideoHeroSection** — Video en loop automático (`hero.webm`). `aspect-[4/5]` en mobile, `aspect-video` en desktop. IntersectionObserver para play/pause en scroll.
3. **AboutSection** — Fondo `#e8e8e8`. Párrafo manifesto + CTA "Ver servicios" → `/expertices`.
4. **ProjectsSection** — proyectos destacados (`featured: true`). Grid uniforme de cards 4:5: 1 columna en mobile, 2 en tablet, 3 en desktop. Ver `ProjectCard` en Componentes Clave.
5. **ClientsMarquee** — CSS marquee. Heading: "Hemos hecho un gran equipo juntos". Logos de clientes en texto por ahora.
6. **ExperticesSection** — Fondo negro. 2 cards: Branding (oscuro + acento amarillo) / Tecnología (fondo amarillo).

### Proyectos en `src/data/projects/`

Un archivo por proyecto, registrados en `index.ts` → `PROJECTS`. Cada `Project` referencia un `clientId` (ver `src/data/clients/`) y no repite el logo ni la industria del cliente.

**Orden interno:** cada proyecto tiene `priority: number` (menor = aparece antes en Home y `/proyectos`). Convención: 1–9 para insignias, 100 = default. `getSortedProjects()` en `index.ts` es la fuente de verdad del orden — `getFeaturedProjects()`, `getRelatedProjects()` y la página `/proyectos` lo consumen; nunca reordenar manualmente el array `PROJECTS` para cambiar el orden visible, cambiar el número `priority` en el archivo del proyecto.

| Slug | Cliente | Industria | Servicios | Priority | Cover |
|---|---|---|---|---|---|
| lonkingmaq | Lonking Maq | Minería & Industrial | Branding, Web | 1 | ✅ imagen + hover |
| zhibo | Zhibo | Minería & Industrial | Branding, Web | 2 | ✅ imagen + hover |
| probel | Probel | Belleza | Branding, Motion, Web | 3 | ✅ video (loop) + hover |
| art-stgo | Art Stgo | Cultura | Branding, App, UI/UX, Web | 4 | ✅ imagen + hover |
| general-focus | General Focus | Salud | Branding, Web | 5 | ✅ imagen + hover |
| liozar | Liozar | Moda | Branding | 100 (no featured) | ✅ imagen + hover |

### Páginas internas (todas con soporte ES/EN)

| Ruta (es) | Ruta (en) | Estado | Descripción |
|---|---|---|---|
| `/agencia` | `/agency` | ✅ Construida | Hero, misión, valores, stats, "cómo trabajamos", marquee de clientes, CTA |
| `/proyectos` | `/projects` | ✅ Construida | Grilla filtrable (`ProjectsFilterGrid`) de todos los proyectos |
| `/proyectos/[slug]` | `/projects/[slug]` | ✅ Construida | Case study de cada proyecto |
| `/expertices` | `/expertises` | ✅ Construida | Overview de servicios + `ProcessSteps` |
| `/expertices/[servicio]` | `/expertises/[servicio]` | ✅ Construida | Detalle de branding / tecnología |
| `/contacto` | `/contact` | ✅ Construida y funcional | Formulario de contacto con backend (Supabase + Resend) |
| `/privacidad` | `/privacidad` | ✅ Construida | Política de privacidad (`LegalPageLayout`) |
| `/terminos` | `/terminos` | ✅ Construida | Términos y condiciones (`LegalPageLayout`) |
| `/blog` | `/blog` | 🔴 Stub vacío (`return null`) | Listado de artículos |
| `/blog/[slug]` | `/blog/[slug]` | 🔴 Stub vacío (`return null`) | Artículo individual |

---

## Internacionalización (i18n)

- **Idiomas:** Español (`es`) como default, Inglés (`en`)
- **Implementación:** next-intl v4 con App Router
- **Archivos:** `messages/es.json` y `messages/en.json`
- **Rutas:** `hyperagencia.com/es/...` y `hyperagencia.com/en/...`
- El locale switcher está en el header (ícono globo → dropdown `ES — Español` / `EN — English`, sin banderas)
- **Slugs traducidos:** `src/i18n/routing.ts` define `pathnames` por ruta — el código siempre usa el path en español (`Link href="/proyectos"`, `href="/agencia"`) y next-intl resuelve la URL real según el locale (`/en/projects`, `/en/agency`, `/en/expertises`, etc). No hardcodear las rutas en inglés en los componentes.

**Regla:** Todo texto visible al usuario debe estar en ambos archivos `messages/`. Nunca hardcodear strings en los componentes. Namespaces actuales en `messages/*.json`: `common`, `pages` (`home`, `projects`, `expertices`, `agency`, `blog`, `contact`), `footer`, `metadata`.

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

### ProjectCard (`src/components/projects/ProjectCard.tsx`)
- Card reutilizable (Home, `/proyectos`, relacionados en el detalle). Props: `{ project, locale }`.
- Contenedor 4:5, `rounded-[15px]`. Cover: imagen o video Cloudinary (fallback: degradado + monograma del cliente si no hay assets).
- Badge inferior: logo del cliente 1:1 `rounded-[10px]` + nombre + industria (resueltos vía `getClient(project.clientId)` de `src/data/clients`).
- Hover (solo desktop, `md:group-hover`): el marco se contrae a `scale-[0.97]` mientras la imagen interior sube a `scale-[1.04]`, con crossfade opcional a `project.cover.hover` si existe.
- El título del proyecto va **debajo** de la card (no en overlay). El servicio/categoría no se muestra en la card — solo en el detalle y como filtro en `/proyectos`.

### CloudinaryImage / CloudinaryVideo (`src/components/ui/`)
- Wrappers sobre `next-cloudinary` para servir covers de proyectos y logos de clientes por `publicId`.
- Usados por `ProjectCard`, `ProjectsFilterGrid` y el detalle de proyecto — evitar `next/image` directo con URLs de Cloudinary hardcodeadas.

---

## Formulario de Contacto (backend funcional)

Flujo completo `ContactForm.tsx` → `POST /api/contact` → Supabase + Resend:

1. **Cliente:** `ContactForm.tsx` valida con `contactSchema` (Zod, `src/lib/contact-schema.ts`) — el mismo schema se reusa en la API route para que la validación nunca diverja entre front y back.
2. **Anti-spam (API route, antes de tocar la DB):**
   - Honeypot: campo `website` oculto — si un bot lo llena, se responde `200 { ok: true }` sin persistir nada (no delatar la trampa).
   - Timing: `startedAt` (timestamp de cuando se montó el form) — si la respuesta llega en menos de `MIN_SUBMIT_TIME_MS` (3000ms), se descarta igual con `200 { ok: true }`.
   - Rate limit: máx. `RATE_LIMIT_MAX_SUBMISSIONS` (3) envíos por IP cada `RATE_LIMIT_WINDOW_MINUTES` (10) minutos, contando contra la propia tabla `contact_submissions` — sin servicio externo.
3. **Persistencia:** insert en `contact_submissions` (Supabase) vía `supabaseAdmin` (`src/lib/supabase.ts`, server-only, usa `SUPABASE_SECRET_KEY`). El lead queda guardado aunque el email falle.
4. **Notificación:** email best-effort vía Resend (`src/lib/contact-email.ts` arma el HTML) a `CONTACT_TO_EMAIL`, con `replyTo` = email del lead. Si faltan las env vars de Resend o falla el envío, se loguea pero la request igual responde `ok: true`.
5. **Tabla:** definida en `supabase/migrations/0001_contact_submissions.sql`.

**Variables de entorno requeridas** (`.env.local`, no versionado):

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_URL` | Assets de proyectos/clientes vía `next-cloudinary` |
| `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY` | Proyecto Supabase `hyper-website` (leads del form) |
| `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` | Notificación por email al recibir un lead |

---

## SEO

Base técnica lista (MVP). Todo cuelga de `NEXT_PUBLIC_SITE_URL` — **en Vercel debe ser `https://hyperagencia.com`**, si no canonical/sitemap/OG salen con localhost.

- **`src/lib/seo.ts`** — `buildPageMetadata({ locale, href, title, description, image?, noindex? })`: canonical, hreflang (`es`, `en`, `x-default`), OpenGraph y Twitter. `absoluteUrl(href, locale)` resuelve slugs traducidos con `getPathname`. Toda página nueva debe exportar `generateMetadata` usando este helper.
- **Textos** de title/description por página: `messages/*.json` → `metadata.pages.*`. Servicios usan `seo` en `src/data/services/detail/*.ts`; proyectos lo derivan de `PROJECTS` (`"{Cliente} — {servicios} | Hyper"`, OG image = cover Cloudinary 1200×630).
- **`src/app/sitemap.ts`** y **`robots.ts`**: sitemap con alternates ES/EN (estáticas + servicios + proyectos; sin `/blog`). `/api/` bloqueado, crawlers de IA permitidos.
- **JSON-LD** (`components/seo/JsonLd.tsx`): `ProfessionalService` + `WebSite` en el layout (sin teléfono público), `Service` + `BreadcrumbList` en servicios, `CreativeWork` + `BreadcrumbList` en proyectos.
- **H1 del Home** = label inferior del hero ("Agencia de Branding y Tecnología en Santiago, Chile"); "Future of brands" es un `<p>` visual.
- **`/blog`** está `noindex` mientras sea "Próximamente" — quitar `noindex` y agregarlo al sitemap al publicar contenido.
- **Redirects 301 desde WordPress**: `next.config.ts` (`wordpressRedirects`), basados en el sitemap real de WP (`/servicios/*`, `/cultura`, `/en/about`, `/en/work`, `/portfolio/*`, `/project-type/*`, posts, páginas de prueba). Next responde 308 (equivalente a 301 para Google).
- Pendiente SEO (post-MVP): FAQ/HowTo (solo con contenido real), blog con artículos AEO, página de minería, testimonios, equipo con nombres, Google Business Profile, Search Console + sitemap.

---

## Páginas Legales

`/privacidad` y `/terminos` comparten `LegalPageLayout.tsx` (`src/components/legal/`). El contenido vive tipado en `src/data/legal/` (`privacy-policy.ts`, `terms-and-conditions.ts`, `types.ts`, `index.ts`) — no hardcodear texto legal en los componentes de página.

---

## Assets

Ver `public/assets/README.md` para la guía completa de specs y nombres de archivos que **sí** viven en `public/`.

Los covers de proyectos y logos de clientes se sirven desde **Cloudinary** (no desde `public/assets/`), vía `CloudinaryImage`/`CloudinaryVideo` (`src/components/ui/`) usando el `publicId` guardado en `src/data/projects/*` (`cover.image` / `cover.video` / `cover.hover`) y `src/data/clients/index.ts` (`logo`). Si un proyecto o cliente no tiene `publicId` todavía, `ProjectCard` cae a un degradado con el monograma del cliente.

### Estado actual de assets

| Asset | Fuente | Estado |
|---|---|---|
| Logo dark/light | `/assets/logo/hyper-logo-*.svg` (public/) | ✅ Activo |
| Video hero | `/assets/video/hero.webm` (public/) | ✅ Activo |
| Fuente Neue Haas Grotesk | Adobe Fonts / Typekit (`use.typekit.net/mtg6fon.css`) | ✅ Activo |
| Covers de los 6 proyectos | Cloudinary (`publicId` en `src/data/projects/*.ts`) | ✅ Cargados |
| Logos de los 6 clientes | Cloudinary (`publicId` en `src/data/clients/index.ts`) | ✅ Cargados |
| Fotos de equipo | — | 🔴 Pendiente |

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

## Estado Actual (Septiembre 2026)

### Completado ✅
- Setup Next.js 15 + TypeScript + Tailwind
- Configuración i18n (next-intl v4) con rutas ES/EN y slugs traducidos por locale (`i18n/routing.ts`)
- Sistema de diseño base (colores, tokens Tailwind) + tipografía real: Neue Haas Grotesk vía Adobe Fonts (reemplazó a Inter)
- Header: logo SVG real, glassmorphism, mobile menu, language switcher sin banderas
- Footer: watermark HYPER full-width a peso 400, socials, nav
- Home — todas las secciones funcionales (hero, video hero, about, proyectos, clients marquee, expertices)
- Todas las páginas internas construidas con contenido real: `/agencia`, `/proyectos`, `/proyectos/[slug]`, `/expertices`, `/expertices/[servicio]`, `/contacto`, `/privacidad`, `/terminos`
- **Formulario de contacto funcional de punta a punta:** validación Zod compartida, anti-spam (honeypot + timing + rate limit por IP), persistencia en Supabase (`contact_submissions`), notificación por email vía Resend
- Los 6 proyectos (`lonkingmaq`, `zhibo`, `probel`, `art-stgo`, `general-focus`, `liozar`) y sus 6 clientes con covers/logos reales servidos desde Cloudinary
- Padding global unificado (`px-6 lg:px-8`) en header, secciones y footer
- Animaciones base con Framer Motion

### Pendiente de contenido real 🟡
- Links reales de redes sociales (LinkedIn, Instagram, TikTok) — siguen como placeholder en el footer
- Fotos de equipo (para una eventual sección de equipo en `/agencia`)

### Pendiente de construir 🔴
- Blog (`/blog` y `/blog/[slug]` son stubs — `return null`)
- Newsletter: removido del footer (no hay envíos de mail por ahora); retomar con servicio de email marketing
- Subir `sitemap.xml` a Search Console tras el deploy (la base SEO técnica ya está, ver sección SEO)
- Deploy en Vercel + dominio hyperagencia.com
- Analytics: GA4 instalado en `src/app/[locale]/layout.tsx` (`NEXT_PUBLIC_GA_ID=G-MHWL2C7ZCR`, propiedad `309495282`) y el evento `generate_lead` se envía al éxito de `ContactForm`. GTM (`GTM-PSW5L35Q`) está soportado vía `NEXT_PUBLIC_GTM_ID` pero desactivado: GA4 directo y GTM son excluyentes para no duplicar visitas. **Falta cargar `NEXT_PUBLIC_GA_ID` en Vercel** y marcar `generate_lead` como evento clave en GA4. Hyper no corre Google Ads, así que las conversiones `ads_conversion_*` no se replican. Línea base, brechas de redirects y prioridades P0/P1/P2 para salir en `docs/informe-seo-analytics-2026-10-29.md`. GA4 y Search Console (`sc-domain:hyperagencia.com`) se leen con la Data API / Search Console API usando credenciales ADC fuera del repo (ver sección 7 del informe)
- Commitear el trabajo en curso: a la fecha de esta actualización hay una cantidad grande de cambios sin commitear (formulario de contacto, páginas legales, datos de clientes/proyectos, tipografía, etc.) — priorizar armar commit(s) antes de seguir sumando features

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
- IDs de proyectos: kebab-case (`lonkingmaq`, `art-stgo`)
- Assets: kebab-case, sin espacios (`hyper-logo-dark.svg`, `hero.webm`)

---

## Datos de Contacto / Empresa

- **Agencia:** Hyper (Hyperagencia)
- **Email:** luis@hyperagencia.com
- **Dirección:** Av. Pdte. Kennedy 5600, Ofic 507, Vitacura, Santiago, Chile
- **Fundada:** 2013
- **Redes:** LinkedIn, Instagram, TikTok (links reales pendientes)
