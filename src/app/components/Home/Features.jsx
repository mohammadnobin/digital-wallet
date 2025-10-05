// 'use client';
// import React, { useState, useEffect, memo } from 'react';
// import { 
//   Shield, 
//   Zap, 
//   CreditCard, 
//   Smartphone, 
//   Globe, 
//   TrendingUp,
//   Lock,
//   ArrowUpDown,
//   Wallet,
//   Bell,
//   BarChart3,
//   Users,
//   Star,
//   Sparkles
// } from 'lucide-react';

// const AdditionalFeature = memo(({ feature, index }) => {
//   return (
//     <div
//       className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 hover:border-purple-200 relative overflow-hidden"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
//       <div 
//         className={`inline-flex p-4 bg-gradient-to-br ${feature.accent} rounded-2xl text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-float`}
//         style={{ animationDelay: `${index * 0.2}s` }}
//       >
//         {feature.icon}
//       </div>
//       <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
//         {feature.title}
//       </h4>
//       <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//         {feature.description}
//       </p>
//       <div className={`w-0 h-1 bg-gradient-to-r ${feature.accent} rounded-full mt-6 group-hover:w-full transition-all duration-700 shadow-sm`}></div>
//       <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
//       </div>
//     </div>
//   );
// });

// export default function FeaturesSection() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   // Auto-rotate features every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature(prev => (prev + 1) % mainFeatures.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Intersection observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.getElementById('features-section');
//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   const mainFeatures = [
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Bank-Level Security",
//       description: "Advanced encryption and multi-layer security protocols protect your funds 24/7",
//       details: "256-bit SSL encryption, biometric authentication, and real-time fraud detection keep your money safe.",
//       color: "from-purple-600 to-purple-800",
//       gradient: "from-purple-500 via-purple-600 to-purple-700"
//     },
//     {
//       icon: <Zap className="w-12 h-12" />,
//       title: "Lightning Fast Transfers",
//       description: "Send money instantly to anyone, anywhere in the world within seconds",
//       details: "Our advanced infrastructure processes transactions in under 3 seconds with 99.9% success rate.",
//       color: "from-purple-700 to-indigo-700",
//       gradient: "from-blue-500 via-purple-600 to-indigo-700"
//     },
//     {
//       icon: <CreditCard className="w-12 h-12" />,
//       title: "Multiple Payment Methods",
//       description: "Link cards, bank accounts, and crypto wallets all in one secure place",
//       details: "Support for 100+ currencies, major credit cards, and popular cryptocurrencies.",
//       color: "from-indigo-600 to-purple-600",
//       gradient: "from-indigo-500 via-purple-600 to-pink-600"
//     }
//   ];

//   const additionalFeatures = [
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Global Reach",
//       description: "Send money to 180+ countries",
//       accent: "from-green-400 to-emerald-500"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Smart Analytics",
//       description: "Track spending with AI insights",
//       accent: "from-blue-400 to-cyan-500"
//     },
//     {
//       icon: <Lock className="w-8 h-8" />,
//       title: "Secure Vault",
//       description: "Protected digital asset storage",
//       accent: "from-yellow-400 to-orange-500"
//     },
//     {
//       icon: <ArrowUpDown className="w-8 h-8" />,
//       title: "Quick Exchange",
//       description: "Instant currency conversion",
//       accent: "from-pink-400 to-rose-500"
//     },
//     {
//       icon: <Bell className="w-8 h-8" />,
//       title: "Smart Notifications",
//       description: "Real-time transaction alerts",
//       accent: "from-indigo-400 to-purple-500"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Group Payments",
//       description: "Split bills with friends easily",
//       accent: "from-teal-400 to-green-500"
//     }
//   ];

//   return (
//     <section 
//       id="features-section"
//       className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
//     >
//       {/* Enhanced Background Decorations */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute w-2 h-2 bg-gradient-to-r ${i % 2 === 0 ? 'from-purple-400 to-pink-400' : 'from-blue-400 to-indigo-400'} rounded-full opacity-40 animate-float`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Enhanced Section Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-purple-700 text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
//             Powerful Features
//             <Star className="w-4 h-4 ml-2 text-yellow-500" />
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Everything You Need in
//             <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
//               One Digital Wallet
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Experience seamless financial management with cutting-edge technology, 
//             uncompromising security, and intuitive design that adapts to your lifestyle.
//           </p>
//         </div>

