/**
 * Lantie Nail — seasonal promotion popup.
 *
 * Opens shortly after the site loads, once per browser session, and closes on
 * a click anywhere (image or backdrop), the close button, or the Esc key.
 * It stops appearing on its own once the promotion's end date has passed.
 */
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { promo } from "@/lib/content";

const SEEN_KEY = "lantie-promo-seen";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Past the promotion window, never show it again.
    if (Date.now() > new Date(promo.endsAt).getTime()) return;

    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // Private browsing can block storage; treat it as not yet seen.
    }
    if (seen) return;

    const timer = window.setTimeout(() => setOpen(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Ignore: the popup simply shows again next load.
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="promo-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={promo.alt}
      onClick={close}>
      <div className="promo-dialog">
        <button
          ref={closeRef}
          type="button"
          className="promo-close"
          onClick={close}
          aria-label="Close announcement">
          <X size={20} strokeWidth={2} />
        </button>
        <img src={promo.image} alt={promo.alt} />
      </div>
    </div>
  );
}
