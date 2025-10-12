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
//             <div className="flex gap-5 items-center">
//               {/* Feature 1 */}
//               <div className="flex  gap-6 items-start border border-none shadow p-3 rounded-xl ">
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-[#5f4a94]">
//                   <Smartphone size={28} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     Secure & Reliable
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 2 */}
//               <div className="flex  gap-6 items-start border border-none shadow p-3 rounded-xl">
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#8b74d7] flex-shrink-0">
//                   <Globe size={28} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     Global Support
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Phone Image with Gradient Background */}
//          {/* Right - Phone Image above Gradient Background */}
// <div className="relative flex items-center justify-center">
//   {/* Gradient Background Shape */}
//   <div className="absolute inset-0 flex items-center justify-center">
//     <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-[#5f4a94] via-[#caa1ff] to-[#8b74d7] rounded-3xl"></div>
//   </div>

//   {/* Phone Image (above background) */}
//   <img
//     src="/Mockup-2.png"
//     alt="Phone Mockup"
//     className={`relative z-10 w-[80%] max-w-sm h-auto object-contain transition-all duration-700 ease-out ${
//       animate ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
//     } hover:scale-105`}
//   />
// </div>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative bg-white shadow-lg rounded-2xl p-8 pt-14  flex-1 text-center hover:shadow-xl transition">
                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#8b74d7] flex items-center justify-center shadow-md">
                  <Globe size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Global Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
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

            {/* Phone Image (above background) */}
            <img
              src="/Mockup-2.png"
              alt="Phone Mockup"
              className={`relative z-10 w-[80%] max-w-sm h-auto object-contain transition-all duration-700 ease-out ${
                animate ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
              } hover:scale-105`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
