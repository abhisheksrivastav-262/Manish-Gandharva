import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Manish Gandharva" },
      { name: "description", content: "Privacy Policy for Manish Gandharva Financial Advisory. How we handle your enquiry and personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero section-ink page-hero-compact" aria-labelledby="pp-hero-heading">
        <div className="container">
          <div className="page-hero-copy" style={{ maxWidth: "700px" }}>
            <p className="section-kicker light-kicker">Legal</p>
            <h1 id="pp-hero-heading">Privacy Policy</h1>
            <p className="page-hero-sub">Last updated: September 2026</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section section-light" aria-label="Privacy policy content">
        <div className="container privacy-content">
          <div className="privacy-body">
            <h2>1. Introduction</h2>
            <p>This Privacy Policy explains how Manish Gandharva ("we," "us," or "our") collects, uses, and handles information submitted through this website. We are committed to protecting your privacy and handling your information responsibly.</p>

            <h2>2. Information We Collect</h2>
            <p>When you use our enquiry or contact form, we may collect the following information:</p>
            <ul>
              <li>Your name</li>
              <li>Your mobile number</li>
              <li>Your email address</li>
              <li>The service you are interested in</li>
              <li>Any message or information you voluntarily provide</li>
            </ul>
            <p>We do not collect any sensitive financial data, bank account details, or payment information through this website.</p>

            <h2>3. How We Use Your Information</h2>
            <p>Information submitted through this website is used solely for the following purposes:</p>
            <ul>
              <li>To respond to your enquiry</li>
              <li>To contact you regarding your financial planning or service enquiry</li>
              <li>To understand your financial requirements so we can assist you better</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with any third parties for marketing purposes.</p>

            <h2>4. Data Security</h2>
            <p>We take reasonable measures to protect information submitted through this website. However, please be aware that no method of internet transmission is 100% secure. We encourage you to avoid sharing highly sensitive financial information through website forms.</p>

            <h2>5. Third-Party Links</h2>
            <p>This website may contain links to external websites (such as WhatsApp). We are not responsible for the privacy practices of these third-party services. We encourage you to review their privacy policies separately.</p>

            <h2>6. Cookies</h2>
            <p>This website may use standard browser cookies to improve user experience and website functionality. We do not use cookies for advertising or tracking purposes.</p>

            <h2>7. Children's Privacy</h2>
            <p>This website is intended for adults. We do not knowingly collect personal information from individuals under the age of 18.</p>

            <h2>8. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal information you have submitted to us. To exercise these rights, please contact us directly.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:9829289538">9829289538</a></li>
              <li><strong>Address:</strong> 276, Shreenath Complex (1st Floor), Above Sonu Bakery, Near Kaka Hotel, Sector 11, Udaipur – Rajasthan</li>
            </ul>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of this website after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div className="privacy-footer-nav">
            <Link to="/">← Back to Home</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
