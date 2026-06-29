# WORKFLOW.md — Protocolo de coordinación multi-IA

## Principio fundamental

Este repositorio es la única memoria compartida entre los agentes IA.

Ningún agente tiene acceso a las conversaciones de los otros. El repositorio ES la comunicación. Cada documento escrito es un mensaje a los demás agentes.

---

## Protocolo de inicio de sesión

Obligatorio para todos los agentes antes de comenzar cualquier trabajo.

1. Leer `STATUS.md` — siempre primero, sin excepción.
2. Leer el archivo de instrucciones propio: `CLAUDE.md`, `CODEX.md`, `GEMINI.md` o `GPT.md`.
3. Leer `AI_CONTEXT.md` si es la primera sesión o si hay actualizaciones recientes.
4. Confirmar con Luis Abel qué tarea ejecutar en esta sesión.
5. No iniciar trabajo hasta entender el estado actual del proyecto.

## Protocolo de cierre de sesión

Obligatorio para todos los agentes al terminar.

1. Reportar a GPT o a Luis Abel lo que se hizo, las decisiones tomadas y los errores encontrados.
2. GPT actualiza `STATUS.md` con el progreso.
3. GPT marca los checkboxes completados en `TASKS.md`.
4. GPT documenta las decisiones importantes en `DECISIONS.md`.
5. GPT registra los errores en `ERROR_LOG.md`.
6. GPT indica la próxima tarea recomendada en `STATUS.md`.
7. GPT hace commit al repositorio.

---

## Jerarquía de documentos

En caso de conflicto entre documentos, esta es la prioridad:

1. `STATUS.md` — estado actual del proyecto.
2. `AI_CONTEXT.md` — fuente de verdad del perfil profesional.
3. `SCENE_MAP.md` — fuente de verdad de la escena 3D.
4. `TASKS.md` — fuente de verdad de las tareas.
5. `README.md` — presentación pública, no es fuente técnica de decisiones.

---

## Regla crítica: datos pendientes

Si un campo en cualquier documento dice `[PENDIENTE]` o está marcado con el bloque `DATOS_PENDIENTES`:

- **Ningún agente debe inventar, asumir ni completar ese campo.**
- **Ningún agente debe usar ese campo como si tuviera valor real.**
- El agente debe documentar el bloqueo en `STATUS.md` bajo "Bloqueantes activos".
- El agente debe continuar con otras tareas que no dependan de ese dato.

---

## Roles por agente

| Agente | Rol principal | No hace |
|---|---|---|
| GPT | Coordinación, progreso, copy, actualización de GitHub | No implementa código |
| Claude | UX writing, contenido, docs, planificación de componentes | No implementa código |
| Codex | Implementación, código, build, lint, refactor | No toma decisiones de contenido sin especificación |
| Gemini | QA, auditoría técnica, performance, revisión 3D | No implementa, no genera copy |

---

## Flujo típico de una tarea

1. Luis Abel define la tarea en conversación con GPT.
2. GPT actualiza `STATUS.md` y `TASKS.md` con la tarea asignada.
3. El agente designado lee `STATUS.md` y su archivo de instrucciones.
4. El agente ejecuta la tarea.
5. El agente reporta resultados a GPT o a Luis Abel.
6. GPT actualiza el repositorio con el progreso.

---

## Regla de no solapamiento

- Codex no modifica documentación de contenido profesional.
- Claude no escribe código de implementación.
- Gemini no agrega funcionalidades ni genera copy.
- GPT coordina pero no toma decisiones de arquitectura técnica.
