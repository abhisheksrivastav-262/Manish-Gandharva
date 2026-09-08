import { createFileRoute } from "@tanstack/react-router";
import { Wallet, ShieldCheck, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/personal-loan")({
  component: PersonalLoan,
  head: () => ({
    meta: [
      { title: "Personal Loan Guidance | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Responsible personal loan guidance for short-term needs — eligibility, EMI planning, and debt-trap avoidance by Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Personal Loan | Manish Gandharva" },
      { property: "og:description", content: "Responsible borrowing for short-term personal needs." },
    ],
    links: [{ rel: "canonical", href: "/services/personal-loan" }],
  }),
});

const serviceData = getServiceById("personal-loan")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

const faqs = [
  { q: "When is a personal loan justified?", a: "Genuine short-term needs with a clear repayment plan — medical gaps, planned events, or consolidating costlier debt. Avoid borrowing for impulse lifestyle spending." },
  { q: "Why are personal loan rates higher?", a: "They are unsecured — no collateral — so lenders price in higher risk. Always compare total cost, not just EMI." },
  { q: "How do I avoid a debt trap?", a: "Borrow once with a fixed tenure, avoid stacking multiple loans, keep EMIs within comfort, and fix a prepayment target." },
  { q: "Does a personal loan affect CIBIL?", a: "Yes. Timely repayment builds credit health; defaults or over-borrowing damage it for years." },
];

function PersonalLoan() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Personal Loan" }]} />

      <ServiceHero
        eyebrow="Personal Loan"
        headline={"Handle Urgent Needs\nWithout Debt Stress."}
        subheadline="Quick funds with a clear exit plan — borrow responsibly, compare true costs, and close the loan on schedule."
        primaryLabel="Book Free Consultation"
        whatsappMessage={WA_MSG}
        Icon={Wallet}
      />

      <section className="section section-light" aria-labelledby="personal-loan-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      <section className="section section-navy" aria-labelledby="personal-loan-smart">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Borrow responsibly</p>
            <h2 id="personal-loan-smart">Quick Funds. <em>Fixed Exit Plan.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Validate the need", body: "Borrow only for genuine requirements — not impulse upgrades." },
              { title: "Compare true cost", body: "Add processing fees, GST, penalties, and total interest — not just EMI." },
              { title: "Keep tenure short", body: "Shorter tenure means slightly higher EMI but much faster freedom." },
              { title: "One loan at a time", body: "Avoid stacking; consolidate existing costlier debt before fresh borrowing." },
              { title: "Protect credit score", body: "Timely EMIs strengthen your profile for future home or business needs." },
              { title: "Fix closure date", body: "Set a prepayment target from day one and track it." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <ShieldCheck />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="personal-loan-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading light-heading">
            <p className="section-kicker light-kicker">Common questions</p>
            <h2 id="personal-loan-faq">Frequently Asked <em>Questions.</em></h2>
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
