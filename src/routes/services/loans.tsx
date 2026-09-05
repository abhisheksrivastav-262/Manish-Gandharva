import { createFileRoute } from "@tanstack/react-router";
import { House, CarFront, GraduationCap, HandCoins, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/loans")({
  component: Loans,
  head: () => ({
    meta: [
      { title: "Home Loan, Car Loan, Education Loan, Personal Loan | Manish Gandharva – Udaipur" },
      { name: "description", content: "Explore home loan, car loan, education loan, and personal loan guidance by Manish Gandharva in Udaipur. Smart borrowing decisions for important life goals." },
      { property: "og:title", content: "Loan Solutions | Manish Gandharva" },
      { property: "og:description", content: "Financing solutions for important life goals — home, vehicle, education and personal needs." },
    ],
    links: [{ rel: "canonical", href: "/services/loans" }],
  }),
});

const WA_MSG = "Hello+Manish+ji%2C+I+would+like+to+discuss+Loan+options.";

const loanTypes = [
  {
    icon: House,
    name: "Home Loan",
    waMsg: "Hello+Manish+ji%2C+I+am+interested+in+a+Home+Loan.+I+would+like+to+discuss+the+details.",
    description: "A home loan helps you finance the purchase or construction of your home over a structured repayment period. Understanding the total cost of borrowing — including interest, tenure, and EMI impact on your budget — is essential before taking a home loan.",
    considerations: ["Loan eligibility based on income and credit profile", "Down payment requirement and readiness", "Impact of loan tenure on total interest paid", "Ensure EMI is comfortably within monthly budget"],
  },
  {
    icon: CarFront,
    name: "Car Loan",
    waMsg: "Hello+Manish+ji%2C+I+am+interested+in+a+Car+Loan.+I+would+like+to+discuss+the+details.",
    description: "A car loan enables you to purchase a vehicle by spreading the cost over a defined repayment period. Evaluate the total cost of ownership — including interest — against your monthly budget before deciding on the loan amount and tenure.",
    considerations: ["Compare the cost of borrowing vs down payment options", "Vehicle depreciation vs loan outstanding balance", "Insurance and maintenance costs alongside EMI", "Pre-payment options and associated terms"],
  },
  {
    icon: GraduationCap,
    name: "Education Loan",
    waMsg: "Hello+Manish+ji%2C+I+am+interested+in+an+Education+Loan.+I+would+like+to+discuss+the+details.",
    description: "Education loans provide financial support for higher education — including undergraduate, postgraduate, and professional courses, domestically or overseas. The expectation is that the education will enhance future earning potential to support repayment.",
    considerations: ["Course and institution eligibility for loan products", "Repayment typically begins after a moratorium period", "Understand total loan cost over the repayment period", "Explore if any government interest subsidy schemes apply"],
  },
  {
    icon: HandCoins,
    name: "Personal Loan",
    waMsg: "Hello+Manish+ji%2C+I+am+interested+in+a+Personal+Loan.+I+would+like+to+discuss+the+details.",
    description: "A personal loan is an unsecured loan that can be used for various personal financial needs — medical emergencies, home renovation, travel, or other significant expenses. Interest rates are typically higher than secured loans, so evaluate carefully.",
    considerations: ["Higher interest rate compared to secured loans", "No collateral required but strong credit profile helps", "Understand total repayment cost before borrowing", "Borrow only what you need and can comfortably repay"],
  },
];

const smartBorrowing = [
  { title: "Borrow purposefully", body: "Take a loan for a clear purpose with a realistic repayment plan — not as a solution to poor budgeting." },
  { title: "Understand the total cost", body: "Don't just look at EMI — understand total interest paid over the loan tenure." },
  { title: "Maintain credit health", body: "A strong credit score helps you access better loan options. Pay obligations on time." },
  { title: "Don't over-borrow", body: "Borrow within your repayment capacity. Overextension creates financial stress." },
];

function Loans() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Loans" }]} />

      {/* HERO */}
      <section className="page-hero section-ink" aria-labelledby="loans-hero-heading">
        <div className="container page-hero-inner">
          <div className="page-hero-copy" data-reveal>
            <p className="section-kicker light-kicker">Loan Solutions</p>
            <h1 id="loans-hero-heading">Financing Solutions for<br /><em>Important Life Goals.</em></h1>
            <p className="page-hero-sub">Home, vehicle, education, and personal financing — explored with clarity and with a focus on responsible, informed borrowing decisions.</p>
            <div className="hero-actions">
              <Button asChild size="lg" className="gold-button">
                <a href="/contact">Explore Loan Options <ArrowUpRight /></a>
              </Button>
            </div>
          </div>
          <div className="loan-icons-wrap" aria-hidden="true" data-reveal>
            {loanTypes.map(({ icon: Icon, name }) => (
              <div key={name} className="loan-icon-pill">
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN CARDS */}
      <section className="section section-light" aria-label="Loan types">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Your borrowing needs</p>
            <h2>Understanding Each <em>Loan Type.</em></h2>
          </div>
          <div className="loan-grid" data-reveal>
            {loanTypes.map(({ icon: Icon, name, description, considerations, waMsg }) => (
              <article key={name} className="loan-card">
                <div className="loan-card-header">
                  <div className="loan-card-icon"><Icon /></div>
                  <h2 className="loan-card-title">{name}</h2>
                </div>
                <p className="loan-card-desc">{description}</p>
                <div className="loan-card-considerations">
                  <strong>Key Considerations</strong>
                  <ul>
                    {considerations.map((c) => (
                      <li key={c}><ShieldCheck /><span>{c}</span></li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`https://wa.me/919829289538?text=${waMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="loan-card-cta"
                >
                  Discuss {name} <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
          <p className="section-disclaimer" data-reveal>
            We do not guarantee loan approval, lowest interest rates, or specific eligibility. Loan products and terms vary by institution. This information is for general awareness only.
          </p>
        </div>
      </section>

      {/* SMART BORROWING */}
      <section className="section section-navy" aria-labelledby="smart-borrowing">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Responsible borrowing</p>
            <h2 id="smart-borrowing">Borrow Smart. <em>Repay Comfortably.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {smartBorrowing.map(({ title, body }) => (
              <div key={title} className="point-card point-card-dark">
                <ShieldCheck />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        eyebrow="Explore your loan requirement"
        headline={"Let's Discuss Your\nFinancing Needs."}
        body="Whether you're planning a home purchase, higher education or another important goal — let's explore your borrowing options thoughtfully."
        primaryLabel="Explore Loan Options"
        whatsappMessage={WA_MSG}
      />
    </>
  );
}
