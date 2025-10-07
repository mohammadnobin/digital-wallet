// "use client";
// import React, { use } from "react";
// import {
//   ArrowRight,
//   Shield,
//   CheckCircle,
//   Play,
//   Users,
// } from "lucide-react";
// import Link from "next/link";
// import { Authcontext } from "@/context/AuthContext";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const { user } = use(Authcontext);
//   const redirectUrl = user ? "/dashboard" : "/registration";

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // smooth sequential reveal
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50">
//       {/* Hero Section */}
//       <motion.section
//         className="py-12 lg:py-20"
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//       >
//         <div className="container mx-auto px-6">
//           <motion.div
//             variants={fadeUp}
//             className="max-w-4xl mx-auto text-center"
//           >
//             {/* Badge */}
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-8"
//             >
//               <span className="text-orange-700 text-sm font-medium">
//                 Trusted by 10M+ users worldwide
//               </span>
//             </motion.div>

//             {/* Heading */}
//             <motion.h1
//               variants={fadeUp}
//               className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               Simple & Secure
//               <span className="text-indigo-600 block">Digital Payments</span>
//             </motion.h1>

//             {/* Subheading */}
//             <motion.p
//               variants={fadeUp}
//               className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
//             >
//               Send money instantly, pay bills effortlessly, and manage your
//               finances with complete security. Join millions who trust{" "}
//               <span className="font-semibold text-indigo-600">PayWallet</span> for their daily transactions.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//             >
//               <Link href={redirectUrl}>
//                 <button className="bg-indigo-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105 flex items-center justify-center shadow-md">
//                   Open Free Account
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </button>
//               </Link>
//               <button className="border-2 border-orange-500 cursor-pointer text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-transform transform hover:scale-105 flex items-center justify-center">
//                 <Play className="mr-2 w-5 h-5" />
//                 Watch How It Works
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Features Grid */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
//           >
//             {[
//               {
//                 icon: <Shield className="w-8 h-8 text-indigo-600" />,
//                 bg: "bg-indigo-100",
//                 title: "Bank-Level Security",
//                 desc: "256-bit encryption protects every transaction",
//               },
//               {
//                 icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
//                 bg: "bg-orange-100",
//                 title: "Instant Transfers",
//                 desc: "Send money in seconds, 24/7 availability",
//               },
//               {
//                 icon: <Users className="w-8 h-8 text-green-600" />,
//                 bg: "bg-green-100",
//                 title: "Global Network",
//                 desc: "Connect with users in 50+ countries",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-center p-6 border rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
//               >
//                 <div
//                   className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 border-none`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }


"use client";
import React, { use } from "react";
import { ArrowRight, Shield, CheckCircle, Play, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function HeroSection() {
  const { data: session } = useSession();
  const redirectUrl = session ? "/dashboard" : "/registration";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // smooth sequential reveal
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.section
        className="py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-orange-700 text-sm font-medium">
                Trusted by 10M+ users worldwide
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Simple & Secure
              <span className="text-indigo-600 block">Digital Payments</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Send money instantly, pay bills effortlessly, and manage your
              finances with complete security. Join millions who trust{" "}
              <span className="font-semibold text-indigo-600">PayWallet</span>{" "}
              for their daily transactions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href={redirectUrl}>
                <button className="bg-indigo-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105 flex items-center justify-center shadow-md">
                  Open Free Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-orange-500 cursor-pointer text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-transform transform hover:scale-105 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch How It Works
              </button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                bg: "bg-indigo-100",
                title: "Bank-Level Security",
                desc: "256-bit encryption protects every transaction",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
                bg: "bg-orange-100",
                title: "Instant Transfers",
                desc: "Send money in seconds, 24/7 availability",
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                bg: "bg-green-100",
                title: "Global Network",
                desc: "Connect with users in 50+ countries",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
              >
                <div
                  className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
