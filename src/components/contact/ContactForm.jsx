"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Input, message, Select, Spin } from "antd";
// import ContactProApi from "../services/api/contactProApi";
import { motion } from "framer-motion";
import { duration } from "moment-timezone";
import Turnstile, { useTurnstile } from "react-turnstile";

const ContactForm = ({ propsData }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    services: "",
    mobileNo: "",
    email: "",
    services: "",
    subservices: "",
    fromPage: propsData,
    ipAddress: null,
    fromSource: propsData,
  });
  const [errors, setErrors] = useState({
    mobileNo: "",
    email: "",
  });
  useEffect(() => {
    formData.fromSource = propsData;
  }, [propsData]);

  const [apiSubService, setApiSubService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(true);

  const turnstile = useTurnstile();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNo") {
      // Only allow numeric input for mobile number
      const numericValue = value.replace(/\D/g, "");
      setFormData((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));

      // Validation
      const mobileRegex = /^[0-9]{10}$/;
      setErrors((prev) => ({
        ...prev,
        mobileNo: mobileRegex.test(numericValue)
          ? ""
          : "Please enter a valid 10-digit mobile number",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Other validations (e.g., email) remain the same
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prev) => ({
          ...prev,
          email: emailRegex.test(value)
            ? ""
            : "Please enter a valid email address",
        }));
      }
    }
  };

  const apiServiceType = [
    "Registration",
    "Certification",
    "Funding",
    "Digital Marketing",
    "More Services",
  ];

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      services: value,
    }));

    if (value == "Registration") {
      setApiSubService([]);
      setApiSubService([
        "GeM Registration",
        "Limited Liability Partnership Registration",
        "Private Limited Registration",
        "Sole Proprietorship Registration",
        "Section 8 Company Registration",
      ]);
    } else if (value == "Certification") {
      setApiSubService([]);
      setApiSubService([
        "IEC Certification",
        "ISO Certification",
        "MSME Certification",
        "Startup India Certification",
        "Tax exemption Certification",
        "Udyam Certification",
        "ZED Certification",
      ]);
    } else if (value == "Funding") {
      setApiSubService([]);
      setApiSubService([
        "Global Impact Grant",
        "MSME Loans",
        "Nidhi Pryas Yojna",
        "Project Finance",
        "Seed Fund",
        "Venture Capitalist",
        "CGTMSE",
      ]);
    } else if (value == "Digital Marketing") {
      setApiSubService([]);
      setApiSubService([
        "Content Writing",
        "Email Marketing",
        "Performance Marketing",
        "Search Engine Optimization",
        "Social Media Management",
        "Website Development",
        "WhatsApp Marketing",
      ]);
    } else if (value == "More Services") {
      setApiSubService([]);
      setApiSubService(["Legal & Compliances", "Pitch Deck"]);
    }
  };

  const handleSubServicesChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      subservices: event.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.mobileNo || errors.email) {
      message.error("Please correct the errors before submitting.");
      return;
    }
    if (!formData.name) {
      console.error("Error: name is required.");
      message.error("Name is required.");
      return;
    } else if (!formData.mobileNo) {
      console.error("Error: Mobile Number is required.");
      message.error("Mobile Number is required.");
      return;
    } else if (!formData.company) {
      console.error("Error: Company Name is required.");
      message.error("Company Name is required.");
      return;
    } else if (!formData.email) {
      console.error("Error: email is required.");
      message.error("Email is required.");
      return;
    }

    try {
      setLoading(true);
      const data = {
        clientName: formData.name,
        clientCompany: formData.company,
        clientServices: formData.services,
        clientMobileNo: formData.mobileNo,
        clientEmail: formData.email,
        clientSubservices: formData.subservices,
        clientIpAddress: formData.ipAddress,
        clientFromSource: formData.fromSource,
        button: "Footer Contact Form",
      };

      const response = await ContactProApi.create(data);
      if (response) {
        setLoading(false);
      }
      setFormData({
        name: "",
        company: "",
        services: "",
        mobileNo: "",
        email: "",
        subservices: "",
        fromPage: propsData,
      });
      setApiSubService([]);
      return;
    } catch (error) {
      console.error("error while sending contact", error);
      return;
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
      className="flex flex-wrap md:flex-col w-full gap-4 justify-center items-center py-10 bg-[#EAF3FE]"
      // style={{
      //   background: "linear-gradient(149.28deg, #FFFFFF 0%, #EAEDFC 100%)",
      // }}
    >
      <motion.h2
        variants={staggerItem}
        className="text-4xl font-CustomSemiBold mt-6 text-center"
      >
        {propsData === "rewards-and-recognition"
          ? "Want To Partner With The Best??"
          : " Get started with Egniol today"}
      </motion.h2>
      <motion.p
        variants={staggerItem}
        className={` text-[#212529B2] mb-6 text-center w-[90%] ${propsData === "rewards-and-recognition"?"text-2xl":'text-sm'}`}
      >
        {propsData === "rewards-and-recognition"
          ? "Fill in this form and we'll get back to you"
          : "Have a question or feedback? Fill out the form below and we&apos;ll get back to you as soon as possible."}
      </motion.p>

      <motion.div variants={staggerItem} className="md:w-[60%] w-[90%]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 border rounded border-[#CED4DA]"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="tel"
                name="mobileNo"
                placeholder="Mobile no"
                className={`p-2 border rounded ${
                  errors.mobileNo ? "border-red-500" : "border-[#CED4DA]"
                }`}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={formData.mobileNo}
                maxLength={10}
              />
              {errors.mobileNo && (
                <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="p-2 border rounded border-[#CED4DA]"
                onChange={handleChange}
                value={formData.company}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`p-2 border rounded ${
                  errors.email ? "border-red-500" : "border-[#CED4DA]"
                }`}
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`w-full text-white py-2 px-4 transition duration-300 mb-4 ${
              loading || errors.mobileNo || errors.email || !verified
                ? "bg-[#03508f6e] cursor-not-allowed"
                : "bg-[#03518F] hover:bg-[#03508fe3]"
            }`}
            disabled={loading || errors.mobileNo || errors.email || !verified}
          >
            {loading ? <Spin size="small" /> : "Send message"}
          </button>
          {/* <Turnstile
            sitekey={siteKey}
            onSuccess={(token) => {
              console.log("Token:", token);
              fetch("/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
              }).then((response) => {
                if (response.ok) {
                  setVerified(true);
                } else {
                  turnstile.reset();
                  setVerified(false);
                }
              });
            }}
            onExpire={() => {
              console.log("Token expired. Please try again.");
              turnstile.reset(); // Resets Turnstile when the token expires
            }}
            retry="never"
            onError={(error) => {
              console.error("Turnstile error:", error);
              turnstile.reset(); // Optionally reset on error
            }}
          /> */}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
