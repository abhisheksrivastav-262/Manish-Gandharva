import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Images } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery | Manish Gandharva – Financial Services & Plans" },
      {
        name: "description",
        content:
          "Browse our service details, financial plans, and pricing information. Complete transparency on our offerings.",
      },
      { property: "og:title", content: "Gallery | Manish Gandharva" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const galleryImages = [
  { src: "/image/a.png",  label: "Service Details" },
  { src: "/image/a1.png", label: "Service Plans & Charges" },
  { src: "/image/a2.png", label: "Financial Plan Details" },
  { src: "/image/a3.png", label: "Insurance & Protection Plans" },
  { src: "/image/a4.png", label: "Investment Options" },
  { src: "/image/a5.png", label: "Savings & Wealth Creation" },
  { src: "/image/a6.png", label: "Retirement & Education Plans" },
  { src: "/image/a7.png", label: "Loan Services" },
  { src: "/image/a8.png", label: "Charges & Fee Structure" },
  // New images added
  { src: "/image/b.png",  label: "Service Details – Part B" },
  { src: "/image/b1.png", label: "Service Plans & Charges – Part B" },
  { src: "/image/b2.png", label: "Financial Plan Details – Part B" },
  { src: "/image/b3.png", label: "Insurance & Protection Plans – Part B" },
  { src: "/image/b4.png", label: "Investment Options – Part B" },
  { src: "/image/b5.png", label: "Savings & Wealth Creation – Part B" },
];

function GalleryPage() {
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
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      {/* HERO */}
      <section className="page-hero section-ink" aria-labelledby="gallery-heading">
        <div className="container page-hero-inner page-hero-centered">
          <div className="page-hero-copy" style={{ textAlign: "center" }} data-reveal>
            <div className="page-hero-icon-wrap" style={{ marginBottom: "2rem" }}>
              <div className="page-hero-icon-ring">
                <Images strokeWidth={1} />
              </div>
            </div>
            <p className="section-kicker light-kicker">Our Services & Plans</p>
            <h1 id="gallery-heading">
              Gallery
            </h1>
            <p className="page-hero-sub" style={{ marginInline: "auto" }}>
              Our Services, Plans &amp; Financial Solutions. Click any image to view the complete details.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="section section-light" aria-labelledby="gallery-grid-heading">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Browse our offerings</p>
            <h2 id="gallery-grid-heading">
              Service Details &amp; <em>Pricing Information.</em>
            </h2>
            <p>
              Tap any card to open the complete image, including all charges and plan details.
            </p>
          </div>
          <div data-reveal>
            <ImageLightbox images={galleryImages} />
          </div>
        </div>
      </section>
    </div>
  );
}
