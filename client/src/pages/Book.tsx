/**
 * Gallery Nail Atelier booking page: a calm, practical bridge to the verified
 * Square checkout flow, with no imitation booking form or unavailable data.
 */
import { ArrowDown, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl } from "@/lib/content";

const steps = [
  ["Choose a service", "Browse treatments and select the service that fits your day."],
  ["Select your time", "Use the online calendar to find an available appointment."],
  ["Leave a note, if needed", "To request Joy, please add “Request Joy” to your booking note."],
];

export default function Book() {
  return (
    <>
      <section className="page-intro page-intro--book">
        <div><Eyebrow>Online booking</Eyebrow><h1>Your time,<br /><em>beautifully held.</em></h1></div>
        <p>Choose your service and appointment time through our secure online booking page.</p>
        <ArchiveIndex index="04 / 04" />
      </section>

      <section className="booking-main">
        <div className="booking-panel">
          <img className="booking-panel-art" src={assets.book} alt="Soft neutral manicure on white textile" />
          <div className="booking-panel-top"><span>Appointment desk</span><span>Open online</span></div>
          <div className="booking-panel-content"><p className="booking-number">01</p><Eyebrow light>Begin your appointment</Eyebrow><h2>Find a time<br /><em>that feels right.</em></h2><p>Our appointment calendar, complete service menu, and live availability are hosted securely through Square.</p><a className="button button--light" href={bookingUrl} target="_blank" rel="noreferrer">Book with Square <ExternalLink size={16} /></a></div>
          <div className="booking-panel-footer"><ArrowDown size={17} /> Secure online booking</div>
        </div>
        <div className="booking-steps">
          <Eyebrow>How booking works</Eyebrow>
          {steps.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div><Check size={19} /></article>)}
        </div>
      </section>

      <section className="joy-note">
        <div className="joy-note-number">Note / 01</div>
        <div><Eyebrow>Requesting Joy</Eyebrow><h2>One small<br />booking note.</h2></div>
        <p>Would you like an appointment with Joy? Please leave the note <strong>“Request Joy”</strong> when booking. Without the request note, your appointment may be assigned to another technician.</p>
      </section>

      <section className="book-bottom"><p>Not ready to choose a service?</p><a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">Browse the full service menu <ArrowUpRight size={16} /></a></section>
    </>
  );
}
