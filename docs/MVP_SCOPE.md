# MVP_SCOPE.md

## Definición del MVP

El MVP de Luis Abel Lunar Design Lab es una experiencia web 3D funcional
que permite a cualquier visitante conocer el perfil profesional completo
de Luis Abel, explorar sus áreas de especialidad, ver sus proyectos
y establecer contacto — todo desde una estación lunar interactiva.

## Lo que SÍ incluye el MVP

### Módulos activos (5)

| ID | Nombre | Contenido principal |
|---|---|---|
| 01 | Airlock — Entrada | Nombre, título, bio corta, empresa, cargo, años de experiencia |
| 02 | Holographic Mission Table | Perfil completo, áreas de especialidad, formación, habilidades |
| 03 | CAD Engineering Bay | Software CAD (avanzado/intermedio), simulación, análisis |
| 04 | Mission Archive | Proyectos: Montegrande, Yacahueque, Bayasol |
| 05 | Communications Console | Email, LinkedIn, WhatsApp, descarga CV |

### UI y navegación

- Pantalla de carga con barra de progreso
- Entry screen con nombre, título y CTA
- Top bar con ID y botón de CV siempre visible
- Bottom nav con 5 botones de módulo
- Transiciones de cámara suaves entre módulos
- Panel HUD deslizante para cada módulo
- Tooltip al hover sobre módulos 3D
- Dimmer de escena al abrir panel
- Botón de descarga de CV permanente
- Cierre de panel con ESC, clic exterior o botón ✕

### Escena 3D

- Starfield (2000+ partículas)
- Superficie lunar visible desde abajo
- Estación con geometría modular (truss + 5 módulos + paneles solares)
- Iluminación ambiental + solar + HUD
- Hover y clic con raycaster
- Gentle drift animation del conjunto

### Responsividad

- Desktop (≥1024px): experiencia completa con panel lateral
- Mobile (≤768px): cámara fija, bottom sheet, nav scrollable

## Lo que NO incluye el MVP

| Elemento | Razón de exclusión | Fase destino |
|---|---|---|
| Partículas y efectos atmosféricos | Complejidad y performance | Fase 2 |
| Avatar/personaje animado | Complejidad de assets 3D | Fase 2 |
| Música y audio | Complejidad, no crítico para reclutar | Fase 2 |
| Módulo Power & Transmission | Datos pendientes | Fase 2 |
| Módulo Simulation Lab | Datos pendientes | Fase 2 |
| Módulo Data Vault (Certificaciones) | Datos pendientes | Fase 2 |
| Animación de entrada al airlock | Complejidad no prioritaria | Fase 2 |
| Modo de exploración libre (WASD) | Complejidad UX | Fase 2 |
| Multi-idioma | No requerido inicialmente | Fase 3 |

## Criterios de éxito del MVP

1. Un reclutador puede conocer el perfil completo en menos de 3 minutos.
2. El CV se puede descargar desde cualquier punto sin navegar.
3. El sitio carga en menos de 5 segundos en conexión estándar.
4. La experiencia funciona en desktop y mobile sin errores críticos.
5. El contenido no contiene información inventada ni incorrecta.
6. El sitio pasa el build de Next.js sin errores (0 TypeScript errors).

## Stack técnico del MVP

- Framework: Next.js 14+ (App Router, TypeScript)
- 3D: React Three Fiber + Drei
- Animaciones UI: Framer Motion
- Estilos: Tailwind CSS
- Estado: Zustand (3 variables: activeModule, panelOpen, cameraMoving)
- Fonts: Space Grotesk + JetBrains Mono + Inter (Google Fonts)
- Deploy: Vercel o Netlify
