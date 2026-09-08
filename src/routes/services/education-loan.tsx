import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, ShieldCheck, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/education-loan")({
  component: EducationLoan,
  head: () => ({
    meta: [
      { title: "Education Loan Guidance | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Fund graduation, professional, or overseas education with structured education loan guidance — eligibility, moratorium, and repayment planning by Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Education Loan | Manish Gandharva" },
      { property: "og:description", content: "Funding higher education for academic and career growth." },
    ],
    links: [{ rel: "canonical", href: "/services/education-loan" }],
  }),
});

const serviceData = getServiceById("education-loan")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

const faqs = [
  { q: "Who can apply for an education loan?", a: "Students admitted to recognised courses with a co-applicant parent/guardian. Lender criteria vary for India vs abroad studies." },
  { q: "What is a moratorium period?", a: "The period (course duration plus grace months) before full repayment begins. Interest may accrue during this time — understand the terms clearly." },
  { q: "Is collateral always required?", a: "Not always. Smaller loans may be unsecured; larger amounts typically need collateral or a strong co-applicant profile." },
  { q: "How should we plan repayment?", a: "Project realistic starting salaries for the chosen field and fix EMI tenure so repayment stays comfortable after the course." },
];

function EducationLoan() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Education Loan" }]} />

      <ServiceHero
        eyebrow="Education Loan"
        headline={"Fund Higher Education\nWithout Compromise."}
        subheadline="Whether graduation, professional courses, or study abroad — plan funding, eligibility, and repayment with full clarity."
        primaryLabel="Book Free Consultation"
        whatsappMessage={WA_MSG}
        Icon={GraduationCap}
      />

      <section className="section section-light" aria-labelledby="edu-loan-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      <section className="section section-navy" aria-labelledby="edu-loan-smart">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Study now, repay smartly</p>
            <h2 id="edu-loan-smart">Dream College. <em>Planned Repayment.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Choose on merit", body: "Let admission quality drive college choice — structure funding around it." },
              { title: "Map full cost", body: "Include tuition, living, travel, and buffer — avoid surprises mid-course." },
              { title: "Understand moratorium", body: "Know exactly when interest starts and when EMIs begin." },
              { title: "Compare lenders", body: "Rates, margins, collateral, and flexibility differ widely — compare carefully." },
              { title: "Protect parents' goals", body: "A planned loan keeps retirement and emergency funds untouched." },
              { title: "Plan career ROI", body: "Align loan size with realistic early-career income in the chosen field." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <ShieldCheck />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="edu-loan-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading light-heading">
            <p className="section-kicker light-kicker">Common questions</p>
            <h2 id="edu-loan-faq">Frequently Asked <em>Questions.</em></h2>
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
