import type { SceneObjectEntry } from "@/types/content";

export const sceneObjects: SceneObjectEntry[] = [
  {
    id: "desk",
    title: "Escritorio CAD",
    eyebrow: "Zona 2",
    description:
      "Placeholder técnico de Fase 1 para representar el escritorio CAD, el modelado 3D y la documentación técnica.",
    bullets: [
      "Canvas de React Three Fiber",
      "Cámara básica",
      "Luz ambiental y direccional",
      "Piso y pared simples",
    ],
    note: "Sin modelos 3D reales todavía.",
    status: "placeholder",
  },
  {
    id: "future-zones",
    title: "Zonas futuras",
    eyebrow: "Fase posterior",
    description:
      "Espacio reservado para la línea de transmisión, fundaciones, simulación, normas y certificaciones.",
    bullets: ["Contenido en preparación", "Datos reales por confirmar", "Sin assets pesados"],
    note: "Solo referencia visual por ahora.",
    status: "placeholder",
  },
];
