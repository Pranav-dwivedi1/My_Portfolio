import Image from "next/image";
import ctaBox from "@/assets/blog/innerCtaBox.webp";
import bg from "@/assets/blog/outerCtaBox.webp";
import mobilebg from "@/assets/blog/mobileOuterCtaBox.webp";

export default function CtaSection() {
  return (
    <section
      className="mt-6"
      aria-labelledby="blog-cta-heading"
    >
      {/* ✅ Invisible SEO heading */}
      <h2 id="blog-cta-heading" className="sr-only">
        Call to action for business growth and startup collaboration
      </h2>

      {/* Desktop / Tablet view */}
      <div
        className="relative w-full min-h-[650px] lg:min-h-[300px] bg-contain bg-no-repeat bg-center hidden md:flex flex-col items-center justify-center px-4 py-12"
        style={{ backgroundImage: `url('${bg.src}')` }}
        role="img"
        aria-label="Background illustration encouraging business collaboration"
      >
        <div className="max-w-4xl text-center">
          {/* Visible heading (unchanged visually) */}
          <h3 className="text-4xl md:text-4xl font-CustomSemiBold text-black uppercase">
            Your <span className="text-[#EA580C]">Dream</span> Our{" "}
            <span className="text-[#044784]">Mission</span>
          </h3>

          <p className="mt-6 text-lg text-black font-semibold">
            Connect with us to turn your ideas into impactful businesses.
          </p>

          {/* Middle Yellow Box */}
          <div className="relative mx-auto mt-6 w-[900px] h-[80px]">
            <Image
              src={ctaBox}
              alt="Highlight banner with motivational business message"
              fill
              className="object-contain"
              priority={false}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-bold text-lg text-[#1c1c1c]">
                Dream it. Plan it. Build it — together.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="px-6 py-3 bg-[#044784] text-white font-semibold rounded-full border-b-[#EA580C] border-b-4 border-r-[#EA580C] border-r-4 transition"
              aria-label="Get started with business support"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div
        className="relative bg-cover bg-no-repeat bg-center md:hidden flex flex-col items-center justify-center px-4 py-12 w-full"
        style={{ backgroundImage: `url('${mobilebg.src}')` }}
        role="img"
        aria-label="Mobile background illustration for business call to action"
      >
        <div className="max-w-80 md:max-w-4xl text-center">
          <h3 className="text-4xl md:text-6xl font-bold text-black">
            Your <span className="text-[#044784]">Dream</span>
            <br />
            Our <span className="text-[#044784]">Mission</span>
          </h3>

          <p className="mt-4 text-lg md:text-xl text-black font-semibold">
            Connect with us to turn your ideas into impactful businesses.
          </p>

          {/* Middle Yellow Box */}
          <div className="relative mx-auto mt-4 h-[60px]">
            <Image
              src={ctaBox}
              alt="Motivational banner encouraging business collaboration"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-bold text-sm text-[#1c1c1c]">
                Dream it. Plan it. Build it — together.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="px-6 py-3 bg-[#044784] text-white font-semibold rounded-full border-b-[#EA580C] border-b-4 border-r-[#EA580C] border-r-4 transition"
              aria-label="Get started with business services"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* 🔍 Invisible SEO reinforcement */}
      <p className="sr-only">
        This call to action section encourages entrepreneurs, startups, and
        businesses to connect for professional support, planning, and execution
        to turn ideas into impactful and scalable businesses.
      </p>
    </section>
  );
}
