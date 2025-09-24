// import React from 'react';
// import { ArrowRight, Shield, Zap, CreditCard, Smartphone, TrendingUp } from 'lucide-react';
// import Link from 'next/link';

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 animate-bounce animation-delay-1000">
//           <Shield className="w-8 h-8 text-purple-300 opacity-30" />
//         </div>
//         <div className="absolute top-1/3 right-1/4 animate-bounce animation-delay-3000">
//           <Zap className="w-6 h-6 text-purple-200 opacity-40" />
//         </div>
//         <div className="absolute bottom-1/3 left-1/6 animate-bounce animation-delay-5000">
//           <CreditCard className="w-10 h-10 text-purple-400 opacity-25" />
//         </div>
//         <div className="absolute top-2/3 right-1/6 animate-bounce animation-delay-2000">
//           <TrendingUp className="w-7 h-7 text-purple-300 opacity-35" />
//         </div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 py-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">

//           {/* Left Content */}
//           <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
//             <div className="inline-flex items-center px-4 py-2 bg-purple-600 bg-opacity-20 backdrop-blur-sm rounded-full text-purple-100 text-sm font-medium mb-6 border border-purple-400 border-opacity-30">
//               <Smartphone className="w-4 h-4 mr-2" />
//               Next Generation Digital Wallet
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
//               Your Money,
//               <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent block">
//                 Simplified
//               </span>
//             </h1>

//             <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed">
//               Experience the future of digital payments with our secure, lightning-fast wallet.
//               Send, receive, and manage your money with unprecedented ease and security.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Link href="/login">
//                 <button className="group bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
//                   Sign In
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </Link>
//               <button className="border-2 border-purple-300 text-purple-100 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:bg-opacity-20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
//                 Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className="text-3xl font-bold text-white mb-2">2M+</div>
//                 <div className="text-purple-200 text-sm">Active Users</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white mb-2">$50B+</div>
//                 <div className="text-purple-200 text-sm">Transactions</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white mb-2">99.9%</div>
//                 <div className="text-purple-200 text-sm">Uptime</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Phone Mockup */}
//           <div className="flex-1 flex justify-center lg:justify-end">
//             <div className="relative">
//               {/* Phone Frame */}
//               <div className="relative w-80 h-160 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-3 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
//                 <div className="w-full h-full bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl overflow-hidden relative">

//                   {/* Screen Content */}
//                   <div className="p-6 text-white">
//                     <div className="flex justify-between items-center mb-8">
//                       <div className="text-lg font-semibold">PurpleWallet</div>
//                       <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
//                     </div>

//                     {/* Balance Card */}
//                     <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 shadow-xl">
//                       <div className="text-purple-100 text-sm mb-2">Total Balance</div>
//                       <div className="text-3xl font-bold text-white mb-4">$12,543.89</div>
//                       <div className="flex justify-between text-purple-100 text-sm">
//                         <span>****  ****  ****  2847</span>
//                         <span>12/26</span>
//                       </div>
//                     </div>

//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="bg-purple-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center">
//                         <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-2"></div>
//                         <div className="text-xs text-purple-100">Send</div>
//                       </div>
//                       <div className="bg-purple-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center">
//                         <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-2"></div>
//                         <div className="text-xs text-purple-100">Receive</div>
//                       </div>
//                     </div>

//                     {/* Recent Transactions */}
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center bg-purple-700 bg-opacity-30 rounded-lg p-3">
//                         <div className="flex items-center">
//                           <div className="w-8 h-8 bg-green-400 rounded-full mr-3"></div>
//                           <div>
//                             <div className="text-sm font-medium">Coffee Shop</div>
//                             <div className="text-xs text-purple-200">2 hours ago</div>
//                           </div>
//                         </div>
//                         <div className="text-sm font-medium">-$4.50</div>
//                       </div>
//                       <div className="flex justify-between items-center bg-purple-700 bg-opacity-30 rounded-lg p-3">
//                         <div className="flex items-center">
//                           <div className="w-8 h-8 bg-blue-400 rounded-full mr-3"></div>
//                           <div>
//                             <div className="text-sm font-medium">Salary</div>
//                             <div className="text-xs text-purple-200">Yesterday</div>
//                           </div>
//                         </div>
//                         <div className="text-sm font-medium text-green-400">+$2,500</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements around Phone */}
//               <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
//               <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-400 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
//               <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z" fill="white" fillOpacity="0.1" />
//         </svg>
//       </div>
//     </div>
//   );
// }
'use client';
import React from 'react';
import { ArrowRight, Shield, CheckCircle, Play, Users, Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-8">
              <span className="text-orange-700 text-sm font-medium">Trusted by 10M+ users worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Simple & Secure
              <span className="text-indigo-600 block">Digital Payments</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Send money instantly, pay bills effortlessly, and manage your finances with complete security.
              Join millions who trust PayWallet for their daily transactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/registration">
                <button  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
                  Open Free Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch How It Works
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
                <p className="text-gray-600">256-bit encryption protects every transaction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Transfers</h3>
                <p className="text-gray-600">Send money in seconds, 24/7 availability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">Connect with users in 50+ countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">$2B+</div>
              <div className="text-gray-600 font-medium">Monthly Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything you need in one app
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Simple interface, powerful features. Manage all your payments,
                track expenses, and grow your savings from anywhere.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Payments</h4>
                    <p className="text-gray-600">Send money using just phone numbers or QR codes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bill Management</h4>
                    <p className="text-gray-600">Automate recurring payments and never miss a due date</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Smart Analytics</h4>
                    <p className="text-gray-600">Track spending patterns and optimize your budget</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Download App
              </button>
            </div>

            {/* Right Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-[600px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">

                    {/* Phone Screen Content */}
                    <div className="h-full bg-gradient-to-b from-gray-50 to-white">

                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-4 bg-white">
                        <span className="text-sm font-medium">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-gray-300 rounded"></div>
                          <div className="w-6 h-3 bg-green-500 rounded border border-gray-300"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-6 py-6 bg-white border-b border-gray-100">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">Good morning!</h3>
                            <p className="text-gray-600">Sarah Johnson</p>
                          </div>
                          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">SJ</span>
                          </div>
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div className="px-6 py-6">
                        <div className="bg-indigo-600 rounded-2xl p-6 text-white">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-indigo-200 text-sm mb-1">Available Balance</p>
                              <p className="text-3xl font-bold">$15,847.32</p>
                            </div>
                            <div className="w-12 h-8 bg-white bg-opacity-20 rounded"></div>
                          </div>
                          <p className="text-indigo-200 text-sm">**** **** **** 4829</p>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-orange-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-orange-600" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">Send</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-green-600 transform rotate-180" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">Request</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-600" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">Pay Bills</p>
                          </div>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div className="px-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Recent Activity</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-green-100 rounded-full mr-3 flex items-center justify-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">Coffee Shop</p>
                                <p className="text-gray-500 text-xs">2 hours ago</p>
                              </div>
                            </div>
                            <span className="text-red-500 font-semibold text-sm">-$4.80</span>
                          </div>
                          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">Salary Deposit</p>
                                <p className="text-gray-500 text-xs">Yesterday</p>
                              </div>
                            </div>
                            <span className="text-green-500 font-semibold text-sm">+$3,200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}