//         {/* Main Features */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//           {/* Feature Cards */}
//           <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//             {mainFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`group cursor-pointer transition-all duration-700 ${
//                   activeFeature === index 
//                     ? 'transform scale-105 shadow-2xl' 
//                     : 'hover:transform hover:scale-102 shadow-lg hover:shadow-xl'
//                 }`}
//                 onClick={() => setActiveFeature(index)}
//               >
//                 <div className={`p-8 rounded-3xl transition-all duration-500 backdrop-blur-sm border ${
//                   activeFeature === index 
//                     ? `bg-gradient-to-br ${feature.gradient} text-white border-white/20 shadow-2xl` 
//                     : 'bg-white/80 hover:bg-white/90 text-gray-900 border-gray-200 hover:border-purple-200'
//                 }`}>
//                   <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-500 ${
//                     activeFeature === index 
//                       ? 'bg-white/20 backdrop-blur-sm shadow-lg' 
//                       : 'bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-700 group-hover:from-purple-200 group-hover:to-indigo-200'
//                   }`}>
//                     <div className={`transition-transform duration-300 ${activeFeature === index ? 'scale-110' : 'group-hover:scale-105'}`}>
//                       {feature.icon}
//                     </div>
//                   </div>
//                   <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
//                     activeFeature === index ? 'text-white' : 'text-gray-900 group-hover:text-purple-700'
//                   }`}>
//                     {feature.title}
//                   </h3>
//                   <p className={`text-lg leading-relaxed transition-colors duration-300 ${
//                     activeFeature === index ? 'text-purple-100' : 'text-gray-600 group-hover:text-gray-700'
//                   }`}>
//                     {feature.description}
//                   </p>
//                   <div className={`mt-4 text-sm transition-all duration-500 ${
//                     activeFeature === index 
//                       ? 'text-purple-200 opacity-100 max-h-20' 
//                       : 'text-gray-500 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20'
//                   }`}>
//                     {feature.details}
//                   </div>

//                   {/* Progress indicator */}
//                   <div className={`mt-6 h-1 bg-white/20 rounded-full overflow-hidden ${activeFeature === index ? 'block' : 'hidden'}`}>
//                     <div className="h-full bg-white rounded-full animate-pulse w-full"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Enhanced Interactive Visualization */}
//           <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//             <div className="relative">
//               {/* Main Circle with enhanced gradients */}
//               <div className={`w-96 h-96 bg-gradient-to-br ${mainFeatures[activeFeature].gradient} rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden transition-all duration-1000 hover:scale-105`}>
//                 {/* Multiple animated background layers */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse"></div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>

//                 {/* Enhanced center content */}
//                 <div className="text-center text-white relative z-10">
//                   <div className="mb-8 transform transition-all duration-700 hover:scale-125 hover:rotate-12">
//                     <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-lg">
//                       {mainFeatures[activeFeature].icon}
//                     </div>
//                   </div>
//                   <h4 className="text-2xl font-bold mb-3">
//                     {mainFeatures[activeFeature].title}
//                   </h4>
//                   <div className="w-20 h-1 bg-white/80 rounded-full mx-auto mb-2"></div>
//                   <div className="w-12 h-1 bg-white/60 rounded-full mx-auto"></div>
//                 </div>

//                 {/* Enhanced floating elements with different animations */}
//                 <div className="absolute top-6 left-6 w-4 h-4 bg-white/40 rounded-full animate-bounce opacity-80"></div>
//                 <div className="absolute bottom-8 right-8 w-6 h-6 bg-purple-300/60 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
//                 <div className="absolute top-1/2 left-4 w-3 h-3 bg-pink-300/50 rounded-full animate-pulse opacity-70"></div>
//                 <div className="absolute top-12 right-12 w-5 h-5 bg-indigo-300/40 rounded-full animate-ping opacity-50"></div>
//                 <div className="absolute bottom-1/4 left-8 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
//                 <div className="absolute top-1/4 right-6 w-3 h-3 bg-purple-200/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

//                 {/* Inner glow effect */}
//                 <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
//               </div>

//               {/* Slower orbiting elements with different speeds and sizes */}
//               <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
//                   <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-70 shadow-lg"></div>
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
//                   <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-70 shadow-lg"></div>
//                 </div>
//                 <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6">
//                   <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70 shadow-lg"></div>
//                 </div>
//                 <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6">
//                   <div className="w-7 h-7 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-70 shadow-lg"></div>
//                 </div>
//               </div>

//               {/* Counter-rotating inner orbit */}
//               <div className="absolute inset-8 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
//                   <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60 shadow-md"></div>
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3">
//                   <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-60 shadow-md"></div>
//                 </div>
//               </div>

