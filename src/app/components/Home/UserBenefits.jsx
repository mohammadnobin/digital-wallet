'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  DollarSign,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Smartphone,
  Award
} from 'lucide-react';

export default function UserBenefitsSection() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Lightning Fast',
      description: 'Complete any transaction in just 3 seconds',
      metric: '3s',
      improvement: '95% faster than banks',
      color: 'blue'
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Zero Fees',
      description: 'Send money anywhere without hidden charges',
      metric: '$0',
      improvement: 'Save $500+ annually',
      color: 'green'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Global Reach',
      description: 'Available in 180+ countries worldwide',
      metric: '180+',
      improvement: 'Truly borderless',
      color: 'purple'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Bank Security',
      description: 'Military-grade encryption keeps you safe',
      metric: '100%',
      improvement: 'Zero fraud cases',
      color: 'red'
    }
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Instant Transfer', desc: 'Money moves in seconds' },
    { icon: <Shield className="w-6 h-6" />, title: 'Secure Vault', desc: 'Your data is protected' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile First', desc: 'Designed for your phone' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Smart Goals', desc: 'AI helps you save more' },
    { icon: <Globe className="w-6 h-6" />, title: 'Multi Currency', desc: 'Support 100+ currencies' },
    { icon: <Award className="w-6 h-6" />, title: 'Rewards', desc: 'Earn cashback on spending' }
  ];

  // helper to return gradient classes and glow color
  const getColorClasses = (color) => {
    const map = {
      blue: {
        gradient: 'from-blue-400 to-blue-600',
        glow: 'rgba(59,130,246,0.35)'
      },
      green: {
        gradient: 'from-green-400 to-green-600',
        glow: 'rgba(16,185,129,0.35)'
      },
      purple: {
        gradient: 'from-purple-400 to-purple-600',
        glow: 'rgba(139,92,246,0.32)'
      },
      red: {
        gradient: 'from-red-400 to-red-600',
        glow: 'rgba(239,68,68,0.28)'
      }
    };
    return map[color] || map.purple;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* inline styles for animations + keyframes */}
      <style>{`
        @keyframes floatY { 0% {transform: translateY(0);} 50% {transform: translateY(-8px);} 100% {transform: translateY(0);} }
        @keyframes floatSlow { 0% {transform: translateY(0);} 50% {transform: translateY(-6px);} 100% {transform: translateY(0);} }
        @keyframes spinSmall { 0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);} }

        .icon-float { animation: floatY 4s ease-in-out infinite; }
        .icon-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .glow { filter: drop-shadow(0 8px 20px rgba(99,102,241,0.12)); }
        .move-slight { transform-origin: center; animation: floatY 5.5s ease-in-out infinite; }

        /* small responsive tweaks for text when needed */
        @media (max-width: 640px) {
          .benefit-metric { font-size: 1.25rem; }
        }
      `}</style>

      {/* Subtle Background Pattern (decorative) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-red-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-purple-600 icon-float" />
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

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const color = getColorClasses(benefit.color);
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                  index % 2 === 0 ? 'lg:mt-8' : 'lg:mb-8'
                }`}
              >
                {/* colorful floating circle + glow */}
                <div
                  style={{ boxShadow: `0 30px 60px -20px ${color.glow}` }}
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${color.gradient} rounded-full opacity-40 transform translate-x-16 -translate-y-16 blur-3xl group-hover:opacity-80 transition-all duration-700 icon-float-slow`}
                  aria-hidden
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 glow`} style={{ background: `linear-gradient(135deg, var(--start), var(--end))` }}>
                      {/* we use inline style vars to keep gradient visual but also Tailwind fallback below */}
                      <div className="icon-float">
                        {benefit.icon}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-3xl font-black bg-clip-text text-transparent benefit-metric`} style={{ background: `linear-gradient(90deg, var(--start), var(--end))` }}>
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

                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${color.gradient} transform origin-left transition-transform duration-1000 ${
                        hoveredBenefit === index ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                </div>

                {/* small moving icon at corner for visual life */}
                <div className="absolute left-6 bottom-6 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/10 shadow-md move-slight">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>

                {/* set CSS variables for gradient colors (fallback for older browsers) */}
                <style>{`
                  .group:nth-child(${index + 1}) { --start: ${benefit.color === 'blue' ? '#60a5fa' : benefit.color === 'green' ? '#34d399' : benefit.color === 'purple' ? '#a78bfa' : '#f87171'}; --end: ${benefit.color === 'blue' ? '#2563eb' : benefit.color === 'green' ? '#059669' : benefit.color === 'purple' ? '#7c3aed' : '#ef4444'}; }
                `}</style>
              </div>
            );
          })}
        </div>

        {/* Feature Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything You Need in One App</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300 icon-float">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button (violet/reacty) */}
        <div className="text-center mt-6">
          <Link href="#faq" aria-label="Go to FAQ" className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-2xl transform transition-all duration-200 hover:-translate-y-1">
            <span>See our FAQ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
