import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const phone = "9829289538";
const whatsappUrl = `https://wa.me/91${phone}?text=Hello+Manish+ji%2C+I+would+like+to+discuss+my+financial+planning+requirements.`;

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Wealth Creation", to: "/services/sip-wealth-creation" },
  { label: "Financial Literacy", to: "/services/financial-literacy" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [routerState.location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand-mark" onClick={closeMenu} aria-label="Manish Gandharva home">
          <span className="brand-monogram">MG</span>
          <span className="brand-copy">
            <strong>Manish Gandharva</strong>
            <small>Financial Expert &amp; Wealth Security Planner</small>
          </span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navLinks.map(({ label, to }) => (
            <Link key={label} to={to} onClick={closeMenu} activeProps={{ className: "nav-link-active" }}>
              {label}
            </Link>
          ))}
          <div className="nav-mobile-actions">
            <Button asChild size="sm" className="gold-button nav-cta">
              <a href="/contact">Book Consultation</a>
            </Button>
            <div className="nav-contact-row">
              <a href={`tel:${phone}`} className="nav-contact-pill" aria-label="Call Manish Gandharva">
                <Phone /> Call Now
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-contact-pill nav-wa" aria-label="WhatsApp Manish Gandharva">
                <MessageCircle /> WhatsApp
              </a>
            </div>
          </div>
          <Button asChild size="sm" className="gold-button nav-cta nav-cta-desktop">
            <a href="/contact">Book Consultation</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}
