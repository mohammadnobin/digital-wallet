// "use client";
// import { Wallet, Globe, Lock, Smartphone } from "lucide-react";

// export default function WhyTrustUs() {
//   const featuresLeft = [
//     {
//       icon: <Wallet className="w-6 h-6 text-white" />,
//       title: "Digital Wallet",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Lock className="w-6 h-6 text-white" />,
//       title: "Data Protection",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   const featuresRight = [
//     {
//       icon: <Globe className="w-6 h-6 text-white" />,
//       title: "Global Support",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Smartphone className="w-6 h-6 text-white" />,
//       title: "Secure & Reliable",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <section className="bg-[#f9f8fb] py-20 px-6 text-center">
//       <div className="max-w-7xl mx-auto">
//         <p className="text-sm tracking-widest text-gray-600 uppercase font-medium mb-2">
//           Product
//         </p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1238] mb-16">
//           Why Millions Trust Us for <br /> Their Payments
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
//           {/* Left Features */}
//           <div className="flex flex-col items-end gap-8">
//             {featuresLeft.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white shadow-md p-6 rounded-2xl max-w-sm text-left"
//               >
//                 <div className="absolute -top-5 right-5 w-12 h-12 bg-primary flex items-center justify-center rounded-full">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-bold text-lg text-[#1a1238] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 mb-4">{item.desc}</p>
//                 <button className="bg-[#d8be96] text-[#1a1238] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition">
//                   Read More
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Center Image */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-t from-[#e4dcf5] to-[#f9f8fb] rounded-[50%] blur-3xl"></div>
//               <img
//                 src="/Mockup.png"
//                 alt="Phone Mockup"
//                 className="relative z-10 w-[260px] md:w-[320px] lg:w-[300px] mx-auto"
//               />
//             </div>
//           </div>

//           {/* Right Features */}
//           <div className="flex flex-col items-start gap-8">
//             {featuresRight.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white shadow-md p-6 rounded-2xl max-w-sm text-left"
//               >
//                 <div className="absolute -top-5 right-5 w-12 h-12 bg-primary flex items-center justify-center rounded-full">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-bold text-lg text-[#1a1238] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 mb-4">{item.desc}</p>
//                 <button className="bg-[#d8be96] text-[#1a1238] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition">
//                   Read More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Wallet, Globe, Lock, Smartphone } from "lucide-react";

export default function WhyTrustUs() {
  const featuresLeft = [
    {
      icon: <Wallet className="w-6 h-6 text-white" />,
      title: "Digital Wallet",
      desc: "A fast, secure, and convenient way to manage your money — anytime, anywhere.",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Data Protection",
      desc: "Your privacy matters. We use bank-level encryption and security to protect your data.",
    },
  ];

  const featuresRight = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Support",
      desc: "Send and receive payments seamlessly across borders with 24/7 global assistance.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Secure & Reliable",
      desc: "Built with advanced security and trusted by millions for safe and smooth transactions.",
    },
  ];

  return (
    <section className="bg-[#f9f8fb] py-20 px-6 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-widest text-gray-600 uppercase font-medium mb-2">
          Product
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1238] mb-16">
          Why Millions Trust Us for <br /> Their Payments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 relative">
          {/* Left Features */}
          <div className="flex flex-col items-end gap-8 z-10">
            {featuresLeft.map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md p-6 rounded-2xl max-w-sm text-left"
              >
                <div className="absolute -top-5 right-5 w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-[#1a1238] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-4">{item.desc}</p>
                <button className="bg-[#d8be96] text-[#1a1238] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center h-[480px] overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#e4dcf5] to-[#f9f8fb] rounded-[50%] blur-3xl"></div>

            {/* Phone Image */}
            <img
              src="/Mockup.png"
              alt="Phone Mockup"
              className="relative z-10 h-full object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col items-start gap-8 z-10">
            {featuresRight.map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md p-6 rounded-2xl max-w-sm text-left"
              >
                <div className="absolute -top-5 right-5 w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-[#1a1238] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-4">{item.desc}</p>
                <button className="bg-[#d8be96] text-[#1a1238] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
