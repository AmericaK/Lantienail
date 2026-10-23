/**
 * Gallery Nail Atelier design system: editorial restraint, genuinely verified
 * Square service details, and Lacquer Rouge as the selective brand signal.
 */
export const bookingUrl =
  "https://book.squareup.com/appointments/8qwpo8v0v73ax5/location/LS4B438NDPFE6/services";

export const instagramUrl = "https://www.instagram.com/lantienail_us/";
export const instagramHandle = "@lantienail_us";

/** Studio contact details, taken from the salon's own Square booking page. */
export const contact = {
  phone: "(678) 400-9087",
  phoneHref: "tel:+16784009087",
  addressLine1: "3294 Peachtree Industrial Blvd, Ste 2002",
  addressLine2: "Duluth, GA 30096",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=3294+Peachtree+Industrial+Blvd+Ste+2002+Duluth+GA+30096",
};

/** Requesting Joy — shown in English and Korean on the booking page. */
export const joyNote = {
  en: "Would you like an appointment with Joy? Please leave the note “Request Joy” when booking. Without the request note, your appointment may be assigned to another technician.",
  ko: "원장(Joy) 지정 예약을 원하시면 예약 시 메모란에 “Request Joy”를 남겨 주세요. 메모가 없으면 다른 담당자에게 배정될 수 있습니다.",
  surchargeEn: "Services with Joy are +$10 per service.",
  surchargeKo: "원장 지정 시 서비스당 $10이 추가됩니다.",
};

export const assets = {
  hero: "/lantie-hero.jpg",
  mark: "/lantie-mark.png",
  badge: "/lantie-badge.png",
  founder: "/lantie-founder.jpg",
  founderAlt: "/lantie-founder-alt.jpg",
  team: "/lantie-team.jpg",
  aboutNails: "/lantie-about-nails.jpg",
  koreaNails: "/lantie-korea-nails.jpg",
  manicure: "/lantie-manicure.jpg",
  pedicure: "/lantie-pedicure.jpg",
  extension: "/lantie-extension.jpg",
  book: "/lantie-book.jpg",
  contact: "/lantie-contact.jpg",
};

/** Product-safety standards shown on the About page. */
export const safetyStandards = [
  ["HEMA-Free", "Formulated without HEMA, a common cause of gel sensitivity."],
  ["TPO-Free", "Selected without TPO photoinitiators."],
  ["Non-Toxic", "Products chosen with your nail health and overall experience in mind."],
];

export const serviceGroups = [
  {
    id: "manicure",
    name: "Manicure",
    intro: "Careful shaping, color, and finishes for a polished everyday ritual.",
    image: assets.manicure,
    services: [
      ["Standard Manicure", "$35", "30 min"],
      ["Gel Manicure", "$50", "1 hr"],
      ["Gel French", "$60", "1 hr"],
      ["Gel Ombre", "$65", "1 hr 15 min"],
      ["Cateye Gel", "$80", "1 hr 30 min"],
    ],
  },
  {
    id: "pedicure",
    name: "Pedicure",
    intro: "Unhurried care, balanced with the clean finish you want to keep seeing.",
    image: assets.pedicure,
    services: [
      ["Standard Pedicure", "$40", "35 min"],
      ["Gel Pedicure", "$60", "1 hr"],
      ["Relaxing Pedicure", "$70", "1 hr"],
      ["Callus Removal", "$10", "10 min"],
      ["Polish Change for Pedicure", "$35", "30 min"],
    ],
  },
  {
    id: "extensions",
    name: "Extensions",
    intro: "Length, shape, and a tailored canvas for considered nail design.",
    image: assets.extension,
    services: [
      ["Gel Tip Extension — Short", "$70", "1 hr 10 min"],
      ["Gel Tip Extension — Medium", "$80", "1 hr 30 min"],
      ["Gel Tip Extension — Long", "$90", "1 hr 30 min"],
      ["Gel Form Extension", "$100", "30 min"],
      ["Gel Removal — Hand Only", "$10", "15 min"],
    ],
  },
];

export const careServices = [
  ["Men’s & Kids’ Care", "Gentlemen’s manicure and pedicure, plus services for children under 10.", "From $20"],
  ["Removal", "Gel, hard gel, acrylic, and pedicure gel removal options.", "From $10"],
  ["Special Care", "Ingrown nail care, Lantie special care, gel repair, and other tailored services.", "From $20"],
];
