import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Just Bite" },
      {
        name: "description",
        content: "Stories, science and sustainability from the Just Bite team.",
      },
    ],
  }),
  component: Blog,
});

const POSTS = [
  {
    t: "Why edible cutlery is the future of food service",
    c: "Sustainability",
    d: "How a humble spoon can rewrite India's plastic story.",
  },
  {
    t: "From millet to spoon: inside our kitchen",
    c: "Behind the scenes",
    d: "A peek into the recipes, mixers and hands that shape every bite.",
  },
  {
    t: "10 flavors, one mission",
    c: "Product",
    d: "Choosing the right Just Bite spoon for your café or event.",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Stories from the <em className="not-italic text-gradient-gold">Just Bite kitchen</em>
          </>
        }
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <article
              key={p.t}
              className="glass rounded-2xl p-7 hover:border-primary/60 transition group cursor-pointer"
            >
              <div className="text-xs uppercase tracking-widest text-primary">{p.c}</div>
              <h3 className="mt-3 font-display text-2xl text-gradient-gold">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary">
                Read story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
