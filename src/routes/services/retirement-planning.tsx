import { createFileRoute } from "@tanstack/react-router";
import { PiggyBank } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/retirement-planning")({
  component: RetirementPlanning,
  head: () => ({
    meta: [
      { title: "Retirement Planning | Manish Gandharva – Udaipur" },
      { name: "description", content: "Build a retirement you can look forward to. Long-term retirement planning, income planning, and financial independence guidance by Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Retirement Planning | Manish Gandharva" },
      { property: "og:description", content: "Start planning for a financially independent and fulfilling retirement." },
    ],
    links: [{ rel: "canonical", href: "/services/retirement-planning" }],
  }),
});

const serviceData = getServiceById("retirement-planning")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

const journey = [
  { phase: "Working Years", label: "Building the foundation", detail: "Savings, investments and disciplined habits during your earning years form the foundation of your retirement." },
  { phase: "Pre-Retirement", label: "Consolidation & review", detail: "5–10 years before retirement is critical for reviewing your readiness and adjusting your approach if needed." },
  { phase: "Retirement", label: "Financial independence", detail: "The goal: a retirement where your money works for you — covering expenses without active income." },
  { phase: "Post-Retirement", label: "Sustaining the lifestyle", detail: "Managing withdrawals, healthcare costs, and estate planning for a secure long-term post-retirement life." },
];

function RetirementPlanning() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Retirement Planning" }]} />

      <ServiceHero
        eyebrow="Retirement Planning"
        headline={"Build a Retirement You\nCan Look Forward To."}
        subheadline="Retirement is not the end of earning — it's the beginning of financial independence. The sooner you plan, the more options you have."
        primaryLabel="Book Free Consultation"
        whatsappMessage={WA_MSG}
        Icon={PiggyBank}
      />

      {/* DEDICATED BENEFITS & FUTURE SECTION */}
      <section className="section section-light" aria-labelledby="retirement-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      {/* RETIREMENT JOURNEY */}
      <section className="section section-navy" aria-labelledby="retirement-journey">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">A lifelong journey</p>
            <h2 id="retirement-journey">The Retirement <em>Planning Journey.</em></h2>
          </div>
          <div className="edu-timeline" data-reveal>
            {journey.map(({ phase, label, detail }, i) => (
              <div key={phase} className="edu-timeline-step">
                <div className="edu-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="edu-step-stage">{phase}</div>
                <div className="edu-step-label">{label}</div>
                <p className="edu-step-detail">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

