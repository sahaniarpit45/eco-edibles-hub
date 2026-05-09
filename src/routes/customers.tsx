import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Happy Customers — Just Bite" },
      { name: "description", content: "Watch real customer reactions to Just Bite edible cutlery — premium video testimonials." },
    ],
  }),
  component: Customers,
});

const TESTIMONIALS = [
  { name: "Aditi R.", role: "Café Owner, Bhubaneswar", q: "Our customers love the novelty — and we love being plastic-free.", r: 5 },
  { name: "Rahul M.", role: "Event Manager", q: "We served 800 guests with Just Bite spoons. Zero plastic. Zero complaints.", r: 5 },
  { name: "Sneha P.", role: "Conscious Consumer", q: "Tasty, sturdy, and guilt-free. I order them for every dinner party.", r: 5 },
];

function Customers() {
  return (
    <>
      <PageHero eyebrow="Happy Customers" title={<>Real bites. <em className="not-italic text-gradient-gold">Real love.</em></>} sub="Watch what our customers and partners are saying about Just Bite." />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-25 blur-3xl rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-[2rem] gold-border shadow-elegant bg-onyx">
              <div className="aspect-video">
                <video
                  src="/videos/customer.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/40">
                <div>
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
                  </div>
                  <p className="mt-2 font-display text-xl text-gradient-gold">"A delicious revolution on every spoon."</p>
                  <p className="text-sm text-muted-foreground mt-1">— Featured Customer Reaction</p>
                </div>
                <div className="rounded-full bg-gradient-gold text-onyx px-5 py-2 text-xs uppercase tracking-widest font-semibold">
                  Customer Story · 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-onyx/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Testimonials" title={<>What people are <em className="not-italic text-gradient-gold">saying</em></>} />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-7 hover:border-primary/60 transition">
                <Quote className="h-8 w-8 text-primary opacity-60" />
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.q}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg text-gradient-gold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: t.r }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
