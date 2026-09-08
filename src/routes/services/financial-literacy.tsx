import { createFileRoute } from "@tanstack/react-router";
import { Presentation, BookOpen, PiggyBank, ShieldCheck, TrendingUp, Users, ArrowUpRight, CheckCircle2, ChevronDown, Check, Send, Lightbulb, Target } from "lucide-react";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import literacyHero from "@/assets/literacy-hero.jpg";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/financial-literacy")({
  component: FinancialLiteracy,
  head: () => ({
    meta: [
      { title: "Financial Literacy Events | Manish Gandharva – Udaipur" },
      { name: "description", content: "Financial literacy workshops and awareness events in Udaipur by Manish Gandharva. Learn budgeting, saving, insurance, SIP basics, and goal-based financial planning." },
      { property: "og:title", content: "Financial Literacy Events | Manish Gandharva" },
      { property: "og:description", content: "Financial knowledge is financial power. Enquire about financial literacy events." },
    ],
    links: [{ rel: "canonical", href: "/services/financial-literacy" }],
  }),
});

const serviceData = getServiceById("financial-literacy")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);

const topics = [
  { icon: PiggyBank, label: "Money Management", detail: "Foundational rules of managing cash flow and personal budgeting." },
  { icon: BookOpen, label: "Saving Habits", detail: "Techniques to cultivate discipline and consistency in saving." },
  { icon: ShieldCheck, label: "Insurance Fundamentals", detail: "Understanding the true purpose of life and health insurance." },
  { icon: TrendingUp, label: "Investing & SIP", detail: "How systematic investment works to build long-term wealth." },
  { icon: Users, label: "Family Financial Planning", detail: "Aligning family members on financial goals and safety." },
  { icon: Target, label: "Goal-Based Planning", detail: "Structuring investments around specific life milestones." },
  { icon: Presentation, label: "Retirement Readiness", detail: "Early steps needed to secure a financially independent retirement." },
  { icon: Lightbulb, label: "Debt & Borrowing", detail: "Responsible credit usage and avoiding common debt traps." },
];

const audiences = [
  "Corporate Employees",
  "Small Business Owners",
  "Fresh Graduates",
  "Homemakers & Families",
  "Educational Institutions",
];

const faqs = [
  { q: "Who pays for these financial literacy sessions?", a: "Many of our basic awareness sessions are conducted free of cost for schools, colleges, and NGOs as a way to give back to the community. Corporate training sessions may have structured fees depending on the scope and requirements." },
  { q: "How long is a typical session?", a: "A standard introductory session lasts about 60 to 90 minutes, including a Q&A segment. We can also design half-day intensive workshops for corporate teams." },
  { q: "Can the topics be customized?", a: "Yes, absolutely. We tailor the content based on the audience—for instance, focusing more on tax planning for employees, or basic budgeting for college students." },
  { q: "Do you sell products during these events?", a: "No. The primary objective of these events is purely educational. We aim to empower attendees with knowledge. If attendees need specific financial products later, they can reach out independently." },
  { q: "How far in advance should we book?", a: "We recommend booking at least 3-4 weeks in advance so we can adequately prepare and customize the material for your specific group." },
];

