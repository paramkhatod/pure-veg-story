import { AnimateOnScroll } from "./AnimateOnScroll";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", guests: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'd like to reserve a table.\nName: ${formData.name}\nPhone: ${formData.phone}\nGuests: ${formData.guests}\nDate: ${formData.date}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Reserve Your <span className="text-primary">Table</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimateOnScroll animation="slide-in-left">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display font-bold text-foreground text-lg mb-4">Visit Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Hotel Rajmahal, Sharanpur Rd, opp. Old CBS,<br />
                      Police Staff Colony, Nashik, Maharashtra 422002
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">Open Daily: 8:00 AM – 10:00 PM</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">+91 99999 99999</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">info@durvapureveg.com</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe
                  title="Durva Pure Veg Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.7898!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzUxLjAiTiA3M8KwNDcnMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-in-right">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border border-border space-y-5">
              <h3 className="font-display font-bold text-foreground text-lg">Book a Table</h3>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Guests</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Special Requests</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Any dietary requirements or special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-saffron text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                <Send className="w-4 h-4" />
                Reserve via WhatsApp
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
