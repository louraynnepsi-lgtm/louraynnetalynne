export const SITE = {
  name: "Louraynne Talynne",
  role: "Neuropsicóloga e Psicóloga Clínica",
  crp: "CRP 09/013939",
  city: "Goiânia/GO",
  whatsappNumber: "5562994235292",
  whatsappDisplay: "+55 62 99423-5292",
  whatsappText: "Olá, Louraynne! Gostaria de agendar uma avaliação.",
  instagramHandle: "@psi.louraynnetalynne",
  instagram: "https://instagram.com/psi.louraynnetalynne",
  address: "Rua C-154, 139 — Jd. América, Goiânia/GO, 74275-070",
};

export const whatsappLink = (text = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
