export const SITE = {
  name: "Louraynne Talynne",
  role: "Neuropsicóloga e Psicóloga Clínica",
  crp: "CRP 09/013939",
  city: "Goiânia/GO",
  whatsappNumber: "5562000000000", // placeholder
  whatsappText: "Olá, Louraynne! Gostaria de agendar uma avaliação.",
  instagram: "https://instagram.com/",
};

export const whatsappLink = (text = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
