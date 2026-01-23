"use client";
import { Phone } from "lucide-react";
import { useState } from "react";
import ContactProApi from "@/services/api/contactProApi";

const BlogContactForm = ({ propsData }) => {
  const [formData, setFormData] = useState({
    name: "",
    services: "",
    mobileNo: "",
    email: "",
    subservices: "",
  });

  const [errors, setErrors] = useState({
    mobileNo: "",
    email: "",
  });

  const [apiSubService, setApiSubService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(true);

  const handleKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNo") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));

      const mobileRegex = /^[0-9]{10}$/;
      setErrors((prev) => ({
        ...prev,
        mobileNo: mobileRegex.test(numericValue)
          ? ""
          : "Please enter a valid 10-digit mobile number",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.mobileNo || errors.email) return;

    if (!formData.name || !formData.mobileNo || !formData.email) return;

    try {
      setLoading(true);
      const data = {
        clientName: formData.name,
        clientServices: formData.services,
        clientMobileNo: formData.mobileNo,
        clientEmail: formData.email,
        clientSubservices: formData.subservices,
        button: "Get Expertised Business Support Form",
      };

      await ContactProApi.create(data);

      setFormData({
        name: "",
        services: "",
        mobileNo: "",
        email: "",
        subservices: "",
      });
      setApiSubService([]);
    } catch (error) {
      console.error("error while sending contact", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="w-full"
    >
      {/* ✅ Invisible SEO heading */}
      <h2 id="contact-form-heading" className="sr-only">
        Business support contact form for expert consultation
      </h2>

      <div className="gradient-header p-4 rounded-t-xl">
        <h3 className="text-lg font-bold flex items-center text-white">
          <span className="relative flex items-center justify-center mr-3">
            <Phone
              className="transform group-hover:rotate-12 transition-all duration-300 group-hover:scale-110"
              size={22}
            />
            <span className="absolute animate-ping h-3/4 w-3/4 rounded-full bg-blue-400 opacity-20"></span>
            <span className="absolute h-full w-full rounded-full border border-blue-400/50 animate-pulse"></span>
          </span>
          Get Expertised Business Support
        </h3>
      </div>

      <div className="bg-white rounded-b-xl shadow-md px-8 py-6">
        <form
          onSubmit={handleSubmit}
          aria-describedby="contact-form-description"
        >
          {/* Invisible description for SEO */}
          <p id="contact-form-description" className="sr-only">
            Submit this form to request expert business support, consultation,
            and professional services.
          </p>

          <div className="grid grid-cols-1 gap-5 mb-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="name"
                className="p-2 border rounded border-[#CED4DA]"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mobileNo" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobileNo"
                type="tel"
                name="mobileNo"
                placeholder="Mobile no"
                autoComplete="tel"
                className={`p-2 border rounded ${
                  errors.mobileNo ? "border-red-500" : "border-[#CED4DA]"
                }`}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={formData.mobileNo}
                maxLength={10}
                aria-invalid={!!errors.mobileNo}
                aria-describedby="mobile-error"
                required
              />
              {errors.mobileNo && (
                <p id="mobile-error" className="text-red-500 text-xs mt-1">
                  {errors.mobileNo}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 mb-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                className={`p-2 border rounded ${
                  errors.email ? "border-red-500" : "border-[#CED4DA]"
                }`}
                onChange={handleChange}
                value={formData.email}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                required
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full text-white py-2 px-4 transition rounded duration-300 mb-4 ${
              loading || errors.mobileNo || errors.email || !verified
                ? "bg-[#03508f6e] cursor-not-allowed"
                : "bg-[#03518F] hover:bg-[#03508fe3]"
            }`}
            disabled={loading || errors.mobileNo || errors.email || !verified}
            aria-disabled={loading || errors.mobileNo || errors.email || !verified}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>

      {/* 🔍 SEO reinforcement */}
      <p className="sr-only">
        This form allows users to contact experts for business support,
        consultation, funding assistance, and professional services.
      </p>
    </section>
  );
};

export default BlogContactForm;
