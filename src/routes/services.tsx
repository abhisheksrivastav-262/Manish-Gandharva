import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  PencilLine,
  Lock,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import servicesHero from "@/assets/services-hero.jpg";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Financial Services | Manish Gandharva – Financial Advisor Udaipur" },
      {
        name: "description",
        content:
          "Explore comprehensive financial solutions including health insurance, term plans, child education planning, retirement, loans, financial literacy events, and SIP wealth creation.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const processSteps = [
  { icon: Search, name: "Understand", desc: "Understand your financial goals." },
  { icon: PencilLine, name: "Plan", desc: "Build a suitable financial strategy." },
  { icon: Lock, name: "Protect", desc: "Focus on financial security." },
  { icon: TrendingUp, name: "Grow", desc: "Work toward long-term financial goals." },
];

function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>("health-insurance");
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSelectService = (id: string) => {
    setActiveServiceId(id);
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeService: ServiceDetail = (servicesData.find((s) => s.id === activeServiceId) ?? servicesData[0])!;

  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} />

      {/* HERO */}
      <section className="about-hero section-ink" aria-labelledby="services-heading">
        <div className="container about-hero-inner">
          <div className="page-hero-copy" data-reveal style={{ paddingBottom: "3rem" }}>
            <p className="section-kicker light-kicker">Our Services</p>
            <h1 id="services-heading">
              Financial Solutions for<br />
              <em>Every Stage of Life.</em>
            </h1>
            <p className="page-hero-sub">
              Explore key benefits of each financial solution below, then connect directly with Manish Gandharva on WhatsApp for personalized consultation.
            </p>
            <Button asChild size="lg" className="gold-button">
              <a href="#explore-services">Explore Service Benefits</a>
            </Button>
          </div>
          <div className="about-hero-image" data-reveal>
            <img
              src={servicesHero}
              alt="Manish Gandharva in a professional financial consultation"
              width={600}
              height={580}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* SERVICES DIRECTORY & BENEFITS SECTION */}
      <section id="explore-services" className="section section-light" aria-label="Service directory">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Transparent & Goal-Focused</p>
            <h2>
              Explore Services & <em>Understand Benefits</em>
            </h2>
            <p className="max-w-2xl mx-auto mt-2 text-gray-600">
              Tap any service to view how it protects your family and supports your future before booking your consultation.
            </p>
          </div>

          {/* SERVICE QUICK TABS GRID — each tab links to dedicated page */}
          <div className="service-tabs-grid" data-reveal>
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeServiceId;
              return (
                <div key={service.id} className="service-tab-row">
                  <button
                    type="button"
                    onClick={() => handleSelectService(service.id)}
                    className={`service-tab-card ${isActive ? "active" : ""}`}
                    aria-expanded={isActive}
                  >
                    <div className="service-tab-icon">
                      <Icon size={24} />
                    </div>
                    <div className="service-tab-info">
                      <span className="service-tab-name">{service.name}</span>
                      <span className="service-tab-tagline">{service.tagline}</span>
                    </div>
                    <ChevronRight className={`service-tab-arrow ${isActive ? "rotated" : ""}`} size={18} />
                  </button>
                  <Link
                    to={service.to}
                    className="service-tab-view-link"
                    aria-label={`View full benefits of ${service.name}`}
                  >
                    View Benefits &rarr;
                  </Link>
                </div>
              );
            })}
          </div>

          {/* ACTIVE SERVICE BENEFITS DETAIL INSPECTOR */}
          <div ref={detailRef} className="active-service-inspector-wrap mt-12" data-reveal>
            <div className="inspector-badge-bar">
              <span>Selected Service Details</span>
              <div className="inspector-links">
                <Link to={activeService.to} className="subpage-link">
                  View Dedicated Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            
            <ServiceBenefitsDetail service={activeService} />
          </div>
        </div>
      </section>

      {/* ALL SERVICES FULL LIST (ACCESSIBLE / SCROLLABLE CARDS) */}
      <section className="section section-navy" aria-label="Detailed service directory">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">All 10 Financial Solutions</p>
            <h2>
              Comprehensive Overview of <em>All Services</em>
            </h2>
          </div>

          <div className="all-services-cards-grid" data-reveal>
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} to={service.to} className="all-service-card-link" aria-label={`View full benefits of ${service.name}`}>
                  <div className="all-service-card">
                    <div className="card-top">
                      <div className="card-icon-badge">
                        <Icon size={22} />
                      </div>
                      <h3>{service.name}</h3>
                    </div>

                    <p className="card-why-text">{service.tagline}</p>

                    <div className="card-benefits-mini">
                      <strong>Key Benefits:</strong>
                      <ul>
                        {service.keyBenefits.slice(0, 3).map((b, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="view-benefits-row">
                      View Benefits <ArrowRight size={15} />
                    </span>

                    <div className="card-actions" onClick={(e) => e.preventDefault()}>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="light-outline"
                        onClick={() => handleSelectService(service.id)}
                      >
                        Quick Preview
                      </Button>
                      <a
                        href={service.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="card-wa-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageCircle size={16} /> Book Consultation
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE HELP (PROCESS) */}
      <section className="section section-light" aria-labelledby="how-we-help">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Our Approach</p>
            <h2 id="how-we-help">
              How We <em>Help You.</em>
            </h2>
          </div>
          <div className="process-steps" style={{ gridTemplateColumns: "repeat(4, 1fr)" }} data-reveal>
            {processSteps.map(({ icon: Icon, name, desc }, i) => (
              <div key={name} className="process-step">
                <div className="process-icon-ring">
                  <Icon strokeWidth={1.5} size={28} />
                </div>
                <div className="process-num">0{i + 1}</div>
                <h3 className="process-label">{name}</h3>
                <p className="process-desc">{desc}</p>
                <div className="process-connector" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" aria-label="Contact options">
        <div className="container final-cta-inner" data-reveal>
          <div>
            <p className="section-kicker light-kicker">Not Sure Where to Start?</p>
            <h2>Ready to Plan Your Financial Future?</h2>
            <p className="mt-2 text-gray-300">Book a Free Consultation with Manish Gandharva on WhatsApp.</p>
          </div>
          <div className="final-actions">
            <Button asChild className="gold-button">
              <a
                href={`https://wa.me/919829289538?text=${encodeURIComponent(
                  "Namaste Manish ji, mujhe apne financial planning ke bare mein baat karni hai. Kripya mujhe guidance dijiye."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} className="mr-2" /> Book Free Consultation &rarr;
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

