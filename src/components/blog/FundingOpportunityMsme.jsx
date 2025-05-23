"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
// import ContactModel from "../ContactModel";

const FundingOpportunityMsme = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      {open && (
        <ContactModel
          open={open}
          setOpen={setIsOpen}
          fromSource={"blogs"}
          button={"Download Funding Guide"}
        />
      )}
      <div className="bg-white rounded-2xl p-7 border-l-8 border-[#044784] shadow-xl lg:max-w-md mx-auto space-y-5 mb-6">
        <h2 className="text-2xl font-bold text-[#044784] font-IBMPlexSerif">
          Funding Opportunity For Your MSME
        </h2>
        <p className="text-gray-600">
          Thinking of starting your business or growing your existing business.
          MSME Funding will lead you to business success
        </p>
        <ul className="text-sm text-gray-800 space-y-1">
          <li>
            <FaCheckCircle className="inline text-green-600 mr-2" /> Govt.
            Scheme Support
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600 mr-2" /> Subsidies &
            Tax Benefits
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600 mr-2" /> Better
            Market Opportunities
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600 mr-2" /> Access to
            Finance
          </li>
        </ul>
        <button
          className="w-full bg-[#EA580C] text-white py-2 rounded-lg  font-medium"
          onClick={() => setIsOpen(true)}
        >
          Download Funding Guide
        </button>
      </div>
    </>
  );
};

export default FundingOpportunityMsme;