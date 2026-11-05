/**
 * Lantie Nail — Specials: the current month's promotion poster, shown in
 * English or Korean. Everything that changes month to month lives in
 * `special` in @/lib/content, so this page itself needs no edits.
 */
import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { ArchiveIndex, Eyebrow } from "@/components/SiteShell";
import { bookingUrl, special } from "@/lib/content";

export default function Specials() {
  const hasKorean = Boolean(special.imageKo);
  const [lang, setLang] = useState<"en" | "ko">("en");
  const poster = lang === "ko" && hasKorean ? special.imageKo : special.image;

  return (
    <>
      <section className="page-intro page-intro--specials">
        <div>
          <Eyebrow>Specials</Eyebrow>
          <h1>This month<br />at <em>Lantie.</em></h1>
        </div>
        <p>
          Seasonal offers, loyalty rewards, and gifts for our guests.
          <span className="ko" lang="ko">계절별 혜택과 단골 감사 이벤트를 안내해 드립니다.</span>
        </p>
        <ArchiveIndex index="05 / 07" />
      </section>

      {special.active ? (
        <section className="special-feature">
          <div className="special-head">
            <Eyebrow>Now on</Eyebrow>
            <h2>{special.title}</h2>
            {special.titleKo ? (
              <p className="special-title-ko" lang="ko">{special.titleKo}</p>
            ) : null}
            <p className="special-period"><CalendarDays size={16} /> {special.period}</p>

            {hasKorean ? (
              <div className="special-lang" role="group" aria-label="Poster language">
                <button
                  type="button"
                  className={lang === "en" ? "is-active" : undefined}
                  aria-pressed={lang === "en"}
                  onClick={() => setLang("en")}>
                  English
                </button>
                <button
                  type="button"
                  className={lang === "ko" ? "is-active" : undefined}
                  aria-pressed={lang === "ko"}
                  onClick={() => setLang("ko")}
                  lang="ko">
                  한국어
                </button>
              </div>
            ) : null}
          </div>

          <figure className="special-poster">
            <img src={poster} alt={special.alt} />
          </figure>

          <div className="special-actions">
            <a className="button-xl" href={bookingUrl} target="_blank" rel="noreferrer">
              Book with Square <ExternalLink size={24} strokeWidth={1.6} />
            </a>
            <p className="special-fineprint">
              Offers run while supplies last and may not be combined.
              <span className="ko" lang="ko">재고 소진 시 종료되며, 다른 할인과 중복 적용되지 않습니다.</span>
            </p>
          </div>
        </section>
      ) : (
        <section className="special-empty">
          <Eyebrow>Between offers</Eyebrow>
          <h2>No promotion<br />running <em>right now.</em></h2>
          <p>
            Our next seasonal offer will appear here. In the meantime, the full service menu is
            always open for booking.
            <span className="ko" lang="ko">다음 이벤트가 준비되면 이곳에 안내해 드리겠습니다.</span>
          </p>
          <Link href="/services" className="button button--outline">
            See the service menu <ArrowUpRight size={17} />
          </Link>
        </section>
      )}
    </>
  );
}
