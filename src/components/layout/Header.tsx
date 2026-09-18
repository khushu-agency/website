"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/site";
import { LogoMark } from "@/components/ui/LogoMark";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="wrap">
          <Link href="/" className="logo" aria-label="Khushu Homepage">
            <div className="logo-mark-wrap">
              <LogoMark />
            </div>
            <span className="logo-wordmark">KHUSHU</span>
          </Link>

          <div className="status-badge">
            <span className="live-dot" />
            <span>Systems Online</span>
          </div>

          <nav className="main-nav" aria-label="Main Navigation">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-solid" aria-label="Go to contact page">
              Let&apos;s Talk
              <span className="ic">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
            <button
              className="menu-toggle"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-menu-overlay${mobileOpen ? " active" : ""}`}>
        <div className="mobile-menu">
          <div>
            <div className="mobile-menu-header">
              <Link href="/" className="logo" onClick={closeMobile}>
                <div className="logo-mark-wrap">
                  <LogoMark />
                </div>
                <span className="logo-wordmark">KHUSHU</span>
              </Link>
              <button
                className="modal-close"
                style={{ position: "static" }}
                aria-label="Close Menu"
                onClick={closeMobile}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="mobile-menu-links">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobile}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="btn btn-solid"
            style={{ width: "100%" }}
            onClick={closeMobile}
          >
            Start a Project
            <span className="ic">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
