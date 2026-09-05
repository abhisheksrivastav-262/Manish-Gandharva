import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsultationCTAProps {
  eyebrow?: string;
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
}

const phone = "9829289538";

export function ConsultationCTA({
  eyebrow = "Your next chapter starts here",
  headline = "Your Financial Future Starts\nWith One Conversation.",
  body = "Let's understand your goals and explore suitable financial solutions for your future.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  whatsappMessage = "Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+planning+requirements.",
}: ConsultationCTAProps) {
  const waUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`;

  return (
    <section className="final-cta" aria-label="Book a consultation">
      <div className="container final-cta-inner" data-reveal>
        <div>
          <p className="section-kicker light-kicker">{eyebrow}</p>
          <h2>
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p>{body}</p>
        </div>
        <div className="final-actions">
          <Button asChild className="gold-button">
            <a href={primaryHref}>
              {primaryLabel} <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outline" className="light-outline">
            <a href={`tel:${phone}`}>
              <Phone /> Call Now
            </a>
          </Button>
          <Button asChild variant="outline" className="light-outline">
            <a href={waUrl} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
