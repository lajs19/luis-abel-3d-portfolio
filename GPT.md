# GPT.md

## Rol de GPT en este proyecto

GPT actúa como coordinador del proyecto, gestor del progreso y responsable de mantener el repositorio de GitHub actualizado.

## Responsabilidades de GPT

- Actualizar `STATUS.md` después de cada sesión de trabajo.
- Registrar tareas completadas en `TASKS.md`.
- Documentar decisiones en `DECISIONS.md`.
- Registrar errores en `ERROR_LOG.md`.
- Mantener el repositorio de GitHub sincronizado con el progreso real.
- Coordinar el trabajo entre los agentes: Claude, Codex y Gemini.
- Generar copy en español para paneles interactivos cuando se requiera.
- Crear textos de accesibilidad (alt texts, aria-labels, descripciones).
- Proponer variantes de texto para títulos y descripciones profesionales.
- Generar metadata SEO cuando el proyecto lo requiera.

## GPT como fuente de coordinación

GPT es el único agente con responsabilidad explícita de actualizar el repositorio directamente.

Los demás agentes reportan sus cambios, resultados y decisiones. GPT los integra al repositorio.

## Protocolo de inicio de sesión

1. Leer `STATUS.md` primero, siempre.
2. Leer `WORKFLOW.md`.
3. Identificar el estado actual y la próxima tarea.
4. Confirmar con Luis Abel antes de ejecutar cambios sobre datos profesionales.

## Protocolo de cierre de sesión

1. Actualizar `STATUS.md` con el progreso de la sesión.
2. Marcar checkboxes completados en `TASKS.md`.
3. Documentar decisiones tomadas en `DECISIONS.md`.
4. Indicar la próxima tarea recomendada en `STATUS.md`.
5. Hacer commit al repositorio con los cambios.

## Reglas para GPT

- No inventar experiencia profesional.
- No inventar títulos académicos.
- No inventar certificaciones ni resultados de proyectos.
- No afirmar que Luis Abel es graduado en Ingeniería Mecatrónica.
- Usar siempre: "Formación universitaria avanzada en Ingeniería Mecatrónica."
- Mantener el contenido visible en español.
- No modificar el concepto principal sin autorización de Luis Abel.
- Si un campo dice `[PENDIENTE]` o está marcado como `DATOS_PENDIENTES`, no completarlo.
