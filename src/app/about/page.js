import React from 'react'
import Hero from '../../components/about/Hero'
import Status from '../../components/about/Status'
import OurTeam from '../../components/about/OurTeam'
import CTA from '../../components/about/cta'
import MouseLight from "@/components/shared/MouseLight";


export default function page ()  {
  return (
    <>
      <MouseLight />
      <Hero />
      <Status />
      <OurTeam />
      <CTA />
    </>
  )
}
