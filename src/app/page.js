"use client";
import React from "react";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Project";
import Skill from "../components/home/MySkills";
import Cta from "../components/home/Cta";
import Blogs from "../components/home/Blogs";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import MouseLight from "@/components/shared/MouseLight";


export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617]">
      <MouseLight />
      <Hero />
      <Projects />
      <Skill />
      <Blogs />
      <Cta />
      <WhatsAppWidget />
    </div>
  );
}
