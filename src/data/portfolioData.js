const portfolioData = {
  "logo-design": {
    title: "Logo Design",
    description:
      "Unique, memorable and professional logo designs created for businesses across different industries.",

    cover: "/images/portfolio/logo-design/1.jpg",

    projects: Array.from({ length: 70 }, (_, i) => ({
      id: i + 1,
      title: `Logo Design ${i + 1}`,
      image: `/images/portfolio/logo-design/${i + 1}.jpg`,
    })),
  },

  "packaging-design": {
    title: "Packaging Design",
    description:
      "Creative packaging designs that enhance product value and strengthen brand identity.",

    cover: "/images/portfolio/packaging-design/1.jpg",

    projects: Array.from({ length: 1 }, (_, i) => ({
      id: i + 1,
      title: `Packaging Design ${i + 1}`,
      image: `/images/portfolio/packaging-design/${i + 1}.jpg`,
    })),
  },

  "brand-identity": {
    title: "Brand Identity",
    description:
      "Complete branding solutions including logo, typography, color palette and visual identity systems.",

    cover: "/images/portfolio/brand-identity/1.jpg",

    projects: Array.from({ length: 1 }, (_, i) => ({
      id: i + 1,
      title: `Brand Identity ${i + 1}`,
      image: `/images/portfolio/brand-identity/${i + 1}.jpg`,
    })),
  },

  "social-media-design": {
    title: "Social Media Design",
    description:
      "Creative social media posts and digital marketing creatives for business growth.",

    cover: "/images/portfolio/social-media-design/1.jpg",

    projects: Array.from({ length: 1 }, (_, i) => ({
      id: i + 1,
      title: `Social Media Design ${i + 1}`,
      image: `/images/portfolio/social-media-design/${i + 1}.jpg`,
    })),
  },

  "print-design": {
    title: "Print Design",
    description:
      "Brochures, flyers, catalogues, business stationery and premium print marketing materials.",

    cover: "/images/portfolio/print-design/1.jpg",

    projects: Array.from({ length: 1 }, (_, i) => ({
      id: i + 1,
      title: `Print Design ${i + 1}`,
      image: `/images/portfolio/print-design/${i + 1}.jpg`,
    })),
  },

  "advertisement-design": {
    title: "Advertisement Design",
    description:
      "Outdoor advertising, newspaper advertisements, banners and promotional campaign creatives.",

    cover: "/images/portfolio/advertisement-design/1.jpg",

    projects: Array.from({ length: 1 }, (_, i) => ({
      id: i + 1,
      title: `Advertisement Design ${i + 1}`,
      image: `/images/portfolio/advertisement-design/${i + 1}.jpg`,
    })),
  },
};

export default portfolioData;