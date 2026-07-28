export default function manifest() {
  return {
    name: "Jignesh Pujara",
    short_name: "Jignesh",
    description:
      "Professional Graphic Designer in Ahmedabad",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#ffffff",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}