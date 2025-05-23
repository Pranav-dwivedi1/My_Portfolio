import Image from "next/image";
import ctaBox from "@/assets/blog/innerCtaBox.webp";
import bg from "@/assets/blog/outerCtaBox.webp";
import mobilebg from "@/assets/blog/mobileOuterCtaBox.webp";

export default function CtaSection() {
  return (
    <>
      <div className="mt-6">
        <div
          className="relative w-full min-h-[650px] lg:min-h-[300px] bg-contain bg-no-repeat bg-center hidden md:flex flex-col items-center justify-center px-4 py-12"
          style={{ backgroundImage: `url('${bg.src}')` }}
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-4xl font-CustomSemiBold text-black uppercase">
              Your <span className="text-[#EA580C]">Dream</span> Our{" "}
              <span className="text-[#044784]">Mission</span>
            </h1>

            <p className="mt-6 text-lg  text-black font-semibold">
              Connect with us to turn your ideas into impactful businesses.
            </p>

            {/* Middle Yellow Box */}
            <div className="relative mx-auto mt-6 w-[900px] h-[80px]">
              <Image
                src={ctaBox}
                alt="Inner CTA Box"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-lg  text-[#1c1c1c]">
                  Dream it. Plan it. Build it — together.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-[#044784]  text-white font-semibold rounded-full border-b-[#EA580C] border-b-4 border-r-[#EA580C] border-r-4 transition">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div
          className="relative bg-cover bg-no-repeat bg-center md:hidden flex flex-col items-center justify-center px-4 py-12 w-full"
          style={{ backgroundImage: `url('${mobilebg.src}')` }}
        >
          <div className="max-w-80 md:max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              Your <span className="text-[#044784]">Dream</span>
              <br />
              Our <span className="text-[#044784]">Mission</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-black font-semibold">
            Connect with us to turn your ideas into impactful businesses.

            </p>

            {/* Middle Yellow Box */}
            <div className="relative mx-auto mt-4  h-[60px]">
              <Image
                src={ctaBox}
                alt="Inner CTA Box"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-sm text-[#1c1c1c]">
                  Dream it. Plan it. Build it — together.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-[#044784]  text-white font-semibold rounded-full border-b-[#EA580C] border-b-4 border-r-[#EA580C] border-r-4 transition">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
