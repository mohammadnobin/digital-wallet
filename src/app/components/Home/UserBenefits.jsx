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

        {/* Stats Section with Creative Layout */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
            <div className="absolute top-8 right-12 w-6 h-6 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-8 left-16 w-10 h-10 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Trusted by Millions</h3>
              <p className="text-purple-100">Numbers that speak for themselves</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">5M+</div>
                <div className="text-purple-200">Happy Users</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-purple-200">Uptime</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">$2B+</div>
                <div className="text-purple-200">Processed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple but Beautiful CTA */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-purple-400 rounded-full border-4 border-white"></div>
                <div className="w-12 h-12 bg-blue-400 rounded-full border-4 border-white"></div>
                <div className="w-12 h-12 bg-green-400 rounded-full border-4 border-white"></div>
                <div className="w-12 h-12 bg-red-400 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5M+</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join the Revolution
            </h3>
            <p className="text-gray-600 mb-6">
              Start experiencing these benefits today
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}