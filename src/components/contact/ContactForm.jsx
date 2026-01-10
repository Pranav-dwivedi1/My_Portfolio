"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import { duration } from "moment-timezone";
import Turnstile, { useTurnstile } from "react-turnstile";

const ContactForm = ({ propsData }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobileNo: "",
    email: "",
    message: "",
    fromPage: propsData || "default-page", // Add fallback
    ipAddress: null,
    fromSource: propsData || "default-source" // Add fallback
  });

  const [errors, setErrors] = useState({
    name: "",
    company: "",
    mobileNo: "",
    email: "",
  });

  const [apiSubService, setApiSubService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(true);

  const turnstile = useTurnstile();

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

    // Check if there are any errors
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
        toast.success("Form submitted successfully!");
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
        setApiSubService([]);
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
        staggerChildren: 0,
        duration: 0,
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#4f1707] to-[#2B0C02] shadow-lg border "
    >
      <div className="text-center mb-12">
        <motion.h2
          variants={staggerItem}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {propsData === "rewards-and-recognition" 
            ? "Want To Partner With The Best?" 
            : "Connect With Us"}
          <span className="block w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          {propsData === "rewards-and-recognition"
            ? "Fill in this form and we'll get back to you"
            : "Professional Website Development – Fast, Responsive & SEO-Optimized to Boost Your Business."}
        </motion.p>
      </div>

      <motion.div
        variants={staggerItem}
        className="max-w-2xl mx-auto bg-[#230c02] bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border border-[#3a1809] shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#1a0a03] border border-[#3a1809] rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-white placeholder-gray-500"
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="mobileNo"
                className="block text-sm font-medium text-gray-300"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                placeholder="Your phone number"
                className={`w-full px-4 py-3 bg-[#1a0a03] border ${errors.mobileNo ? "border-red-500" : "border-[#3a1809]"} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-white placeholder-gray-500`}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={formData.mobileNo}
                maxLength={10}
              />
              {errors.mobileNo && (
                <p className="text-red-400 text-sm mt-1">{errors.mobileNo}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company"
                className="w-full px-4 py-3 bg-[#1a0a03] border border-[#3a1809] rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-white placeholder-gray-500"
                onChange={handleChange}
                value={formData.company}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 bg-[#1a0a03] border ${errors.email ? "border-red-500" : "border-[#3a1809]"} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-white placeholder-gray-500`}
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              rows={4}
              className="w-full px-4 py-3 bg-[#1a0a03] border border-[#3a1809] rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-white placeholder-gray-500"
              onChange={handleChange}
              value={formData.message}
            />
          </div>

          <button
            type="submit"
            disabled={loading || errors.mobileNo || errors.email || !verified}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition duration-200 shadow-lg ${loading || errors.mobileNo || errors.email || !verified
              ? "bg-orange-800 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 transform hover:-translate-y-1 hover:shadow-orange-500/20"
              }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
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
                <span>Processing...</span>
              </div>
            ) : (
              <span className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>Send Message</span>
              </span>
            )}
          </button>
        </form>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-orange-500"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ContactForm;