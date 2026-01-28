import { Geist, Geist_Mono } from "next/font/google";
import { Rowdies } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MouseLight from "@/components/shared/MouseLight";

/* Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rowdies",
});

/* SEO Metadata */
export const metadata = {
  metadataBase: new URL("https://pranavdev.online"),

  title: {
    default: "Pranav Dwivedi – Full Stack Developer | PranavDev",
    template: "%s | PranavDev",
  },

  description:
    "Pranav Dwivedi is a Full Stack Developer specializing in React, Next.js, Node.js, and modern web applications. View portfolio, blogs, and contact for projects.",

  keywords: [
    "Pranav Dwivedi",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer India",
    "PranavDev",
  ],

  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Pranav Dwivedi – Full Stack Developer",
    description:
      "Portfolio and professional services by Pranav Dwivedi – React, Next.js, Node.js, and full stack development.",
    url: "https://pranavdev.online",
    siteName: "PranavDev",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav Dwivedi – Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pranav Dwivedi – Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and scalable web applications.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

/* Root Layout */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rowdies.variable} font-sans bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617]`}
      >
        <Header />
        <MouseLight />

        {children}

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v7u9mvm13r");
          `}
        </Script>

        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
