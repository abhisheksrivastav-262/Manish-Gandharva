import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Clock, TrendingUp, Target, BarChart3, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import sipHero from "@/assets/sip-hero.jpg";
import { ServiceBenefitsDetail } from "@/components/ServiceBenefitsDetail";
import { getServiceById } from "@/data/servicesData";

export const Route = createFileRoute("/services/sip-wealth-creation")({
  component: SIPWealthCreation,
  head: () => ({
    meta: [
      { title: "SIP Wealth Creation | Manish Gandharva – Financial Advisor Udaipur" },
      { name: "description", content: "Build long-term wealth with SIP. Understand systematic investing, compounding, and use our illustrative SIP calculator." },
    ],
    links: [{ rel: "canonical", href: "/services/sip-wealth-creation" }],
  }),
});

const serviceData = getServiceById("sip-wealth-creation")!;
const WA_MSG = encodeURIComponent(serviceData.whatsappMessage);
const phone = "9829289538";

const sipReasons = [
  { icon: Clock, title: "Disciplined Investing", body: "Regular contributions can encourage investment discipline by making it an automated habit, reducing the urge to time the market." },
  { icon: BarChart3, title: "Long-Term Approach", body: "SIP is commonly used for long-term financial goals, leveraging the power of staying invested across different market cycles." },
  { icon: Target, title: "Goal Based Planning", body: "Investments can be planned around specific financial objectives, such as education, home buying, or retirement." },
  { icon: TrendingUp, title: "Compounding Potential", body: "Over longer periods, returns may potentially compound, where earnings generate their own earnings, depending on the investment." },
];

const faqs = [
  { q: "What is SIP?", a: "A Systematic Investment Plan (SIP) is a method of investing a fixed amount regularly (e.g., monthly) into a chosen mutual fund or investment vehicle." },
  { q: "Is SIP suitable for everyone?", a: "SIP is a versatile tool suitable for various income levels. However, fund selection depends on an individual's risk appetite, financial goals, and investment horizon." },
  { q: "Can SIP help with long-term goals?", a: "Yes, SIP is specifically designed to help investors accumulate a corpus over the long term to meet goals like retirement or children's education." },
  { q: "Can I change my SIP amount?", a: "Many SIP mandates offer the flexibility to increase, decrease, pause, or stop the investment amount as your financial situation changes." },
  { q: "Are SIP returns guaranteed?", a: "No. SIPs in mutual funds are subject to market risks. Returns are not guaranteed and will fluctuate based on the performance of the underlying assets." },
];

function formatCurrency(num: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(num);
}

