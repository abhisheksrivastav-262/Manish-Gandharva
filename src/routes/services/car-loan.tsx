import { createFileRoute } from "@tanstack/react-router";
import { CarFront, ShieldCheck, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/car-loan")({
  component: CarLoan,
  head: () => ({
    meta: [
      { title: "Car Loan Guidance | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Smart vehicle financing aligned with your budget — car loan EMI planning, tenure comparison, and ownership cost guidance by Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Car Loan | Manish Gandharva" },
      { property: "og:description", content: "Smart vehicle financing aligned with your budget." },
    ],
    links: [{ rel: "canonical", href: "/services/car-loan" }],
  }),
});

const serviceData = getServiceById("car-loan")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

const faqs = [
  { q: "What tenure is best for a car loan?", a: "Typically 3–5 years balances EMI comfort with total interest. Longer tenures lower EMI but raise total cost significantly." },
  { q: "How much down payment should I make?", a: "A larger down payment reduces principal and interest. Avoid zero-down-payment offers unless you have evaluated the true cost." },
  { q: "What is the total cost of owning a car?", a: "EMI plus insurance, fuel, servicing, and depreciation. Always evaluate all four before fixing your budget." },
  { q: "New vs pre-owned car loan?", a: "Pre-owned cars cost less but may carry higher loan rates and maintenance. Compare both routes objectively." },
];

function CarLoan() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Car Loan" }]} />

      <ServiceHero
        eyebrow="Car Loan"
        headline={"Drive Your Dream Car\nWithout Budget Stress."}
        subheadline="Vehicle financing that fits your monthly cash flow — with clarity on EMI, tenure, down payment, and total ownership cost."
        primaryLabel="Book Free Consultation"
        whatsappMessage={WA_MSG}
        Icon={CarFront}
      />

      <section className="section section-light" aria-labelledby="car-loan-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      <section className="section section-navy" aria-labelledby="car-loan-smart">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Smart ownership</p>
            <h2 id="car-loan-smart">Enjoy the Car. <em>Protect the Plan.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Budget first, car second", body: "Fix EMI plus fuel and service budget, then shortlist cars within it." },
              { title: "Optimise down payment", body: "Higher upfront payment means lower interest and faster freedom." },
              { title: "Avoid tenure trap", body: "Very long tenures look easy monthly but cost far more overall." },
              { title: "Compare all charges", body: "Processing fees, insurance bundling, and foreclosure terms matter." },
              { title: "Keep SIPs running", body: "Car EMI should not pause your long-term investments for years." },
              { title: "Plan resale value", body: "Consider depreciation and resale when choosing model and loan size." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <ShieldCheck />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="car-loan-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading light-heading">
            <p className="section-kicker light-kicker">Common questions</p>
            <h2 id="car-loan-faq">Frequently Asked <em>Questions.</em></h2>
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