function FinancialLiteracy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Financial Literacy" }]} />

      {/* HERO SECTION */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-content" data-reveal>
              <div className="hero-icon-wrapper">
                <Presentation className="text-gold" size={32} />
              </div>
              <p className="section-kicker">Knowledge & Awareness</p>
              <h1>Make Better <em>Financial Decisions.</em></h1>
              <p className="service-hero-desc">
                Financial literacy is the foundation of a secure future. We conduct comprehensive seminars, workshops, and awareness events designed to demystify money management, insurance, and investments for audiences of all backgrounds.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg" className="gold-button">
                  <a href={serviceData.whatsappUrl} target="_blank" rel="noreferrer">Book Free Consultation <ArrowUpRight className="ml-2" size={20} /></a>
                </Button>
              </div>
            </div>
            <div className="service-hero-image-wrapper" data-reveal>
              <img src={literacyHero} alt="Financial Literacy Workshop" className="service-hero-image" />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED BENEFITS & FUTURE SECTION */}
      <section className="section section-light" aria-labelledby="literacy-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      {/* EDITORIAL SECTION */}
      <section className="section section-light" aria-labelledby="why-literacy">
        <div className="container content-two-col" data-reveal>
          <div>
            <p className="section-kicker">The Impact</p>
            <h2 id="why-literacy">Financial Knowledge Can <em>Change Financial Destinies.</em></h2>
            <p>A significant portion of financial anxiety stems from a lack of understanding. When individuals understand how money works—how to protect it, save it, and grow it—they make decisions that positively alter their life trajectory.</p>
            <p>Our events bridge the gap between complex financial jargon and everyday practical implementation. We focus on clarity, actionable steps, and building long-term financial confidence.</p>
          </div>
          <div className="event-visual event-visual-static" aria-hidden="true">
            <div className="event-ring ring-one" />
            <div className="event-ring ring-two" />
            <Presentation />
            <span className="event-stat stat-one">Clarity</span>
            <span className="event-stat stat-two">Confidence</span>
            <span className="event-stat stat-three">Action</span>
          </div>
        </div>
      </section>

      {/* EVENT TOPICS */}
      <section className="section section-navy" aria-labelledby="event-topics">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Curriculum & Topics</p>
            <h2 id="event-topics">What We <em>Cover.</em></h2>
            <p>We tailor our presentations to suit the specific needs and current knowledge level of your audience.</p>
          </div>
          <div className="points-grid" data-reveal>
            {topics.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="point-card point-card-dark">
                <Icon />
                <div><h3>{label}</h3><p>{detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE & PROCESS */}
      <section className="section section-light" aria-labelledby="event-audience">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Who we serve</p>
            <h2 id="event-audience">Designed For <em>Every Audience.</em></h2>
            <p>From seasoned professionals to students just starting out, financial education is universally beneficial.</p>
          </div>
          <div className="who-grid" data-reveal>
            {audiences.map((audience) => (
              <div key={audience} className="who-card">
                <Users />
                <span>{audience}</span>
              </div>
            ))}
          </div>
          
          <div className="process-timeline mt-24" data-reveal>
            <h3 className="text-center mb-12 text-2xl font-serif text-navy">How Events Work</h3>
            <div className="timeline-grid">
              {[
                { step: "01", title: "Consultation", desc: "We discuss your audience's profile and specific needs." },
                { step: "02", title: "Customization", desc: "We tailor the curriculum and presentation material." },
                { step: "03", title: "The Event", desc: "An engaging, interactive session with Q&A." },
                { step: "04", title: "Follow-up", desc: "Providing attendees with reference materials and guides." }
              ].map((item) => (
                <div key={item.step} className="timeline-item">
                  <div className="timeline-step">{item.step}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM SECTION */}
      <section id="enquiry-form" className="section section-ink" aria-labelledby="form-heading">
        <div className="container">
          <div className="form-layout-grid" data-reveal>
            <div className="form-context">
              <p className="section-kicker light-kicker">Host a Session</p>
              <h2 id="form-heading">Bring Financial Literacy to <em>Your Organization.</em></h2>
              <p className="mb-8 text-gray-300">Fill out the details to request a workshop or seminar. We will get back to you within 24 hours to discuss scheduling and curriculum customization.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-gold mr-3" size={20} /> Tailored to your specific audience.</li>
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-gold mr-3" size={20} /> Interactive Q&A sessions included.</li>
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-gold mr-3" size={20} /> Actionable takeaways and materials provided.</li>
              </ul>
            </div>
            
            <div className="form-container bg-white p-8 rounded-2xl shadow-xl">
              {isSubmitted ? (
                <div className="success-state text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-navy mb-4">Request Received!</h3>
                  <p className="text-gray-600 mb-8">Thank you for your interest in organizing a financial literacy event. We will contact you shortly to discuss the details.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">Submit Another Request</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" placeholder="John Doe" />
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                      <input type="text" id="organization" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" placeholder="ABC Corp / XYZ School" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="audienceType" className="block text-sm font-medium text-gray-700 mb-1">Audience Type & Size</label>
                      <input type="text" id="audienceType" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" placeholder="e.g. 50 Corporate Employees" />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full navy-button" size="lg">
                    Submit Request <Send className="ml-2" size={18} />
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">By submitting, you agree to be contacted regarding this event request.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section section-light" aria-labelledby="faq-heading">
        <div className="container max-w-4xl" data-reveal>
          <div className="section-heading centered-heading">
            <h2 id="faq-heading">Frequently Asked <em>Questions.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? "active" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.q}
                  <ChevronDown className="faq-icon" />
                </button>
                <div className="faq-answer-wrapper" style={{ maxHeight: openFaq === index ? "500px" : "0" }}>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
