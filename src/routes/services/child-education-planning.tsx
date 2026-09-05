import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Target, Star } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const Route = createFileRoute("/services/child-education-planning")({
  component: ChildEducation,
  head: () => ({
    meta: [
      { title: "Child Education Planning | Manish Gandharva – Udaipur" },
      { name: "description", content: "Plan your child's education future today. Goal-based education planning for schooling, higher education, and professional courses by Manish Gandharva in Udaipur." },
      { property: "og:title", content: "Child Education Planning | Manish Gandharva" },
      { property: "og:description", content: "Plan today for your child's education, higher studies and future ambitions." },
    ],
    links: [{ rel: "canonical", href: "/services/child-education-planning" }],
  }),
});

const WA_MSG = "Hello+Manish+ji%2C+I+would+like+to+discuss+Child+Education+Planning.";

const timeline = [
  { stage: "Early Years", label: "Foundation", detail: "Early savings and investment habits established for the long education journey ahead." },
  { stage: "School", label: "Schooling Costs", detail: "Quality schooling often involves significant annual fees, books, activities and related costs." },
  { stage: "Higher Education", label: "College & University", detail: "Undergraduate education — especially professional courses — can involve considerable costs." },
  { stage: "Professional Education", label: "Specialisation", detail: "Postgraduate, professional, or overseas education requires significant financial planning." },
  { stage: "Dream", label: "Child's Ambition", detail: "Whatever your child's dream — the goal of planning is to ensure money is not the barrier." },
];

function ChildEducation() {
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
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Child Education Planning" }]} />

      <ServiceHero
        eyebrow="Child Education Planning"
        headline={"Plan Today for Your\nChild's Tomorrow."}
        subheadline="Education is one of the most important gifts you can give your child. Planning ahead ensures that when the time comes, finances are not a barrier to their ambitions."
        primaryLabel="Plan Child Education"
        whatsappMessage={WA_MSG}
        Icon={GraduationCap}
      />

      {/* WHY PLAN */}
      <section className="section section-light" aria-labelledby="why-edu">
        <div className="container content-two-col" data-reveal>
          <div>
            <p className="section-kicker">Why plan early</p>
            <h2 id="why-edu">The Cost of Education Is <em>Rising Every Year.</em></h2>
            <p>Education costs — from school fees to professional college tuition — have been increasing steadily. What seems affordable today may look very different in 10 or 15 years. Starting early gives you the most time to prepare, and keeps the monthly requirement manageable.</p>
            <p>Goal-based education planning helps you put a number to your child's future education milestones and work backwards to what you need to do today to be ready for them.</p>
          </div>
          <div className="points-list">
            {[
              { icon: BookOpen, label: "Schooling", detail: "Annual school fees, books, extracurricular activities and related costs" },
              { icon: GraduationCap, label: "Undergraduate education", detail: "3–5 year professional or general degree programmes" },
              { icon: Star, label: "Postgraduate / specialisation", detail: "MBA, medical, law, engineering and other professional programmes" },
              { icon: Target, label: "Overseas education", detail: "International universities require substantial financial preparation" },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="risk-card">
                <Icon />
                <div><strong>{label}</strong><span>{detail}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="section section-navy" aria-labelledby="edu-timeline">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">A long journey</p>
            <h2 id="edu-timeline">Your Child's <em>Education Journey.</em></h2>
            <p>Each stage of education has its own financial requirements. Planning helps you prepare for all of them.</p>
          </div>
          <div className="edu-timeline" data-reveal>
            {timeline.map(({ stage, label, detail }, i) => (
              <div key={stage} className="edu-timeline-step">
                <div className="edu-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="edu-step-stage">{stage}</div>
                <div className="edu-step-label">{label}</div>
                <p className="edu-step-detail">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PLANNING HELPS */}
      <section className="section section-light" aria-labelledby="how-planning">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Goal-based approach</p>
            <h2 id="how-planning">How Goal-Based Planning <em>Helps.</em></h2>
          </div>
          <div className="points-grid" data-reveal>
            {[
              { title: "Define the goal", body: "Identify which education milestones matter most — school, college, postgraduate, overseas." },
              { title: "Estimate future costs", body: "Accounting for inflation in education costs helps you arrive at a realistic target amount." },
              { title: "Start early", body: "Beginning sooner means smaller monthly contributions to reach the same goal." },
              { title: "Choose the right approach", body: "Various financial instruments can be considered depending on your timeline and risk comfort." },
              { title: "Stay consistent", body: "Discipline over the years is what turns small contributions into meaningful education funds." },
              { title: "Review periodically", body: "Goals and financial situations change. Regular reviews keep your plan on track." },
            ].map(({ title, body }) => (
              <div key={title} className="point-card">
                <GraduationCap />
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
          <p className="section-disclaimer" data-reveal>Investment outcomes depend on the instruments chosen, market conditions, and the discipline of contributions over time. Returns are not guaranteed.</p>
        </div>
      </section>

      <ConsultationCTA
        eyebrow="Invest in your child's future"
        headline={"Plan Your Child's\nEducation Today."}
        body="Let's talk about your child's education goals and create a planning approach suited to your timeline and financial situation."
        primaryLabel="Plan Child Education"
        whatsappMessage={WA_MSG}
      />
    </>
  );
}
