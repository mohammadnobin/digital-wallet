// "use client";
// import React, { useEffect, useState } from "react";
// import { Smartphone, Globe } from "lucide-react";

// export default function AboutUs() {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <p className="text-sm font-bold tracking-widest mb-4 text-[#5f4a94]">
//               ABOUT US
//             </p>

//             <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
//               Building the Future of Digital Payments
//             </h2>

//             <p className="text-gray-600 text-base mb-12 leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>

//             {/* Features */}
//             <div className="flex flex-col sm:flex-row gap-6">
//               {/* Feature 1 */}
//               <div className="relative bg-white shadow-lg rounded-2xl p-8 pt-14 flex-1 text-center hover:shadow-xl transition">
//                 {/* Floating Icon */}
//                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#5f4a94] flex items-center justify-center shadow-md">
//                   <Smartphone size={28} className="text-white" />
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Secure & Reliable
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 </p>
//               </div>

//               {/* Feature 2 */}
//               <div className="relative bg-white shadow-lg rounded-2xl p-8 pt-14  flex-1 text-center hover:shadow-xl transition">
//                 {/* Floating Icon */}
//                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#8b74d7] flex items-center justify-center shadow-md">
//                   <Globe size={28} className="text-white" />
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Global Support
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right - Phone Image above Gradient Background */}
//           <div className="relative flex items-center justify-center">
//             {/* Gradient Background Shape */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-[430px] h-[430px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-[#5f4a94] via-[#caa1ff] to-[#8b74d7] rounded-3xl"></div>
//             </div>

//             {/* Phone Image (above background) */}
//             <img
//               src="/Mockup-2.png"
//               alt="Phone Mockup"
//               className={`relative z-10 w-[80%] max-w-sm h-auto object-contain transition-all duration-700 ease-out ${
//                 animate ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
//               } hover:scale-105`}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { Smartphone, Globe } from "lucide-react";

export default function AboutUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold tracking-widest mb-4 text-[#5f4a94]">
              ABOUT US
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Building the Future of Digital Payments
            </h2>

            <p className="text-gray-600 text-base mb-12 leading-relaxed">
              We are redefining the way people move money — with fast, secure, 
              and transparent digital payments that empower individuals and businesses 
              worldwide. Our mission is to make transactions effortless, secure, 
              and accessible for everyone, everywhere.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Feature 1 */}
              <div className="relative bg-white shadow-lg rounded-2xl p-8 pt-14 flex-1 text-center hover:shadow-xl transition">
                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#5f4a94] flex items-center justify-center shadow-md">
                  <Smartphone size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Built with advanced encryption and real-time fraud protection 
                  to keep your money and data safe at every step.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative bg-white shadow-lg rounded-2xl p-8 pt-14 flex-1 text-center hover:shadow-xl transition">
                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#8b74d7] flex items-center justify-center shadow-md">
                  <Globe size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Global Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seamless international transactions and dedicated support 
                  that connects users around the world with ease and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Phone Image above Gradient Background */}
          <div className="relative flex items-center justify-center">
            {/* Gradient Background Shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[430px] h-[430px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-[#5f4a94] via-[#caa1ff] to-[#8b74d7] rounded-3xl"></div>
            </div>

            {/* Phone Image */}
            <img
              src="/Mockup-2.png"
              alt="Phone Mockup"
              className={`relative z-10 w-[80%] max-w-sm h-auto object-contain transition-all duration-700 ease-out ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "translate-x-24 opacity-0"
              } hover:scale-105`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { ShieldCheck, Send, Wallet } from "lucide-react";

// export default function AboutUs() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
//       {/* Animated Background Circles */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-ping"></div>

//       <div className="w-11/12 md:w-10/12 mx-auto relative z-10 text-center">
//         {/* Title */}
//         <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
//           About <span className="text-secondary">PayLink Bank</span>
//         </h2>

//         {/* Subtitle */}
//         <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-16 leading-relaxed animate-fadeIn">
//           At PayLink Bank, we’re redefining the way people handle money.  
//           We believe banking should be **smart, secure, and seamless** — made to fit your lifestyle.  
//           From real-time transfers to multi-card management, we provide everything you need in one place,  
//           powered by trust, innovation, and simplicity.
//         </p>

//         {/* Feature Cards */}
//         <div className="grid md:grid-cols-3 gap-8 text-left">
//           {/* Feature 1 */}
//           <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-transparent">
//             <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full mb-5 group-hover:scale-110 transition-transform duration-500">
//               <Wallet className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Wallet</h3>
//             <p className="text-gray-500 leading-relaxed">
//               Manage multiple cards, monitor spending, and make secure payments — all from your dashboard.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-transparent">
//             <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full mb-5 group-hover:scale-110 transition-transform duration-500">
//               <Send className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant Transfers</h3>
//             <p className="text-gray-500 leading-relaxed">
//               Send money globally within seconds — no hidden fees, no delays, just fast and reliable transfers.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-transparent">
//             <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full mb-5 group-hover:scale-110 transition-transform duration-500">
//               <ShieldCheck className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Banking</h3>
//             <p className="text-gray-500 leading-relaxed">
//               Every transaction is encrypted with cutting-edge technology, keeping your money and data safe.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


