export const siteConfig = {
  name: "NuHealth Medical Wellness",
  url: "https://nuhealth-wellness.com",
  phone: "+1-313-816-0037",
  phoneDisplay: "(313) 816-0037",
  address: "1600 Gratiot Blvd Suite 2A, Marysville, MI 48040",
  consultationFee: "$50",
  serviceStates: ["Michigan", "Florida", "Alabama", "Mississippi"],
  booking: "https://nuhealth-wellness.com/booking",
  socials: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
};

export const services = {
  weightLoss: {
    name: "Weight Loss",
    href: "/weight-loss",
    treatments: [
      { name: "Semaglutide", price: 125, unit: "/mo", description: "GLP-1 Receptor Agonist" },
      { name: "Tirzepatide", price: 265, unit: "/mo", description: "Dual GIP/GLP-1 Agonist" },
      { name: "Lipo B/C", price: 25, unit: "/shot", description: "Lipotropic Injections" },
    ],
  },
  sexualHealth: {
    name: "Sexual Health",
    href: "/sexual-health",
    treatments: [
      { name: "Sildenafil", priceFrom: 90, unit: "/4 weeks", description: "PDE5 Inhibitor (as-needed)" },
      { name: "Tadalafil", priceFrom: 100, unit: "/4 weeks", description: "PDE5 Inhibitor (daily)" },
    ],
  },
  hormoneTherapy: {
    name: "Hormone Therapy",
    href: "/hormone-therapy",
    treatments: [
      { name: "TRT", price: 45, unit: "/mo", description: "Testosterone Replacement" },
      { name: "Enclomiphene", price: 115, unit: "/mo", description: "Selective Estrogen Receptor Modulator" },
      { name: "DHEA", price: 60, unit: "/mo", description: "Adrenal Hormone Support" },
    ],
  },
  performance: {
    name: "Performance",
    href: "/performance",
    treatments: [
      { name: "Glutathione", priceFrom: 60, priceTo: 120, unit: "/mo", description: "Master Antioxidant" },
      { name: "NAD+", price: 200, unit: "/mo", description: "Cellular Energy" },
      { name: "Sermorelin", price: 150, unit: "/mo", description: "Growth Hormone Peptide" },
    ],
  },
};
