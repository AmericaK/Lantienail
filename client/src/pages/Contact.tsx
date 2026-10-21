/**
 * Lantie Nail — Contact: the studio's real phone, address, map link and
 * Instagram. Booking links live on the Book page, not here.
 */
import { ArrowUpRight, Instagram, MapPin, Phone } from "lucide-react";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, contact, instagramHandle, instagramUrl } from "@/lib/content";

export default function Contact() {
  return (
    <>
      <section className="page-intro page-intro--contact">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1>Let’s make<br />time for <em>you.</em></h1>
        </div>
        <p>
          Call us, drop by the studio, or send a message on Instagram.
          <span className="ko" lang="ko">전화, 방문, 인스타그램 메시지로 편하게 연락 주세요.</span>
        </p>
        <ArchiveIndex index="/ / / /" />
      </section>

      <section className="contact-routes">
        <a className="contact-route contact-route--phone" href={contact.phoneHref}>
          <div className="contact-route-icon"><Phone size={24} /></div>
          <div>
            <Eyebrow light>Call the studio</Eyebrow>
            <h2>{contact.phone}</h2>
            <p>Questions about services or timing — we’re happy to help.
              <span className="ko" lang="ko">서비스나 예약 문의는 전화로 연락 주세요.</span>
            </p>
          </div>
          <ArrowUpRight className="contact-route-arrow" size={25} />
        </a>

        <a className="contact-route contact-route--instagram" href={instagramUrl} target="_blank" rel="noreferrer">
          <div className="contact-route-icon"><Instagram size={24} /></div>
          <div>
            <Eyebrow>Follow &amp; message</Eyebrow>
            <h2>Instagram<br /><em>{instagramHandle}</em></h2>
            <p>See current work and send a direct message.
              <span className="ko" lang="ko">최근 작업과 디자인을 확인하고 DM으로 문의하세요.</span>
            </p>
          </div>
          <ArrowUpRight className="contact-route-arrow" size={25} />
        </a>
      </section>

      <section className="contact-location">
        <a
          className="contact-location-map"
          href={contact.mapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Lantie Nail in Google Maps">
          <div className="map-contour map-contour--one" aria-hidden="true" />
          <div className="map-contour map-contour--two" aria-hidden="true" />
          <div className="map-pin" aria-hidden="true"><MapPin size={22} fill="currentColor" /></div>
          <span aria-hidden="true">Duluth<br />Georgia</span>
          <em className="map-open">Open in Google Maps <ArrowUpRight size={14} /></em>
        </a>
        <div className="contact-location-copy">
          <Eyebrow>Our studio</Eyebrow>
          <h2>In the heart<br />of <em>Duluth, GA.</em></h2>
          <address className="studio-address">
            <a href={contact.mapUrl} target="_blank" rel="noreferrer">
              {contact.addressLine1}<br />{contact.addressLine2}
            </a>
          </address>
          <div className="studio-lines">
            <a className="studio-line" href={contact.phoneHref}>
              <Phone size={16} /> {contact.phone}
            </a>
            <a className="studio-line" href={contact.mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={16} /> Google Maps
            </a>
            <a className="studio-line" href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={16} /> {instagramHandle}
            </a>
          </div>
        </div>
      </section>

      <section className="contact-signoff">
        <p>We look forward to<br /><em>seeing what you choose.</em></p>
        <img src={assets.contact} alt="Soft neutral manicure close-up" />
        <span aria-hidden="true">LN</span>
      </section>
    </>
  );
}
