import Script from "next/script";
import Hero from "@/components/services/Hero";
import Services from "@/components/services/ServicesSection";
import Cta from "@/components/services/Cta";
import MouseLight from "@/components/shared/MouseLight";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title:
    "Professional Web Development & Digital Services | PranavDev",
  description:
    "Explore professional web development, UI/UX design, SEO optimization, AI integration, and digital growth services by Pranav Dwivedi. Scalable, secure, and performance-focused solutions.",
  keywords: [
    "web development services",
    "full stack developer services",
    "react nextjs development",
    "seo services",
    "ui ux design services",
    "ai integration services",
    "business automation",
  ],
  alternates: {
    canonical: "https://www.pranavdev.online/services",
  },
  openGraph: {
    title: "Web Development & Digital Services | PranavDev",
    description:
      "End-to-end web development, AI-powered solutions, UI/UX design, and SEO services for startups and businesses.",
    url: "https://www.pranavdev.online/services",
    siteName: "PranavDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Services | PranavDev",
    description:
      "Scalable web, AI, and digital growth services by Pranav Dwivedi.",
  },
};

/* =========================
   PAGE COMPONENT
========================= */
export default function ServicesPage() {
  return (
    <>
      {/* =========================
          STRUCTURED DATA (JSON-LD)
      ========================== */}
      <Script id="services-schema" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Development & Digital Services",
          "description": "Professional web development, UI/UX design, SEO optimization, AI integration, and business automation services.",
          "provider": {
            "@type": "Person",
            "name": "Pranav Dwivedi",
            "url": "https://www.pranavdev.online"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "serviceType": [
            "Web Development",
            "Full Stack Development",
            "UI/UX Design",
            "SEO Optimization",
            "AI Integration",
            "Business Automation"
          ]
        }
        `}
      </Script>

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
              "name": "Services",
              "item": "https://www.pranavdev.online/services"
            }
          ]
        }
        `}
      </Script>

      {/* =========================
          PAGE CONTENT
      ========================== */}
      <main
        className="relative"
        role="main"
        aria-label="Services offered by PranavDev"
      >
        <MouseLight />

        {/* HERO */}
        <section aria-label="Services introduction">
          <Hero />
        </section>

        {/* SERVICES LIST */}
        <section
          aria-labelledby="services-heading"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <h1 id="services-heading" className="sr-only">
            Web Development, AI & Digital Services
          </h1>
          <Services />
        </section>

        {/* CTA */}
        <section aria-label="Call to action for services">
          <Cta />
        </section>
      </main>

      {/* =========================
          SEO REINFORCEMENT (SAFE)
      ========================== */}
      <p className="sr-only">
        PranavDev offers professional web development services including
        full stack development, React and Next.js applications, UI/UX design,
        SEO optimization, AI-powered solutions, and business automation
        for startups and enterprises worldwide.
      </p>
    </>
  );
}
