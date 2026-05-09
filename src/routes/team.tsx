import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import team from "@/assets/team.jpeg";
import mentors from "@/assets/mentors.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Just Bite" },
      { name: "description", content: "Meet the founders, managers and mentors behind Just Bite." },
    ],
  }),
  component: Team,
});

const ROLES = [
  { name: "M Nishikanta", role: "Founder", bio: "Visionary behind Just Bite, on a mission to make India plastic-free." },
  { name: "Sikan Sahoo", role: "Marketing Manager", bio: "Builds the brand story across cafés, events and digital channels." },
  { name: "Aliva Nayak", role: "Production Manager", bio: "Owns quality, recipes and scaling our edible cutlery line." },
  { name: "Shabrine Fatima", role: "Social Media Manager", bio: "Creates content that turns curiosity into commitment." },
  { name: "Arpit Sahani", role: "Business Developer", bio: "Forges partnerships with restaurants, B2B clients and event organizers." },
];

function Team() {
  return (
    <>
      <PageHero eyebrow="Our Stalwarts" title={<>The hands behind the <em className="not-italic text-gradient-gold">vision</em></>} sub="A young, founder-led team united by one mission — replace plastic with goodness." />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-[2rem]" />
            <img src={team} alt="Just Bite team" className="relative w-full rounded-[2rem] gold-border shadow-elegant" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Meet the team" title={<>People who <em className="not-italic text-gradient-gold">make it happen</em></>} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES.map((p) => (
              <div key={p.name} className="glass rounded-2xl p-7 hover:border-primary/60 transition">
                <div className="grid place-items-center h-16 w-16 rounded-full bg-gradient-gold text-onyx font-display text-2xl">
                  {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="mt-5 font-display text-2xl text-gradient-gold">{p.name}</h3>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mt-1">{p.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-onyx/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Team Support" title={<>The hands behind <em className="not-italic text-gradient-gold">our dreams</em></>} sub="Mentors and partners who guide and champion Just Bite on every step of our journey." />
          <div className="mt-12 relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-15 blur-3xl rounded-[2rem]" />
            <img src={mentors} alt="Mentors of Just Bite" className="relative w-full rounded-[2rem] gold-border shadow-elegant" />
          </div>
        </div>
      </section>
    </>
  );
}
