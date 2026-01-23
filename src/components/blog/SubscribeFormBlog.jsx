"use client";
import React, { useEffect, useState } from "react";
import ContactProApi from "../../services/api/contactProApi";
import { Calendar } from "lucide-react";

const SubscribeFormBlog = () => {
  const [subscribeFormOpen, setSubscribeFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubscribeFormOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubcribe = async () => {
    if (!email || !email.includes("@") || !email.includes(".") || email.includes(" ")) {
      message.error("Invalid email format");
      return;
    }

    setLoading(true);

    const body = {
      email,
      sourcePage: window.location.href,
      remarks: "Blog Subscribe Us PopUp",
    };

    await ContactProApi.subscribeMail(body);

    setEmail("");
    setLoading(false);
    setSubscribeFormOpen(false);
  };

  return (
    <section
      aria-labelledby="blog-subscribe-heading"
      aria-describedby="blog-subscribe-description"
    >
      {/* Invisible SEO Heading */}
      <h2 id="blog-subscribe-heading" className="sr-only">
        Subscribe to blog updates and insights
      </h2>

      <p id="blog-subscribe-description" className="sr-only">
        Subscribe to receive blog updates, insights, and helpful content related
        to business growth, technology, and digital strategies.
      </p>

      {/* Floating CTA Button */}
      <div className="space-y-4">
        <div className="fixed left-4 bottom-4 z-40 md:left-8">
          <div className="absolute inset-0 rounded-full bg-[#03518F]/20 animate-ping" />

          <button
            type="button"
            className="bg-[#03518F] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
            aria-label="Open subscription form"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />

            <Calendar className="w-5 h-5 animate-bounce" aria-hidden="true" />

            <span className="font-bold relative">Subscribe Us</span>
          </button>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#03518F]/10 blur-lg rounded-full" />
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={
          <h3 className="text-xl font-bold text-black text-center">
            Subscribe Us
          </h3>
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
            aria-label="Submit email subscription"
          >
            Subscribe
          </Button>,
        ]}
        width={400}
        centered
        className="ant-modal-slide-left"
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      >
        <Form layout="vertical" className="space-y-4">
          <Form.Item
            label={
              <span>
                Email Address<span className="text-red-500">*</span>
              </span>
            }
          >
            <Input
              placeholder="Johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              aria-label="Email address"
              type="email"
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* SEO-safe animations (unchanged) */}
      <style jsx global>{`
        .ant-modal-slide-left .ant-modal-content {
          animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
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
      `}</style>
    </section>
  );
};

export default SubscribeFormBlog;
