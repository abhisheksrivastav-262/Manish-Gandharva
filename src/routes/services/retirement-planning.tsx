import { createFileRoute } from "@tanstack/react-router";
import { PiggyBank, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

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

const WA_MSG = "Hello+Manish+ji%2C+I+would+like+to+discuss+Retirement+Planning.";

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
        primaryLabel="Start Retirement Planning"
        whatsappMessage={WA_MSG}
        Icon={PiggyBank}
      />

      {/* WHY RETIREMENT PLANNING */}
      <section className="section section-light" aria-labelledby="why-retirement">
        <div className="container content-two-col" data-reveal>
          <div>
            <p className="section-kicker">Why it matters</p>
            <h2 id="why-retirement">Retirement Planning Is Not<br /><em>Just About Saving.</em></h2>
            <p>A comfortable retirement requires more than just putting money aside. It involves thinking about your expected lifestyle, the impact of inflation over time, healthcare needs in older age, and how long your savings need to last.</p>
            <p>The earlier retirement planning begins, the more time your savings have to grow, and the more flexibility you have in choosing your retirement timeline.</p>
          </div>
          <div className="points-list">
            {[
              { icon: TrendingUp, label: "Inflation awareness", detail: "The purchasing power of money reduces over time. Planning must account for this." },
              { icon: Clock, label: "Longer lifespans", detail: "With increasing life expectancy, retirement savings may need to last 20–30+ years." },
              { icon: ShieldCheck, label: "Healthcare in retirement", detail: "Medical costs tend to increase with age. This is a critical factor to plan around." },
              { icon: PiggyBank, label: "No active income", detail: "In retirement, your savings and investments must fund your lifestyle." },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="risk-card">
                <Icon />
                <div><strong>{label}</strong><span>{detail}</span></div>
              </div>
            ))}
          </div>
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

      {/* WHAT GOOD PLANNING INVOLVES */}
      <section className="section section-light" aria-labelledby="good-planning">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">The planning approach</p>
            <h2 id="good-planning">What Retirement Planning <em>Involves.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Define your retirement vision", body: "Think about when you want to retire, what lifestyle you envision, and what that would cost each month." },
              { title: "Estimate retirement duration", body: "Consider how long your savings may need to support you — this affects how much you need to accumulate." },
              { title: "Factor in inflation", body: "The real cost of living increases over time. Your retirement plan must account for this reality." },
              { title: "Consider healthcare costs", body: "Medical expenses often increase significantly in later years. Adequate health coverage is part of retirement planning." },
              { title: "Build disciplined saving habits", body: "Consistent contributions over your working years are the most reliable way to build a retirement fund." },
              { title: "Review and adjust over time", body: "Life changes. Income changes. A good retirement plan is reviewed regularly and adjusted as needed." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <PiggyBank />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
          <p className="section-disclaimer" data-reveal>Retirement planning involves long-term projections. Actual outcomes depend on savings discipline, investment performance, and life circumstances. We do not promise specific retirement corpus figures.</p>
        </div>
      </section>

      <ConsultationCTA
        eyebrow="Plan for your future"
        headline={"Start Your Retirement\nPlanning Conversation."}
        body="No matter where you are in your career, the best time to start retirement planning is now. Let's talk about your vision and how to work towards it."
        primaryLabel="Start Retirement Planning"
        whatsappMessage={WA_MSG}
      />
    </>
  );
}
