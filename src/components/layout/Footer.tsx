import Link from "next/link";
import { footerNav, siteConfig } from "@/data/site";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-cta">
          <div>
            <h2 className="head">
              Ready to build <em>what&apos;s next</em>?
            </h2>
            <p>
              Let&apos;s design the experience, build the software and add the intelligence your business actually needs.
            </p>
            <Link href="/contact" className="btn btn-solid">
              Start a Project
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                {footerNav.navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Capabilities</h4>
              <ul>
                <li>
                  <Link href="/services/digital-experience-design">Digital Experience &amp; Design</Link>
                </li>
                <li>
                  <Link href="/services/websites-software-products">Websites &amp; Software Products</Link>
                </li>
                <li>
                  <Link href="/services/ai-assistants-knowledge-systems">AI Assistants &amp; Knowledge Systems</Link>
                </li>
                <li>
                  <Link href="/services/ai-agents-workflow-automation">AI Agents &amp; Automation</Link>
                </li>
                <li>
                  <Link href="/services/document-intelligence-ai-search">Document Intelligence &amp; AI Search</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Let&apos;s Connect</h4>
              <div className="contact-line">{siteConfig.email}</div>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copy">© {new Date().getFullYear()} Khushu. All rights reserved. Digital Systems &amp; AI Agency.</div>
          <div className="tagline">
            Design Systems · Real Outcomes
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
