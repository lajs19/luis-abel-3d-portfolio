# UX_FLOW.md

## Flujo completo del visitante — 9 pasos

### Fase de entrada

**Paso 1 — Pantalla de carga**
- Fondo negro con estrellas.
- Texto: `LADS-01 // INITIALIZING SYSTEMS`
- Barra de progreso lineal en cian.
- Duración: 2.5 segundos.
- Mensajes rotativos: initializing → calibrating → loading → ready.

**Paso 2 — Pantalla de entrada (Entry Screen)**
- Estado: `LADS-01 // OPERATIONAL // LUNA ORBIT`
- Nombre completo: Luis Abel Javier de los Santos
- Título línea 1: Especialista en Diseño Técnico y Simulación FEA/CFD
- Título línea 2: Supervisión y Coordinación de Proyectos de Ingeniería
- CTA principal: `⟶ INGRESAR A LA ESTACIÓN`
- Hint de uso: "5 módulos · navega con los controles inferiores"
- Fondo: escena 3D de la estación en órbita lunar.

### Navegación principal

**Paso 3 — Ingreso a la estación**
- Al hacer clic en el CTA: la Entry Screen se desvanece (0.8s).
- Aparece la barra superior (Top Bar) con ID y botón de CV.
- Aparece la barra de navegación inferior (Bottom Nav) con los 5 módulos.
- La cámara hace lerp suave hacia el Módulo 01 (Airlock).
- El panel HUD del Módulo 01 se abre automáticamente (0.7s delay).

**Paso 4 — Selección de módulo via nav bar**
- El visitante hace clic en cualquier botón del Bottom Nav.
- La cámara hace lerp suave (0.8-1s) hacia ese módulo.
- El módulo se ilumina levemente en cian (emissive).
- El panel HUD se actualiza con el contenido del módulo.

**Paso 5 — Selección de módulo via clic en 3D**
- El visitante hace clic directamente sobre un módulo en la escena.
- Mismo comportamiento que el paso 4.
- Tooltip desaparece. Panel HUD se abre.

### Interacción con objetos

**Paso 6 — Hover sobre módulo 3D**
- Cursor cambia a `pointer`.
- Tooltip aparece con: `MOD.XX — Nombre del módulo`.
- Sin animación de glow excesiva — solo emissive suave.

**Paso 7 — Panel HUD abierto**
- Panel desliza desde la derecha (300ms ease-out).
- Escena se oscurece ligeramente (overlay 35% negro).
- Contenido: tag de módulo, nombre, título, subtítulo, cuerpo, CTA.
- El CTA lleva al siguiente módulo lógico o descarga el CV.
- ESC o clic en ✕ o clic en el dimmer cierra el panel.

### Salida y contacto

**Paso 8 — Navegación a Módulo 05 (Communications)**
- El visitante llega a este módulo por nav bar o via CTA del Módulo 04.
- Panel muestra opciones de contacto, LinkedIn, WhatsApp, descarga CV.

**Paso 9 — Acceso directo permanente**
- Botón `↓ DESCARGAR CV` en la Top Bar siempre visible.
- Disponible desde cualquier módulo sin necesidad de navegar.

## Tiempos críticos

| Evento | Duración objetivo |
|---|---|
| Carga inicial | ≤ 3 segundos |
| Transición de cámara | 0.8 – 1.2 segundos |
| Apertura de panel HUD | 0.3 segundos |
| Cierre de panel HUD | 0.25 segundos |
| Fade de Entry Screen | 0.8 segundos |

## Comportamiento en mobile

- Cámara fija: sin rotación ni orbita.
- Hover eliminado (solo tap).
- Panel HUD se convierte en bottom sheet (100% ancho).
- Bottom Nav scrollable horizontalmente.
- Escena con polígonos reducidos (performance mode).
