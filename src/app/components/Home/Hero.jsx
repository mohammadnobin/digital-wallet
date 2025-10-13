"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header Text */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12 w-full">
        <p className="text-xs sm:text-sm font-bold text-[#5f4a94] mb-2 sm:mb-3">
          E-WALLET & PAYMENT GATEWAY
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight px-4">
          The Future of Digital <br className="hidden sm:block" /> 
          <span className="sm:hidden"> </span>Payments!
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content - Activities Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg overflow-hidden max-w-md mx-auto lg:max-w-none">
              <img
                src="Activities.png"
                alt="Activities"
                className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Center - Phone Mockup */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative overflow-hidden">
            <img
              src="Mockup-1.png"
              alt="Mockup"
              className={`w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] transition-all duration-1000 ease-in-out transform ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              } hover:scale-105`}
            />
          </div>

          {/* Right Content - Main Text & CTA */}
          <div className="order-3 lg:order-3 max-w-md mx-auto lg:max-w-none">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
                Pay, Transfer & Manage Money Effortlessly & Securely
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* CTA Button */}
              <button className="bg-secondary cursor-pointer text-gray-800 font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition hover:shadow-lg active:scale-95 mb-6 sm:mb-8 w-full sm:w-auto">
                Get Started
              </button>

              {/* Rating Section */}
              <div>
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-secondary text-secondary sm:w-5 sm:h-5"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>

                {/* User Avatars */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:z-10"
                      src="/ginger-lady.jpg"
                      alt="User 1"
                    />
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:z-10"
                      src="/business-male.jpg"
                      alt="User 2"
                    />
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:z-10"
                      src="/cheerful-handsome-man.jpg"
                      alt="User 3"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}