import { CheckCircle2, MessageCircle, ShieldCheck, Sparkles, ClipboardList, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ServiceDetail } from "@/data/servicesData";
import { Button } from "@/components/ui/button";

interface ServiceBenefitsDetailProps {
  service: ServiceDetail;
  showTitle?: boolean;
  showCta?: boolean;
  className?: string;
}

export function ServiceBenefitsDetail({
  service,
  showTitle = true,
  showCta = true,
  className = "",
}: ServiceBenefitsDetailProps) {
  const Icon = service.icon;

  return (
    <div className={`service-benefit-card-container ${className}`}>
      {/* 01 — SERVICE INTRODUCTION */}
      {showTitle ? (
        <div className="service-detail-header">
          <div className="service-detail-icon">
            <Icon size={28} />
          </div>
          <div>
            <span className="service-detail-category">{service.category}</span>
            <h2 className="service-detail-title">{service.name}</h2>
            <p className="service-detail-tagline">{service.tagline}</p>
          </div>
        </div>
      ) : null}

      <div className="service-detail-section intro-section">
        <p className="step-label">01 — Service Introduction</p>
        <h3 className="detail-h">{service.name}</h3>
        <p className="detail-intro-text">{service.description}</p>
      </div>

      {/* 02 — WHY [SERVICE NAME]? */}
      <div className="service-detail-section why-important-section">
        <p className="step-label">02 — Why {service.name}?</p>
        <h3 className="section-subheading">
          <Sparkles className="inline-icon text-gold" size={20} />
          Why is it important?
        </h3>
        <p className="why-important-text">{service.whyImportant}</p>
      </div>

      {/* 03 — KEY BENEFITS */}
      <div className="service-detail-section benefits-section">
        <p className="step-label">03 — Key Benefits</p>
        <h3 className="section-subheading">
          <ShieldCheck className="inline-icon text-gold" size={20} />
          Complete Benefits of {service.name}
        </h3>
        <ul className="benefits-grid-list">
          {service.keyBenefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              <CheckCircle2 className="benefit-icon" size={18} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 04 — HOW IT HELPS YOU */}
      <div className="service-detail-section future-help-box">
        <p className="step-label step-label-light">04 — How It Helps You</p>
        <h3 className="section-subheading font-serif">
          <TrendingUp className="inline-icon" size={20} />
          How {service.name} Helps Your Future
        </h3>
        <div className="future-help-paras">
          {service.howItHelps.map((para, i) => (
            <p key={i} className="future-help-text">{para}</p>
          ))}
        </div>
      </div>

      {/* 05 — IMPORTANT THINGS TO CONSIDER */}
      <div className="service-detail-section considerations-section">
        <p className="step-label">05 — Important Things to Consider</p>
        <h3 className="section-subheading">
          <ClipboardList className="inline-icon text-gold" size={20} />
          Before You Decide
        </h3>
        <div className="considerations-grid">
          {service.considerations.map((c) => (
            <div key={c.title} className="consideration-card">
              <strong>{c.title}</strong>
              <span>{c.body}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 06 — BOOK FREE CONSULTATION → WHATSAPP */}
      {showCta ? (
        <div className="service-whatsapp-cta-box">
          <div className="cta-content">
            <p className="step-label step-label-light">06 — Book Free Consultation</p>
            <h3 className="cta-title">Ready to Plan Your Financial Future?</h3>
            <p className="cta-subtitle">Book a Free Consultation with Manish Gandharva</p>
            <Link to="/services" className="cta-back-link">
              ← Explore all services
            </Link>
          </div>
          <Button asChild size="lg" className="gold-button whatsapp-direct-btn">
            <a href={service.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2" size={20} />
              Book Free Consultation &rarr;
            </a>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
