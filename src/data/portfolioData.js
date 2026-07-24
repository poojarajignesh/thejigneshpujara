const portfolioData = {
  "logo-design": {
  title: "Logo Design",
  description:
    "Unique, memorable and professional logo designs created for businesses across different industries.",

  projects: Array.from({ length: 70 }, (_, i) => ({
    id: i + 1,
    image: `/images/portfolio/logo-design/${i + 1}.jpg`,
  })),
},

  "packaging-design": {
    title: "Packaging Design",
    description:
      "Creative packaging designs that enhance product value and strengthen brand identity.",
    projects: [],
  },

  "brand-identity": {
    title: "Brand Identity",
    description:
      "Complete branding solutions including logo, typography, color palette and visual identity systems.",
    projects: [],
  },

  "social-media-design": {
    title: "Social Media Design",
    description:
      "Creative social media posts and digital marketing creatives for business growth.",
    projects: [],
  },

  "print-design": {
    title: "Print Design",
    description:
      "Brochures, flyers, catalogues, business stationery and premium print marketing materials.",
    projects: [],
  },

  "advertisement-design": {
    title: "Advertisement Design",
    description:
      "Outdoor advertising, newspaper advertisements, banners and promotional campaign creatives.",
    projects: [],
  },
};

export default portfolioData;