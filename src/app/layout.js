import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Rowdies } from 'next/font/google';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MouseLight from "@/components/shared/MouseLight";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rowdies',
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

  alternates: {
    canonical: "https://pranavdev.online",
  },

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
        url: "/og-image.png", // must exist in /public
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
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
   <body className={`${rowdies.variable} font-sans bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617]`}>
  <Header />
  <MouseLight />
  {children}
  <SpeedInsights/>
  <Footer />
</body>

    </html>
  );
}
