# Informe SEO y Analytics — línea base antes de migrar a Next.js

**Fecha:** 29 de octubre de 2026
**Sitio medido:** hyperagencia.com (WordPress, aún en producción)
**Destino:** proyecto Vercel `hyper-website` (Next.js), todavía sin dominio conectado

---

## 1. Resumen ejecutivo

- El sitio WordPress actual tiene **muy poco tráfico orgánico**: ~21 clics y ~4.200 impresiones en 90 días en Google. Casi todo viene de búsquedas de marca ("hyper", "probel").
- **No hay posicionamiento en búsquedas genéricas** ("agencia de branding", "agencia de branding chile"): aparecen en posiciones 10–18 con 0 clics. Es la mayor oportunidad del sitio nuevo.
- Gran parte del tráfico de GA4 parece **no humano** (EE.UU., Singapur, China; engagement del canal directo 17 %). El tráfico útil es Chile + orgánico.
- Hoy existen **conversiones de Google Ads** (`Contactar`, `SUBMIT_LEAD_FORM`) que el sitio nuevo no replica, y **la web nueva no tiene tag de GA4**.
- Las redirecciones 301 ya cubren la mayoría de URLs viejas, pero faltan decisiones sobre casos sin equivalente (por ejemplo `zhapin-2`, con 912 impresiones en posición 5).

---

## 2. Metodología

| Fuente | Propiedad | Rango |
|---|---|---|
| Google Analytics 4 (Data API) | `309495282` (zona horaria America/Santiago, CLP) | últimos 90 días (28 días donde se indica) |
| Search Console (Search Analytics API) | `sc-domain:hyperagencia.com` | 29-jul-2026 → 27-oct-2026 |

- Es una muestra **pequeña**: conviene leer las cifras como orden de magnitud, no como tendencias firmes.
- La propiedad de Search Console es de dominio, así que cubre http/https y con/sin `www`.
- Search Console tiene retraso de ~2 días, por eso el rango termina el 27-oct.

---

## 3. Google Analytics 4

### Tráfico general
- **Usuarios activos (28 días):** 56 · **nuevos:** 55 · **eventos:** 246 · interacción media ≈ 8 s por usuario.
- **Usuarios por mes:** ago 72 · sep 57 · oct 56 (julio solo 2, la propiedad empezó a medir a fin de mes).

### Canales (sesiones, 90 días)
| Canal | Sesiones | Tasa de interacción |
|---|---|---|
| Direct | 135 | 17 % |
| Organic Search | 35 | 66 % |
| Referral | 15 | 53 % |
| Organic Social | 8 | 63 % |
| AI Assistant | 2 | 100 % |

### Países (usuarios)
EE.UU. 83 · **Chile 28** · Singapur 16 · China 12 · India 7 · Canadá 6.
Idioma del navegador: inglés 130, español 39, chino 8, alemán 6.

> **Hipótesis:** el tráfico directo de EE.UU./Singapur/China con baja interacción es mayormente bots o scrapers. Los datos de Chile y de Organic Search son los que sirven para decidir.

### Dispositivo
Desktop 156 usuarios · móvil 28 · tablet 1.

### Páginas de entrada (sesiones)
`/` 83 · `/en/` 22 · `/en/portfolio/probel/` 8 · `/contacto/` 7 · `/portfolio/sf-consultores-re-brand/` 5 · `/proyectos/` 5 · `/servicios/` 5 · `/en/about/` 4 · `/en/contact/` 4 · `/portfolio/entel-ocean-nuba/` 4 · `/project-type/branding/` 4.

### Eventos
`page_view` 257 · `session_start` 198 · `first_visit` 184 · `user_engagement` 122 · `scroll` 65 · **`ads_conversion_Contactar_1` 21 · `ads_conversion_SUBMIT_LEAD_FORM_1` 21** · `click` 6.

> Las dos conversiones de Google Ads ya están configuradas. No sabemos todavía cómo se disparan hoy en WordPress (GTM, plugin o código del tema). Hay que averiguarlo antes de migrar o se pierden.

---

## 4. Search Console

### Total (90 días)
~**21 clics** y ~**4.225 impresiones**. Desktop 16 clics / 1.941 impr · móvil 5 clics / 2.261 impr (mejor posición en móvil: 7,1 vs 18,6).
Países: Chile 9 clics y 1.381 impresiones (pos. 10,5).

### Consultas de marca (dominan)
| Consulta | Clics | Impresiones | Pos. |
|---|---|---|---|
| hyper | 2 | 669 | 8,2 |
| probel | 1 | 392 | 8,3 |
| hyper agency | 1 | 128 | 7,2 |
| hyper moda | 1 | 26 | 8,9 |

### Consultas genéricas con oportunidad (hoy 0 clics)
| Consulta | Impresiones | Pos. |
|---|---|---|
| agencia de branding | 76 | 10,7 |
| agency | 49 | 15,5 |
| agencia branding chile | 29 | 14,2 |
| agencia branding (1 clic, CTR 4 %) | 25 | 14,5 |
| agencia de branding chile | 18 | 18,1 |
| agencia de publicidad | 15 | 72,6 |
| agencia de branding en santiago | 3 | 63,0 |

### Páginas con más impresiones
| URL | Clics | Impr. | Pos. |
|---|---|---|---|
| `/` | 12 | 1.352 | 11,7 |
| **`/en/portfolio/zhapin-2/`** | 0 | **912** | **5,0** |
| `/en/` | 3 | 598 | 19,4 |
| `/en/portfolio/probel/` | 1 | 495 | 10,5 |
| `/en/about/` | 0 | 139 | 27,2 |
| `/en/services/` | 0 | 84 | 21,2 |
| `/en/portfolio/audi-2/` | 0 | 64 | 6,9 |
| `/portfolio/entel-ocean-nuba/` | 0 | 60 | 11,8 |
| `/en/contact/` | 0 | 54 | 16,2 |
| `/en/work/` | 0 | 48 | 55,9 |
| `/cultura/` | 1 | 45 | 11,8 |
| `/portfolio/sf-consultores-re-brand/` | 1 | 38 | 6,0 |

