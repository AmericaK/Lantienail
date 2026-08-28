/**
 * Gallery Nail Atelier contact page: intentionally avoids invented contact
 * details, directing visitors to verified Instagram and Square touchpoints.
 */
import { ArrowUpRight, CalendarDays, Instagram, MapPin } from "lucide-react";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { assets, bookingUrl, instagramUrl } from "@/lib/content";

export default function Contact() {
  return (
    <>
      <section className="page-intro page-intro--contact">
        <div><Eyebrow>Contact</Eyebrow><h1>Let’s make<br />time for <em>you.</em></h1></div>
        <p>For questions, inspiration, and the latest Lantie Nail updates, reach us through Instagram or start your booking online.</p>
        <ArchiveIndex index="/ / / /" />
      </section>

      <section className="contact-routes">
        <a className="contact-route contact-route--instagram" href={instagramUrl} target="_blank" rel="noreferrer"><div className="contact-route-icon"><Instagram size={24} /></div><div><Eyebrow light>Follow & message</Eyebrow><h2>Instagram<br /><em>@lantienail_us</em></h2><p>See current work and send a direct message.</p></div><ArrowUpRight className="contact-route-arrow" size={25} /></a>
        <a className="contact-route contact-route--booking" href={bookingUrl} target="_blank" rel="noreferrer"><div className="contact-route-icon"><CalendarDays size={24} /></div><div><Eyebrow>Appointments</Eyebrow><h2>Book<br /><em>online.</em></h2><p>View services, appointment availability, and current booking details.</p></div><ArrowUpRight className="contact-route-arrow" size={25} /></a>
      </section>

      <section className="contact-location">
        <div className="contact-location-map" aria-hidden="true"><div className="map-contour map-contour--one" /><div className="map-contour map-contour--two" /><div className="map-pin"><MapPin size={22} fill="currentColor" /></div><span>Duluth<br />Georgia</span></div>
        <div className="contact-location-copy"><Eyebrow>Our studio</Eyebrow><h2>In the heart<br />of <em>Duluth, GA.</em></h2><p>Lantie Nail welcomes you in Duluth, Georgia. Start an online booking to view the most current appointment information.</p><a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">Open appointments <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="contact-signoff"><p>We look forward to<br /><em>seeing what you choose.</em></p><img src={assets.contact} alt="Soft neutral manicure close-up" /><span aria-hidden="true">LN</span></section>
    </>
  );
}
