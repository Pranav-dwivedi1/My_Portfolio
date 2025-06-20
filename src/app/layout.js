import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Rowdies } from 'next/font/google';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

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
  metadataBase: new URL('http://localhost:3000'),
  title: "Pranav's Portfolio",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  description: "A portfolio website showcasing my projects and skills.",
  keywords: "portfolio, web developer, projects, skills",
  authors: [{ name: "Pranav" }],
  creator: "Pranav",
  publisher: "Pranav",
  openGraph: {
    title: "Pranav's Portfolio",
    description: "A portfolio website showcasing my projects and skills.",
    url: "https://pranav-portfolio.com",
    siteName: "Pranav's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav's Portfolio",
    description: "A portfolio website showcasing my projects and skills.",
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
     <body className={`${rowdies.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
