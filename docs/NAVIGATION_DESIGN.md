# Navigation Design

Este documento define cómo el visitante navega e interactúa con el portafolio 3D.

## Decisión principal

La navegación inicial será guiada por clics, no tipo videojuego.

El visitante podrá interactuar con objetos visibles dentro de una oficina/taller 3D. Al hacer clic en un objeto, se abrirá un panel informativo relacionado con ese objeto.

## Motivo

El público objetivo incluye reclutadores, clientes y empresas. Una navegación tipo videojuego puede ser memorable, pero también puede confundir, distraer o dificultar el acceso rápido a la información.

La primera versión debe priorizar claridad profesional, velocidad y facilidad de uso.

## Modo de navegación del MVP

Para el MVP:

- La cámara estará fija o semi-fija.
- Se podrá usar OrbitControls de forma limitada si no confunde.
- El usuario podrá hacer clic en objetos principales.
- Cada objeto abrirá un panel informativo.
- El usuario podrá cerrar el panel y seleccionar otro objeto.
- No se usará WASD en el MVP.
- No se usará física.
- No se usará conducción ni personaje.

## Comportamiento al hacer clic

Cuando el usuario haga clic en un objeto interactivo:

1. El objeto mostrará feedback visual.
2. Se abrirá un panel con información.
3. El panel tomará contenido desde `src/data`.
4. El panel podrá cerrarse con botón.
5. El sistema recordará qué objeto está activo.

## Comportamiento hover

En desktop:

- Los objetos interactivos deben mostrar un cambio visual al pasar el mouse.
- Puede usarse cambio de color, borde, glow sutil o cursor pointer.

En móvil:

- No depender de hover.
- El objeto debe ser seleccionable por toque.

## Cámara

Para el MVP:

- Usar cámara perspectiva.
- Ubicación inicial mostrando la oficina/taller de forma clara.
- No usar animaciones complejas de cámara.
- Si se implementan transiciones, deben ser sutiles y no bloquear la navegación.

## Mobile

En móvil:

- Priorizar paneles legibles.
- Permitir cerrar panel fácilmente.
- Evitar controles complejos.
- Evitar objetos demasiado pequeños.
- Mostrar una guía breve de uso.

## Guía de uso visible

Agregar una indicación breve:

“Haz clic en los objetos destacados para explorar mi experiencia.”

En móvil:

“Toca los objetos destacados para ver más información.”

## Fase futura

En una versión posterior se puede agregar:

- Tour guiado por zonas.
- Transiciones de cámara.
- Menú de zonas.
- Minimap.
- Exploración libre.
- Modo presentación.
- Animaciones más avanzadas.

## Regla principal

La navegación debe ayudar a entender el perfil profesional, no convertirse en una barrera.
