# SCENE_MAP.md

> Versión actualizada: 2026-06-29
> Concepto anterior (oficina/taller) reemplazado por estación lunar LADS-01.
> Aprobado por Luis Abel Javier de los Santos.

## Nombre del entorno

**Luis Abel Lunar Design Lab — LADS-01**
Estación de ingeniería en órbita lunar. Estética NASA/Artemis.

## Estructura de la escena

```txt
EXTERIOR (fondo)
├── Starfield (2000+ partículas)
├── Superficie lunar (visible abajo)
└── STATION GROUP (Three.js Group)
    ├── Truss central horizontal
    ├── Strut vertical central
    ├── Nodos de conexión (5)
    ├── Módulo 01 — Airlock
    ├── Módulo 02 — Mission Table
    ├── Módulo 03 — CAD Bay
    ├── Módulo 04 — Mission Archive
    ├── Módulo 05 — Communications
    └── Solar arrays (izquierdo + derecho)
```

---

## MÓDULOS MVP (v1.0)

### Módulo 01 — Airlock / Entrada [MVP]

**Posición en escena:** derecha del truss, Z+ (frente)
**Cámara preset:** position(7, 0.5, 8) → lookAt(3.5, 0, 0.5)

**Objetos interactivos:**
- Placa de presentación → Nombre, título oficial, tagline LADS-01
- Panel de bienvenida → Bio corta, empresa, cargo, años de experiencia
- Terminal de acceso → Descarga CV, LinkedIn, explorar estación

**Contenido confirmado:**
- Nombre: Luis Abel Javier de los Santos
- Línea 1: Especialista en Diseño Técnico y Simulación FEA/CFD
- Línea 2: Supervisión y Coordinación de Proyectos de Ingeniería
- Empresa: SERVINCA — Taller de Hidromecánica
- Desde: octubre 2021

---

### Módulo 02 — Holographic Mission Table [MVP]

**Posición en escena:** arriba del strut vertical
**Cámara preset:** position(0.5, 5.5, 8) → lookAt(0.4, 2.3, 0)

**Objetos interactivos:**
- Mesa holográfica → Áreas de especialidad (5 tags)
- Display de misión → Formación, empresa, años
- Panel de habilidades → Gestión, liderazgo, idiomas, normas

**Contenido confirmado:**
- Áreas: Diseño Mecánico, FEA/CFD, Líneas de Transmisión, Fundaciones, Documentación
- Formación: universitaria avanzada en Ingeniería Mecatrónica
- Normas: AWS, ASME, AISC, ASTM

---

### Módulo 03 — CAD Engineering Bay [MVP]

**Posición en escena:** izquierda del truss, Z+ (frente)
**Cámara preset:** position(-7, 0.5, 8) → lookAt(-3.5, 0, 0.4)

**Objetos interactivos:**
- Estación de trabajo principal → Software nivel avanzado
- Monitor secundario → Software nivel intermedio
- Pantalla de simulación → Análisis FEA/CFD
- Rack de herramientas → Software complementario

**Contenido confirmado:**
- Avanzado: SolidWorks, AutoCAD, Autodesk Inventor, Fusion 360
- Intermedio: SketchUp, 3ds Max, Revit
- Análisis: SolidWorks Simulation, ANSYS, SAP2000
- Otros: MATLAB, Python (básico), Microsoft 365, Cisco

---

### Módulo 04 — Mission Archive [MVP]

**Posición en escena:** abajo del strut vertical
**Cámara preset:** position(-0.5, -5.5, 8) → lookAt(-0.4, -2.3, 0)

**Objetos interactivos:**
- Panel Presa Montegrande → [DATOS PENDIENTES]
- Panel Presa Yacahueque → [DATOS PENDIENTES]
- Panel Parque Fotovoltaico Bayasol → [DATOS PENDIENTES]

**Estructura de datos de cada proyecto (pendiente de llenado):**

```txt
- Nombre del proyecto
- Tipo (presa / fotovoltaico / otro)
- Rol exacto de Luis Abel
- Responsabilidades específicas
- Herramientas utilizadas
- Entregables producidos
- Resultados (si pueden mencionarse)
- Imágenes o renders disponibles
- Restricciones de confidencialidad
```

<!-- DATOS_PENDIENTES: Solo Luis Abel puede completar este módulo -->

---

### Módulo 05 — Communications Console [MVP]

**Posición en escena:** derecha-abajo del truss
**Cámara preset:** position(5, -3, 8) → lookAt(2.0, -1.6, 0.3)

**Objetos interactivos:**
- Terminal email → mailto link [DATO PENDIENTE]
- Panel LinkedIn → URL del perfil [DATO PENDIENTE]
- Botón WhatsApp → Enlace con mensaje predefinido [DATO PENDIENTE]
- Consola de CV → Descarga directa del PDF

<!-- DATOS_PENDIENTES: Email, LinkedIn URL, WhatsApp. Solo Luis Abel. -->

---

## MÓDULOS FASE 2 (post-MVP)

### Módulo 06 — Power & Transmission Module [Fase 2]

**Contenido planificado:**
Líneas de transmisión eléctrica, fundaciones, diseño estructural,
infraestructura energética, normas AISC y AWS en contexto.

---

### Módulo 07 — Simulation Lab [Fase 2]

**Contenido planificado:**
FEA/CFD en profundidad, análisis estructural, sísmico, térmico y dinámico.
SAP2000, ANSYS, SolidWorks Simulation. Metodologías de cálculo.

---

### Módulo 08 — Data Vault — Certificaciones [Fase 2]

**Contenido planificado:**
Certificaciones: Dassault Systèmes, Autodesk, MATLAB, Python (Cisco),
Microsoft Office Specialist. Idiomas. Formación continua.

---

## Elementos de Fase 2 transversales

| Elemento | Descripción |
|---|---|
| Partículas | Polvo lunar, efectos atmosféricos, ambiance |
| Avatar animado | Luis Abel como astronauta guía de la estación |
| Audio | Ambiance espacial, sonidos de UI, audio posicional |
| Órbita libre | Exploración WASD + mouse por la estación |
| Animación de entrada | Secuencia de acercamiento al airlock |
