'use client';
import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  CreditCard, 
  Send, 
  CheckCircle,
  Zap,
  Download,
  Link,
  Shield
} from 'lucide-react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      id: 1,
      icon: <Download className="w-8 h-8" />,
      title: "Download & Sign Up",
      description: "Get the app from App Store or Google Play and create your account in under 2 minutes",
      details: "Verify your identity with just your phone number and email. No lengthy paperwork required.",
      color: "from-fuchsia-600 to-purple-700",
      image: "signup"
    },
    {
      id: 2,
      icon: <Link className="w-8 h-8" />,
      title: "Connect Your Accounts",
      description: "Link your bank accounts, cards, or crypto wallets securely with bank-level encryption",
      details: "Support for 100+ banks and financial institutions. Your data is protected with 256-bit encryption.",
      color: "from-indigo-600 to-blue-700",
      image: "connect"
    },
    {
      id: 3,
      icon: <Send className="w-8 h-8" />,
      title: "Start Transacting",
      description: "Send money, pay bills, or make purchases instantly with just a few taps",
      details: "Lightning-fast transfers worldwide. Track all transactions in real-time with smart notifications.",
      color: "from-blue-600 to-violet-600",
      image: "transact"
    },
    {
      id: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Enjoy Peace of Mind",
      description: "Monitor your finances with AI-powered insights and industry-leading security",
      details: "24/7 fraud monitoring, spending analytics, and instant alerts keep you in control.",
      color: "from-purple-700 to-indigo-800",
      image: "security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderPhoneContent = (step) => {
    const contents = {
      signup: (
        <div className="p-4 text-white">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-fuchsia-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <UserPlus className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Create Account</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
              <div className="text-xs text-purple-200 mb-1">Phone Number</div>
              <div className="text-sm">+1 (555) 123-4567</div>
            </div>
            <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
              <div className="text-xs text-purple-200 mb-1">Email</div>
              <div className="text-sm">user@email.com</div>
            </div>
            <button className="w-full bg-white text-purple-700 py-3 rounded-lg font-semibold hover:bg-purple-200 transition">
              Get Started
            </button>
          </div>
        </div>
      ),
      connect: (
        <div className="p-4 text-white">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Link className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Link Accounts</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center bg-purple-700 bg-opacity-50 rounded-lg p-3">
              <div className="w-8 h-8 bg-blue-500 rounded mr-3"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Chase Bank</div>
                <div className="text-xs text-purple-200">****1234</div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex items-center bg-purple-700 bg-opacity-50 rounded-lg p-3">
              <div className="w-8 h-8 bg-red-500 rounded mr-3"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Visa Card</div>
                <div className="text-xs text-purple-200">****5678</div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          </div>
        </div>
      ),
      transact: (
        <div className="p-4 text-white">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Send Money</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-700 bg-opacity-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-center mb-2">$250.00</div>
              <div className="text-center text-purple-200 text-sm">to Sarah Johnson</div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-200">Transfer Fee</span>
              <span className="text-white">Free</span>
            </div>
            <button className="w-full bg-white text-purple-700 py-3 rounded-lg font-semibold hover:bg-purple-200 transition">
              Send Now
            </button>
          </div>
        </div>
      ),
      security: (
        <div className="p-4 text-white">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Protected</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center bg-green-600 bg-opacity-50 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              <div className="text-sm">Biometric Lock Active</div>
            </div>
            <div className="flex items-center bg-green-600 bg-opacity-50 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              <div className="text-sm">2FA Enabled</div>
            </div>
            <div className="flex items-center bg-green-600 bg-opacity-50 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              <div className="text-sm">Fraud Monitoring</div>
            </div>
          </div>
        </div>
      )
    };
    return contents[step] || contents.signup;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600 bg-opacity-20 backdrop-blur-sm rounded-full text-purple-100 text-sm font-medium mb-6 border border-purple-400 border-opacity-30">
            <Zap className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Started in
            <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent block">
              4 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Join millions of users who've simplified their financial lives. 
            From setup to your first transaction in minutes, not hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Step List */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative p-6 rounded-2xl transition-all duration-500 ${
                  activeStep === index 
                    ? `bg-gradient-to-r ${step.color} shadow-2xl` 
                    : 'bg-purple-800 bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50'
                }`}>
                  <div className={`absolute -left-3 top-6 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-amber-300 text-purple-700' 
                      : 'bg-purple-600 text-white'
                  }`}>
                    {step.id}
                  </div>
                  <div className="pl-6">
                    <div className={`flex items-center mb-4 ${
                      activeStep === index ? 'text-white' : 'text-purple-200'
                    }`}>
                      <div className={`p-2 rounded-lg mr-4 transition-colors duration-300 ${
                        activeStep === index ? 'bg-purple-700 bg-opacity-20' : 'bg-purple-700'
                      }`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className={`text-lg mb-3 ${
                      activeStep === index ? 'text-purple-100' : 'text-purple-300'
                    }`}>
                      {step.description}
                    </p>
                    <p className={`text-sm transition-all duration-300 ${
                      activeStep === index 
                        ? 'text-purple-200 opacity-100' 
                        : 'text-purple-400 opacity-0 group-hover:opacity-100'
                    }`}>
                      {step.details}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-6 left-6 w-0.5 h-12 bg-purple-500 opacity-30"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* iPhone 16 Pro Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Frame */}
              <div className={`relative w-80 h-[35rem] bg-black rounded-[3rem] border-[6px] border-gray-700 shadow-2xl overflow-hidden transition-transform duration-1000 ${
                isVisible ? 'rotate-0 scale-100' : 'rotate-12 scale-95'
              }`}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20"></div>
                {/* Side Buttons */}
                <div className="absolute top-20 -left-1 w-1.5 h-10 bg-gray-600 rounded-r-lg"></div>
                <div className="absolute top-40 -left-1 w-1.5 h-20 bg-gray-600 rounded-r-lg"></div>
                <div className="absolute top-28 -right-1 w-1.5 h-16 bg-gray-600 rounded-l-lg"></div>

                {/* Screen */}
                <div className={`relative w-full h-full bg-gradient-to-b ${steps[activeStep].color} rounded-[2.5rem] overflow-hidden`}>
                  {renderPhoneContent(steps[activeStep].image)}
                </div>
              </div>
              {/* Floating Glow */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-400 rounded-full animate-ping opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Dots Progress */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    index === activeStep 
                      ? 'bg-pink-400 scale-125' 
                      : 'bg-purple-600 hover:bg-purple-500'
                  }`}
                  onClick={() => setActiveStep(index)}
                />
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 transition-colors duration-500 ${
                    index < activeStep ? 'bg-pink-400' : 'bg-purple-600'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-purple-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-purple-600 border-opacity-30">
            <div className="text-3xl font-bold text-white mb-2">2 mins</div>
            <div className="text-purple-200">Average Setup Time</div>
          </div>
          <div className="bg-purple-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-purple-600 border-opacity-30">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-purple-200">Secure & Encrypted</div>
          </div>
          <div className="bg-purple-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-purple-600 border-opacity-30">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-purple-200">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
