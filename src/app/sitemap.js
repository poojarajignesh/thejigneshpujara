export default function sitemap() {
  const baseUrl = "https://thejigneshpujara.com";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "weekly",
    },

    {
      url: `${baseUrl}/portfolio/logo-design`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/portfolio/packaging-design`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/portfolio/brand-identity`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/portfolio/social-media-design`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/portfolio/print-design`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/portfolio/advertisement-design`,
      priority: 0.9,
    },
  ];
}