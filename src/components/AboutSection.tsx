import interiorImg from "@/assets/restaurant-interior.jpg";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Leaf, Heart, Users } from "lucide-react";

const values = [
  { icon: Leaf, title: "100% Pure Veg", desc: "Every dish is prepared with the finest vegetarian ingredients" },
  { icon: Heart, title: "Made with Love", desc: "Traditional recipes passed down through generations" },
  { icon: Users, title: "Family Friendly", desc: "A warm, welcoming space for families and friends" },
];

export const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll animation="slide-in-left">
          <div className="relative">
            <img
              src={interiorImg}
              alt="Durva Pure Veg restaurant interior"
              className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 gradient-saffron rounded-2xl p-5 shadow-xl hidden sm:block">
              <p className="text-primary-foreground font-display text-3xl font-bold">15+</p>
              <p className="text-primary-foreground/80 text-sm">Years of Trust</p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-in-right">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Where Tradition Meets <span className="text-primary">Taste</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Durva Pure Veg is an all-day dining restaurant in the heart of Nashik, 
              serving authentic Maharashtrian, South Indian, Punjabi, and Chinese cuisine. 
              Located at Hotel Rajmahal on Sharanpur Road, we've been a trusted name for 
              pure vegetarian food, known for our signature Misal Pav and wholesome Thalis.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our kitchen is driven by a commitment to quality — using fresh, locally sourced 
              ingredients and time-honoured recipes that bring the authentic flavours of Maharashtra 
              to your plate.
            </p>

            <div className="grid gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 p-4 rounded-xl bg-card card-hover">
                  <div className="gradient-green p-2.5 rounded-lg shrink-0">
                    <v.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);
