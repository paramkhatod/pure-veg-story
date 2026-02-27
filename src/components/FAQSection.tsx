import { AnimateOnScroll } from "./AnimateOnScroll";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Is Durva Pure Veg completely vegetarian?", a: "Yes! We are 100% pure vegetarian. No non-veg items are prepared or served in our kitchen. We also offer Jain-friendly options upon request." },
  { q: "Do you offer unlimited thali?", a: "Absolutely! Our unlimited thali is our signature offering. Available in Maharashtrian, Punjabi, and South Indian styles with unlimited refills of all items." },
  { q: "Can I order online?", a: "Yes, you can order through Swiggy and Zomato for home delivery. You can also call us directly for takeaway orders." },
  { q: "Is reservation required?", a: "While walk-ins are welcome, we recommend reservations during weekends and festivals to ensure availability. You can book via WhatsApp or phone." },
  { q: "Do you have a private dining area?", a: "Yes, we have a private dining room available for small gatherings, birthday celebrations, and family functions. Contact us to reserve." },
  { q: "What are your payment options?", a: "We accept cash, all major credit/debit cards, UPI (GPay, PhonePe, Paytm), and other digital payment methods." },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
