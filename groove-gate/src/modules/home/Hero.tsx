import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "../../assets/images/hero-img1.jpeg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Image - Concert Scene */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt="Concert crowd with stage lights"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay with slight gradient to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content - Centered vertically and horizontally */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-0">
          <div className="max-w-3xl mx-auto space-y-6 mb-32">
            {/* Main Heading with Visual Impact */}
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide ">
              Turn Up the Volume on Your Events – NFT Tickets, Zero Hassle!
            </h1>

            <p className="text-sm md:text-base text-white/80 leading-relaxed ">
              Craft unforgettable events with custom NFT tickets that strike the
              perfect chord—simple, stylish, and truly you.
            </p>

            {/* CTA Buttons with spacing */}
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button className="bg-white hover:bg-white/90 text-black font-medium px-8 py-3 rounded-full">
                Create Event
              </Button>
              <Button className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium px-8 py-3 rounded-full">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
