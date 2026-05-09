import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { Utensils, Cookie, Sprout } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Just Bite" },
      { name: "description", content: "Use it. Eat it. Or compost it. Three simple steps to a zero-waste meal." },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  const steps = [
    { icon: Utensils, t: "Use it", d: "Stir, scoop or sip — durable for 15–20 minutes in hot or cold food." },
    { icon: Cookie, t: "Eat it", d: "When the meal is done, enjoy a wholesome, crunchy bite of millets." },
    { icon: Sprout, t: "Or compost it", d: "Toss it in organic waste — fully biodegradable in days, not centuries." },
  ];
  return (
    <>
      <PageHero eyebrow="The Ritual" title={<>Three steps to <em className="not-italic text-gradient-gold">zero waste</em></>} />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="mx-auto grid place-items-center h-24 w-24 rounded-full bg-gradient-gold text-onyx shadow-gold">
                <s.icon className="h-10 w-10" />
              </div>
              <div className="mt-4 font-display text-sm uppercase tracking-[0.3em] text-primary">Step 0{i + 1}</div>
              <h3 className="mt-2 font-display text-3xl">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
