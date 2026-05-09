import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/logo.jpeg";
import { ContactStrip } from "./ContactStrip";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <ContactStrip />
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Just Bite" className="h-11 w-11 rounded-full object-cover ring-1 ring-primary/40 transition group-hover:ring-primary" />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wider text-gradient-gold">JUST BITE</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Zero Waste · Good Taste</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-2 text-sm text-foreground/80 transition hover:text-primary relative"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-onyx shadow-gold transition hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/40 bg-background/95">
            <nav className="flex flex-col p-4 gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-md hover:bg-muted hover:text-primary"
                  activeProps={{ className: "text-primary bg-muted" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <a href={`tel:${SITE.phoneHref}`} className="mt-2 rounded-full bg-gradient-gold px-4 py-2.5 text-center text-sm font-semibold text-onyx">
                Call {SITE.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
