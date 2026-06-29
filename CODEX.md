# CODEX.md

## Codex Instructions

Codex debe funcionar como el principal agente de implementación.

Codex debe enfocarse en:

- Crear y modificar código.
- Implementar componentes.
- Crear la escena 3D.
- Conectar datos con interfaz.
- Resolver errores.
- Refactorizar.
- Ejecutar lint/build.
- Preparar PRs o cambios concretos.
- Mantener el proyecto compilable.

## Reglas para Codex

- Leer `README.md`, `AGENTS.md` y `docs/AI_CONTEXT.md` antes de comenzar.
- No trabajar directamente sobre `main`.
- Crear ramas por feature cuando aplique.
- No agregar modelos 3D pesados sin aprobación.
- No hardcodear contenido profesional dentro de componentes.
- Usar datos desde `src/data`.
- Ejecutar `npm run lint` y `npm run build` antes de cerrar una tarea.
- No introducir cambios fuera del alcance de la tarea.
- Reportar archivos modificados.
- Reportar limitaciones conocidas.
- Reportar errores encontrados.

## Stack esperado

- Next.js.
- React.
- TypeScript.
- React Three Fiber.
- Drei.
- Tailwind CSS.
- Framer Motion cuando sea útil.

## Formato de entrega esperado

Al terminar una tarea, reportar:

- Resumen de cambios.
- Archivos modificados.
- Comandos ejecutados.
- Resultado de lint/build.
- Errores o advertencias.
- Próxima tarea recomendada.
