import { createFileRoute } from "@tanstack/react-router";
import { House, CarFront, GraduationCap, Wallet, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById, ServiceDetail } from "@/data/servicesData";

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

const loanServices = [
  getServiceById("home-loan")!,
  getServiceById("car-loan")!,
  getServiceById("education-loan")!,
  getServiceById("personal-loan")!,
];

const smartBorrowing = [
  { title: "Borrow purposefully", body: "Take a loan for a clear purpose with a realistic repayment plan — not as a solution to poor budgeting." },
  { title: "Understand the total cost", body: "Don't just look at EMI — understand total interest paid over the loan tenure." },
  { title: "Maintain credit health", body: "A strong credit score helps you access better loan options. Pay obligations on time." },
  { title: "Don't over-borrow", body: "Borrow within your repayment capacity. Overextension creates financial stress." },
];

function Loans() {
  const [selectedLoanId, setSelectedLoanId] = useState<string>("home-loan");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeLoanService: ServiceDetail = (loanServices.find((s) => s.id === selectedLoanId) ?? loanServices[0])!;

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
                <a href="#loan-details">Explore Loan Benefits <ArrowUpRight /></a>
              </Button>
            </div>
          </div>
          <div className="loan-icons-wrap" aria-hidden="true" data-reveal>
            {loanServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="loan-icon-pill" onClick={() => setSelectedLoanId(service.id)} style={{ cursor: "pointer" }}>
                  <Icon />
                  <span>{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOAN SELECTOR TABS & DETAILED BENEFITS */}
      <section id="loan-details" className="section section-light" aria-label="Loan types">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Select Loan Category</p>
            <h2>Benefits & Guidance for <em>Each Loan Type</em></h2>
            <p className="max-w-xl mx-auto mt-2 text-gray-600">Choose a loan type below to understand how it helps your future before booking your consultation.</p>
          </div>

          {/* LOAN TABS */}
          <div className="loan-tabs-selector mb-10 flex flex-wrap gap-3 justify-center" data-reveal>
            {loanServices.map((service) => {
              const Icon = service.icon;
              const isSelected = service.id === selectedLoanId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedLoanId(service.id)}
                  className={`loan-tab-btn px-6 py-3 rounded-xl border transition-all flex items-center gap-2 font-medium ${
                    isSelected
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white text-navy border-gray-200 hover:border-navy"
                  }`}
                >
                  <Icon size={18} />
                  <span>{service.name}</span>
                </button>
              );
            })}
          </div>

          {/* SELECTED LOAN BENEFIT INSPECTOR */}
          <div className="selected-loan-benefit-wrap" data-reveal>
            <ServiceBenefitsDetail service={activeLoanService} />
          </div>

          {/* ALL LOAN SERVICES GRID */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-serif text-center mb-8">All 4 Loan Options Summary</h3>
            <div className="loan-grid" data-reveal>
              {loanServices.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.id} className="loan-card">
                    <div className="loan-card-header">
                      <div className="loan-card-icon"><Icon /></div>
                      <h2 className="loan-card-title">{service.name}</h2>
                    </div>
                    <p className="loan-card-desc">{service.whyImportant}</p>
                    <div className="loan-card-considerations">
                      <strong>Key Benefits</strong>
                      <ul>
                        {service.keyBenefits.map((b) => (
                          <li key={b}><ShieldCheck /><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={service.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="loan-card-cta"
                    >
                      Book Free Consultation &rarr;
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="section-disclaimer text-center mt-6" data-reveal>
              We do not guarantee loan approval, lowest interest rates, or specific eligibility. Loan products and terms vary by institution. This information is for general awareness only.
            </p>
          </div>
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
    </>
  );
}

