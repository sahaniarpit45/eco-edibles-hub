import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary/60" />{eyebrow}<span className="h-px w-8 bg-primary/60" />
        </div>
      )}
      <h2 className="mt-4 font-display text-4xl md:text-5xl text-gradient-gold">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary/60" />{eyebrow}<span className="h-px w-8 bg-primary/60" />
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient-gold">{title}</h1>
        {sub && <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">{sub}</p>}
      </div>
    </section>
  );
}
