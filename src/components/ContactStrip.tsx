import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function ContactStrip() {
  return (
    <div className="hidden md:block border-b border-border/40 bg-onyx/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>{SITE.address}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-1.5 transition hover:text-primary">
            <Phone className="h-3.5 w-3.5 text-primary" />
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 transition hover:text-primary">
            <Mail className="h-3.5 w-3.5 text-primary" />
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
