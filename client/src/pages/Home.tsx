/**
 * Gallery Nail Atelier landing page: an asymmetric, high-key editorial frame
 * that introduces Lantie Nail and directs visitors into verified booking.
 */
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>Contemporary nail atelier</Eyebrow>
          <h1>Beauty in<br /><em>the details.</em></h1>
          <p>Considered nail care and artful finishes, made for your everyday.</p>
          <div className="hero-actions">
            <a className="button button--primary" href={bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowUpRight size={17} /></a>
            <Link className="text-link" href="/services">Explore services <ArrowDown size={16} /></Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src={assets.hero} alt="Soft nude gel manicure with a burgundy accent" />
          <div className="hero-image-caption"><span>01</span> Hand studies / Lantie Nail</div>
          <div className="hero-arch" aria-hidden="true" />
        </div>
        <div className="hero-side-note"><Sparkles size={14} /> Duluth, GA</div>
        <ArchiveIndex index="01 / 04" />
      </section>

      <section className="home-manifesto">
        <div className="manifesto-rail"><span>Our approach</span><span>01</span></div>
        <div className="manifesto-content">
          <Eyebrow>A little art for everyday</Eyebrow>
          <p className="manifesto-statement">Nails are the smallest canvas you carry with you. We give every shape, shade, and finish the time it deserves.</p>
          <Link href="/about" className="underlined-link">Meet Lantie Nail <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="home-services">
        <div className="section-heading section-heading--split">
          <div><Eyebrow>Selected treatments</Eyebrow><h2>Made for<br /><em>your rhythm.</em></h2></div>
          <p>From a clean natural manicure to thoughtful extensions and specialist care, choose a service that fits your day.</p>
        </div>
        <div className="service-strip">
          {["Manicure", "Pedicure", "Extensions"].map((service, index) => (
            <Link href="/services" className="service-strip-item" key={service}>
              <span>0{index + 1}</span><h3>{service}</h3><ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-booking-callout">
        <div className="callout-copy">
          <Eyebrow light>Your time, your details</Eyebrow>
          <h2>Ready when<br /><em>you are.</em></h2>
          <p>View availability and select your service through our online booking page.</p>
        </div>
        <a className="round-cta" href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Book an appointment"><span>Book</span><ArrowUpRight size={29} /></a>
      </section>
    </>
  );
}
