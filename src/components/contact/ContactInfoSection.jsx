"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Script from "next/script";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactInfoSection = () => {
  const sectionRef = useRef([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(itemsRef.current).forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });

    gsap.to(sectionRef.current, {
      backgroundPosition: "50% 30%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const contactMethods = [
    {
      title: "Email Us",
      info: "pranav01dev@gmail.com",
      action: "mailto:pranav01dev@gmail.com",
      itemProp: "email",
    },
    {
      title: "Call Us",
      info: "+91 8770676950",
      action: "tel:+918770676950",
      itemProp: "telephone",
    },
    {
      title: "Visit Us",
      info: "65 Kalpana Nagar, Bhopal, Madhya Pradesh, India",
      action:
        "https://www.google.com/maps/place/65,+Kalpana+Nagar,+Bhopal,+Madhya+Pradesh+462022/",
      itemProp: "address",
    },
  ];

  return (
    <>
      {/* ✅ JSON-LD STRUCTURED DATA (BEST PRACTICE) */}
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "PranavDev",
          "url": "https://www.pranavdev.online/contact",
          "email": "pranav01dev@gmail.com",
          "telephone": "+91-8770676950",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "65 Kalpana Nagar",
            "addressLocality": "Bhopal",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN",
            "postalCode": "462022",
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              "opens": "09:00",
              "closes": "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "16:00",
            },
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "+91-8770676950",
            "email": "pranav01dev@gmail.com",
          },
        })}
      </Script>

      <section
        ref={sectionRef}
        aria-labelledby="contact-heading"
        className="relative px-4 sm:px-8 md:px-24 lg:px-28 py-16 text-white font-gilroy overflow-hidden"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        {/* MICRODATA (OPTIONAL BUT SAFE) */}
        <meta itemProp="name" content="PranavDev" />
        <meta itemProp="url" content="https://www.pranavdev.online/contact" />

        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center mb-16">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Get In <span className="text-orange-400">Touch</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Contact PranavDev for web development, AI solutions, and business
              automation.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <article
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="group relative backdrop-blur-sm rounded-xl p-8 border hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 overflow-hidden"
                itemProp={method.itemProp}
              >
                <div className="relative z-10 h-full flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-6">{method.info}</p>

                  <a
                    href={method.action}
                    className="mt-auto inline-flex items-center px-6 py-2 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300"
                    aria-label={method.title}
                  >
                    {method.title.includes("Visit")
                      ? "View on Map"
                      : method.title.includes("Call")
                      ? "Call Now"
                      : "Send Email"}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 pt-12 border-t border-orange-400 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Business <span className="text-orange-400">Hours</span>
            </h3>
            <div className="max-w-md mx-auto backdrop-blur-sm rounded-lg p-6 border border-orange-400">
              <ul className="space-y-3">
                <li>
                  <time>Monday – Friday:</time> 9:00 AM – 6:00 PM
                </li>
                <li>
                  <time>Saturday:</time> 10:00 AM – 4:00 PM
                </li>
                <li>
                  <time>Sunday:</time> Closed
                </li>
              </ul>
            </div>
          </section>
        </div>

        <style jsx global>{`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-80px) translateX(15px);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-160px) translateX(0);
              opacity: 0;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ContactInfoSection;
