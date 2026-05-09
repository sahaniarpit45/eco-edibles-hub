import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles, ShieldCheck, Recycle, Star, Phone, Mail } from "lucide-react";
import { SectionHeader } from "@/components/Section";
import { SITE } from "@/lib/site";
import productOriginal from "@/assets/product-original.jpeg";
import productSpinach from "@/assets/product-spinach.jpeg";
import productBeetroot from "@/assets/product-beetroot.jpeg";
import productTurmeric from "@/assets/product-turmeric.jpeg";
import team from "@/assets/team.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just Bite — Eat Your Cutlery, Save the Planet" },
      { name: "description", content: "Premium edible & biodegradable cutlery. Replace plastic with millet-based spoons that you can eat or compost." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Sustainable Innovation · India
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
              Eat Your Cutlery, <br />
              <span className="text-gradient-gold">Save the Planet.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Just Bite crafts 100% edible, biodegradable spoons & forks from millets, wheat and rice — replacing plastic with a delicious, zero-waste experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-onyx shadow-gold transition hover:scale-[1.03]">
                Order Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full gold-border px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition">
                Learn More
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              {[
                { k: "10+", v: "Flavors" },
                { k: "100%", v: "Edible" },
                { k: "0", v: "Plastic" },
                { k: "15-20m", v: "Durable" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gradient-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-gold opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] gold-border shadow-elegant">
              <img src={productOriginal} alt="Just Bite edible spoon with oats" className="w-full h-[560px] object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 max-w-[220px]">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">"A delightful, planet-friendly bite. Game-changer for our café."</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Why Just Bite" title={<>Crafted for a <em className="not-italic text-gradient-gold">cleaner tomorrow</em></>} sub="From kitchen to compost — every spoon is designed to disappear without a trace." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, t: "100% Edible", d: "Made of natural millets, jaggery & flavors. Eat it after your meal." },
              { icon: Recycle, t: "Zero Waste", d: "Composts in days, not centuries. No plastic, no microplastics." },
              { icon: ShieldCheck, t: "Chemical-Free", d: "No preservatives, no toxins. Just clean, wholesome ingredients." },
              { icon: Sparkles, t: "Premium Taste", d: "10+ regional flavors — ragi, oats, cardamom, ginger-turmeric." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 group hover:border-primary/60 transition"
              >
                <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-gold text-onyx">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-24 bg-onyx/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="The Collection" title={<>A flavor for <em className="not-italic text-gradient-gold">every palate</em></>} />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: productOriginal, name: "Classic Oats", note: "Subtle, neutral, all-purpose" },
              { img: productSpinach, name: "Spinach Savory", note: "A green blend of goodness" },
              { img: productBeetroot, name: "Beetroot Blush", note: "Earthy, vibrant & rich" },
              { img: productTurmeric, name: "Ginger · Turmeric", note: "A golden bite of immunity" },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl gold-border"
              >
                <img src={p.img} alt={p.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-2xl text-gradient-gold">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full gold-border px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/10">
              Explore All Flavors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] glass p-10 md:p-16">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
            <div className="grid md:grid-cols-3 gap-10 relative">
              {[
                { k: "3.5M T", v: "Plastic waste produced in India yearly" },
                { k: "100-500 yrs", v: "For a single plastic spoon to decompose" },
                { k: "0 mins", v: "For a Just Bite spoon — you eat it" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-5xl text-gradient-gold">{s.k}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="py-24 bg-onyx/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader center={false} eyebrow="The Stalwarts" title={<>Built by a passionate <em className="not-italic text-gradient-gold">young team</em></>} sub="A founder-led team blending product, marketing, production and storytelling — united by one mission: a plastic-free India." />
            <Link to="/team" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-onyx shadow-gold">
              Meet the Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <img src={team} alt="Just Bite team" className="relative rounded-2xl gold-border w-full" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-onyx-elevated via-background to-onyx-elevated p-10 md:p-16 gold-border text-center">
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">Ready to switch from plastic?</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Partner with Just Bite for your café, restaurant, event or institution. Bulk pricing & custom branding available.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-onyx shadow-gold">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full gold-border px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/10">
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
