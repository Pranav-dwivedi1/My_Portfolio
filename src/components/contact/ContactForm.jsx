"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import Head from 'next/head';
import Script from 'next/script';
import { FiSend, FiUser, FiBriefcase, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactForm = ({ propsData }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobileNo: "",
    email: "",
    message: "",
    fromPage: propsData || "contact-page",
    ipAddress: null,
    fromSource: propsData || "contact-form"
  });

  const [errors, setErrors] = useState({
    name: "",
    company: "",
    mobileNo: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  // SEO Data
  const pageTitle = propsData === "rewards-and-recognition" 
    ? "Partner With Us | Professional Development Partnership" 
    : "Contact Us | Get Expert Web Development & AI Solutions";
  
  const pageDescription = propsData === "rewards-and-recognition"
    ? "Fill out our partnership form to collaborate on innovative web development and AI projects. Let's build something amazing together."
    : "Get in touch for custom web development, AI solutions, and digital transformation services. Free consultation available.";
  
  const pageUrl = `https://www.pranavdev.online/${propsData || 'contact'}`;

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      fromSource: propsData,
      fromPage: propsData,
    }));
  }, [propsData]);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "company":
        return value.trim() ? "" : "Company name is required";
      case "mobileNo":
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(value)
          ? ""
          : "Please enter a valid 10-digit mobile number";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value)
          ? ""
          : "Please enter a valid email address";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "mobileNo") {
      processedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, processedValue),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors = {
      name: validateField("name", formData.name),
      company: validateField("company", formData.company),
      mobileNo: validateField("mobileNo", formData.mobileNo),
      email: validateField("email", formData.email),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    try {
      setLoading(true);
      const data = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        mobileNo: formData.mobileNo,
        email: formData.email.trim(),
        message: formData.message?.trim() || null,
        ipAddress: formData.ipAddress,
        fromSource: formData.fromSource,
        fromPage: formData.fromPage,
      };

      const response = await fetch("/api/contact/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form submitted successfully! We'll contact you soon.");
        setFormData({
          name: "",
          company: "",
          mobileNo: "",
          email: "",
          message: "",
          fromPage: propsData,
          ipAddress: null,
          fromSource: propsData,
        });
        setSubmissionCount(prev => prev + 1);
      } else {
        toast.error(result.message || "Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const staggerContainer = {
    show: {
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const handleKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  const fetchIpAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setFormData((prevState) => ({
        ...prevState,
        ipAddress: data?.ip,
      }));
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Contact Web Developer, Get Quote, Free Consultation, Project Inquiry, Development Services, AI Solutions, Partnership Inquiry" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* Structured Data for Contact Form */}
      <Script id="contact-form-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Form",
          "description": pageDescription,
          "url": pageUrl,
          "breadcrumb": {
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
                "name": propsData === "rewards-and-recognition" ? "Partnership" : "Contact",
                "item": pageUrl
              }
            ]
          },
          "mainEntity": {
            "@type": "WebPageElement",
            "name": "Contact Form",
            "description": "Get in touch for web development and AI solutions"
          }
        })}
      </Script>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <h1>{propsData === "rewards-and-recognition" ? "Partnership Inquiry Form" : "Contact Form - Get Expert Development Services"}</h1>
        <h2>{propsData === "rewards-and-recognition" ? "Collaborate on Innovative Projects" : "Connect for Custom Web Solutions"}</h2>
        <p>Fill out this form to discuss your project requirements, get a free consultation, or inquire about our development services.</p>
        
        <h3>Our Response Time</h3>
        <ul>
          <li>Initial Response: Within 4 Hours</li>
          <li>Business Hours: Monday - Friday, 9 AM - 6 PM IST</li>
          <li>Weekend Inquiries: Response on Monday</li>
          <li>Emergency Support: Available for Existing Clients</li>
        </ul>

        <h3>What Happens After Submission</h3>
        <ul>
          <li>You'll receive a confirmation email</li>
          <li>We'll schedule a free consultation call</li>
          <li>Project analysis and quote preparation</li>
          <li>Regular updates throughout the process</li>
        </ul>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        {/* Success Stats */}
        {submissionCount > 0 && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
            <div className="text-center">
              <p className="text-green-400 text-sm">
                ✅ <span className="font-medium">Successfully submitted!</span> We've helped {submissionCount + 50} clients with their projects.
              </p>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            itemProp="name"
          >
            {propsData === "rewards-and-recognition" 
              ? "Want To Partner With The Best?" 
              : "Start Your Project Today"}
            <span className="block w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full"></span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            itemProp="description"
          >
            {propsData === "rewards-and-recognition"
              ? "Fill in this form and we'll get back to you within 4 hours"
              : "Get expert web development, AI solutions, and digital transformation services with a free consultation."}
          </motion.p>

          {/* Quick Response Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
          >
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Average Response Time: 4 Hours</span>
          </motion.div>
        </div>

        <motion.div
          variants={staggerItem}
          className="max-w-2xl mx-auto backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 shadow-xl"
        >
          {/* Form Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Step 1 of 2</span>
              <span className="text-sm text-gray-400">Contact Form</span>
            </div>
            <div className="w-full bg-gray-700/30 rounded-full h-2">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full w-1/2"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactPoint">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 flex items-center gap-2"
                >
                  <FiUser className="w-4 h-4 text-blue-400" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  itemProp="name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="mobileNo"
                  className="block text-sm font-medium text-gray-300 flex items-center gap-2"
                >
                  <FiPhone className="w-4 h-4 text-green-400" />
                  <span>Mobile Number *</span>
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="9876543210"
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.mobileNo ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500`}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  value={formData.mobileNo}
                  maxLength={10}
                  required
                  itemProp="telephone"
                />
                {errors.mobileNo && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.mobileNo}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 flex items-center gap-2"
                >
                  <FiBriefcase className="w-4 h-4 text-purple-400" />
                  <span>Company / Organization *</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500"
                  onChange={handleChange}
                  value={formData.company}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 flex items-center gap-2"
                >
                  <FiMail className="w-4 h-4 text-cyan-400" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.email ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500`}
                  onChange={handleChange}
                  value={formData.email}
                  required
                  itemProp="email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 flex items-center gap-2"
              >
                <FiMessageSquare className="w-4 h-4 text-amber-400" />
                <span>Project Details / Requirements</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500"
                onChange={handleChange}
                value={formData.message}
                itemProp="description"
              />
              <p className="text-xs text-gray-500 mt-1">
                Provide as much detail as possible for a more accurate quote
              </p>
            </div>

            {/* Privacy Notice */}
            <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <p className="text-sm text-gray-400">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy
                </a>
                . We respect your privacy and will never share your information with third parties.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || errors.mobileNo || errors.email}
              className={`w-full py-4 px-6 rounded-lg font-medium text-white transition duration-200 shadow-lg flex items-center justify-center gap-2 group ${loading || errors.mobileNo || errors.email
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
                }`}
              itemProp="potentialAction"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Processing Your Request...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>{propsData === "rewards-and-recognition" ? "Submit Partnership Request" : "Send Message & Get Free Consultation"}</span>
                </>
              )}
            </button>

            {/* Alternative Contact */}
            <div className="text-center pt-6 border-t border-gray-700/30">
              <p className="text-sm text-gray-400">
                Prefer to call? Contact us at{' '}
                <a href="tel:+918770676950" className="text-orange-400 hover:text-orange-300 font-medium">
                  +91 877-067-6950
                </a>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          variants={staggerItem}
          className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Response Time",
              description: "Initial response within 4 hours during business days",
              icon: "⏱️"
            },
            {
              title: "Consultation",
              description: "Free 30-minute project consultation available",
              icon: "🎯"
            },
            {
              title: "Confidential",
              description: "All information kept secure and private",
              icon: "🔒"
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/30 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-orange-500/40 to-amber-500/40"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                filter: 'blur(2px)'
              }}
            />
          ))}
        </div>

        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-60px) translateX(10px) rotate(180deg); opacity: 0.8; }
            100% { transform: translateY(-120px) translateX(0) rotate(360deg); opacity: 0; }
          }
        `}</style>
      </motion.div>
    </>
  );
};

export default ContactForm;