//               {/* Outer decorative ring */}
//               <div className="absolute -inset-4 border-2 border-purple-300/30 rounded-full animate-pulse"></div>
//               <div className="absolute -inset-8 border border-indigo-200/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Additional Features Grid */}
//         <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
//             And Much More
//             <span className="text-purple-600">...</span>
//           </h3>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {additionalFeatures.map((feature, index) => (
//               <AdditionalFeature key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0) rotate(0deg); 
//           }
//           50% { 
//             transform: translateY(-8px) rotate(2deg); 
//           }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//           animation-delay: var(--animation-delay);
//         }
//       `}</style>
//     </section>
//   );
// }


// 'use client';
// import React, { useState, useEffect, memo } from 'react';
// import { 
//   Shield, 
//   Zap, 
//   CreditCard, 
//   Smartphone, 
//   Globe, 
//   TrendingUp,
//   Lock,
//   ArrowUpDown,
//   Wallet,
//   Bell,
//   BarChart3,
//   Users,
//   Star,
//   Sparkles
// } from 'lucide-react';

// const AdditionalFeature = memo(({ feature, index }) => {
//   return (
//     <div
//       className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 hover:border-primary/30 relative overflow-hidden"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       <div 
//         className={`inline-flex p-4 rounded-2xl text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-float ${
//           index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
//         }`}
//         style={{ animationDelay: `${index * 0.2}s` }}
//       >
//         {feature.icon}
//       </div>
//       <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4F46E5] transition-colors duration-300">
//         {feature.title}
//       </h4>
//       <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//         {feature.description}
//       </p>
//       <div 
//         className="w-0 h-1 rounded-full mt-6 group-hover:w-full transition-all duration-700 shadow-sm"
//         style={{ backgroundColor: index % 2 === 0 ? '#4F46E5' : '#F97316' }}
//       ></div>
//       <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <Sparkles className="w-4 h-4 text-[#F97316] animate-pulse" />
//       </div>
//     </div>
//   );
// });

// export default function FeaturesSection() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   // Auto-rotate features every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature(prev => (prev + 1) % mainFeatures.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Intersection observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.getElementById('features-section');
//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   const mainFeatures = [
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Bank-Level Security",
//       description: "Advanced encryption and multi-layer security protocols protect your funds 24/7",
//       details: "256-bit SSL encryption, biometric authentication, and real-time fraud detection keep your money safe.",
//       bgColor: '#4F46E5'
//     },
//     {
//       icon: <Zap className="w-12 h-12" />,
//       title: "Lightning Fast Transfers",
//       description: "Send money instantly to anyone, anywhere in the world within seconds",
//       details: "Our advanced infrastructure processes transactions in under 3 seconds with 99.9% success rate.",
//       bgColor: '#F97316'
//     },
//     {
//       icon: <CreditCard className="w-12 h-12" />,
//       title: "Multiple Payment Methods",
//       description: "Link cards, bank accounts, and crypto wallets all in one secure place",
//       details: "Support for 100+ currencies, major credit cards, and popular cryptocurrencies.",
//       bgColor: '#4F46E5'
//     }
//   ];

//   const additionalFeatures = [
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Global Reach",
//       description: "Send money to 180+ countries"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Smart Analytics",
//       description: "Track spending with AI insights"
//     },
//     {
//       icon: <Lock className="w-8 h-8" />,
//       title: "Secure Vault",
//       description: "Protected digital asset storage"
//     },
//     {
//       icon: <ArrowUpDown className="w-8 h-8" />,
//       title: "Quick Exchange",
//       description: "Instant currency conversion"
//     },
//     {
//       icon: <Bell className="w-8 h-8" />,
//       title: "Smart Notifications",
//       description: "Real-time transaction alerts"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Group Payments",
//       description: "Split bills with friends easily"
//     }
//   ];

//   return (
//     <section 
//       id="features-section"
//       className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden"
//     >
//       {/* Enhanced Background Decorations */}
//       <div 
//         className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
//         style={{ backgroundColor: '#4F46E5' }}
//       ></div>
//       <div 
//         className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" 
//         style={{ 
//           backgroundColor: '#F97316',
//           animationDelay: '1s' 
//         }}
//       ></div>
//       <div 
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
//         style={{ 
//           backgroundColor: '#4F46E5',
//           animationDelay: '2s' 
//         }}
//       ></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 rounded-full opacity-40 animate-float"
//             style={{
//               backgroundColor: i % 2 === 0 ? '#4F46E5' : '#F97316',
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Enhanced Section Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div 
//             className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             style={{ 
//               backgroundColor: '#4F46E5',
//               color: 'white'
//             }}
//           >
//             <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
//             Powerful Features
//             <Star className="w-4 h-4 ml-2" style={{ color: '#F97316' }} />
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Everything You Need in
//             <span className="block mt-2" style={{ color: '#4F46E5' }}>
//               One Digital Wallet
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Experience seamless financial management with cutting-edge technology, 
//             uncompromising security, and intuitive design that adapts to your lifestyle.
//           </p>
//         </div>

