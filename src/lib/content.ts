import { sceneObjects } from "@/data/sceneObjects";

export function getSceneObjectById(id: string) {
  return sceneObjects.find((entry) => entry.id === id) ?? sceneObjects[0];
}
