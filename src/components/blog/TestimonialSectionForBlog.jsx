'use client'
import React from 'react'
import TestimonialsSection from "../../components/home/TestimonialsSection";
import MobileViewTestimonial from "../../components/home/MobileViewTestimonial";

const TestimonialSectionForBlog = () => {
  return (
    <div>
       <MobileViewTestimonial />
            <div className="w-full md:block hidden">
              <TestimonialsSection />
            </div>
    </div>
  )
}

export default TestimonialSectionForBlog
