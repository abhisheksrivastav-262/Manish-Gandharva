import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CarFront,
  Check,
  ChevronDown,
  CircleDollarSign,
  GraduationCap,
  HandCoins,
  HeartPulse,
  House,
  Landmark,
  LineChart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PiggyBank,
  Presentation,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import advisorImage from "@/assets/manish-hero.jpg";
import { ImageLightbox } from "@/components/ImageLightbox";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Manish Gandharva | Financial Expert & Wealth Planner in Udaipur" },
      {
        name: "description",
        content:
          "Personalized financial planning, insurance, loans and wealth creation guidance by Manish Gandharva in Udaipur. Health Insurance, Term Plan, SIP, Retirement Planning.",
      },
      { property: "og:title", content: "Manish Gandharva | Financial Expert & Wealth Planner" },
      {
        property: "og:description",
        content: "Plan with clarity. Protect what matters. Build lasting wealth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});


const phone = "9829289538";
const whatsappUrl = `https://wa.me/91${phone}?text=Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+planning+requirements.`;

const services: Array<{
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}> = [
  { name: "Health Insurance", description: "Protect yourself and your family from unexpected medical expenses.", icon: HeartPulse, href: "/services/health-insurance" },
  { name: "Term Plan", description: "Affordable life protection designed to secure your family's financial future.", icon: ShieldCheck, href: "/services/term-plan" },
  { name: "Child Education Planning", description: "Plan today for your child's education and future ambitions.", icon: GraduationCap, href: "/services/child-education-planning" },
  { name: "Retirement Planning", description: "Build a disciplined strategy for a financially independent retirement.", icon: PiggyBank, href: "/services/retirement-planning" },
  { name: "Home Loan", description: "Explore suitable home financing solutions for your dream home.", icon: House, href: "/services/loans" },
  { name: "Car Loan", description: "Find practical financing solutions for your next vehicle.", icon: CarFront, href: "/services/loans" },
  { name: "Education Loan", description: "Financial assistance to support higher education goals.", icon: Landmark, href: "/services/loans" },
  { name: "Personal Loan", description: "Explore personal financing solutions for important financial needs.", icon: HandCoins, href: "/services/loans" },
  { name: "Financial Literacy Events", description: "Learn practical money management, investment and planning concepts.", icon: Presentation, href: "/services/financial-literacy" },
  { name: "SIP Wealth Creation", description: "Build long-term wealth through disciplined systematic investing.", icon: TrendingUp, href: "/services/sip-wealth-creation" },
];

const trustItems = [
  { title: "Financial Guidance", text: "Personalized strategies for your goals", icon: Target },
  { title: "Wealth Security", text: "Protecting your family's financial future", icon: ShieldCheck },
  { title: "Smart Planning", text: "Clear and practical financial solutions", icon: Calculator },
  { title: "Long-Term Growth", text: "Strategies for sustainable wealth creation", icon: LineChart },
];

const whyItems = [
  ["Personalized Guidance", "Solutions based on individual goals and circumstances."],
  ["Clear Communication", "Financial concepts explained in simple language."],
  ["Goal-Based Planning", "Focus on real-life financial objectives."],
  ["Family Security", "Planning focused on protecting what matters most."],
  ["Long-Term Perspective", "Think beyond today's financial decisions."],
  ["Financial Awareness", "Build better understanding of money and financial products."],
];

const formServices = services.map((service) => service.name);

function Index() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-image-wrap" aria-hidden="true">
          <img src={advisorImage} alt="" width={1440} height={1088} />
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span /> Wealth planning with perspective</p>
            <h1>Secure Your Future.<br /><em>Build Your Wealth.</em><br />Protect What Matters Most.</h1>
            <p className="hero-lede">Personalized financial planning, insurance solutions and wealth creation strategies designed to help you make smarter financial decisions at every stage of life.</p>
            <div className="hero-actions">
              <Button asChild size="lg" className="gold-button">
                <Link to="/contact">Book a Consultation <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="light-outline">
                <Link to="/services">Explore Financial Solutions</Link>
              </Button>
            </div>
            <div className="hero-contact-row">
              <a className="hero-phone-link" href={`tel:${phone}`}><Phone /> Call {phone}</a>
              <a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a>
            </div>
          </div>
          <div className="hero-side" data-reveal>
            <div className="hero-badge"><ShieldCheck /><span><strong>Built on trust</strong><small>Clarity for every milestone</small></span></div>
            <div className="hero-chart-card">
              <div className="chart-card-top"><span>Long-term outlook</span><TrendingUp /></div>
              <div className="chart-line"><span className="chart-dot dot-one" /><span className="chart-dot dot-two" /><span className="chart-dot dot-three" /><span className="chart-dot dot-four" /><span className="chart-dot dot-five" /></div>
              <div className="chart-card-bottom"><strong>Plan with purpose</strong><span>↑ Disciplined growth</span></div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#trust"><span /> Scroll to explore</a>
      </section>

      {/* TRUST STRIP */}
      <section id="trust" className="trust-strip" aria-label="Our approach">
        <div className="container trust-grid">
          {trustItems.map(({ title, text, icon: Icon }) => (
            <div className="trust-item" key={title} data-reveal>
              <Icon />
              <span><strong>{title}</strong><small>{text}</small></span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="section section-light about-section">
        <div className="container about-grid">
          <div className="about-photo-frame" data-reveal>
            <img src={advisorImage} alt="Manish Gandharva, financial expert and wealth security planner" width={1440} height={1088} loading="lazy" />
            <div className="photo-caption"><span className="gold-rule" /><span><strong>Manish Gandharva</strong><small>Financial Expert &amp; Wealth Security Planner</small></span></div>
          </div>
          <div className="about-copy" data-reveal>
            <p className="section-kicker">Financial expert</p>
            <h2>Your Financial Future Deserves <em>a Better Plan.</em></h2>
            <p className="section-intro">Money decisions feel different when they connect to the people and dreams you care about.</p>
            <p>Manish helps individuals and families understand financial products, protect their income, plan for important life goals and create long-term wealth. Every conversation starts with where you are today—and is shaped around where you want to go.</p>
            <div className="about-points">
              {['Family protection', 'Goal-based planning', 'Retirement preparedness', 'Wealth creation'].map((point) => <span key={point}><Check /> {point}</span>)}
            </div>
            <Button asChild className="dark-button"><Link to="/about">Meet Manish Gandharva <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-navy services-section">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="section-kicker light-kicker">Financial solutions</p><h2>Financial Solutions for <br /><em>Every Stage of Life.</em></h2></div>
            <p>From protecting your family to creating long-term wealth, get financial solutions aligned with your goals.</p>
          </div>
          <div className="service-grid">
            {services.map(({ name, description, icon: Icon, href }, index) => (
              <article className="service-card" key={name} data-reveal>
                <div className="service-number">0{index + 1}</div>
                <Icon className="service-icon" />
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={href}>Explore <ArrowUpRight /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEALTH CREATION */}
      <section className="wealth-section">
        <div className="container wealth-grid">
          <div className="wealth-copy" data-reveal>
            <p className="section-kicker light-kicker">SIP wealth creation</p>
            <h2>Build Wealth With <br /><em>Discipline,</em><br />Not Guesswork.</h2>
            <p>Systematic investing can help you build a consistent money habit and keep long-term goals in view. Monthly investment, time, and the power of compounding work together to help create meaningful wealth over the long term.</p>
            <Button asChild className="gold-button"><Link to="/services/sip-wealth-creation">Explore SIP Wealth Creation <ArrowUpRight /></Link></Button>
            <small className="disclaimer">Investments are subject to market risks. Past performance is not indicative of future results.</small>
          </div>
          <div className="wealth-visual" data-reveal aria-label="Illustration of disciplined investing leading to long-term wealth">
            <div className="wealth-visual-label label-monthly"><CircleDollarSign /><span>Monthly<br /><strong>Investment</strong></span></div>
            <div className="wealth-visual-label label-compound"><BarChart3 /><span>Power of<br /><strong>Compounding</strong></span></div>
            <div className="wealth-visual-label label-goal"><Award /><span>Long-term<br /><strong>Wealth</strong></span></div>
            <div className="wealth-curve"><span /><span /><span /><span /><span /><span /></div>
            <div className="wealth-axis"><span>Start</span><span>Consistency</span><span>Time</span><span>Goals</span></div>
          </div>
        </div>
      </section>

      {/* LIFE GOALS TIMELINE */}
      <section className="section section-light goals-section">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal><p className="section-kicker">Your bigger picture</p><h2>One Financial Plan. <em>Multiple Life Goals.</em></h2><p>Financial planning should connect today's income with tomorrow's goals.</p></div>
          <div className="timeline" data-reveal>
            {[
              ['Today', 'Financial Protection', ShieldCheck],
              ['Family', 'Child Education', GraduationCap],
              ['Lifestyle', 'Home & Vehicle', House],
              ['Future', 'Retirement', Landmark],
            ].map(([title, text, Icon]) => {
              const GoalIcon = Icon as LucideIcon;
              return <div className="goal-step" key={title as string}><div className="timeline-icon"><GoalIcon /></div><span>{title as string}</span><strong>{text as string}</strong></div>;
            })}
          </div>
        </div>
      </section>

      {/* WHY MANISH GANDHARVA */}
      <section id="why-us" className="section section-ink why-section">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal><p className="section-kicker light-kicker">The Manish Gandharva difference</p><h2>Why Choose a Financial<br /><em>Planning Partner?</em></h2></div>
          <div className="why-grid">
            {whyItems.map(([title, text], index) => <div className="why-item" key={title} data-reveal><span className="why-index">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight /></div>)}
          </div>
        </div>
      </section>

      {/* FINANCIAL LITERACY */}
      <section className="event-section">
        <div className="container event-banner" data-reveal>
          <div className="event-copy"><p className="section-kicker light-kicker">Financial literacy events</p><h2>Make Better<br /><em>Financial Decisions.</em></h2><p>Financial literacy can change the way you save, invest, protect and plan for the future. Knowledge is the foundation of every good financial decision.</p><Button asChild className="light-button"><Link to="/services/financial-literacy">Enquire About Events <ArrowUpRight /></Link></Button></div>
          <div className="event-visual" aria-hidden="true"><div className="event-ring ring-one" /><div className="event-ring ring-two" /><Presentation /><span className="event-stat stat-one">Clarity</span><span className="event-stat stat-two">Confidence</span><span className="event-stat stat-three">Action</span></div>
        </div>
      </section>

      {/* SERVICE & CHARGES SECTION */}
      <section className="section section-light" aria-labelledby="service-charges-heading">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Transparent Pricing</p>
            <h2 id="service-charges-heading">Service &amp; <em>Charges.</em></h2>
            <p>Explore our services, plans and applicable charges. Click any image to view the complete details.</p>
          </div>
          <div data-reveal>
            <ImageLightbox images={[
              { src: "/image/a.png",  label: "Service Details" },
              { src: "/image/a1.png", label: "Service Plans & Charges" },
              { src: "/image/a2.png", label: "Financial Plan Details" },
              { src: "/image/a3.png", label: "Insurance & Protection Plans" },
              { src: "/image/a4.png", label: "Investment Options" },
              { src: "/image/a5.png", label: "Savings & Wealth Creation" },
              { src: "/image/a6.png", label: "Retirement & Education Plans" },
              { src: "/image/a7.png", label: "Loan Services" },
              { src: "/image/a8.png", label: "Charges & Fee Structure" },
            ]} />
          </div>
          <div className="text-center" style={{ marginTop: "3rem" }} data-reveal>
            <Button asChild className="gold-button" size="lg">
              <a href="/gallery">View Full Gallery</a>
            </Button>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS PREVIEW */}
      <GoogleReviewsSection limit={6} isHomepagePreview={true} />

      {/* FINAL CTA */}
      <section className="final-cta" aria-label="Book a consultation">
        <div className="container final-cta-inner" data-reveal>
          <div>
            <p className="section-kicker light-kicker">Your next chapter starts here</p>
            <h2>Your Financial Future Starts<br /><em>With One Conversation.</em></h2>
            <p>Let's understand your goals and explore suitable financial solutions for your future.</p>
          </div>
          <div className="final-actions">
            <Button asChild className="gold-button"><Link to="/contact">Book a Consultation <ArrowUpRight /></Link></Button>
            <Button asChild variant="outline" className="light-outline"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}