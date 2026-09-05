import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, useEffect } from "react";
import { MapPin, Phone, MessageCircle, Send, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Manish Gandharva | Financial Advisor Udaipur" },
      { name: "description", content: "Get in touch with Manish Gandharva, Financial Expert & Wealth Security Planner in Udaipur. Call, WhatsApp or fill the form to book a consultation." },
      { property: "og:title", content: "Contact Manish Gandharva | Financial Advisor Udaipur" },
      { property: "og:description", content: "Start a conversation about your financial future with Manish Gandharva in Udaipur." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const phone = "9829289538";
const phone2 = "9829299370";
const waUrl = `https://wa.me/91${phone}?text=Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+planning+requirements.`;

const serviceOptions = [
  "Health Insurance",
  "Term Plan",
  "Child Education Planning",
  "Retirement Planning",
  "Home Loan",
  "Car Loan",
  "Education Loan",
  "Personal Loan",
  "Financial Literacy Event",
  "SIP Wealth Creation",
  "General Enquiry",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const mobile = formData.get("mobile")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    
    if (!name || !mobile) {
      alert("Please fill in your name and mobile number.");
      return;
    }

    let waText = `Hello Manish Gandharva,\nI would like to request a consultation.\n\n*Consultation Request*\n`;
    waText += `Name: ${name}\n`;
    waText += `Phone: ${mobile}\n`;
    if (email) waText += `Email: ${email}\n`;
    if (service) waText += `Service: ${service}\n`;
    if (message) waText += `Requirement: ${message}\n\n`;
    waText += `Please contact me regarding my consultation request.\nThank you.`;

    const encodedMessage = encodeURIComponent(waText);
    const waLink = `https://wa.me/919829289538?text=${encodedMessage}`;
    
    window.open(waLink, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="page-hero section-ink contact-hero" aria-labelledby="contact-hero-heading">
        <div className="container page-hero-inner page-hero-centered">
          <div className="page-hero-copy" data-reveal>
            <p className="section-kicker light-kicker">Start a conversation</p>
            <h1 id="contact-hero-heading">Let's Start a Conversation<br /><em>About Your Financial Future.</em></h1>
            <p className="page-hero-sub">Whether you have a specific question or just want to understand your options — reach out. Every great financial journey starts with one conversation.</p>
            <div className="hero-actions">
              <Button asChild size="lg" className="gold-button">
                <a href={`tel:${phone}`}><Phone /> Call {phone}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="light-outline">
                <a href={waUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section section-light" aria-label="Contact information and enquiry form">
        <div className="container contact-grid">
          {/* CONTACT INFO */}
          <div className="contact-copy" data-reveal>
            <p className="section-kicker">Reach us</p>
            <h2>Get in Touch<br /><em>With Us.</em></h2>
            <p>Have questions about insurance, wealth creation, loans, retirement or financial planning? Use any of the options below to connect with Manish Gandharva.</p>
            <div className="contact-details">
              <a href={`tel:${phone}`}>
                <Phone />
                <span>
                  <small>Phone</small>
                  <strong>{phone}</strong>
                  <strong>{phone2}</strong>
                </span>
              </a>
              <a href={waUrl} target="_blank" rel="noreferrer">
                <MessageCircle />
                <span>
                  <small>WhatsApp</small>
                  <strong>{phone}</strong>
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Office</small>
                  <strong>276, Shreenath Complex (1st Floor),</strong>
                  <span>Above Sonu Bakery, Near Kaka Hotel,<br />Sector 11, Udaipur – Rajasthan</span>
                </span>
              </div>
            </div>

            <div className="contact-hours">
              <p className="section-kicker" style={{ marginTop: "2rem" }}>Office Hours</p>
              <p style={{ fontSize: ".8rem", color: "var(--color-muted-foreground)" }}>
                Monday – Saturday: 10:00 AM – 7:00 PM<br />
                Sunday: By appointment
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrap" data-reveal>
            {submitted ? (
              <div className="success-state">
                <span className="success-icon"><Check /></span>
                <p className="section-kicker">Thank you</p>
                <h3>Your consultation details are ready in WhatsApp.</h3>
                <p>Please tap Send in WhatsApp to submit your request. We will get back to you shortly to understand your goals and find the right next step for your financial journey.</p>
                <div style={{ display: "flex", gap: ".75rem", marginTop: ".5rem" }}>
                  <Button onClick={() => setSubmitted(false)} variant="outline">Send another enquiry</Button>
                  <Button asChild className="gold-button">
                    <a href={`tel:${phone}`}><Phone /> Call Now</a>
                  </Button>
                </div>
              </div>

            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-heading">
                  <span>01</span>
                  <h3>Request a Consultation</h3>
                </div>
                <div className="form-row">
                  <label>
                    Full Name
                    <input id="contact-name" name="name" placeholder="Your full name" required autoComplete="name" />
                  </label>
                  <label>
                    Mobile Number
                    <input id="contact-mobile" name="mobile" type="tel" placeholder="Your mobile number" required autoComplete="tel" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Email Address
                    <input id="contact-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                  </label>
                  <label>
                    Service Interest
                    <select id="contact-service" name="service" defaultValue="" required>
                      <option value="" disabled>Choose a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label>
                  Your Message
                  <textarea id="contact-message" name="message" placeholder="Tell us a little about your goals or what you would like to discuss" rows={4} required />
                </label>
                <Button type="submit" className="dark-button form-submit" id="contact-submit">
                  Request a Consultation <Send />
                </Button>
                <p className="form-note">Your details are kept private and used only to respond to your enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" aria-label="Direct contact options">
        <div className="container final-cta-inner" data-reveal>
          <div>
            <p className="section-kicker light-kicker">Prefer to call directly?</p>
            <h2>We're Just a Call<br /><em>Away.</em></h2>
            <p>Sometimes a direct conversation is the fastest way to get clarity on your financial questions.</p>
          </div>
          <div className="final-actions">
            <Button asChild className="gold-button">
              <a href={`tel:${phone}`}><Phone /> Call {phone}</a>
            </Button>
            <Button asChild variant="outline" className="light-outline">
              <a href={waUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
