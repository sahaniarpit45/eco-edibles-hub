import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Just Bite" },
      {
        name: "description",
        content: `Get in touch with Just Bite. Email ${SITE.email} or call ${SITE.phone}.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Open user's email client with prefilled inquiry as a reliable fallback until backend is enabled.
    const body = `Name: ${form.name}%0D%0APhone: ${form.phone}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(form.subject || "Inquiry from Just Bite website")}&body=${body}`;
    setTimeout(() => {
      toast.success("Thanks! Your message is ready in your email app.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's <em className="not-italic text-gradient-gold">talk</em>
          </>
        }
        sub="Whether you're a café, an event organizer or just curious — we'd love to hear from you."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, t: "Call us", v: SITE.phone, href: `tel:${SITE.phoneHref}` },
            { icon: Mail, t: "Email us", v: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, t: "Find us", v: SITE.address, href: "#" },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="glass rounded-2xl p-7 group hover:border-primary/60 transition block"
            >
              <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-gold text-onyx group-hover:scale-110 transition">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-widest text-primary">{c.t}</div>
              <div className="mt-2 font-display text-xl break-words">{c.v}</div>
            </a>
          ))}
        </div>

        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="glass rounded-2xl p-8">
            <h2 className="font-display text-3xl text-gradient-gold flex items-center gap-2">
              <MessageCircle className="h-6 w-6" /> Send us a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We respond within one business day.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email"
                  className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone (optional)"
                  className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help?"
                rows={6}
                className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <button
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold py-3.5 text-sm font-semibold text-onyx shadow-gold hover:scale-[1.02] transition disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl text-gradient-gold">Quick contact</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Prefer a faster reply? Call us directly or drop a WhatsApp.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="flex items-center gap-3 rounded-xl gold-border p-4 hover:bg-primary/10 transition"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="font-medium">{SITE.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-xl gold-border p-4 hover:bg-primary/10 transition"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="font-medium break-all">{SITE.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl text-gradient-gold">Business hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon — Fri</span>
                  <span className="text-foreground">9:00 — 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-foreground">10:00 — 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
