import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import advisorImage from "@/assets/manish-hero.jpg";
import { useEffect } from "react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Manish Gandharva | Financial Expert & Wealth Planner – Udaipur" },
      { name: "description", content: "Learn about Manish Gandharva – Financial Expert & Wealth Security Planner in Udaipur, providing personalized insurance, wealth creation, and financial planning guidance." },
      { property: "og:title", content: "About Manish Gandharva | Financial Expert" },
      { property: "og:description", content: "Personalized financial planning and wealth security guidance in Udaipur." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const whoWeHelp = ["Individuals", "Families", "Parents", "Working Professionals", "Business Owners"];
const whatWeFocus = [
  "Financial Protection",
  "Goal-Based Planning",
  "Wealth Creation",
  "Retirement Preparation",
  "Child Education",
  "Loan Solutions",
  "Financial Awareness",
];
const process = [
  { step: "Understand", desc: "Listen deeply to your goals, priorities and financial situation." },
  { step: "Plan", desc: "Build a clear, practical financial roadmap aligned to your life." },
  { step: "Protect", desc: "Identify the right insurance and security solutions for your family." },
  { step: "Grow", desc: "Explore wealth creation strategies suited to your risk and timeline." },
  { step: "Review", desc: "Revisit and adjust the plan as your goals and life evolve." },
];

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="page-hero section-ink about-hero" aria-labelledby="about-hero-heading">
        <div className="container about-hero-inner">
          <div className="page-hero-copy" data-reveal>
            <p className="section-kicker light-kicker">Financial Expert &amp; Wealth Security Planner</p>
            <h1 id="about-hero-heading">Meet Manish<br /><em>Gandharva</em></h1>
            <p className="page-hero-sub">Providing personalized financial planning, insurance guidance, and wealth creation strategies for individuals and families across Udaipur.</p>
            <Button asChild className="gold-button" size="lg">
              <Link to="/contact">Let's Discuss Your Goals <ArrowUpRight /></Link>
            </Button>
          </div>
          <div className="about-hero-image" data-reveal>
            <img src={advisorImage} alt="Manish Gandharva, Financial Expert and Wealth Security Planner in Udaipur" width={800} height={900} loading="eager" />
            <div className="photo-caption">
              <span className="gold-rule" />
              <span>
                <strong>Manish Gandharva</strong>
                <small>Financial Expert &amp; Wealth Security Planner</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section section-light" aria-labelledby="who-we-help">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Who We Help</p>
            <h2 id="who-we-help">Financial Planning For <em>Every Individual.</em></h2>
            <p>Whether you're an individual, a family, or a professional, financial planning can help you make smarter decisions for your future.</p>
          </div>
          <div className="who-grid" data-reveal>
            {whoWeHelp.map((item) => (
              <div key={item} className="who-card">
                <span className="who-check"><Check /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE FOCUS ON */}
      <section className="section section-navy" aria-labelledby="what-we-focus">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="section-kicker light-kicker">Our Focus Areas</p>
              <h2 id="what-we-focus">What We<br /><em>Focus On.</em></h2>
            </div>
            <p>Every area of financial planning that matters to you, your family, and your future.</p>
          </div>
          <div className="focus-grid" data-reveal>
            {whatWeFocus.map((item, i) => (
              <div key={item} className="focus-item">
                <span className="focus-num">0{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section-light" aria-labelledby="our-approach">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Our Approach</p>
            <h2 id="our-approach">A Clear Process.<br /><em>A Trusted Partnership.</em></h2>
            <p>Every client relationship follows a structured, thoughtful process designed to give you clarity at every stage.</p>
          </div>
          <div className="process-steps" data-reveal>
            {process.map(({ step, desc }, i) => (
              <div key={step} className="process-step">
                <div className="process-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="process-connector" aria-hidden="true" />
                <div className="process-icon-ring">
                  <span>{step.charAt(0)}</span>
                </div>
                <h3 className="process-label">{step}</h3>
                <p className="process-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        eyebrow="Start your journey"
        headline={"Let's Discuss Your\nFinancial Goals."}
        body="Every financial journey is unique. Let's have a conversation about your goals and explore what's possible for you and your family."
        primaryLabel="Book a Consultation"
        whatsappMessage="Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+goals."
      />
    </>
  );
}
