'use client'
import { Phone } from "lucide-react";
import { useState } from "react";
import { Table, Button, Modal, Input, message, Select, Spin } from "antd";
import ContactProApi from "@/services/api/contactProApi";
const BlogContactForm = ({ propsData }) => {
    const [formData, setFormData] = useState({
        name: "",
        services: "",
        mobileNo: "",
        email: "",
        services: "",
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
        } else if (!formData.email) {
          console.error("Error: email is required.");
          message.error("Email is required.");
          return;
        }
    
        try {
          setLoading(true);
          const data = {
            clientName: formData.name,
            clientServices: formData.services,
            clientMobileNo: formData.mobileNo,
            clientEmail: formData.email,
            clientSubservices: formData.subservices,
            button: " Get Expertised Business Support Form",
          };
          
          const response = await ContactProApi.create(data);
          if (response) {
            setLoading(false);
          }
          setFormData({
            name: "",
            services: "",
            mobileNo: "",
            email: "",
            subservices: "",
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
  return (
    <div>
        <div className={`gradient-header p-4 rounded-t-xl`}>
    <h2 className="text-lg font-bold flex items-center text-white">
      <span className="relative flex items-center justify-center mr-3">
        {/* Phone icon */}
        <Phone
          className="transform group-hover:rotate-12 transition-all duration-300 group-hover:scale-110"
          size={22}
        />
        {/* Ping effect */}
        <span className="absolute animate-ping h-3/4 w-3/4 rounded-full bg-blue-400 opacity-20"></span>
        {/* Pulse ring */}
        <span className="absolute h-full w-full rounded-full border border-blue-400/50 animate-pulse"></span>
      </span> 
      Get Expertised Business Support
    </h2>
  </div>
  <div className="bg-white rounded-b-xl shadow-md px-8 py-6">
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 mb-5">
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
      <div className="grid grid-cols-1 gap-5 mb-5">
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
        className={`w-full text-white py-2 px-4 transition rounded duration-300 mb-4 ${
          loading || errors.mobileNo || errors.email || !verified
            ? "bg-[#03508f6e] cursor-not-allowed"
            : "bg-[#03518F] hover:bg-[#03508fe3]"
        }`}
        disabled={loading || errors.mobileNo || errors.email || !verified}
      >
        {loading ? <Spin size="small" /> : "Submit"}
      </button>
    </form>
  </div>
    </div>
  )
}

export default BlogContactForm
