'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Search, Mail, Phone, Clock } from 'lucide-react';

const page = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business days delivery at an additional cost."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Check our shipping calculator for specific details."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's site to track your package."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption."
        },
        {
            question: "Can I modify or cancel my order?",
            answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full mb-8 shadow-2xl animate-bounce">
                        <HelpCircle className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
                        FAQ
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
                        Find answers to frequently asked questions. Can't find what you're looking for? 
                        <span className="text-cyan-300 font-semibold"> Contact our support team!</span>
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { icon: MessageCircle, label: "24/7 Support", value: "Available" },
                        { icon: Search, label: "Quick Answers", value: "Instant" },
                        { icon: Mail, label: "Email Support", value: "< 2hrs" },
                        { icon: Clock, label: "Response Time", value: "< 30min" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <stat.icon className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                            <div className="text-sm text-white/70 mb-1">{stat.label}</div>
                            <div className="text-lg font-bold text-white">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/20 hover:shadow-3xl hover:scale-[1.02] animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-cyan-300/50 transition-all duration-300"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-white pr-4 leading-tight">
                                    {item.question}
                                </h3>
                                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center transition-transform duration-300">
                                    {openItems[index] ? (
                                        <ChevronUp className="w-6 h-6 text-cyan-300" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-cyan-300" />
                                    )}
                                </div>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openItems[index] 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-8 pb-6">
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4"></div>
                                    <p className="text-white/90 text-lg leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-white/80 text-lg mb-6">
                            Our friendly support team is here to help you 24/7
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                                <Mail className="w-5 h-5" />
                                Email Support
                            </button>
                            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Contract Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zigzag Bottom Design */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-indigo-900 to-transparent">
                <svg 
                    viewBox="0 0 1200 120" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="25%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="75%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <path 
                        d="M0,120 L40,80 L80,120 L120,80 L160,120 L200,80 L240,120 L280,80 L320,120 L360,80 L400,120 L440,80 L480,120 L520,80 L560,120 L600,80 L640,120 L680,80 L720,120 L760,80 L800,120 L840,80 L880,120 L920,80 L960,120 L1000,80 L1040,120 L1080,80 L1120,120 L1160,80 L1200,120 L1200,120 L0,120 Z" 
                        fill="url(#zigzagGradient)" 
                        filter="url(#glow)"
                        className="animate-pulse"
                    />
                </svg>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out both;
                }
            `}</style>
        </div>
    );
};

export default page;