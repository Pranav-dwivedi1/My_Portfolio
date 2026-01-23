import MouseLight from "@/components/shared/MouseLight";
import Hero from "../../components/about/Hero";
import Status from "../../components/about/Status";
import OurTeam from "../../components/about/OurTeam";
import CTA from "../../components/about/cta";

/* ✅ SERVER-SIDE SEO METADATA */
export const metadata = {
  title: "About – Full Stack Developer & Web Engineer",
  description:
    "Learn more about the developer behind this portfolio. Experience in building scalable web applications using React, Next.js, Node.js, and modern web technologies.",
  alternates: {
    canonical: "https://pranavdev.online/about",
  },
  openGraph: {
    title: "About – Full Stack Developer",
    description:
      "Professional background, experience, and skills in full stack web development.",
    url: "https://pranavdev.online/about",
    siteName: "pranavdev.online",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Decorative effect */}
      <MouseLight />

      {/* ABOUT PAGE SECTIONS */}
      <Hero />
      <Status />
      <OurTeam />
      <CTA />

      {/* 🔍 INVISIBLE SEO REINFORCEMENT */}
      <p className="sr-only">
        This about page provides background information about the website owner,
        a full stack developer specializing in React, Next.js, Node.js, and
        modern web application development. It establishes professional
        identity, experience, and technical expertise.
      </p>
    </main>
  );
}