//         {/* Main Features */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//           {/* Feature Cards */}
//           <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//             {mainFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`group cursor-pointer transition-all duration-700 ${
//                   activeFeature === index 
//                     ? 'transform scale-105 shadow-2xl' 
//                     : 'hover:transform hover:scale-102 shadow-lg hover:shadow-xl'
//                 }`}
//                 onClick={() => setActiveFeature(index)}
//               >
//                 <div className={`p-8 rounded-3xl transition-all duration-500 backdrop-blur-sm border ${
//                   activeFeature === index 
//                     ? 'text-white border-white/20 shadow-2xl' 
//                     : 'bg-white/80 hover:bg-white/90 text-gray-900 border-gray-200 hover:border-[#4F46E5]/30'
//                 }`}
//                 style={{
//                   backgroundColor: activeFeature === index ? feature.bgColor : undefined
//                 }}
//                 >
//                   <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-500 ${
//                     activeFeature === index 
//                       ? 'bg-white/20 backdrop-blur-sm shadow-lg' 
//                       : 'bg-[#4F46E5]/10 text-[#4F46E5] group-hover:bg-[#4F46E5]/20'
//                   }`}>
//                     <div className={`transition-transform duration-300 ${activeFeature === index ? 'scale-110' : 'group-hover:scale-105'}`}>
//                       {feature.icon}
//                     </div>
//                   </div>
//                   <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
//                     activeFeature === index ? 'text-white' : 'text-gray-900 group-hover:text-[#4F46E5]'
//                   }`}>
//                     {feature.title}
//                   </h3>
//                   <p className={`text-lg leading-relaxed transition-colors duration-300 ${
//                     activeFeature === index ? 'text-white/90' : 'text-gray-600 group-hover:text-gray-700'
//                   }`}>
//                     {feature.description}
//                   </p>
//                   <div className={`mt-4 text-sm transition-all duration-500 ${
//                     activeFeature === index 
//                       ? 'text-white/80 opacity-100 max-h-20' 
//                       : 'text-gray-500 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20'
//                   }`}>
//                     {feature.details}
//                   </div>

//                   {/* Progress indicator */}
//                   <div className={`mt-6 h-1 bg-white/20 rounded-full overflow-hidden ${activeFeature === index ? 'block' : 'hidden'}`}>
//                     <div className="h-full bg-white rounded-full animate-pulse w-full"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Enhanced Interactive Visualization */}
//           <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//             <div className="relative">
//               {/* Main Circle with enhanced gradients */}
//               <div 
//                 className="w-96 h-96 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden transition-all duration-1000 hover:scale-105"
//                 style={{ backgroundColor: mainFeatures[activeFeature].bgColor }}
//               >
//                 {/* Multiple animated background layers */}
//                 <div 
//                   className="absolute inset-0 animate-pulse"
//                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
//                 ></div>
//                 <div 
//                   className="absolute inset-0 animate-pulse"
//                   style={{ 
//                     background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
//                     animationDelay: '1s' 
//                   }}
//                 ></div>

//                 {/* Enhanced center content */}
//                 <div className="text-center text-white relative z-10">
//                   <div className="mb-8 transform transition-all duration-700 hover:scale-125 hover:rotate-12">
//                     <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-lg">
//                       {mainFeatures[activeFeature].icon}
//                     </div>
//                   </div>
//                   <h4 className="text-2xl font-bold mb-3">
//                     {mainFeatures[activeFeature].title}
//                   </h4>
//                   <div className="w-20 h-1 bg-white/80 rounded-full mx-auto mb-2"></div>
//                   <div className="w-12 h-1 bg-white/60 rounded-full mx-auto"></div>
//                 </div>

