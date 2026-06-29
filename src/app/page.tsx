"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { InfoPanel } from "@/components/panels/InfoPanel";
import { SceneCanvas } from "@/components/scene/SceneCanvas";
import { Button, LinkButton } from "@/components/ui/Button";
import { contactEntries } from "@/data/contact";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { sceneObjects } from "@/data/sceneObjects";
import { skillGroups } from "@/data/skills";
import { getSceneObjectById } from "@/lib/content";

const initialSceneObject = getSceneObjectById("desk");

export default function HomePage() {
  const [activeObjectId, setActiveObjectId] = useState(initialSceneObject.id);
  const activeObject = getSceneObjectById(activeObjectId);

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent">
              Fase 1 · Setup técnico
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/55">
                {profile.projectName}
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {profile.titleLineOne}
              </h2>
              <p className="max-w-3xl text-2xl font-medium text-accentSoft">
                {profile.titleLineTwo}
              </p>
              <p className="max-w-2xl text-base leading-7 text-white/74">{profile.summary}</p>
              <p className="max-w-2xl text-sm leading-6 text-white/58">{profile.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="button" aria-label="Descargar CV pendiente" disabled>
                Descargar CV (pendiente)
              </Button>
              <LinkButton href="#contact" variant="secondary">
                Ir a contacto
              </LinkButton>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{group.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <SceneCanvas activeObjectId={activeObjectId} onSelectObject={setActiveObjectId} />
            <InfoPanel activeObject={activeObject} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[28px] border border-white/10 bg-panel/70 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">Datos base</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Información organizada para Fase 1
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Datos desde `src/data`
              </span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-black/15 p-4">
                <p className="text-sm font-medium text-white">Proyectos confirmados</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <strong className="text-white">{project.name}</strong>
                      <span className="text-white/55"> · {project.type}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-3xl border border-white/10 bg-black/15 p-4" id="contact">
                <p className="text-sm font-medium text-white">Contacto pendiente</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {contactEntries.map((entry) => (
                    <li key={entry.id} className="flex items-center justify-between gap-4">
                      <span>{entry.label}</span>
                      <span className="text-white/50">{entry.value}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80">Escena base</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Placeholder 3D funcional</h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              La escena usa una cámara básica, luces simples, piso, pared y objetos interactivos
              mínimos para validar la base técnica sin cargar modelos reales.
            </p>
            <div className="mt-5 grid gap-3">
              {sceneObjects.map((object) => (
                <button
                  key={object.id}
                  type="button"
                  onClick={() => setActiveObjectId(object.id)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    object.id === activeObjectId
                      ? "border-accent/60 bg-accent/10 text-white"
                      : "border-white/10 bg-black/15 text-white/75 hover:border-white/20 hover:bg-white/8"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-[0.28em] text-accent/70">
                    {object.eyebrow}
                  </span>
                  <span className="mt-1 block font-medium text-white">{object.title}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
