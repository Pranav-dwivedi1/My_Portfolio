
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pranav's Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
  },
  
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
