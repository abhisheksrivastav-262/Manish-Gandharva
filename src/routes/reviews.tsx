import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Google Customer Reviews | Manish Gandharva Financial Advisor" },
      {
        name: "description",
        content:
          "Read genuine Google customer reviews and testimonials for Manish Gandharva - Financial Expert & Wealth Security Planner in Udaipur. Real client feedback on health insurance, SIPs, loans, and retirement planning.",
      },
      { property: "og:title", content: "Google Customer Reviews | Manish Gandharva" },
      {
        property: "og:description",
        content: "Real feedback from our clients who shared their financial planning experience on Google.",
      },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

function ReviewsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <Breadcrumbs
        crumbs={[{ label: "Home", to: "/" }, { label: "Google Reviews" }]}
      />

      {/* HERO */}
      <section className="page-hero section-ink" aria-labelledby="reviews-heading">
        <div className="container page-hero-inner page-hero-centered">
          <div className="page-hero-copy" style={{ textAlign: "center" }} data-reveal>
            <div className="page-hero-icon-wrap" style={{ marginBottom: "2rem" }}>
              <div className="page-hero-icon-ring">
                <Star strokeWidth={1.5} fill="#EAB308" color="#EAB308" />
              </div>
            </div>
            <p className="section-kicker light-kicker">Client Feedback &amp; Trust</p>
            <h1 id="reviews-heading">
              Google Customer Reviews
            </h1>
            <p className="page-hero-sub" style={{ marginInline: "auto" }}>
              Real feedback from clients who shared their financial advisory experience with Manish Gandharva on Google.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID & FILTERS */}
      <GoogleReviewsSection showTitle={false} />

      {/* CONSULTATION CTA */}
      <ConsultationCTA
        heading="Ready to Plan Your Financial Future?"
        subheading="Join our satisfied clients and get personalized financial guidance tailored to your goals."
      />
    </div>
  );
}