function SIPWealthCreation() {
  const [monthlyInvest, setMonthlyInvest] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const { totalInvested, estimatedValue, wealthGained } = useMemo(() => {
    const months = years * 12;
    const monthlyRate = expectedReturn / 12 / 100;
    const totalInvested = monthlyInvest * months;
    
    // Future Value of a Series formula (SIP)
    const futureValue = monthlyInvest * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    return {
      totalInvested,
      estimatedValue: futureValue,
      wealthGained: futureValue - totalInvested
    };
  }, [monthlyInvest, years, expectedReturn]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "SIP Wealth Creation" }]} />

      {/* HERO */}
      <section className="about-hero section-ink" aria-labelledby="sip-heading">
        <div className="container about-hero-inner">
          <div className="page-hero-copy" data-reveal style={{ paddingBottom: "3rem" }}>
            <p className="section-kicker light-kicker">Wealth Creation</p>
            <h1 id="sip-heading">Build Wealth With<br /><em>Discipline and Time.</em></h1>
            <p className="page-hero-sub">SIP can help turn regular investing into a structured long-term wealth creation habit.</p>
            <div className="hero-actions">
              <Button asChild size="lg" className="gold-button">
                <a href={serviceData.whatsappUrl} target="_blank" rel="noreferrer">Book Free Consultation →</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="light-outline">
                <a href={`https://wa.me/91${phone}?text=${WA_MSG}`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a>
              </Button>
            </div>
          </div>
          <div className="about-hero-image" data-reveal>
            <img src={sipHero} alt="Abstract financial wealth growth graph" width={600} height={580} loading="eager" />
          </div>
        </div>
      </section>

      {/* DEDICATED BENEFITS & FUTURE SECTION */}
      <section className="section section-light" aria-labelledby="sip-benefits">
        <div className="container" data-reveal>
          <ServiceBenefitsDetail service={serviceData} showTitle={false} />
        </div>
      </section>

      {/* WHAT IS SIP */}
      <section className="section section-navy" aria-labelledby="what-is-sip">
        <div className="container content-two-col" data-reveal>
          <div>
            <h2 id="what-is-sip" style={{ color: "#fff" }}>What Is a <em>SIP?</em></h2>
            <p style={{ color: "#ccc" }}>A Systematic Investment Plan allows an investor to invest a predetermined amount at regular intervals into a selected investment product.</p>
            <p style={{ color: "#ccc" }}>Rather than requiring a large lump sum upfront, it enables individuals to build their investments gradually over time, aligning with their regular income.</p>
          </div>
          <div className="sip-flow-visual" aria-label="SIP conceptual flow" style={{ padding: "2rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "1rem" }}>
            <p style={{ margin: 0, fontWeight: 500, fontSize: "1.2rem", color: "#fff" }}>Please Note:</p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>We do not make return guarantees. All investments in market-linked instruments are subject to market risks. Read all scheme-related documents carefully before investing.</p>
          </div>
        </div>
      </section>

      {/* WHY SIP WORKS */}
      <section className="section section-navy" aria-labelledby="why-sip">
        <div className="container">
          <div className="section-heading centered-heading light-heading" data-reveal>
            <p className="section-kicker light-kicker">Key Benefits</p>
            <h2 id="why-sip">Why People <em>Consider SIP.</em></h2>
            <p style={{ color: "color-mix(in oklab, var(--color-mist) 60%, transparent)", maxWidth: "600px", margin: "1rem auto 0", fontSize: "0.85rem" }}>
              Clearly understanding that market-linked investments involve risk, here is why many choose this path.
            </p>
          </div>
          <div className="points-grid" data-reveal>
            {sipReasons.map(({ icon: Icon, title, body }) => (
              <div key={title} className="point-card point-card-dark" style={{ padding: "2.5rem 1.8rem" }}>
                <Icon strokeWidth={1.5} size={28} />
                <div><h3 style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>{title}</h3><p style={{ fontSize: "0.75rem" }}>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIP + LIFE GOALS */}
      <section className="section section-light" aria-labelledby="sip-goals">
        <div className="container">
          <div className="section-heading centered-heading" data-reveal>
            <p className="section-kicker">Goal alignment</p>
            <h2 id="sip-goals">SIP + <em>Life Goals.</em></h2>
          </div>
          
          <div className="sip-journey-flow" data-reveal>
            {["Monthly Investment", "Consistent Investing", "Time", "Potential Wealth Creation", "Financial Goals"].map((step, i, arr) => (
              <div key={step} className="sip-journey-node">
                <span>{step}</span>
                {i < arr.length - 1 && <div className="sip-journey-arrow">↓</div>}
              </div>
            ))}
          </div>

          <div className="sip-goals-grid" data-reveal>
            <div className="sip-goal-pill">Child Education</div>
            <div className="sip-goal-pill">Retirement</div>
            <div className="sip-goal-pill">Home Purchase</div>
            <div className="sip-goal-pill">Long-Term Wealth</div>
          </div>
        </div>
      </section>

      {/* SIP CALCULATOR */}
      <section className="section section-ink" aria-labelledby="sip-calc">
        <div className="container content-two-col" data-reveal>
          <div>
            <p className="section-kicker light-kicker">Interactive Tool</p>
            <h2 id="sip-calc">Illustrative SIP <em>Calculator.</em></h2>
            <p>Adjust the sliders to see a conceptual illustration of how systematic investments could grow over time.</p>
            
            <div className="calc-disclaimer">
              <strong>Illustration only.</strong> Actual returns are market-linked and may vary. This calculator does not guarantee returns.
            </div>

            <div className="calc-controls">
              <div className="calc-control">
                <div className="calc-control-head">
                  <label>Monthly Investment</label>
                  <span>{formatCurrency(monthlyInvest)}</span>
                </div>
                <input type="range" min="1000" max="100000" step="500" value={monthlyInvest} onChange={(e) => setMonthlyInvest(Number(e.target.value))} />
              </div>
              
              <div className="calc-control">
                <div className="calc-control-head">
                  <label>Investment Period (Years)</label>
                  <span>{years} Years</span>
                </div>
                <input type="range" min="1" max="30" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
              </div>

              <div className="calc-control">
                <div className="calc-control-head">
                  <label>Expected Annual Return (%)</label>
                  <span>{expectedReturn}%</span>
                </div>
                <input type="range" min="5" max="18" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} />
              </div>
            </div>
          </div>
          
          <div className="calc-results-wrap">
            <div className="calc-results">
              <div className="calc-result-item">
                <span className="calc-result-label">Total Investment</span>
                <span className="calc-result-value">{formatCurrency(totalInvested)}</span>
              </div>
              <div className="calc-result-item">
                <span className="calc-result-label">Illustrative Growth</span>
                <span className="calc-result-value positive">+{formatCurrency(wealthGained)}</span>
              </div>
              <div className="calc-result-item total">
                <span className="calc-result-label">Estimated Value</span>
                <span className="calc-result-value huge">{formatCurrency(estimatedValue)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light" aria-labelledby="sip-faq">
        <div className="container faq-section" data-reveal>
          <div className="section-heading centered-heading">
            <h2 id="sip-faq">Frequently Asked <em>Questions.</em></h2>
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

      {/* FINAL CTA */}
      <section className="final-cta" aria-label="Contact options">
        <div className="container final-cta-inner" data-reveal>
          <div>
            <p className="section-kicker light-kicker">Ready to Plan Your Financial Future?</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Book a Free Consultation with Manish Gandharva</h2>
          </div>
          <div className="final-actions">
            <Button asChild className="gold-button">
              <a href={serviceData.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} className="mr-2" /> Book Free Consultation →</a>
            </Button>
            <Button asChild variant="outline" className="light-outline">
              <a href={`tel:${phone}`}><Phone /> Call {phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
