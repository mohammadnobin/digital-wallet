'use client';
import React, { useState } from 'react';
import { 
  Clock, 
  DollarSign, 
  Globe, 
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Smartphone,
  Award
} from 'lucide-react';

export default function UserBenefitsSection() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Lightning Fast",
      description: "Complete any transaction in just 3 seconds",
      metric: "3s",
      improvement: "95% faster than banks",
      color: "blue"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Zero Fees",
      description: "Send money anywhere without hidden charges",
      metric: "$0",
      improvement: "Save $500+ annually",
      color: "green"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Reach",
      description: "Available in 180+ countries worldwide",
      metric: "180+",
      improvement: "Truly borderless",
      color: "purple"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Bank Security",
      description: "Military-grade encryption keeps you safe",
      metric: "100%",
      improvement: "Zero fraud cases",
      color: "red"
    }
  ];

  const features = [
    { icon: "⚡", title: "Instant Transfer", desc: "Money moves in seconds" },
    { icon: "🔒", title: "Secure Vault", desc: "Your data is protected" },
    { icon: "📱", title: "Mobile First", desc: "Designed for your phone" },
    { icon: "🎯", title: "Smart Goals", desc: "AI helps you save more" },
    { icon: "🌍", title: "Multi Currency", desc: "Support 100+ currencies" },
    { icon: "🎁", title: "Rewards", desc: "Earn cashback on spending" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-400 to-blue-600",
      green: "from-green-400 to-green-600", 
      purple: "from-purple-400 to-purple-600",
      red: "from-red-400 to-red-600"
    };
    return colors[color] || colors.purple;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-red-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Creative Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Why Users Love Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits That Actually
            <span className="relative inline-block ml-2">
              <span className="relative z-10 text-purple-700">Matter</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-purple-200 -z-10 transform -rotate-1"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real advantages that make a difference in your daily financial life
          </p>
        </div>

        {/* Main Benefits with Unique Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:mb-8'
              }`}
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getColorClasses(benefit.color)} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-16 -translate-y-16`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 bg-gradient-to-br ${getColorClasses(benefit.color)} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black bg-gradient-to-r ${getColorClasses(benefit.color)} bg-clip-text text-transparent`}>
                      {benefit.metric}
                    </div>
                    <div className="text-sm text-gray-500">{benefit.improvement}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getColorClasses(benefit.color)} transform origin-left transition-transform duration-1000 ${
                      hoveredBenefit === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid with Card Design */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need in One App
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}