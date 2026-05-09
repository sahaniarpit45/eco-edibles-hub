import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/Section";
import { Briefcase, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Just Bite" },
      { name: "description", content: "Join Just Bite. Open roles in production, marketing and business development." },
    ],
  }),
  component: Careers,
});

const ROLES = [
  { title: "Production Associate", loc: "Bhubaneswar", type: "Full-time", dept: "Operations" },
  { title: "B2B Sales Executive", loc: "Remote / India", type: "Full-time", dept: "Business" },
  { title: "Content & Social Media Intern", loc: "Remote", type: "Internship", dept: "Marketing" },
  { title: "Food Technologist", loc: "Bhubaneswar", type: "Full-time", dept: "R&D" },
];

function Careers() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received — we'll be in touch!");
    setForm({ name: "", email: "", role: "", message: "" });
  };
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Build a <em className="not-italic text-gradient-gold">plastic-free world</em></>} sub="Bring your craft to a young, mission-led team. We're hiring across operations, marketing and R&D." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-gradient-gold">Open roles</h2>
            <div className="mt-8 space-y-4">
              {ROLES.map((r) => (
                <div key={r.title} className="glass rounded-2xl p-6 flex items-center justify-between gap-4 hover:border-primary/60 transition">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary">{r.dept}</div>
                    <h3 className="font-display text-xl mt-1">{r.title}</h3>
                    <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{r.loc}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{r.type}</span>
                    </div>
                  </div>
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="glass rounded-2xl p-8 space-y-4">
            <h3 className="font-display text-2xl text-gradient-gold">Apply now</h3>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Role you're applying for" className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about yourself" rows={5} className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <button className="w-full rounded-full bg-gradient-gold py-3 text-sm font-semibold text-onyx shadow-gold hover:scale-[1.02] transition">Submit application</button>
          </form>
        </div>
      </section>
    </>
  );
}
