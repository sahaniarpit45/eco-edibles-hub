import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { Leaf, Target, Lightbulb, HeartHandshake } from "lucide-react";
import productOriginal from "@/assets/product-original.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Just Bite" },
      { name: "description", content: "The story behind Just Bite — a sustainable Indian startup replacing plastic cutlery with edible spoons." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title={<>Born from a <em className="not-italic text-gradient-gold">simple question</em></>} sub="What if the last thing you throw away could be the first thing you enjoy?" />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
            <img src={productOriginal} alt="Just Bite product" className="relative rounded-2xl gold-border w-full" />
          </div>
          <div>
            <SectionHeader center={false} eyebrow="The Mission" title={<>Replace plastic, <em className="not-italic text-gradient-gold">one bite at a time</em></>} />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              India produces 3.5 million tonnes of plastic waste each year — nearly 40% of which is single-use. A plastic spoon used for 10 minutes can pollute the planet for 500 years. Just Bite was founded to break that cycle.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We craft cutlery from millets, wheat, rice, jaggery and natural flavors — strong enough for hot and cold food, and delicious enough to eat afterwards. No plastic. No waste. Just goodness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-onyx/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What we stand for" title={<>Our <em className="not-italic text-gradient-gold">core values</em></>} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, t: "Sustainability", d: "Every choice we make protects the planet." },
              { icon: Lightbulb, t: "Innovation", d: "Reinventing everyday objects with purpose." },
              { icon: Target, t: "Impact", d: "Measurable reduction in single-use plastic." },
              { icon: HeartHandshake, t: "Community", d: "Built with farmers, partners and customers." },
            ].map((v) => (
              <div key={v.t} className="glass rounded-2xl p-7">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-gold text-onyx"><v.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
