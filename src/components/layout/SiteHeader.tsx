import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-ink/65 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Luis Abel Design Lab</p>
          <h1 className="mt-1 text-base font-semibold text-white">{profile.name}</h1>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-right text-xs text-white/70">
          <p className="font-medium text-white">{profile.titleLineOne}</p>
          <p>{profile.titleLineTwo}</p>
        </div>
      </div>
    </header>
  );
}
