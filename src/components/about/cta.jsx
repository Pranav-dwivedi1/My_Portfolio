"use client";

import React, { useRef, useState } from "react";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import {
  FiArrowRight,
  FiPhone,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

export default function CTASection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section
      className="relative min-h-[75vh] py-12 flex items-center justify-center overflow-hidden text-white"
      aria-labelledby="cta-heading"
    >
      {/* ✅ Invisible SEO heading */}
      <h2 id="cta-heading" className="sr-only">
        Call to action for digital services and project collaboration
      </h2>

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background video showcasing digital work"
      >
        <source src="/videos/cta-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0f172a]/85 to-[#020617]/90" />

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur"
        >
          {playing ? <FiPause /> : <FiPlay />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute background video" : "Mute background video"}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur"
        >
          {muted ? <FiVolumeX /> : <FiVolume2 />}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-6">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 text-xs uppercase tracking-wider text-cyan-300 bg-white/10 rounded-full border border-white/10">
              Let’s Work Together
            </span>

            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Digital Success
              </span>
            </h3>

            <p className="text-white/80 text-lg max-w-xl">
              We transform ideas into powerful digital experiences using modern
              technology. Our team builds fast, scalable, and user-friendly
              solutions. Let’s create something that stands out in the digital
              world.
            </p>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-cyan-300">200+</p>
                <p className="text-sm text-white/60">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-300">98%</p>
                <p className="text-sm text-white/60">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
            <h4 className="text-2xl font-bold mb-2">
              Ready to get started?
            </h4>
            <p className="text-white/70 mb-6">
              Book a free call or explore our latest insights.
            </p>

            <div className="space-y-4">
              <ButtonOrange
                onClick={() => window.open("tel:+918770676950")}
                className="w-full flex items-center justify-center gap-2"
                aria-label="Schedule a consultation call"
              >
                <FiPhone />
                <span>Schedule a Call</span>
              </ButtonOrange>

              <ButtonGray
                text="New Blogs"
                link="/blogs"
                className="w-full flex items-center justify-center gap-2"
                aria-label="Read latest blog articles"
              >
                <FiArrowRight />
              </ButtonGray>
            </div>

            <div className="mt-6 flex justify-center gap-6 text-sm text-white/60">
              <span>✔ Free Consultation</span>
              <span>✔ No Commitment</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 Invisible SEO reinforcement */}
      <p className="sr-only">
        This call to action section invites users to collaborate on digital
        projects including website development, web applications, and modern
        digital solutions. It highlights experience, trust, and conversion
        intent.
      </p>
    </section>
  );
}
