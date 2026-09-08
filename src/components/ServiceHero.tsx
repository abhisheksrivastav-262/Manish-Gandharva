import { MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  primaryLabel: string;
  whatsappMessage: string;
  Icon?: LucideIcon;
}

const phone = "9829289538";

export function ServiceHero({
  eyebrow,
  headline,
  subheadline,
  primaryLabel,
  whatsappMessage,
  Icon,
}: ServiceHeroProps) {
  const waUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`;

  return (
    <section className="page-hero section-ink" aria-labelledby="page-hero-heading">
      <div className="container page-hero-inner">
        <div className="page-hero-copy" data-reveal>
          <p className="section-kicker light-kicker">
            {Icon && <Icon />}
            {eyebrow}
          </p>
          <h1 id="page-hero-heading">{headline}</h1>
          {subheadline && <p className="page-hero-sub">{subheadline}</p>}
          <div className="hero-actions">
            <Button asChild size="lg" className="gold-button">
              <a href={waUrl} target="_blank" rel="noreferrer">
                {primaryLabel} &rarr;
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="light-outline">
              <a href={`tel:${phone}`}>
                <Phone /> Call {phone}
              </a>
            </Button>
          </div>
          <a className="whatsapp-link" href={waUrl} target="_blank" rel="noreferrer">
            <MessageCircle /> Chat on WhatsApp
          </a>
        </div>
        {Icon && (
          <div className="page-hero-icon-wrap" aria-hidden="true" data-reveal>
            <div className="page-hero-icon-ring">
              <Icon />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
