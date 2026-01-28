## Relevant Files

- `web/package.json` - Gestión de dependencias y scripts del proyecto Next.js.
- `web/next.config.ts` - Configuración de Next.js.
- `web/tsconfig.json` - Configuración de TypeScript.
- `web/postcss.config.mjs` - Configuración de PostCSS para Tailwind CSS.
- `web/eslint.config.mjs` - Configuración de ESLint.
- `web/src/app/page.tsx` - Componente de la página de inicio.
- `web/src/app/layout.tsx` - Layout raíz de la aplicación.
- `web/src/app/globals.css` - Estilos globales con Tailwind.
- `web/src/app/cursos/[slug]/page.tsx` - Plantilla para páginas de detalles de cursos.
- `web/src/app/alquiler/page.tsx` - Página de alquiler de equipos.
- `web/src/app/instructores/[id]/page.tsx` - Plantilla para perfiles de instructores.
- `web/src/app/faqs/page.tsx` - Página de preguntas frecuentes.
- `web/src/app/salinas-del-rey/page.tsx` - Guía de la región de Salinas del Rey.
- `web/src/app/galeria/page.tsx` - Página de galería multimedia.
- `web/src/app/testimonios/page.tsx` - Sección de testimonios/reseñas.
- `web/src/app/admin/dashboard/page.tsx` - Panel de administración.
- `web/src/app/api/` - Directorio para rutas de API (ej. `api/reservas/route.ts`, `api/pagos/route.ts`).
- `components/layout/Header.tsx` - Componente del encabezado.
- `components/layout/Footer.tsx` - Componente del pie de página.
- `components/ui/*` - Componentes de interfaz de usuario reutilizables.
- `lib/db/` - Conexión y operaciones de base de datos (si aplica).
- `lib/services/bookingService.ts` - Lógica de negocio para reservas.
- `lib/services/paymentService.ts` - Lógica de negocio para pagos (Wonpy).
- `lib/utils/` - Funciones de utilidad general (ej. formato de precios, manejo de fechas).
- `public/logo.svg` - Archivos estáticos como el logotipo.
- `public/images/`, `public/videos/` - Activos multimedia para la galería.
- `i18n/` o `locales/` - Archivos de internacionalización para múltiples idiomas.
- `cms/` - Directorio para el Headless CMS (configuración y modelos de contenido).
- `analytics/` - Configuración de Google Analytics.
- `crm/` - Integración con CRM (scripts o webhooks).
- `email/` - Integración con Mailchimp (templates, API calls).
- `tests/unit/`, `tests/e2e/` - Directorios para pruebas.

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.
- Se debe investigar y seleccionar un Headless CMS adecuado (ej. Strapi, Contentful, Sanity) en la fase de arquitectura.
- Las integraciones con servicios externos (Calendly, Google Calendar, Wonpy, WhatsApp API, GA4, Mailchimp, Notion, Google Maps, API de vientos) requerirán configuración de credenciales y APIs.

## Tasks

- [ ] 1.0 Configuración Inicial y Arquitectura
  - [x] 1.1 Inicializar proyecto Next.js con TypeScript y configuración básica.
  - [x] 1.2 Configurar control de versiones Git y enlazar con el repositorio GitHub `pagina-web-veroni-kite`.
  - [x] 1.3 Establecer estructura de directorios (`pages`, `components`, `lib`, `public`, `styles`, etc.).
  - [x] 1.4 Configurar herramientas de calidad de código (ESLint, Prettier).
  - [x] 1.5 Investigar y seleccionar bibliotecas/frameworks de UI (ej. Tailwind CSS) y gestión de estado.
  - [ ] 1.6 Configurar el despliegue automático en Vercel.
  - [ ] 1.7 Investigar y adquirir un dominio web.
  - [ ] 1.8 Configurar un Headless CMS (ej. Strapi, Contentful, Sanity) y definir modelos de contenido iniciales.

- [ ] 2.0 Desarrollo de Funcionalidades para Alumnos
  - [x] 2.1 Diseñar y desarrollar páginas estáticas de información general (Inicio, Quiénes Somos).
  - [ ] 2.2 Crear páginas dinámicas para descripciones detalladas de cursos y alquiler de equipos, con contenido desde el CMS.
  - [ ] 2.3 Implementar la visualización de precios de cursos y alquiler de equipos.
  - [ ] 2.4 Desarrollar la interfaz de usuario para el sistema de reservas (selección de cursos/equipos, fechas, horarios).
  - [ ] 2.5 Integrar el calendario de disponibilidad con Calendly o Google Calendar.
  - [ ] 2.6 Implementar la pasarela de pagos con Wonpy para procesar reservas online.
  - [ ] 2.7 Desarrollar la sección de perfiles de instructores (UI con datos del CMS).
  - [x] 2.8 Crear y poblar la sección de Preguntas Frecuentes (FAQs) con contenido del CMS.
  - [ ] 2.9 Desarrollar una guía interactiva y detallada de la región de Salinas del Rey.
  - [ ] 2.10 Implementar una galería de fotos y videos de alta calidad con carga optimizada.
  - [ ] 2.11 Crear una sección para testimonios y reseñas de alumnos (recopilación y visualización).

- [ ] 3.0 Desarrollo de Funcionalidades para Instructores
  - [ ] 3.1 Diseñar y desarrollar la interfaz de acceso privado para instructores (login).
  - [ ] 3.2 Implementar la gestión de disponibilidad y horarios en el área privada del instructor.
  - [ ] 3.3 Desarrollar la integración y automatización de notificaciones vía WhatsApp para instructores.

- [ ] 4.0 Desarrollo de Funcionalidades para Administración
  - [ ] 4.1 Configurar el panel de administración del CMS para gestionar todos los contenidos (cursos, instructores, FAQs, guías, multimedia, testimonios).
  - [ ] 4.2 Desarrollar la interfaz de gestión de reservas en el CMS (visualización, estados, confirmaciones).
  - [ ] 4.3 Implementar la monitorización y gestión de transacciones de pagos con Wonpy en el panel administrativo.
  - [ ] 4.4 Configurar e integrar Google Analytics 4 para el seguimiento y reportes de la web.
  - [ ] 4.5 Investigar e integrar una plataforma de email marketing (Mailchimp) para newsletters y campañas.
  - [ ] 4.6 Configurar y mantener Notion como un CRM manual para la gestión de contactos.

- [ ] 5.0 Implementación de Requisitos Técnicos y No Funcionales
  - [ ] 5.1 Implementar la funcionalidad multilingüe para Español e Inglés (ej. `next-i18next`).
  - [ ] 5.2 Optimizar el rendimiento de la página (optimización de imágenes, `lazy loading`, compresión de activos, etc.).
  - [ ] 5.3 Implementar medidas de seguridad esenciales (HTTPS, validación de formularios, protección básica contra XSS/CSRF).
  - [ ] 5.4 Desarrollar e implementar la estrategia SEO (meta tags, sitemaps, datos estructurados, blogposts).
  - [ ] 5.5 Integrar Google Maps para mostrar la ubicación de Salinas del Rey y posibles rutas de downwind.
  - [ ] 5.6 Investigar e integrar una API de pronóstico de vientos relevante para kitesurfistas.
  - [ ] 5.7 Escribir y ejecutar pruebas unitarias y de integración para las funcionalidades críticas.
  - [ ] 5.8 Planificar y ejecutar pruebas de aceptación de usuario (UAT) y de calidad.
  - [ ] 5.9 Crear documentación básica para el mantenimiento futuro del sitio.
