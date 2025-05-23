"use client";
import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Spin, message } from "antd";
import ContactProApi from "../../services/api/contactProApi";
import { Calendar, ArrowRight, Phone } from 'lucide-react';

const SubscribeFormBlog = () => {
    const [subscribeFormOpen , setSubscribeFormOpen ] = useState(false);
    useEffect(() => {
      // Set a timeout to open the form after 3 seconds
      const timer = setTimeout(() => {
        setSubscribeFormOpen(true);
      }, 15000);
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

 
  const handleSubcribe = async () => {
    if (!email) {
      message.error("Please enter your email address");
      return;
    }
    if (!email.includes("@")) {
      message.error("Invalid email format");
      return;
    }
    if (!email.includes(".")) {
      message.error("Invalid email format");

      return;
    }
    if (email.includes(" ")) {
      message.error("Invalid email format");

      return;
    }
    setLoading(true)
    const body = {
      email,
      sourcePage: window.location.href,
      remarks: "Blog Subscribe Us PopUp"
    };
    
    await ContactProApi.subscribeMail(body);
    setEmail("");
    setLoading(false)
    setSubscribeFormOpen(false)
  };

  return (
    <>
{/* <div className="space-y-4">
      <div className="fixed left-4 bottom-4 z-40 md:left-8">
        <div className="absolute inset-0 rounded-full bg-[#03518F]/20 animate-ping" />
        
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-[#03518F] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
          
          <Calendar className="w-5 h-5 animate-bounce" />
          
          <span className="font-bold relative">
            Subscribe Us
          </span>
          
        </button>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#03518F]/10 blur-lg rounded-full" />
      </div>
    </div> */}

      {/* Modal */}
      <Modal
        title={
          <h2 className="text-xl font-bold text-black text-center">Subscribe Us</h2>
        }
        open={subscribeFormOpen}
        onCancel={() => setSubscribeFormOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubcribe}
            className="w-full bg-gradient-to-r from-[#03518F] to-[#03508fe3] hover:from-[#03508fe3] hover:to-[#03518F]"
          >
            Subscribe
          </Button>,
        ]}
        width={400}
        centered={true}
        className="ant-modal-slide-left"
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
        // bodyStyle={{ padding: '20px' }}
      >
        <Form layout="vertical" className="space-y-4">
        
          <Form.Item
            label={
              <span>
                Email Address<span className="text-red-500">*</span>
              </span>
            }
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Johndoe@example.com"
              value={email}
              onChange={(e) =>
                setEmail( e.target.value )
              }
              className="w-full"
            />
          </Form.Item>


        
        </Form>
      </Modal>

      {/* Add this CSS to your global styles or component styles */}
      <style jsx global>{`
        .ant-modal-slide-left .ant-modal-content {
          animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .ant-modal-mask {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .ant-modal-wrap {
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ant-modal {
          transform-origin: left center;
          top: 0 !important;
          padding-bottom: 0 !important;
          margin: 0 auto;
        }

        .ant-modal-content {
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
};

export default SubscribeFormBlog;
