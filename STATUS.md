# Estado del proyecto — Luis Abel 3D Portfolio

## Última actualización

Agente: ChatGPT  
Fecha: 2026-06-28  
Sesión: Incorporación del sistema de estado vivo y protocolo multi-IA sugerido por Claude.

## Estado actual por fase

| Fase | Estado | Responsable | Bloqueado por |
|---|---|---|---|
| Fase 0 — Documentación base | ✅ Completo | Luis Abel | — |
| Fase 0.5 — Cierre de especificación | ⏳ En progreso | Luis Abel + Claude + ChatGPT | Pendiente cerrar datos clave |
| Fase 0.6 — Auditoría técnica documental | ⬜ No iniciado | Gemini | Espera cierre de Fase 0.5 |
| Fase 1 — Setup técnico | ⬜ No iniciado | Codex | Espera aprobación de Gemini |
| Fase 2 — MVP interactivo | ⬜ No iniciado | Codex | Fase 1 |
| Fase 3 — Assets 3D | ⬜ No iniciado | Luis Abel + Gemini + Codex | MVP base |
| Fase 4 — Optimización | ⬜ No iniciado | Gemini + Codex | Assets iniciales |
| Fase 5 — Publicación | ⬜ No iniciado | Codex | Build estable |

## Decisiones tomadas

- Stack técnico propuesto: Next.js + React + TypeScript + React Three Fiber + Drei + Tailwind CSS.
- Nombre conceptual inicial: Luis Abel Design Lab.
- Concepto principal: CV/portafolio interactivo 3D en forma de oficina técnica, taller CAD y laboratorio de ingeniería.
- Navegación inicial recomendada: guiada por clics, no tipo videojuego.
- Enfoque visual: profesional, técnico, moderno, claro y no excesivamente lúdico.
- El contenido visible debe estar en español.
- Los nombres de componentes, funciones, variables y archivos de código deben estar en inglés.
- Los datos profesionales deben vivir en `src/data`.
- No se debe afirmar que Luis Abel es graduado en Ingeniería Mecatrónica.
- Forma correcta de presentar la formación: “formación universitaria avanzada en Ingeniería Mecatrónica”.

## Decisiones pendientes

- [ ] Título profesional oficial del sitio.
- [ ] Confirmar si el nombre público será “Luis Abel Design Lab” u otra variante.
- [ ] Confirmar si el sitio será solo español en MVP o preparado para bilingüe futuro.
- [ ] Confirmar navegación exacta del MVP: cámara fija, OrbitControls limitado o tour guiado básico.
- [ ] Confirmar si el MVP incluirá únicamente zonas 1, 2, 6 y 10.

## Bloqueantes activos

- [ ] Título profesional elegido para el sitio.
- [ ] Datos completos de Presa Montegrande.
- [ ] Datos completos de Presa Yacahueque.
- [ ] Datos completos de Parque Fotovoltaico Bayasol.
- [ ] Email público.
- [ ] Teléfono público o WhatsApp.
- [ ] LinkedIn URL.
- [ ] CV en PDF final disponible para descarga.
- [ ] Foto profesional final.
- [ ] Confirmar restricciones de confidencialidad por proyecto.

## Próxima tarea recomendada

Agente sugerido: Claude.

Tarea:

Continuar la Fase 0.5 y ayudar a cerrar los documentos de especificación antes de pasar a Gemini.

Prioridad inmediata:

1. Confirmar título profesional oficial.
2. Crear o revisar `MVP_SCOPE.md`.
3. Crear o revisar `NAVIGATION_DESIGN.md`.
4. Crear o revisar `COPY_DECK.md`.
5. Crear o revisar `PROJECT_DATA.md`.
6. Marcar claramente los datos pendientes para que ninguna IA los invente.

## Notas para la próxima sesión

Este proyecto se trabajará progresivamente por fases. No usar Gemini ni Codex todavía.

Claude debe continuar como revisor de documentación, UX y contenido profesional.

Gemini entrará después para auditar si la documentación está lista para implementación.

Codex solo debe recibir tareas de programación cuando Gemini confirme que no hay bloqueadores críticos.

El objetivo inmediato no es programar, sino evitar que los agentes implementen con información incompleta o contradictoria.
