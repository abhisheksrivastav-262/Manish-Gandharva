import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, GraduationCap, Sunrise, House, CarFront, Wallet, Presentation, TrendingUp, Search, PencilLine, Lock, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Financial Services | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Explore comprehensive financial solutions including health insurance, term plans, education planning, retirement, loans, and SIP wealth creation." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const WA_MSG = "Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+planning+requirements.";
const phone = "9829289538";

const servicesList = [
  {
    icon: HeartPulse,
    name: "Health Insurance",
    desc: "Protect your family's savings from unexpected medical emergencies with comprehensive health coverage tailored to your needs.",
    to: "/services/health-insurance",
  },
  {
    icon: ShieldCheck,
    name: "Term Plan",
    desc: "Secure your family's financial future and ensure their goals are protected even in your absence with pure life cover.",
    to: "/services/term-plan",
  },
  {
    icon: GraduationCap,
    name: "Child Education Planning",
    desc: "Plan ahead for rising education costs and give your child the financial foundation to pursue their dreams without compromise.",
    to: "/services/child-education-planning",
  },
  {
    icon: Sunrise,
    name: "Retirement Planning",
    desc: "Build a robust retirement fund to maintain your lifestyle and financial independence when you stop working.",
    to: "/services/retirement-planning",
  },
  {
    icon: House,
    name: "Home Loan",
    desc: "Finance your dream home with structured borrowing and understand the total cost of ownership before you commit.",
    to: "/services/loans",
  },
  {
    icon: CarFront,
    name: "Car Loan",
    desc: "Make informed vehicle financing decisions that balance your monthly budget and long-term financial health.",
    to: "/services/loans",
  },
  {
    icon: GraduationCap,
    name: "Education Loan",
    desc: "Support higher education goals with financing structures designed around future earning potential and career growth.",
    to: "/services/loans",
  },
  {
    icon: Wallet,
    name: "Personal Loan",
    desc: "Access funds for emergencies or significant expenses with responsible borrowing guidance.",
    to: "/services/loans",
  },
  {
    icon: Presentation,
    name: "Financial Literacy Events",
    desc: "Engaging workshops and seminars designed to build fundamental financial awareness for organizations and groups.",
    to: "/services/financial-literacy",
  },
  {
    icon: TrendingUp,
    name: "SIP Wealth Creation",
    desc: "Turn consistent, disciplined investing into a long-term habit that helps build wealth over time.",
    to: "/services/sip-wealth-creation",
  },
];

const processSteps = [
  { icon: Search, name: "Understand", desc: "Understand your financial goals." },
  { icon: PencilLine, name: "Plan", desc: "Build a suitable financial strategy." },
  { icon: Lock, name: "Protect", desc: "Focus on financial security." },
  { icon: TrendingUp, name: "Grow", desc: "Work toward long-term financial goals." },
];

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} />

      {/* HERO */}
      <section className="about-hero section-ink" aria-labelledby="services-heading">
        <div className="container about-hero-inner">
          <div className="page-hero-copy" data-reveal style={{ paddingBottom: "3rem" }}>
            <p className="section-kicker light-kicker">Our Services</p>
            <h1 id="services-heading">Financial Solutions for<br /><em>Every Stage of Life.</em></h1>
            <p className="page-hero-sub">From protecting your family to planning your future, explore financial solutions designed around your goals and priorities.</p>
            <Button asChild size="lg" className="gold-button">
              <a href="/contact">Book a Consultation</a>
            </Button>
          </div>
          <div className="about-hero-image" data-reveal>
            <img src={servicesHero} alt="Manish Gandharva in a professional consultation with a family" width={600} height={580} loading="eager" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section section-light" aria-label="Service directory">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Explore solutions</p>
            <h2>How Can We <em>Help You?</em></h2>
          </div>
          <div className="service-grid service-grid-full" data-reveal>
            {servicesList.map(({ icon: Icon, name, desc, to }) => (
              <Link key={name} to={to} className="service-card">
                <div className="service-icon"><Icon /></div>
                <h3 className="service-card-h">{name}</h3>
                <p>{desc}</p>
                <div className="service-cta">
                  Explore Service <ArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP (PROCESS) */}
      <section className="section section-navy" aria-labelledby="how-we-help">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Our Approach</p>
            <h2 id="how-we-help">How We <em>Help.</em></h2>
          </div>
          <div className="process-steps" style={{ gridTemplateColumns: "repeat(4, 1fr)" }} data-reveal>
            {processSteps.map(({ icon: Icon, name, desc }, i) => (
              <div key={name} className="process-step">
                <div className="process-icon-ring"><Icon strokeWidth={1.5} size={28} /></div>
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
            <h2>Tell us about your financial goal and let's identify the right area to explore.</h2>
          </div>
          <div className="final-actions">
            <Button asChild className="gold-button">
              <a href="/contact">Book a Consultation</a>
            </Button>
            <Button asChild variant="outline" className="light-outline">
              <a href={`https://wa.me/91${phone}?text=${WA_MSG}`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
