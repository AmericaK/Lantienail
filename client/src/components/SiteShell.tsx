/**
 * Gallery Nail Atelier: asymmetric editorial navigation, warm whitespace,
 * Cormorant Garamond display type, and the Lacquer Rouge booking cue.
 */
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { assets, bookingUrl, instagramUrl } from "@/lib/content";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      {children}
    </p>
  );
}

export function ArchiveIndex({ index }: { index: string }) {
  return <span className="archive-index" aria-hidden="true">{index}</span>;
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Lantie Nail home">
          <img src={assets.mark} alt="Lantie" className="brand-mark" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "nav-link nav-link--active" : "nav-link"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-book" href={bookingUrl} target="_blank" rel="noreferrer">
          <span>Book now</span><ArrowUpRight size={16} strokeWidth={1.7} />
        </a>

        <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div id="mobile-navigation" className={menuOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} className="mobile-nav-link">
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
          <a className="mobile-nav-book" href={bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowUpRight size={18} /></a>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-orbit" aria-hidden="true"><span>LN</span></div>
        <div className="footer-top">
          <div>
            <Eyebrow light>In Duluth, Georgia</Eyebrow>
            <h2>Small details,<br /><em>beautifully held.</em></h2>
          </div>
          <img className="footer-logo-mark" src={assets.mark} alt="" />
          <a className="footer-book" href={bookingUrl} target="_blank" rel="noreferrer">Book your visit <ArrowUpRight size={17} /></a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lantie Nail. All care, all detail.</p>
          <div className="footer-links">
            <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
