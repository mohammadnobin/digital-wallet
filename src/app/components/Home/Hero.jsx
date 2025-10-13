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
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen items-center">
      <div className="text-center py-4 w-full">
        <p className="text-sm font-bold text-[#5f4a94]">
          E-WALLET & PAYMENT GATEWAY
        </p>
        <h1 className="text-3xl lg:text-6xl font-bold text-gray-900">
          The Future of Digital <br /> Payments!
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
              <img
                src="Activities.png"
                alt="Activities"
                className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Center - Phones & Main Content */}
          <div className="flex flex-col items-center justify-center relative overflow-hidden">
            <img
              src="Mockup-1.png"
              alt="Mockup"
              className={`w-full max-w-[400px] transition-all duration-1000 ease-in-out transform ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              } hover:scale-105`}
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                Pay, Transfer & Manage Money Effortlessly & Securely
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Experience the perfect digital wallet — fast transfers, 
                secure payments, and complete control of your money. 
                Your smarter way to handle finances starts here.
              </p>

              {/* Button */}
              <button className="bg-secondary text-gray-800 font-bold px-8 py-3 rounded-full transition mb-8">
                Get Started
              </button>

              {/* Rating Section */}
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Trusted by thousands of users worldwide — seamless, secure, and reliable.
                </p>

                {/* User Avatars */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    <img
                      className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
                      src="/ginger-lady.jpg"
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
                      src="/business-male.jpg"
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
                      src="/cheerful-handsome-man.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
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

