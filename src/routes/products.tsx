import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import productOriginal from "@/assets/product-original.jpeg";
import productSpinach from "@/assets/product-spinach.jpeg";
import productBeetroot from "@/assets/product-beetroot.jpeg";
import productTurmeric from "@/assets/product-turmeric.jpeg";

const FLAVORS = [
  {
    img: productOriginal,
    name: "Classic Oats & Honey",
    tag: "Bestseller",
    desc: "Mildly sweet, neutral profile that pairs with anything from desserts to curries.",
  },
  {
    img: productSpinach,
    name: "Spinach (Palak)",
    tag: "Savory",
    desc: "A green blend of goodness — earthy and rich in nutrients.",
  },
  {
    img: productBeetroot,
    name: "Beetroot Blush",
    tag: "Vibrant",
    desc: "Naturally pink, packed with antioxidants and an earthy bite.",
  },
  {
    img: productTurmeric,
    name: "Ginger & Turmeric",
    tag: "Immunity",
    desc: "A golden lick of goodness — warm, anti-inflammatory and bold.",
  },
  {
    img: productOriginal,
    name: "Ragi (Finger Millet)",
    tag: "Wholesome",
    desc: "Calcium-rich, crunchy and deeply nutritious.",
  },
  {
    img: productOriginal,
    name: "Bajra (Pearl Millet)",
    tag: "Hearty",
    desc: "Robust, nutty flavor — perfect for warm meals.",
  },
  {
    img: productOriginal,
    name: "Coconut & Jaggery",
    tag: "Sweet",
    desc: "Tropical, mildly sweet and dessert-ready.",
  },
  {
    img: productOriginal,
    name: "Cardamom (Elaichi)",
    tag: "Aromatic",
    desc: "Fragrant, festive and a delight in tea or kheer.",
  },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Just Bite Edible Cutlery" },
      {
        name: "description",
        content:
          "10+ flavors of edible spoons made from millets, wheat & rice — biodegradable, chemical-free, durable.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title={
          <>
            10+ flavors. <em className="not-italic text-gradient-gold">One mission.</em>
          </>
        }
        sub="Strong for 15–20 minutes in hot or cold food. Then — eat it, or compost it."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLAVORS.map((f) => (
              <article
                key={f.name}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/60 transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-onyx">
                    {f.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-gradient-gold">{f.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
