/**
 * Gallery Nail Atelier services page: exhibit-like service editing, factual
 * Square pricing, and category imagery that never imitates customer content.
 */
import { ArrowUpRight, ExternalLink, Plus } from "lucide-react";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { bookingUrl, careServices, serviceGroups } from "@/lib/content";

export default function Services() {
  return (
    <>
      <section className="page-intro page-intro--services">
        <div><Eyebrow>Services & pricing</Eyebrow><h1>Choose your<br /><em>canvas.</em></h1></div>
        <p>A selected view of the Lantie Nail menu. See the booking page for full details, availability, and current pricing.</p>
        <ArchiveIndex index="03 / 04" />
      </section>

      <section className="service-feature-list">
        {serviceGroups.map((group, groupIndex) => (
          <article className={groupIndex % 2 ? "service-feature service-feature--reversed" : "service-feature"} key={group.id}>
            <div className="service-feature-image"><img src={group.image} alt={`${group.name} service aesthetic`} /><span>0{groupIndex + 1}</span></div>
            <div className="service-feature-content">
              <Eyebrow>{group.name}</Eyebrow>
              <h2>{groupIndex === 0 ? <>Everyday,<br />elevated.</> : groupIndex === 1 ? <>A pause for<br /><em>yourself.</em></> : <>Length with<br />intention.</>}</h2>
              <p>{group.intro}</p>
              <dl className="service-menu">
                {group.services.map(([name, price, time]) => <div key={name}><dt>{name}<small>{time}</small></dt><dd>{price}</dd></div>)}
              </dl>
              <a className="underlined-link" href={bookingUrl} target="_blank" rel="noreferrer">View availability <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </section>

      <section className="more-care">
        <div className="more-care-head"><Eyebrow>More from the menu</Eyebrow><h2>Care for every<br /><em>kind of detail.</em></h2></div>
        <div className="more-care-list">
          {careServices.map(([title, detail, price], index) => <article key={title}><span>0{index + 4}</span><div><h3>{title}</h3><p>{detail}</p></div><strong>{price}</strong><Plus size={19} /></article>)}
        </div>
      </section>

      <section className="services-note">
        <div className="services-note-symbol">LN</div>
        <div><Eyebrow>Before you book</Eyebrow><h2>For the full menu,<br /><em>visit Square.</em></h2><p>Prices and treatment times shown here are selected from our current booking menu and may change. Our Square page has the latest details.</p></div>
        <a className="button button--outline" href={bookingUrl} target="_blank" rel="noreferrer">Open booking menu <ExternalLink size={16} /></a>
      </section>
    </>
  );
}
