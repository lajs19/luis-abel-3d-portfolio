# INTERACTIONS.md

## Principio de interacción

Toda interacción tiene exactamente tres estados: Reposo, Hover, Activo.
No hay estados intermedios. No hay animaciones de loop en objetos en Reposo.

## Estados de un objeto interactivo

### Estado 1 — Reposo

- Objeto en escena sin interacción del usuario.
- Material: color estándar del módulo (#2A2E3A).
- Emissive: 0 (sin brillo).
- Cursor: default.
- Sin movimiento, sin animación.

### Estado 2 — Hover

- Cursor sobre el objeto (desktop solamente).
- Cursor cambia a: `pointer`.
- Tooltip aparece: `MOD.XX — Nombre del módulo`.
- Sin cambio de emissive (el tooltip es suficiente feedback).
- Duración máxima del tooltip: mientras el cursor esté encima.

### Estado 3 — Activo (módulo seleccionado)

- Módulo clickeado o seleccionado via nav bar.
- Emissive: `#00C8FF`, intensity `0.18`.
- Nav bar: botón correspondiente con clase `.on` (cian).
- Panel HUD: abierto con contenido del módulo.
- Cámara: lerp hacia posición predefinida del módulo.

## Comportamiento del Panel HUD

### Apertura

- Trigger: clic en módulo 3D O clic en botón del nav bar.
- Animación: translateX de 100% a 0% (300ms ease-out).
- Dimmer: overlay negro 35% aparece sobre la escena (300ms ease).
- La escena 3D sigue renderizando (no se pausa).

### Contenido del panel

```txt
[ TAG DE MÓDULO ]  [ Nombre del módulo ]  [ ✕ ]
─────────────────────────────────────────────
[ TÍTULO PRINCIPAL ]
[ SUBTÍTULO ]
─────────────────────────────────────────────
[ Cuerpo: texto, tags, filas de datos ]
─────────────────────────────────────────────
[ BOTÓN CTA ]
```

### Cierre

- Trigger: clic en ✕ | tecla ESC | clic en el dimmer.
- Animación: translateX de 0% a 100% (250ms ease-in).
- Dimmer: desaparece (250ms ease).
- Módulo activo: mantiene el emissive hasta seleccionar otro.

## Comportamiento de la cámara

### Lerp de transición

- Velocidad: factor 0.022 por frame (≈60fps ≈ 1.2s para completar).
- Sin corte brusco. Siempre interpolado.
- Durante la transición: la variable `cameraMoving = true` bloquea
  nuevos clics de módulo (opcional, para evitar glitches de lerp).

### Posiciones predefinidas por módulo

| Módulo | Camera position | LookAt target |
|---|---|---|
| Entry | (0, 2, 15) | (0, 0, 0) |
| 01 Airlock | (7, 0.5, 8) | (3.5, 0, 0.5) |
| 02 Mission Table | (0.5, 5.5, 8) | (0.4, 2.3, 0) |
| 03 CAD Bay | (-7, 0.5, 8) | (-3.5, 0, 0.4) |
| 04 Archive | (-0.5, -5.5, 8) | (-0.4, -2.3, 0) |
| 05 Comms | (5, -3, 8) | (2.0, -1.6, 0.3) |

## Interacciones del Bottom Nav

- Clic en botón → `navTo(id)` → mueve cámara + `openPanel(id)`.
- El botón activo recibe clase `.on` (color cian).
- Solo un botón activo a la vez.

## Comportamiento del botón CV

- Siempre visible en Top Bar.
- Clic → `window.open(CV_URL, '_blank')` o `window.location.href = CV_URL`.
- En el prototipo: alert informativo hasta que el PDF esté disponible.

## Mobile: diferencias de interacción

| Comportamiento | Desktop | Mobile |
|---|---|---|
| Hover | Sí (cursor + tooltip) | No |
| Clic en 3D | Sí (raycaster) | Sí (tap, raycaster) |
| Panel HUD | Sidebar derecho 340px | Bottom sheet 100% ancho |
| Cierre de panel | ESC / ✕ / dimmer | ✕ / swipe down / dimmer |
| Camera orbit | Lerp a presets (sin órbita libre) | Cámara fija |
| Nav bar | Centrada, botones completos | Scrollable horizontal |

## Accesibilidad mínima (MVP)

- Todos los botones con `aria-label` descriptivo.
- Panel HUD con `role="dialog"` y `aria-labelledby`.
- Contraste de texto: mínimo 4.5:1 sobre fondo (WCAG AA).
- Botón de descarga de CV accesible desde teclado (Tab + Enter).
- Opción futura: botón "MODO TEXTO" que muestra CV completo como HTML estático.
