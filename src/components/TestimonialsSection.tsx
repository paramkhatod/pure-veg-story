import { AnimateOnScroll } from "./AnimateOnScroll";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Raushan Pathak",
    rating: 5,
    text: "It's a small place with very good staff behaviour and quality food. The Misal Pav is absolutely authentic!",
  },
  {
    name: "Sunil Tagwale",
    rating: 4,
    text: "I love the food quality. The thali is wholesome and worth every rupee. Must visit when in Nashik.",
  },
  {
    name: "Shubham Athalye",
    rating: 5,
    text: "Their staff is very friendly and they offer thali as well which is a must try. Best pure veg in Nashik!",
  },
  {
    name: "Priya Deshmukh",
    rating: 5,
    text: "Authentic Maharashtrian flavours that remind me of home-cooked food. The Pithla Bhakri is outstanding!",
  },
  {
    name: "Amit Kulkarni",
    rating: 4,
    text: "Great place for family dining. The unlimited thali has amazing variety and everything tastes fresh.",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Our Guests <span className="text-primary">Say</span>
          </h2>
        </AnimateOnScroll>

        {/* Counter stats */}
        <AnimateOnScroll className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { num: "4.6", label: "Google Rating" },
            { num: "31+", label: "Reviews" },
            { num: "15+", label: "Years Serving" },
            { num: "1000+", label: "Happy Guests Daily" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.num}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </AnimateOnScroll>

        {/* Slider */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-lg text-center min-h-[250px] flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground text-lg md:text-xl italic leading-relaxed mb-6 font-body">
              "{reviews[current].text}"
            </p>
            <p className="font-display font-semibold text-foreground">{reviews[current].name}</p>
            <p className="text-sm text-muted-foreground">Verified Guest</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
