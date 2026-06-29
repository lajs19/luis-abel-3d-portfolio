# SCENE_STYLE.md

## Paleta de colores

### Ambiente

| Nombre | Hex | Uso |
|---|---|---|
| Espacio | #12141A | Fondo de escena, background HTML |
| Interior oscuro | #1E2128 | Superficies interiores, paneles |
| Superficie de paneles | #2E3340 | Geometría principal de módulos |
| Metal | #3D4556 | Conectores, nodos, detalles |
| Titanio | #B8C4D4 | Marcos, bordes metálicos |
| Texto | #E8ECF4 | Textos principales |

### Acentos técnicos

| Nombre | Hex | Uso |
|---|---|---|
| HUD Cian | #00C8FF | Borde del panel, tags, estado activo, tooltip |
| Eléctrico | #1B6FE8 | Iluminación de relleno, efectos secundarios |
| Alerta ámbar | #F5A623 | Botón CV, datos pendientes, advertencias |
| Lunar | #C8D8E8 | Luz reflejada de la superficie lunar |

## Tipografía

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Títulos y UI | Space Grotesk | 400, 500, 600 | Nombres, módulos, botones |
| Cuerpo | Inter | 400, 500 | Texto de paneles, descripciones |
| Técnico/HUD | JetBrains Mono | 400, 500 | Readouts, tags, metadata, código |

## Referencias visuales correctas

1. NASA Mission Control (Apollo era) — oscuridad, pantallas, propósito
2. ISS Módulo Destiny — aluminio, funcionalidad, sin decoración
3. The Martian (2015) — Hab interior — vivido, funcional, austero
4. SpaceX Dragon — cabina de tripulación — negro, cian, precision
5. HUD displays de simuladores militares — datos claros, jerarquía

## Reglas de estilo — qué SÍ

- Geometría angular, modular, estructural
- Iluminación fría y direccional (luz solar de espacio)
- Ventanas con vista a superficie lunar (contexto sin distraer)
- Interfaces HUD en cian — bordes y etiquetas técnicas
- Modelos 3D low-poly geométricos — funcionales, no decorativos
- Texto en monoespaciado para datos técnicos

## Reglas de estilo — qué NO (MVP)

- Sin explosiones, partículas excesivas ni efectos de videojuego
- Sin colores saturados (neon verde, rojo dramático)
- Sin personajes, avatares ni figuras humanas animadas [→ Fase 2]
- Sin música ni efectos de sonido [→ Fase 2]
- Sin logo ni insignia oficial de NASA como elemento de marca
- Sin sombras excesivamente suaves o blur ambiental
- Sin texto hardcodeado en geometría 3D (usar overlays 2D)

## Qué NO es permanente (planificado para Fase 2)

| Elemento | Descripción | Fase |
|---|---|---|
| Partículas | Polvo lunar, efectos de transición, ambiance | Fase 2 |
| Avatar animado | Luis Abel como astronauta o guía holográfico | Fase 2 |
| Audio | Ambiance de estación, sonidos de UI, audio espacial | Fase 2 |

## Configuración técnica de la escena Three.js

- Background: `new THREE.Color('#12141A')`
- Fog: `THREE.Fog('#12141A', 35, 90)`
- ToneMapping: `THREE.ACESFilmicToneMapping`, exposure: `0.85`
- Shadows: `PCFSoftShadowMap`
- Antialiasing: activado
- PixelRatio: `Math.min(devicePixelRatio, 2)`

## Iluminación

- AmbientLight: `#1E2A38`, intensity `1.2`
- DirectionalLight (sol): `#C8D8E8`, intensity `2.8`, desde `(12, 9, 6)`
- DirectionalLight (borde): `#1B4A8A`, intensity `0.6`, desde `(-10, -4, -8)`
- PointLight (HUD): `#00C8FF`, intensity `0.4`, pulsa suavemente en el loop
