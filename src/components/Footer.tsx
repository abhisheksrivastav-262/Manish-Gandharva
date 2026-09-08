import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Youtube, Facebook } from "lucide-react";

const phone1 = "9829289538";
const phone2 = "9829299370";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1 — Brand */}
        <div>
          <Link to="/" className="brand-mark footer-brand" aria-label="Manish Gandharva home">
            <img src="/logo.png" alt="Manish Gandharva Logo" className="brand-logo" style={{ height: '60px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} />
            <span className="brand-copy footer-brand-copy">
              <strong className="footer-brand-title">Manish Gandharva</strong>
              <small className="footer-brand-subtitle">Financial Expert &amp; Wealth Security Planner</small>
            </span>
          </Link>
          <p>Thoughtful financial planning for the life you want to build.</p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <p className="footer-col-heading">Quick Links</p>
          <nav className="footer-nav" aria-label="Footer quick links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/reviews">Google Reviews</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>

        {/* Column 3 — Services */}
        <div>
          <p className="footer-col-heading">Financial Solutions</p>
          <nav className="footer-nav" aria-label="Footer services links">
            <Link to="/services/health-insurance">Health Insurance</Link>
            <Link to="/services/term-plan">Term Plan</Link>
            <Link to="/services/child-education-planning">Child Education Planning</Link>
            <Link to="/services/retirement-planning">Retirement Planning</Link>
            <Link to="/services/sip-wealth-creation">SIP Wealth Creation</Link>
          </nav>
        </div>

        {/* Column 4 — Contact & Social */}
        <div className="footer-contact-col">
          <p className="footer-col-heading">Contact & Connect</p>
          <div className="footer-contact">
            <a href={`tel:${phone1}`} className="footer-phone">
              <Phone />
              <span>{phone1}</span>
            </a>
            <a href={`tel:${phone2}`} className="footer-phone">
              <Phone />
              <span>{phone2}</span>
            </a>
            <div className="footer-address">
              <MapPin />
              <address>
                276, Shreenath Complex (1st Floor),<br />
                Above Sonu Bakery, Near Kaka Hotel,<br />
                Sector 11, Udaipur – Rajasthan
              </address>
            </div>
            
            {/* Social Media Links */}
            <div className="footer-socials">
              <a href="https://www.instagram.com/financialplanningwithmanishg?igsi=dGJsbzRnNnV2eXN2" target="_blank" rel="noreferrer" className="social-icon instagram" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@financialplanningwithmanishg?si=6vMEAmagflozre86" target="_blank" rel="noreferrer" className="social-icon youtube" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/share/19Qaif8Vzc/" target="_blank" rel="noreferrer" className="social-icon facebook" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Manish Gandharva. All Rights Reserved.</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
