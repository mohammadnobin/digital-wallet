'use client';
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint,
  Award,
  Users,
  CheckCircle,
  AlertTriangle,
  Key,
  Globe,
  Server,
  Smartphone,
  Bell,
  Activity,
  TrendingUp,
  Star,
  Building2,
  CreditCard
} from 'lucide-react';

export default function SecurityTrustSection() {
  const [activeSecurityFeature, setActiveSecurityFeature] = useState(0);
  const [showEncryption, setShowEncryption] = useState(false);
  const [securityScore, setSecurityScore] = useState(0);

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "256-Bit SSL Encryption",
      description: "Military-grade encryption protects every transaction and data transfer",
      detail: "Same encryption used by major banks and government institutions",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 Fraud Monitoring",
      description: "AI-powered systems detect suspicious activity in real-time",
      detail: "Machine learning algorithms analyze patterns to prevent fraud",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "Data stored in encrypted, distributed servers across multiple locations",
      detail: "SOC 2 Type II certified data centers with 99.9% uptime",
      color: "from-purple-800 to-indigo-800"
    }
  ];


  const certifications = [
    { name: "PCI DSS", level: "Level 1", color: "bg-green-500" },
    { name: "ISO 27001", level: "Certified", color: "bg-blue-500" },
    { name: "SOC 2", level: "Type II", color: "bg-purple-500" },
    { name: "GDPR", level: "Compliant", color: "bg-indigo-500" }
  ];

  const securityMetrics = [
    { label: "Uptime", value: 99.97, max: 100, color: "text-green-400" },
    { label: "Response Time", value: 0.3, max: 1, unit: "s", color: "text-blue-400" },
    { label: "Security Score", value: 98, max: 100, color: "text-purple-400" },
    { label: "Customer Satisfaction", value: 96, max: 100, unit: "%", color: "text-pink-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSecurityFeature((prev) => (prev + 1) % securityFeatures.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scoreTimer = setTimeout(() => {
      let count = 0;
      const increment = () => {
        if (count < 98) {
          count += 2;
          setSecurityScore(count);
          setTimeout(increment, 50);
        }
      };
      increment();
    }, 1000);
    return () => clearTimeout(scoreTimer);
  }, []);

  useEffect(() => {
    const encryptionTimer = setInterval(() => {
      setShowEncryption(prev => !prev);
    }, 2000);
    return () => clearInterval(encryptionTimer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Security & Trust
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Money is
            <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent block">
              Absolutely Secure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built with enterprise-grade security from the ground up. Every transaction, 
            every byte of data, every user interaction is protected by multiple layers of security.
          </p>
        </div>

        {/* Security Score Dashboard */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-8 mb-16 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Security Score</h3>
              <div className="relative">
                <svg className="w-32 h-32" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${securityScore * 2.51} 251`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{securityScore}%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {securityMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-purple-100">{metric.label}</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-purple-600 rounded-full mr-3">
                      <div 
                        className={`h-full bg-white rounded-full transition-all duration-1000`}
                        style={{ width: `${(metric.value / metric.max) * 100}%` }}
                      />
                    </div>
                    <span className={`font-bold ${metric.color}`}>
                      {metric.value}{metric.unit || '%'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Security Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Security Features List */}
          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeSecurityFeature === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveSecurityFeature(index)}
              >
                <div className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  activeSecurityFeature === index 
                    ? `bg-gradient-to-r ${feature.color} text-white` 
                    : 'bg-white hover:bg-purple-50'
                }`}>
                  <div className={`flex items-center mb-4 ${
                    activeSecurityFeature === index ? 'text-white' : 'text-purple-700'
                  }`}>
                    <div className={`p-3 rounded-xl mr-4 transition-colors duration-300 ${
                      activeSecurityFeature === index 
                        ? 'bg-white bg-opacity-20' 
                        : 'bg-purple-100'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                  </div>
                  <p className={`text-lg leading-relaxed mb-3 ${
                    activeSecurityFeature === index ? 'text-purple-100' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                  <p className={`text-sm transition-all duration-300 ${
                    activeSecurityFeature === index 
                      ? 'text-purple-200 opacity-100' 
                      : 'text-gray-500 opacity-0 group-hover:opacity-100'
                  }`}>
                    {feature.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Security Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Security Shield */}
              <div className="w-80 h-80 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* Animated Security Rings */}
                <div className="absolute inset-4 border-2 border-purple-300 border-opacity-30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border-2 border-purple-200 border-opacity-40 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute inset-12 border-2 border-purple-100 border-opacity-50 rounded-full animate-pulse animation-delay-2000"></div>
                
                {/* Center Shield Icon */}
                <div className="relative z-10 text-white text-center">
                  <div className="mb-4 transform transition-all duration-500 hover:scale-110">
                    <Shield className="w-16 h-16 mx-auto" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Protected</h4>
                  <div className="w-16 h-1 bg-white rounded-full mx-auto opacity-60"></div>
                </div>

                {/* Floating Security Icons */}
                <div className="absolute top-8 left-8 animate-bounce">
                  <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                    <Lock className="w-4 h-4 text-purple-800" />
                  </div>
                </div>
                <div className="absolute top-8 right-8 animate-bounce animation-delay-1000">
                  <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                    <Key className="w-4 h-4 text-purple-800" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 animate-bounce animation-delay-2000">
                  <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                    <Fingerprint className="w-4 h-4 text-purple-800" />
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 animate-bounce animation-delay-3000">
                  <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-purple-800" />
                  </div>
                </div>

                {/* Data Encryption Visualization */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${showEncryption ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20 animate-pulse"></div>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-300 rounded-full animate-ping"
                      style={{
                        top: `${20 + i * 10}%`,
                        left: `${15 + (i % 2) * 60}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Orbiting Trust Badges */}
              <div className="absolute inset-0 animate-spin animation-duration-30000">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`absolute w-16 h-16 ${cert.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                    style={{
                      top: `${50 + 45 * Math.sin((index * 90) * Math.PI / 180)}%`,
                      left: `${50 + 45 * Math.cos((index * 90) * Math.PI / 180)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       

       
      </div>
    </section>
  );
}