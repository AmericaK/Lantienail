/**
 * Lantie Nail — Book: a large, unmistakable route into the Square booking
 * flow, with the "Request Joy" note given in English and Korean.
 */
import { ArrowDown, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl, joyNote } from "@/lib/content";

const steps: [string, string, string][] = [
  ["Choose a service", "Browse treatments and select the service that fits your day.", "원하시는 서비스를 선택하세요."],
  ["Select your time", "Use the online calendar to find an available appointment.", "온라인 캘린더에서 가능한 시간을 확인하세요."],
  ["Leave a note, if needed", "To request Joy, please add “Request Joy” to your booking note.", "원장 지정은 메모란에 “Request Joy”를 남겨 주세요."],
];

export default function Book() {
  return (
    <>
      <section className="page-intro page-intro--book">
        <div>
          <Eyebrow>Online booking</Eyebrow>
          <h1>Your time,<br /><em>beautifully held.</em></h1>
        </div>
        <p>
          Choose your service and appointment time through our secure online booking page.
          <span className="ko" lang="ko">안전한 온라인 예약 페이지에서 서비스와 시간을 선택하세요.</span>
        </p>
        <ArchiveIndex index="05 / 06" />
      </section>

      <section className="book-cta">
        <Eyebrow>Book online</Eyebrow>
        <h2>Book <em>online.</em></h2>
        <p className="ko" lang="ko">온라인 예약하기</p>
        <a className="button-xl" href={bookingUrl} target="_blank" rel="noreferrer">
          Book with Square <ExternalLink size={26} strokeWidth={1.6} />
        </a>
        <span className="book-cta-note">Secure booking hosted by Square · Square 보안 예약</span>
      </section>

      <section className="booking-main">
        <div className="booking-panel">
          <img className="booking-panel-art" src={assets.book} alt="Nude gel colour palette laid out on a travertine tray" />
          <div className="booking-panel-top"><span>Appointment desk</span><span>Open online</span></div>
          <div className="booking-panel-content">
            <p className="booking-number">01</p>
            <Eyebrow light>Begin your appointment</Eyebrow>
            <h2>Find a time<br /><em>that feels right.</em></h2>
            <p>Our appointment calendar, complete service menu, and live availability are hosted securely through Square.</p>
            <a className="button-xl button-xl--light" href={bookingUrl} target="_blank" rel="noreferrer">
              Book with Square <ExternalLink size={24} strokeWidth={1.6} />
            </a>
          </div>
          <div className="booking-panel-footer"><ArrowDown size={17} /> Secure online booking</div>
        </div>
        <div className="booking-steps">
          <Eyebrow>How booking works</Eyebrow>
          {steps.map(([title, detail, ko], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}<span className="ko" lang="ko">{ko}</span></p>
              </div>
              <Check size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="joy-note">
        <div className="joy-note-number">Note / 01</div>
        <div>
          <Eyebrow>Requesting Joy</Eyebrow>
          <h2>One small<br />booking note.</h2>
        </div>
        <div className="joy-note-body">
          <p className="joy-note-en">
            Would you like an appointment with Joy? Please leave the note <strong>“Request Joy”</strong> when
            booking. Without the request note, your appointment may be assigned to another technician.
          </p>
          <p className="joy-note-ko" lang="ko">{joyNote.ko}</p>
          <div className="joy-surcharge">
            <strong>{joyNote.surchargeEn}</strong>
            <span lang="ko">{joyNote.surchargeKo}</span>
          </div>
        </div>
      </section>

      <section className="book-bottom">
        <p>Not ready to choose a service?</p>
        <a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">
          Browse the full service menu <ArrowUpRight size={16} />
        </a>
      </section>
    </>
  );
}
