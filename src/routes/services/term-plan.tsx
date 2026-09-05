import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, Heart, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const Route = createFileRoute("/services/term-plan")({
  component: TermPlan,
  head: () => ({
    meta: [
      { title: "Term Plan | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Protect your family's financial future with a term insurance plan. Discuss term plan options with Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Term Plan | Manish Gandharva" },
      { property: "og:description", content: "Secure your family's financial future with the right life cover." },
    ],
    links: [{ rel: "canonical", href: "/services/term-plan" }],
  }),
});

const WA_MSG = "Hello+Manish+ji%2C+I+would+like+to+discuss+Term+Plan+options.";

const faqs = [
  { q: "What is a term insurance plan?", a: "A term plan provides life cover for a specified period. If the insured person passes away during the policy term, a death benefit is paid to the nominated beneficiary." },
  { q: "How much life cover do I need?", a: "A common guideline is to consider factors like your income, outstanding liabilities, dependents, and future financial obligations. A financial advisor can help you think through an appropriate amount." },
  { q: "When is the right time to buy term insurance?", a: "Generally, earlier is better. Younger, healthier individuals typically qualify for lower premiums." },
  { q: "What happens if I survive the policy term?", a: "Pure term plans typically do not have a maturity benefit — the premium buys coverage only. Some variants offer return of premium, which may affect the premium amount." },
];

function TermPlan() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Term Plan" }]} />

      <ServiceHero
        eyebrow="Term Plan"
        headline={"Protect the Financial Future\nof Your Family."}
        subheadline="Life is unpredictable. A term insurance plan ensures your family's financial goals and responsibilities are protected, even in your absence."
        primaryLabel="Discuss Term Plan"
        whatsappMessage={WA_MSG}
        Icon={ShieldCheck}
      />

      {/* WHY TERM PLAN */}
      <section className="section section-light" aria-labelledby="why-term">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Financial security</p>
            <h2 id="why-term">Why Life Cover Is a <em>Critical Decision.</em></h2>
          </div>
          <div className="content-two-col" data-reveal>
            <div>
              <p>For most families, one or both earners are responsible for EMIs, children's education, household expenses, and long-term financial goals. If an earning member is no longer able to provide, those financial commitments don't disappear.</p>
              <p>A term plan acts as an income replacement mechanism — giving your family a financial cushion to continue meeting life's obligations without being under sudden financial pressure.</p>
            </div>
            <div className="points-list">
              {[
                { icon: Heart, label: "Income protection", detail: "Replace your income to support your family's daily needs" },
                { icon: ShieldCheck, label: "Loan repayment", detail: "Outstanding home loans, EMIs and other liabilities are covered" },
                { icon: Users, label: "Child's future", detail: "Education and life goals of your children remain protected" },
                { icon: ShieldCheck, label: "Spouse's security", detail: "Your spouse can continue with financial stability" },
              ].map(({ icon: Icon, label, detail }) => (
                <div key={label} className="risk-card">
                  <Icon />
                  <div><strong>{label}</strong><span>{detail}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSIDERATIONS */}
      <section className="section section-navy" aria-labelledby="term-considerations">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Important considerations</p>
            <h2 id="term-considerations">Things to Think About <em>Before Buying.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Sum assured", body: "Consider your income, liabilities, dependents, and long-term goals when deciding on the coverage amount." },
              { title: "Policy term", body: "Choose a term that covers your most financially critical years — typically until retirement or until dependents become financially independent." },
              { title: "Premium affordability", body: "Term insurance is generally the most cost-effective form of life insurance. Still, ensure the premium is sustainable." },
              { title: "Nominee designation", body: "Carefully designate and update your nominee to ensure seamless transfer of benefit to your intended beneficiary." },
              { title: "Riders and add-ons", body: "Additional riders like critical illness or accidental death benefit can enhance your coverage based on individual needs." },
              { title: "Disclosure accuracy", body: "Complete and accurate disclosure of health information at the time of purchase is critical for claim settlement." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <ShieldCheck />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light" aria-labelledby="term-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading">
            <p className="section-kicker">Common questions</p>
            <h2 id="term-faq">Frequently Asked <em>Questions.</em></h2>
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

      <ConsultationCTA
        eyebrow="Protect your family"
        headline={"Discuss Term Plan\nWith an Expert."}
        body="Let's talk about your financial responsibilities and find the right term coverage for your family."
        primaryLabel="Discuss Term Plan"
        whatsappMessage={WA_MSG}
      />
    </>
  );
}
