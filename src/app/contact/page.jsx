import React from 'react'
import Contact from "@/components/contact/ContactForm"
import ContactInfoSection from "@/components/contact/ContactInfoSection"
import MouseLight from "@/components/shared/MouseLight";


export default function page () {
  return (
    <div>
      <MouseLight />
      <ContactInfoSection/>
      <Contact/>
    </div>
  )
}
