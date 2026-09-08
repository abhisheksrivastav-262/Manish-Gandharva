import { createFileRoute } from "@tanstack/react-router";
import { House, ShieldCheck, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/home-loan")({
  component: HomeLoan,
  head: () => ({
    meta: [
      { title: "Home Loan Guidance | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Plan your dream home purchase with responsible home loan guidance — eligibility, EMI planning, tenure, and documentation support by Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Home Loan | Manish Gandharva" },
      { property: "og:description", content: "Responsible borrowing guidance for your dream home purchase." },
    ],
    links: [{ rel: "canonical", href: "/services/home-loan" }],
  }),
});

const serviceData = getServiceById("home-loan")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

const faqs = [
  { q: "How much home loan can I afford?", a: "It depends on your income, existing EMIs, credit score, and down payment. A common comfort rule is to keep total EMIs within a sustainable share of take-home income." },
  { q: "Fixed or floating interest rate — which is better?", a: "Floating rates often start lower but can change; fixed rates give payment certainty. The right choice depends on tenure, rate outlook, and your risk comfort." },
  { q: "What documents are needed?", a: "Typically income proof, bank statements, ID/address proof, property papers, and employment details. Exact list varies by lender." },
  { q: "Should I prepay my home loan?", a: "Part-prepayments, especially early in the tenure, can save significant interest. Always check prepayment terms first." },
];

function HomeLoan() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Home Loan" }]} />

      <ServiceHero
        eyebrow="Home Loan"
        headline={"Finance Your Dream Home\nResponsibly."}
        subheadline="A home is a 15–25 year commitment. Get clarity on budget, EMI comfort, tenure, and total interest cost before you commit."
        primaryLabel="Book Free Consultation"
        whatsappMessage={WA_MSG}
        Icon={House}
      />

      <section className="section section-light" aria-labelledby="home-loan-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      <section className="section section-navy" aria-labelledby="home-loan-smart">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Borrow smart</p>
            <h2 id="home-loan-smart">Buy Within Capacity. <em>Repay Comfortably.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Fix your budget first", body: "Decide EMI comfort before shortlisting property — not after falling in love with one." },
              { title: "Compare total interest", body: "A lower EMI over longer tenure can cost lakhs more in total interest." },
              { title: "Protect other goals", body: "Home EMI should coexist with emergency fund, insurance, and long-term investing." },
              { title: "Plan prepayments", body: "Annual part-payments early in the loan can cut years off your tenure." },
              { title: "Check credit health", body: "A strong CIBIL score improves approval chances and rate options." },
              { title: "Verify property legally", body: "Check title, approvals, and RERA status independently of loan processing." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <ShieldCheck />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="home-loan-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading light-heading">
            <p className="section-kicker light-kicker">Common questions</p>
            <h2 id="home-loan-faq">Frequently Asked <em>Questions.</em></h2>
          </div>
          <div className="faq-grid">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <HelpCircle />
                <div><h3>{q}</h3><p>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
