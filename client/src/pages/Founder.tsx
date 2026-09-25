/**
 * Lantie Nail — Meet the Founder: Joy Kang's background, philosophy, and the
 * team who work alongside her in the Duluth studio.
 */
import { ArrowUpRight } from "lucide-react";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl } from "@/lib/content";

export default function Founder() {
  return (
    <>
      <section className="page-intro page-intro--founder">
        <div>
          <Eyebrow>Meet the founder</Eyebrow>
          <h1>Joy <em>Kang.</em></h1>
        </div>
        <p>Founder &amp; Nail Artist — Lantie Nail, Duluth, Georgia.</p>
        <ArchiveIndex index="03 / 06" />
      </section>

      <section className="founder-feature">
        <div className="founder-portrait">
          <img src={assets.founder} alt="Joy Kang, founder and nail artist at Lantie Nail" />
          <div className="founder-portrait-caption">Joy Kang · Founder &amp; Nail Artist</div>
        </div>
        <div className="founder-copy">
          <Eyebrow>Her story</Eyebrow>
          <h2>A passion for<br /><em>healthy nails.</em></h2>
          <p>Lantie Nail was created from Joy's passion for beautiful nails — and an even greater passion for healthy nails.</p>
          <p>With years of experience in the Korean nail industry and a deep understanding of Korean nail artistry, Joy wanted to create a space where clients could experience both beautiful design and thoughtful nail care.</p>
          <p>At Lantie Nail, Joy focuses on personalized care, precise technique, and selecting the right products and services for each client's natural nails. Her goal is not simply to create nails that look beautiful today, but to help clients enjoy beautiful, healthy nails for the long term.</p>
          <a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">Book with our team <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="founder-quote">
        <Eyebrow>Her philosophy</Eyebrow>
        <blockquote>Beautiful nails should never come at the expense of <em>healthy nails.</em></blockquote>
        <div className="founder-quote-lines">
          <span>Korean artistry.</span>
          <span>Thoughtful care.</span>
          <span>A space made for you.</span>
        </div>
      </section>

      <section className="founder-team">
        <div className="founder-team-copy">
          <Eyebrow>In the studio</Eyebrow>
          <h2>Care, shared<br />by the <em>whole team.</em></h2>
          <p>Every guest is looked after by artists who work to the same standard: minimal product, precise technique, and a finish designed around your own nails.</p>
        </div>
        <div className="founder-team-image">
          <img src={assets.team} alt="The Lantie Nail team in the Duluth studio" />
          <div className="about-image-index">B / 01</div>
        </div>
      </section>
    </>
  );
}
