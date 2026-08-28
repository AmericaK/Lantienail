/**
 * Gallery Nail Atelier about page: warm editorial storytelling with abstract
 * nail-arch geometry and an open, non-generic salon introduction.
 */
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl } from "@/lib/content";

export default function About() {
  return (
    <>
      <section className="page-intro page-intro--about">
        <div><Eyebrow>About Lantie Nail</Eyebrow><h1>Where care<br />meets craft.</h1></div>
        <p>Thoughtful nail care for the moments that deserve a little more attention.</p>
        <ArchiveIndex index="02 / 04" />
      </section>

      <section className="about-story">
        <div className="about-image-frame"><img src={assets.manicure} alt="Refined neutral gel manicure" /><div className="about-image-index">A / 01</div></div>
        <div className="about-story-copy">
          <Eyebrow>A considered appointment</Eyebrow>
          <h2>There is care<br />in every layer.</h2>
          <p>At Lantie Nail, every appointment begins with the details: the shape that feels most like you, the finish that wears beautifully, and a pace that leaves room for careful work.</p>
          <p>Our service menu moves from refined everyday care to gel designs, extensions, pedicures, and specialist treatments. It is a full spectrum of nail care, held with a light touch.</p>
          <a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">Plan your visit <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="about-principles">
        <div className="principles-head"><Eyebrow>What guides us</Eyebrow><p>Three quiet standards for every set.</p></div>
        <div className="principle-list">
          <article><span>01</span><h3>Intentional<br /><em>detail</em></h3><p>Considered work from the first shape to the final sheen.</p></article>
          <article><span>02</span><h3>Personal<br /><em>finish</em></h3><p>Services that leave room for the style and rhythm that feel like yours.</p></article>
          <article><span>03</span><h3>Gentle<br /><em>care</em></h3><p>From routine maintenance to special care, each service begins with respect for your nails.</p></article>
        </div>
      </section>

      <section className="about-location">
        <div className="location-mark" aria-hidden="true"><Sparkles size={24} /></div>
        <Eyebrow>Find your moment</Eyebrow>
        <h2>Created with care<br />in <em>Duluth, Georgia.</em></h2>
        <Link href="/contact" className="button button--outline">Contact Lantie Nail <ArrowUpRight size={17} /></Link>
      </section>
    </>
  );
}
