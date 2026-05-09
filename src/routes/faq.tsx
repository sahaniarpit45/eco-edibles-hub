import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Just Bite" },
      { name: "description", content: "Frequently asked questions about Just Bite edible cutlery." },
    ],
  }),
  component: FAQ,
});

const FAQS = [
  { q: "Is Just Bite cutlery really edible?", a: "Yes. Made from millets, jaggery and natural flavors — fully edible and tasty." },
  { q: "How long does it last in food?", a: "Stays sturdy for 15–20 minutes in hot or cold food, depending on the dish." },
  { q: "What if I don't want to eat it?", a: "Toss it in organic waste — it's fully biodegradable and composts in days." },
  { q: "Do you offer bulk pricing?", a: "Yes. B2B bulk pricing starts at ₹3 / unit. Retail is ₹4–5 / unit. Contact us for events." },
  { q: "How do I store the spoons?", a: "In a cool, dry place — sealed in their original packaging. Shelf life 6+ months." },
  { q: "Are there allergens?", a: "Spoons contain millets, wheat and natural flavors. Contact us for ingredient details." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title={<>Questions, <em className="not-italic text-gradient-gold">answered</em></>} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="glass rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-display text-lg">{f.q}</span>
                {open === i ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}
              </button>
              {open === i && <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
