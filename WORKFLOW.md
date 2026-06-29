# Workflow multi-IA — Luis Abel 3D Portfolio

Este documento define cómo deben trabajar los agentes de IA dentro del repositorio.

El proyecto se desarrolla por fases. No todas las IA trabajan al mismo tiempo. Cada agente entra cuando su fase lo requiere.

## Principio principal

Ningún agente debe trabajar sin conocer el estado actual del proyecto.

El primer archivo que todo agente debe leer es:

`STATUS.md`

## Orden general de trabajo

1. ChatGPT organiza estrategia, fases, prompts y control del progreso.
2. Claude revisa documentación, UX, contenido y claridad profesional.
3. Gemini audita riesgos técnicos, rendimiento, estructura y calidad.
4. Codex implementa código únicamente cuando la especificación está aprobada.
5. Gemini revisa la implementación.
6. Codex corrige.
7. ChatGPT valida que el resultado siga alineado al objetivo profesional.

## Protocolo de inicio de sesión

Todo agente debe seguir estos pasos antes de trabajar:

1. Leer `STATUS.md`.
2. Leer su archivo de instrucciones:
   - Claude debe leer `CLAUDE.md`.
   - Codex debe leer `CODEX.md`.
   - Gemini debe leer `GEMINI.md`.
   - GPT/ChatGPT debe leer `GPT.md`.
3. Leer `AGENTS.md`.
4. Leer `docs/AI_CONTEXT.md` si es la primera sesión o si hubo cambios recientes.
5. Leer documentos específicos según la tarea:
   - Escena: `docs/SCENE_MAP.md`.
   - MVP: `docs/MVP_SCOPE.md`.
   - Navegación: `docs/NAVIGATION_DESIGN.md`.
   - Contenido: `docs/COPY_DECK.md`.
   - Proyectos: `docs/PROJECT_DATA.md`.
   - QA: `docs/QA_CHECKLIST.md`.
   - Assets: `docs/ASSET_GUIDELINES.md`.

## Protocolo de cierre de sesión

Al terminar una tarea, el agente debe:

1. Actualizar `STATUS.md` con:
   - Qué hizo.
   - Qué quedó pendiente.
   - Próxima tarea recomendada.
   - Bloqueantes nuevos, si existen.
2. Marcar checkboxes completados en `docs/TASKS.md`.
3. Documentar decisiones importantes en `docs/DECISIONS.md`.
4. Registrar errores en `docs/ERROR_LOG.md` si los hubo.
5. Indicar qué agente debe continuar después.

## Regla de datos faltantes

Si un campo aparece como:

- `[PENDIENTE]`
- `Pendiente de completar`
- `Información no publicada`
- `EN ESPERA DE DATOS DEL PROPIETARIO`

Entonces:

- No inventar datos.
- No asumir datos.
- No completar con información genérica que parezca real.
- No convertir placeholders en afirmaciones profesionales.
- Documentar el bloqueo en `STATUS.md`.
- Continuar únicamente con tareas que no dependan de ese dato.

## Regla de no-invención profesional

Ningún agente puede inventar:

- Títulos académicos.
- Certificaciones.
- Logros medibles.
- Resultados de proyectos.
- Clientes.
- Normas específicas no confirmadas.
- Responsabilidades no confirmadas.
- Fechas no confirmadas.
- Software no confirmado.

## Jerarquía de documentos

En caso de conflicto entre documentos, usar esta jerarquía:

1. `STATUS.md` — estado vivo del proyecto.
2. `docs/AI_CONTEXT.md` — fuente de verdad del perfil profesional.
3. `docs/MVP_SCOPE.md` — fuente de verdad del alcance del MVP.
4. `docs/NAVIGATION_DESIGN.md` — fuente de verdad de navegación.
5. `docs/SCENE_MAP.md` — fuente de verdad de la escena 3D.
6. `docs/COPY_DECK.md` — fuente de verdad del copy visible.
7. `docs/PROJECT_DATA.md` — fuente de verdad de proyectos.
8. `docs/TASKS.md` — fuente de verdad de tareas.
9. `docs/DECISIONS.md` — fuente de verdad de decisiones.
10. `README.md` — presentación pública del proyecto, no fuente técnica.

## Regla de ramas

No trabajar directamente en `main`.

Ramas sugeridas:

- `docs/...` para documentación.
- `feature/...` para funcionalidades.
- `fix/...` para correcciones.
- `chore/...` para mantenimiento.

## Cuándo usar Claude

Usar Claude para:

- Revisión documental.
- UX writing.
- Copy profesional.
- Claridad de mensajes.
- Organización de contenido.
- Revisión de navegación desde el punto de vista del usuario.
- Mejora de paneles interactivos.

Claude no debe implementar código en esta fase inicial.

## Cuándo usar Gemini

Usar Gemini después de cerrar documentación con Claude.

Gemini debe revisar:

- Riesgos técnicos.
- Riesgos de performance.
- Arquitectura.
- Accesibilidad.
- Experiencia móvil.
- Tamaño de assets.
- Viabilidad del MVP.

Gemini debe auditar antes de entregar tareas a Codex.

## Cuándo usar Codex

Usar Codex solo cuando:

- `STATUS.md` indique que la Fase 0.5 está cerrada.
- Gemini haya auditado la documentación.
- No existan bloqueadores críticos para el setup técnico.

Codex debe recibir tareas pequeñas, claras y verificables.

## Regla final

Primero claridad. Luego implementación. Luego estética. Luego complejidad.
