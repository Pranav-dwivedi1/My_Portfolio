import React from 'react'
import Hero from "@/components/services/Hero"
import Services from "@/components/services/ServicesSection"
import Cta from "@/components/services/Cta"
import MouseLight from "@/components/shared/MouseLight";


export default function page() {
  return (
    <>
      <MouseLight />
      <Hero />
      <Services />
      <Cta />
    </>
  )
}