//                 {/* Enhanced floating elements with different animations */}
//                 <div className="absolute top-6 left-6 w-4 h-4 bg-white/40 rounded-full animate-bounce opacity-80"></div>
//                 <div className="absolute bottom-8 right-8 w-6 h-6 bg-[#F97316]/60 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
//                 <div className="absolute top-1/2 left-4 w-3 h-3 bg-[#F97316]/50 rounded-full animate-pulse opacity-70"></div>
//                 <div className="absolute top-12 right-12 w-5 h-5 bg-[#4F46E5]/40 rounded-full animate-ping opacity-50"></div>
//                 <div className="absolute bottom-1/4 left-8 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
//                 <div className="absolute top-1/4 right-6 w-3 h-3 bg-[#F97316]/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

//                 {/* Inner glow effect */}
//                 <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
//               </div>

//               {/* Slower orbiting elements with different speeds and sizes */}
//               <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
//                   <div className="w-10 h-10 rounded-full opacity-70 shadow-lg" style={{ backgroundColor: '#4F46E5' }}></div>
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
//                   <div className="w-8 h-8 rounded-full opacity-70 shadow-lg" style={{ backgroundColor: '#F97316' }}></div>
//                 </div>
//                 <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6">
//                   <div className="w-9 h-9 rounded-full opacity-70 shadow-lg" style={{ backgroundColor: '#4F46E5' }}></div>
//                 </div>
//                 <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6">
//                   <div className="w-7 h-7 rounded-full opacity-70 shadow-lg" style={{ backgroundColor: '#F97316' }}></div>
//                 </div>
//               </div>

//               {/* Counter-rotating inner orbit */}
//               <div className="absolute inset-8 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
//                   <div className="w-4 h-4 rounded-full opacity-60 shadow-md" style={{ backgroundColor: '#F97316' }}></div>
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3">
//                   <div className="w-5 h-5 rounded-full opacity-60 shadow-md" style={{ backgroundColor: '#4F46E5' }}></div>
//                 </div>
//               </div>

//               {/* Outer decorative ring */}
//               <div className="absolute -inset-4 border-2 border-[#4F46E5]/30 rounded-full animate-pulse"></div>
//               <div className="absolute -inset-8 border border-[#F97316]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Additional Features Grid */}
//         <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
//             And Much More
//             <span style={{ color: '#F97316' }}>...</span>
//           </h3>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {additionalFeatures.map((feature, index) => (
//               <AdditionalFeature key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0) rotate(0deg); 
//           }
//           50% { 
//             transform: translateY(-8px) rotate(2deg); 
//           }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//           animation-delay: var(--animation-delay);
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import React from "react";
import {
  CreditCard,
  Send,
  Smartphone,
  QrCode,
  BarChart3,
  Globe,
  Bell,
  Users,
  Wallet,
  PieChart,
  SplitSquareHorizontal,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { icon: <Wallet className="w-6 h-6 text-blue-600" />, title: "User Dashboard", desc: "View your balance, recent transactions, and alerts." },
    { icon: <CreditCard className="w-6 h-6 text-blue-600" />, title: "Multi-Card Management", desc: "Add, remove, and manage multiple bank cards securely." },
    { icon: <Send className="w-6 h-6 text-blue-600" />, title: "Fund Transfer", desc: "Instantly send money to wallet users or bank accounts." },
    { icon: <Smartphone className="w-6 h-6 text-blue-600" />, title: "Bill Payments", desc: "Pay bills and mobile recharges in just a few taps." },
    { icon: <QrCode className="w-6 h-6 text-blue-600" />, title: "QR Code Payments", desc: "Fast and secure merchant payments via QR scan." },
    { icon: <BarChart3 className="w-6 h-6 text-blue-600" />, title: "Transaction History", desc: "Filter and view all your past transactions easily." },
    { icon: <PieChart className="w-6 h-6 text-blue-600" />, title: "Expense Tracker", desc: "Visualize your spending with smart charts." },
    { icon: <Bell className="w-6 h-6 text-blue-600" />, title: "Notifications & Alerts", desc: "Get notified about every important wallet activity." },
    { icon: <SplitSquareHorizontal className="w-6 h-6 text-blue-600" />, title: "Split Payments", desc: "Split bills with friends or groups easily." },
    { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "International Remittance", desc: "Send money securely across borders." },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          A Secure and Smart Way to Manage Your Money
        </motion.h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Send, receive, and manage your money effortlessly — with trust, speed, and security.
        </p>
        <div className="space-x-4">
          <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Create Account
          </Link>
          <Link href="#features" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Explore Features
          </Link>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-700">Key Features</h3>
          <p className="text-gray-500 mt-2">Smart, secure, and designed for everyone.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center flex flex-col items-center"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">{f.title}</h4>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
