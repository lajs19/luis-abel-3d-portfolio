"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { SceneObjectEntry } from "@/types/content";

type InfoPanelProps = {
  activeObject: SceneObjectEntry;
  onClose?: () => void;
};

export function InfoPanel({ activeObject, onClose }: InfoPanelProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={activeObject.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.24 }}
        className="rounded-3xl border border-white/10 bg-panel/90 p-5 shadow-glow backdrop-blur-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{activeObject.eyebrow}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{activeObject.title}</h2>
          </div>
          {onClose ? (
            <Button variant="ghost" type="button" className="px-3 py-2 text-xs" onClick={onClose}>
              Cerrar
            </Button>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-6 text-white/72">{activeObject.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {activeObject.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-2xl border border-dashed border-accent/30 bg-white/4 px-4 py-3 text-sm text-white/70">
          {activeObject.note}
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
