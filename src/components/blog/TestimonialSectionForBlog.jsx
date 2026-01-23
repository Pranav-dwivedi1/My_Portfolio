'use client'
import React from 'react'
import TestimonialsSection from "../../components/home/TestimonialsSection";
import MobileViewTestimonial from "../../components/home/MobileViewTestimonial";

const TestimonialSectionForBlog = () => {
  return (
    <section
      aria-labelledby="blog-testimonials-heading"
      aria-describedby="blog-testimonials-description"
      className="w-full"
    >
      {/* Invisible SEO heading */}
      <h2
        id="blog-testimonials-heading"
        className="sr-only"
      >
        Client testimonials and reviews
      </h2>

      {/* Invisible SEO description */}
      <p
        id="blog-testimonials-description"
        className="sr-only"
      >
        This section showcases real client testimonials and feedback, providing
        social proof and building trust for readers exploring this blog content.
      </p>

      {/* Mobile View Testimonials */}
      <div
        className="block md:hidden"
        aria-label="Client testimonials mobile view"
      >
        <MobileViewTestimonial />
      </div>

      {/* Desktop View Testimonials */}
      <div
        className="w-full hidden md:block"
        aria-label="Client testimonials desktop view"
      >
        <TestimonialsSection />
      </div>

      {/* SEO reinforcement */}
      <p className="sr-only">
        Testimonials help demonstrate credibility, experience, and customer
        satisfaction related to the services and insights discussed on this page.
      </p>
    </section>
  )
}

export default TestimonialSectionForBlog
