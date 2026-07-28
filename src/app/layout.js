import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thejigneshpujara.com"),

  title: {
    default: "Jignesh Pujara | Graphic Designer in Ahmedabad",
    template: "%s | Jignesh Pujara",
  },

  description:
    "Professional Graphic Designer in Ahmedabad specializing in Logo Design, Packaging Design, Brand Identity, Print Design and Social Media Creatives with 18+ years of experience.",

  keywords: [
    "Graphic Designer Ahmedabad",
    "Logo Designer Ahmedabad",
    "Packaging Designer",
    "Brand Identity",
    "Social Media Design",
    "Print Design",
    "Advertisement Design",
    "Jignesh Pujara",
    "Graphilory",
  ],

  authors: [
    {
      name: "Jignesh Pujara",
    },
  ],

  creator: "Jignesh Pujara",

  openGraph: {
    title: "Jignesh Pujara | Graphic Designer in Ahmedabad",
    description:
      "Professional Graphic Designer specializing in Logo Design, Packaging Design, Branding, Print Design and Social Media Creatives.",

    url: "url: https://thejigneshpujara.com",

    siteName: "Jignesh Pujara",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jignesh Pujara | Graphic Designer",
    description:
      "Professional Graphic Designer specializing in Logo Design, Packaging Design, Branding and Social Media Creatives.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}