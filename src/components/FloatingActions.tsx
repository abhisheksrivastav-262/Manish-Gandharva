import { MessageCircle, Phone } from "lucide-react";

const phone = "9829289538";
const whatsappUrl = `https://wa.me/91${phone}?text=Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+planning+requirements.`;

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with Manish Gandharva"
      >
        <MessageCircle />
      </a>
      <a
        className="floating-call"
        href={`tel:${phone}`}
        aria-label="Call Manish Gandharva"
      >
        <Phone />
      </a>
    </div>
  );
}
