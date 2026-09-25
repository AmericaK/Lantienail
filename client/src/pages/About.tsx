/**
 * Lantie Nail — About: the salon's philosophy, product standards, Korean
 * artistry, and the Duluth studio, told in the brand's own words.
 */
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl, safetyStandards } from "@/lib/content";

export default function About() {
  return (
    <>
      <section className="page-intro page-intro--about">
        <div>
          <Eyebrow>About Lantie Nail</Eyebrow>
          <h1>A moment<br />to <em>rest.</em></h1>
        </div>
        <p>A nail appointment should be more than beautiful nails. It should be a moment to slow down, breathe, and take care of yourself.</p>
        <ArchiveIndex index="02 / 06" />
      </section>

      <section className="about-story">
        <div className="about-image-frame">
          <img src={assets.manicure} alt="Natural gel manicure finished in a soft neutral tone" />
          <div className="about-image-index">A / 01</div>
        </div>
        <div className="about-story-copy">
          <Eyebrow>A moment to care for yourself</Eyebrow>
          <h2>Comfort, warmth,<br />and <em>relaxation.</em></h2>
          <p>Our goal is simple — to offer every guest who walks through our doors a sense of comfort, warmth, and relaxation, while creating beautiful nails that are designed to stay healthy.</p>
          <p>At Lantie Nail, the appointment itself is part of the care: a quieter room, an unhurried pace, and attention given to the details that make a set feel like yours.</p>
          <a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">Plan your visit <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="philosophy-head">
          <Eyebrow>Our philosophy</Eyebrow>
          <h2>Healthy nails,<br /><em>beautifully designed.</em></h2>
        </div>
        <div className="philosophy-copy">
          <p>Healthy nails are the heart of Lantie Nail. We believe beautiful nails begin with healthy, natural nails.</p>
          <p>Rather than relying on unnecessary or excessive chemical products, we carefully consider the condition of your natural nails and the surrounding skin, and minimize product use wherever possible to reduce damage and maintain the health of your nails.</p>
          <p>Every service is thoughtfully designed around your individual nail condition, lifestyle, and beauty preferences — from trend-forward Korean nail art to premium personalized care.</p>
        </div>
      </section>

      <section className="safety-standards">
        <div className="safety-head">
          <Eyebrow>Products we choose</Eyebrow>
          <p>We carefully select products with your nail health and overall experience in mind.</p>
        </div>
        <div className="safety-list">
          {safetyStandards.map(([name, note], index) => (
            <article key={name}>
              <span>{`0${index + 1}`}</span>
              <h3>{name}</h3>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-korea">
        <div className="about-korea-copy">
          <Eyebrow>Korean nail artistry</Eyebrow>
          <h2>From Korea<br />to the <em>United States.</em></h2>
          <p>With ten years of experience in Korea, Lantie brings the artistry, precision, and attention to detail of Korean nail culture to the United States.</p>
          <p>From sophisticated, trend-setting nail art to refined natural nail care, every detail is designed with intention.</p>
          <div className="about-korea-stat">
            <strong>10 years</strong>
            <span>in Korea — now together with you in the United States.</span>
          </div>
        </div>
        <div className="about-korea-image">
          <img src={assets.extension} alt="Detailed Korean-style nail art with a soft glitter finish" />
          <div className="about-image-index">A / 02</div>
        </div>
      </section>

      <section className="about-pullquote">
        <Eyebrow>More than a nail appointment</Eyebrow>
        <h2>Your time.<br />Your space.<br /><em>Your value.</em></h2>
        <div className="pullquote-lines">
          <span>A little quieter.</span>
          <span>A little slower.</span>
          <span>A little more personal.</span>
        </div>
        <p>Whether you are here for a signature care service or a trend-forward Korean nail design, our goal is for you to leave feeling refreshed, cared for, and confident.</p>
      </section>

      <section className="about-location">
        <div className="location-mark" aria-hidden="true"><Sparkles size={24} /></div>
        <Eyebrow light>Lantie Nail</Eyebrow>
        <h2>The first U.S. studio,<br />in <em>Duluth, Georgia.</em></h2>
        <p className="about-location-note">Our Duluth location is the first U.S. company-operated Lantie studio, bringing the Lantie experience directly from Korea to the Atlanta area.</p>
        <Link href="/contact" className="button button--outline">Contact Lantie Nail <ArrowUpRight size={17} /></Link>
      </section>
    </>
  );
}
