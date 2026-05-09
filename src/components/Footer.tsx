import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-onyx/60">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Just Bite"
              className="h-12 w-12 rounded-full ring-1 ring-primary/40"
            />
            <div>
              <div className="font-display text-2xl text-gradient-gold tracking-wider">
                JUST BITE
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Zero Waste · Good Taste
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Edible & biodegradable cutlery crafted from millets, wheat & rice — replacing single-use
            plastic, one bite at a time.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-9 w-9 rounded-full glass text-primary hover:bg-gradient-gold hover:text-onyx transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV.slice(6).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary mt-0.5" />
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="shine-divider" />
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Just Bite. All rights reserved.</span>
        <span>Crafted with care for a plastic-free planet.</span>
      </div>
    </footer>
  );
}
