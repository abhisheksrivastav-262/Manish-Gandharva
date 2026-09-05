import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Users, AlertCircle, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const Route = createFileRoute("/services/health-insurance")({
  component: HealthInsurance,
  head: () => ({
    meta: [
      { title: "Health Insurance | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Protect your health and finances with the right health insurance coverage. Discuss your health insurance needs with Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Health Insurance | Manish Gandharva" },
      { property: "og:description", content: "Protect your family from unexpected medical expenses with the right health insurance." },
    ],
    links: [{ rel: "canonical", href: "/services/health-insurance" }],
  }),
});

const WA_MSG = "Hello+Manish+ji%2C+I+would+like+to+discuss+Health+Insurance.";

const faqs = [
  { q: "How do I choose the right sum insured?", a: "The right coverage depends on your family size, age, city of residence, and health profile. A financial advisor can help you evaluate what's appropriate." },
  { q: "Can I cover my entire family under one plan?", a: "Family floater plans allow you to cover your spouse, children, and sometimes parents under a single policy. The suitability depends on individual circumstances." },
  { q: "What typically is not covered in health insurance?", a: "Common exclusions include pre-existing conditions for a waiting period, cosmetic procedures, and certain elective treatments. Always read the policy document carefully." },
  { q: "When should I get health insurance?", a: "The earlier the better — younger individuals often qualify for lower premiums and avoid pre-existing condition waiting periods." },
];

function HealthInsurance() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Health Insurance" }]} />

      <ServiceHero
        eyebrow="Health Insurance"
        headline={"Protect Your Health.\nProtect Your Finances."}
        subheadline="A medical emergency can be both physically and financially demanding. Health insurance helps ensure that a health crisis doesn't become a financial crisis."
        primaryLabel="Discuss Health Insurance"
        whatsappMessage={WA_MSG}
        Icon={HeartPulse}
      />

      {/* WHY HEALTH INSURANCE MATTERS */}
      <section className="section section-light" aria-labelledby="why-health">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">The financial reality</p>
            <h2 id="why-health">Why Health Insurance <em>Matters.</em></h2>
          </div>
          <div className="content-two-col" data-reveal>
            <div>
              <p>Medical costs in India have been rising steadily. A single hospitalisation for a serious illness or surgery can run into significant expenses — enough to disrupt years of savings. Health insurance is one of the most important layers of financial protection for any individual or family.</p>
              <p>Without adequate health coverage, families often resort to withdrawing from savings, liquidating investments, or taking on debt to manage medical expenses. Health insurance helps avoid this scenario.</p>
            </div>
            <div>
              <div className="risk-cards">
                {[
                  { icon: AlertCircle, label: "Hospitalisation costs", detail: "Planned or emergency surgeries can create large immediate expenses" },
                  { icon: AlertCircle, label: "Critical illness", detail: "Serious conditions may require prolonged treatment and care" },
                  { icon: AlertCircle, label: "Income disruption", detail: "Recovery periods may affect earning capacity" },
                  { icon: AlertCircle, label: "Savings erosion", detail: "Without coverage, savings built over years can be depleted quickly" },
                ].map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="risk-card">
                    <Icon />
                    <div>
                      <strong>{label}</strong>
                      <span>{detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO THINK ABOUT COVERAGE */}
      <section className="section section-navy" aria-labelledby="coverage-thinking">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Making the right choice</p>
            <h2 id="coverage-thinking">How to Think About <em>Health Coverage.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Evaluate your family's needs", body: "Consider the number of people to be covered, age groups, and any existing health conditions." },
              { title: "Understand coverage types", body: "Individual plans, family floater plans, and top-up plans each have different applications." },
              { title: "Consider the sum insured carefully", body: "Coverage that seemed adequate in the past may not be sufficient today given rising medical costs." },
              { title: "Review network hospitals", body: "Cashless hospitalisation facilities at network hospitals can simplify the claims process." },
              { title: "Look at waiting periods", body: "Pre-existing conditions often have waiting periods before they are covered. Plan ahead." },
              { title: "Don't delay", body: "Earlier purchase generally means lower premiums and a wider range of coverage options." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <ShieldCheck />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY PROTECTION */}
      <section className="section section-light" aria-labelledby="family-protection">
        <div className="container content-two-col" data-reveal>
          <div>
            <p className="section-kicker">Family considerations</p>
            <h2 id="family-protection">Protecting Your <em>Entire Family.</em></h2>
            <p>For families, health insurance decisions are more complex — you need to think about coverage for children, ageing parents, and your spouse, each potentially with different health needs.</p>
            <p>Understanding how to structure family health coverage, including whether individual or floater plans work better for your situation, is an important decision worth discussing with a financial professional.</p>
          </div>
          <div className="who-grid">
            {["Children", "Spouse", "Parents", "Yourself", "Extended family"].map((item) => (
              <div key={item} className="who-card">
                <Users />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-ink" aria-labelledby="health-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading light-heading">
            <p className="section-kicker light-kicker">Common questions</p>
            <h2 id="health-faq">Frequently Asked <em>Questions.</em></h2>
          </div>
          <div className="faq-grid">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <HelpCircle />
                <div>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        eyebrow="Take the next step"
        headline={"Discuss Health Insurance\nWith an Expert."}
        body="Let's talk about your family's health coverage needs and find a plan that gives you the right protection."
        primaryLabel="Discuss Health Insurance"
        whatsappMessage={WA_MSG}
      />
    </>
  );
}