### Sitemap
El único registrado es `https://hyperagencia.com/contacto` (enviado en 2022) y reporta **1 error**. No hay un sitemap real enviado.

---

## 5. Estado del código (sitio nuevo)

**Ya hecho** (ver sección SEO de `CLAUDE.md`):
`buildPageMetadata` en `src/lib/seo.ts`, textos de title/description en `messages/*.json` → `metadata.pages.*`, JSON-LD, `src/app/sitemap.ts` (ES/EN con alternates), `src/app/robots.ts` y redirecciones en `next.config.ts` (`wordpressRedirects`). El blog está `noindex` y fuera del sitemap, correcto para el MVP.

**Brechas detectadas:**

1. **Sin tag de GA4.** No hay `gtag`, `GoogleAnalytics` ni GTM en `src/`. Al cambiar el dominio se pierde el historial y la medición.
2. **Conversiones de Google Ads sin replicar** (`Contactar`, `SUBMIT_LEAD_FORM`). El envío exitoso de `ContactForm` es el punto natural para dispararlas.
3. **Redirecciones incompletas:**
   - `/en/portfolio/:slug*` envía todo a `/en/projects`, incluido **`zhapin-2`** (912 impr, pos. 5): decidir un destino más relevante.
   - Casos sin equivalente en la web nueva que hoy reciben visitas o impresiones: `entel-ocean-nuba`, `audi`/`audi-2`, `gogoro-network`, `kurrupt`, `amawa`, `kados`, `laredo`. Hoy caen al listado; confirmar que es lo deseado.
   - WordPress usa slash final. Next quita el slash con un 308 antes de aplicar los 301: hay que comprobar que `/portfolio/x/` no genere una cadena de dos saltos.
4. **Copy SEO sin foco en las consultas con oportunidad** ("agencia de branding chile / santiago"). El Home ya incluye "Agencia de Branding y Tecnología en Chile"; revisar el resto de páginas, servicios y casos de estudio.

---

## 6. Plan priorizado para salir (MVP)

### P0 — bloquea el lanzamiento
1. **Instalar GA4** en el layout (`@next/third-parties`, ID de medición `G-…` de la propiedad 309495282 en `NEXT_PUBLIC_GA_ID`), con aviso de privacidad coherente con `/privacidad`.
2. **Conversión del formulario:** disparar el evento de lead y las etiquetas de Google Ads cuando `POST /api/contact` responda `ok: true`. Confirmar con quien administra Ads cómo se disparan hoy.
3. **Completar y probar redirecciones:** armar la lista de URLs viejas (GSC + GA4) con su destino esperado y verificarla con `curl -I`, incluyendo el caso del slash final.
4. **Vercel listo para producción:** `NEXT_PUBLIC_SITE_URL=https://hyperagencia.com`, variables de Supabase, Resend y Cloudinary, y un deploy de producción verificado en la URL de Vercel **antes** de mover el DNS.
5. **Cambio de dominio:** apuntar el DNS a Vercel; en Search Console enviar `https://hyperagencia.com/sitemap.xml` y **retirar el sitemap viejo** `/contacto`.

### P1 — primera semana tras salir
- Ajustar title/description de cada página con las consultas genéricas (agencia de branding, Chile, Santiago); revisar `/en/` (pos. 19) y los hreflang.
- Inspección de URL en Search Console de `/`, `/en`, `/proyectos`, `/expertices`; vigilar 404 y cobertura.
- Marcar eventos clave en GA4 y filtrar el tráfico no humano en los reportes.
- Redes sociales reales en el footer y en `sameAs` del JSON-LD.

### P2 — post-MVP
- Blog con contenido real (quitar `noindex` y sumarlo al sitemap), página de minería, testimonios, equipo, Google Business Profile, FAQ solo con contenido real.
- Repetir este informe a los 30 y 90 días para comparar clics, impresiones y posición.

---

## 7. Cómo regenerar los datos

Las credenciales viven fuera del repositorio (`~/.config/gcloud/application_default_credentials.json`, creadas con `gcloud auth application-default login` y un cliente OAuth de tipo *Desktop app*). El archivo `client_secret_*.json` está en `docs/` pero ignorado por git.

- **GA4:** `POST https://analyticsdata.googleapis.com/v1beta/properties/309495282:runReport`
- **Search Console:** `POST https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Ahyperagencia.com/searchAnalytics/query`
- Ambas con `Authorization: Bearer $(gcloud auth application-default print-access-token)` y `x-goog-user-project: hyper-agencia-wordpress`.
- Permisos: `analytics.readonly`, `webmasters.readonly`, `cloud-platform`.
- El MCP `analytics-mcp` también quedó registrado para GA4 (requiere reiniciar la sesión de Claude Code).

---

## 8. Riesgos y supuestos

- Muestra pequeña: una sola visita cambia los porcentajes.
- El tráfico no humano infla "Direct", EE.UU. y Asia; los números de Chile y orgánico son más fiables.
- Se desconoce cómo se disparan hoy las conversiones de Google Ads.
- El 301 desde las URLs viejas conserva parte del posicionamiento, pero el cambio de contenido y de estructura puede mover las posiciones durante algunas semanas.
- Esta cuenta de Google también ve otros sitios en Search Console; este informe solo consultó el de Hyper.
