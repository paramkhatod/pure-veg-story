import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Durva%20Pure%20Veg."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" fill="currentColor" />
  </a>
);
