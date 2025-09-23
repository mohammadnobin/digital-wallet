'use client';
import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  CreditCard, 
  Smartphone, 
  Globe, 
  TrendingUp,
  Lock,
  ArrowUpDown,
  Wallet,
  Bell,
  BarChart3,
  Users
} from 'lucide-react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Bank-Level Security",
      description: "Advanced encryption and multi-layer security protocols protect your funds 24/7",
      details: "256-bit SSL encryption, biometric authentication, and real-time fraud detection keep your money safe.",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast Transfers",
      description: "Send money instantly to anyone, anywhere in the world within seconds",
      details: "Our advanced infrastructure processes transactions in under 3 seconds with 99.9% success rate.",
      color: "from-purple-700 to-indigo-700"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Multiple Payment Methods",
      description: "Link cards, bank accounts, and crypto wallets all in one secure place",
      details: "Support for 100+ currencies, major credit cards, and popular cryptocurrencies.",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Send money to 180+ countries"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Analytics",
      description: "Track spending with AI insights"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Vault",
      description: "Protected digital asset storage"
    },
    {
      icon: <ArrowUpDown className="w-8 h-8" />,
      title: "Quick Exchange",
      description: "Instant currency conversion"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Real-time transaction alerts"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Payments",
      description: "Split bills with friends easily"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <Wallet className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need in
            <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent block">
              One Digital Wallet
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience seamless financial management with cutting-edge technology, 
            uncompromising security, and intuitive design.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Feature Cards */}
          <div className="space-y-6">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeFeature === index 
                    ? 'transform scale-105' 
                    : 'hover:transform hover:scale-102'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  activeFeature === index 
                    ? `bg-gradient-to-r ${feature.color} text-white` 
                    : 'bg-white hover:bg-purple-50'
                }`}>
                  <div className={`inline-flex p-4 rounded-xl mb-6 transition-colors duration-300 ${
                    activeFeature === index 
                      ? 'bg-white bg-opacity-20' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    activeFeature === index ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${
                    activeFeature === index ? 'text-purple-100' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                  <div className={`mt-4 text-sm transition-all duration-300 ${
                    activeFeature === index 
                      ? 'text-purple-200 opacity-100' 
                      : 'text-gray-500 opacity-0 group-hover:opacity-100'
                  }`}>
                    {feature.details}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                
                {/* Center Content */}
                <div className="text-center text-white relative z-10">
                  <div className="mb-6 transform transition-all duration-500 hover:scale-110">
                    {mainFeatures[activeFeature].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    {mainFeatures[activeFeature].title}
                  </h4>
                  <div className="w-16 h-1 bg-white rounded-full mx-auto opacity-60"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-purple-300 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute bottom-6 right-6 w-6 h-6 bg-pink-300 rounded-full animate-bounce opacity-40 animation-delay-1000"></div>
                <div className="absolute top-1/2 left-2 w-3 h-3 bg-purple-200 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-5 h-5 bg-indigo-300 rounded-full animate-ping opacity-30"></div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin animation-duration-20000">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-6 h-6 bg-indigo-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 w-7 h-7 bg-purple-500 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 w-5 h-5 bg-pink-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            And Much More...
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-purple-200"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl text-purple-700 mb-4 group-hover:from-purple-700 group-hover:to-indigo-700 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
                
                {/* Hover Effect Indicator */}
                <div className="w-0 h-1 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}