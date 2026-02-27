import heroImg from "@/assets/hero-thali.jpg";
import { MapPin, Star, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Traditional Maharashtrian Thali" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-deep-green animate-pulse" />
          <span className="text-primary-foreground/90 text-sm font-medium">शुद्ध शाकाहारी • Pure Vegetarian</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
          Taste the Soul of
          <span className="block text-gradient-saffron">Maharashtra</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
          Authentic Maharashtrian, South Indian, Punjabi & Chinese cuisine.
          Famous for our Misal Pav & Unlimited Thali — since generations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "450ms" }}>
          <a
            href="#menu"
            className="gradient-saffron text-primary-foreground px-8 py-3.5 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Explore Our Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Reserve a Table
          </a>
        </div>

        {/* Quick info badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm animate-fade-up" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span>4.6 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Sharanpur Road, Nashik</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Open till 10 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
