import { Instagram, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 section-padding py-12">
    <div className="container-narrow">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
            Durva <span className="text-primary">Pure Veg</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Authentic Maharashtrian vegetarian restaurant in Nashik. Serving pure veg food with love since generations.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            {["Home", "About", "Menu", "Gallery", "Testimonials", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Connect</h4>
          <div className="flex items-center gap-3 mb-4">
            <a
              href="https://www.instagram.com/durva_pureveg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors"
            >
              <MapPin className="w-5 h-5" />
            </a>
            <a
              href="tel:+919999999999"
              className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm">
            Hotel Rajmahal, Sharanpur Rd,<br />
            Nashik, Maharashtra 422002
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Durva Pure Veg. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
