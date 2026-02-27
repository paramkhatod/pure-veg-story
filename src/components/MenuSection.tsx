import misalImg from "@/assets/misal-pav.jpg";
import dosaImg from "@/assets/dosa.jpg";
import thaliImg from "@/assets/hero-thali.jpg";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Star } from "lucide-react";

const categories = [
  {
    name: "Maharashtrian Specials",
    items: [
      { name: "Misal Pav", price: "₹80", tag: "Bestseller", img: misalImg },
      { name: "Sabudana Khichdi", price: "₹70", tag: null, img: null },
      { name: "Thalipeeth", price: "₹60", tag: null, img: null },
      { name: "Pithla Bhakri", price: "₹90", tag: "Must Try", img: null },
    ],
  },
  {
    name: "Unlimited Thali",
    items: [
      { name: "Maharashtrian Thali", price: "₹180", tag: "Popular", img: thaliImg },
      { name: "Punjabi Thali", price: "₹200", tag: null, img: null },
      { name: "South Indian Thali", price: "₹180", tag: null, img: null },
      { name: "Special Festival Thali", price: "₹250", tag: "Weekend", img: null },
    ],
  },
  {
    name: "South Indian",
    items: [
      { name: "Masala Dosa", price: "₹90", tag: "Favourite", img: dosaImg },
      { name: "Idli Sambhar", price: "₹60", tag: null, img: null },
      { name: "Medu Vada", price: "₹70", tag: null, img: null },
      { name: "Uttapam", price: "₹80", tag: null, img: null },
    ],
  },
];

export const MenuSection = () => (
  <section id="menu" className="section-padding bg-card">
    <div className="container-narrow">
      <AnimateOnScroll className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Menu</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          A Feast for Every <span className="text-primary">Palate</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From fiery Nashik-style Misal to comforting Unlimited Thalis — every dish is crafted to perfection.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-10">
        {categories.map((cat, ci) => (
          <AnimateOnScroll key={cat.name} delay={ci * 150}>
            <h3 className="text-xl font-display font-bold text-foreground mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 gradient-saffron rounded" />
              {cat.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group bg-background rounded-xl overflow-hidden card-hover border border-border"
                >
                  {item.img && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="font-display font-bold text-primary text-lg">{item.price}</span>
                    </div>
                    {item.tag && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                        <Star className="w-3 h-3" fill="currentColor" />
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll className="text-center mt-10">
        <a
          href="https://www.swiggy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-saffron text-primary-foreground px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
        >
          Order Online
        </a>
      </AnimateOnScroll>
    </div>
  </section>
);
