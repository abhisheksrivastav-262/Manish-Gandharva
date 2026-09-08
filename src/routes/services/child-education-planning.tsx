import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { ServiceHero } from "@/components/ServiceHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

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

const serviceData = getServiceById("child-education-planning")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

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
        primaryLabel="Book Free Consultation"
        whatsappMessage={WA_MSG}
        Icon={GraduationCap}
      />

      {/* DEDICATED BENEFITS & FUTURE SECTION */}
      <section className="section section-light" aria-labelledby="edu-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
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
    </>
  );
}

