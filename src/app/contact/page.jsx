
import React from "react";
import Contact from "@/components/contact/ContactForm";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import MouseLight from "@/components/shared/MouseLight";
import Script from "next/script";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: "Contact PranavDev | Full Stack Developer & AI Solutions",
  description:
    "Get in touch with Pranav Dwivedi for web development, AI solutions, prompt engineering, and business automation. Let's build your next digital product.",
  keywords: [
    "contact pranavdev",
    "hire full stack developer",
    "AI developer contact",
    "prompt engineering services",
    "web development consultation",
    "business automation expert",
  ],
  alternates: {
    canonical: "https://www.pranavdev.online/contact",
  },
  openGraph: {
    title: "Contact PranavDev | Web, AI & Automation Services",
    description:
      "Connect with Pranav Dwivedi for full stack development, AI integration, and digital transformation services.",
    url: "https://www.pranavdev.online/contact",
    siteName: "PranavDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PranavDev",
    description:
      "Discuss your project with Pranav Dwivedi – Full Stack Developer & AI Engineer.",
  },
};

export default function Page() {
  return (
    <>
      {/* =========================
          STRUCTURED DATA
      ========================= */}

      {/* Contact Page Schema */}
      <Script id="contact-page-schema" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact PranavDev",
          "url": "https://www.pranavdev.online/contact",
          "description": "Contact page for PranavDev – Full Stack Developer and AI Engineer offering web, AI, and automation services."
        }
        `}
      </Script>

      {/* Organization / Person Schema */}
      <Script id="organization-schema" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Pranav Dwivedi",
          "url": "https://www.pranavdev.online",
          "jobTitle": "Full Stack Developer & AI Engineer",
          "sameAs": [
            "https://www.linkedin.com/in/pranavdwivedi",
            "https://github.com/pranavdev"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Business Inquiries",
            "availableLanguage": ["English", "Hindi"]
          }
        }
        `}
      </Script>

      {/* Breadcrumb Schema */}
      <Script id="breadcrumb-schema" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.pranavdev.online"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": "https://www.pranavdev.online/contact"
            }
          ]
        }
        `}
      </Script>

      {/* =========================
          PAGE CONTENT
      ========================= */}
      <main className="min-h-screen">
        <MouseLight />

        {/* SEO H1 (hidden but valid) */}
        <h1 className="sr-only">
          Contact Pranav Dwivedi – Full Stack Developer & AI Engineer
        </h1>

        {/* SEO supporting text */}
        <p className="sr-only">
          Reach out for website development, AI integration, prompt engineering,
          automation solutions, or technical consultation.
        </p>

        {/* Visible UI Sections */}
        <ContactInfoSection />
        <Contact />
      </main>
    </>
  );
}
