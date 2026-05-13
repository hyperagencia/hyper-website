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
- **Uso editorial:** `font-black` + `tracking-tighter` para headlines grandes
- **Tamaños hero:** Escalado responsive desde `4rem` → `10rem`

### Principios visuales

- Mucho espacio negativo. Menos es más.
- Tipografía editorial como elemento gráfico principal
- Transiciones suaves con Framer Motion (ease `[0.25, 0.1, 0.25, 1]`)
- Bordes redondeados grandes (`rounded-3xl`) para cards
- Sin sombras dramáticas — sombras sutiles o nada

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
│   │   ├── GlassmorphismHeader.tsx  ← Header principal (pill nav)
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
```

---

## Páginas y Secciones

### Home (`/`)

Secciones en orden:

1. **HeroSection** — Headline editorial gigante "Future of / brands". Fondo blanco. CTA a proyectos.
2. **VideoHeroSection** — 75vh oscuro. Placeholder por ahora → **necesita video real**.
3. **AboutSection** — Fondo `#e8e8e8`. Párrafo manifesto + CTA a /agencia.
4. **ProjectsSection** — Grilla 2 col de 4 proyectos destacados. Placeholders de gradiente → **necesitan imágenes reales**.
5. **ClientsMarquee** — CSS marquee con logos de clientes (texto por ahora).
6. **ExperticesSection** — Fondo negro. 2 cards: Branding (oscuro + acento amarillo) / Tecnología (fondo amarillo).

### Páginas internas (todas con soporte ES/EN)

| Ruta | Estado | Descripción |
|---|---|---|
| `/agencia` | Pendiente | Historia, equipo, valores, manifesto |
| `/proyectos` | Pendiente | Grilla filtrable de todos los proyectos |
| `/proyectos/[slug]` | Pendiente | Case study de cada proyecto |
| `/expertices` | Pendiente | Overview de servicios |
| `/expertices/[servicio]` | Pendiente | Detalle de branding / tecnología |
| `/blog` | Pendiente | Listado de artículos |
| `/blog/[slug]` | Pendiente | Artículo individual |
| `/contacto` | Pendiente | Formulario de contacto + info |

---

## Internacionalización (i18n)

- **Idiomas:** Español (`es`) como default, Inglés (`en`)
- **Implementación:** next-intl v4 con App Router
- **Archivos:** `messages/es.json` y `messages/en.json`
- **Rutas:** `hyperagencia.com/es/...` y `hyperagencia.com/en/...`
- El locale switcher está en el header (ícono globo → dropdown ES/EN)

**Regla:** Todo texto visible al usuario debe estar en ambos archivos `messages/`. Nunca hardcodear strings en los componentes.

---

## Componentes Clave

### GlassmorphismHeader
- Fixed, z-50
- Logo "Hyper" a la izquierda
- Nav central en píldora con glassmorphism (`bg-white/50 backdrop-blur-md`)
- Selector de idioma (globo) + menú hamburguesa mobile a la derecha
- En mobile: panel lateral deslizante desde la derecha

### Footer
- Fondo `#e8e8e8`
- CTA newsletter | Dirección Chile | Nav links
- Redes sociales: LinkedIn, Instagram, TikTok
- Marca de agua "HYPER" en `22vw` muy transparente al fondo

### Button (variantes)
- `primary` — negro con texto blanco
- `outline` — borde negro
- `pill-yellow` — píldora con fondo amarillo `#f1e066`

---

## Animaciones

Variantes Framer Motion en `src/lib/animations.ts`:
- `fadeInUp` — Entrada desde abajo con fade
- `staggerContainer` — Contenedor que escala los hijos
- `slideInRight` — Entrada desde la derecha
- `scaleIn` — Entrada con scale

Uso estándar para secciones:
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
- Header completo (glassmorphism, mobile menu, language switcher)
- Footer completo (watermark, socials, nav)
- Home page: todas las secciones implementadas (con placeholders)
- Animaciones base con Framer Motion
- Smooth scroll con Lenis
- Estructura de rutas para todas las páginas
- Marquee de clientes (CSS animation)

### En placeholder / Pendiente de contenido real 🟡
- Video hero (sección oscura 75vh necesita video MP4/WebM real)
- Imágenes de proyectos (actualmente gradientes de color)
- Logos de clientes en marquee (actualmente solo texto)
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
- Optimización de imágenes (next/image)
- Fuentes locales (evitar Google Fonts en producción para performance)
- Deploy en Vercel + dominio hyperagencia.com
- Analytics (Google Analytics / Plausible)
- Página 404 personalizada

---

## Principios de Desarrollo

1. **Performance primero:** Imágenes con `next/image`, fuentes con `font-display: swap`, sin JavaScript innecesario en el cliente.
2. **Mobile first:** Diseñar desde mobile hacia arriba. La web debe verse perfecta en cualquier pantalla.
3. **Escalabilidad:** Cada página nueva sigue la estructura `[locale]/nueva-pagina/page.tsx`. Cada sección nueva va en `components/sections/`.
4. **Sin texto hardcodeado:** Todo string visible en `messages/es.json` y `messages/en.json`.
5. **Semántica HTML:** Usar `<section>`, `<article>`, `<nav>`, `<main>`, `<footer>` correctamente.
6. **Sin over-engineering:** No crear abstracciones hasta que se necesiten al menos 3 veces.

---

## Convenciones de Nombrado

- Componentes: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase con prefijo `use-` (`use-smooth-scroll.ts`)
- Páginas: siempre `page.tsx` dentro de su carpeta de ruta
- Claves i18n: snake_case (`hero_subtitle`, `title_line1`)
- IDs de proyectos: kebab-case (`long-king`, `ola-digital`)

---

## Datos de Contacto / Empresa

- **Agencia:** Hyper (Hyperagencia)
- **Email:** luis@hyperagencia.com
- **Dirección:** Av. Pdte. Kennedy 5600, Ofic 507, Vitacura, Santiago, Chile
- **Fundada:** 2013
- **Redes:** LinkedIn, Instagram, TikTok (links reales pendientes)
