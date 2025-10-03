'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Fingerprint, Award, Users, Key, Globe, Server, Bell, Activity,  Building2, CreditCard, Zap, Database, UserCheck } from 'lucide-react';

export default function SecurityTrustSection() {
  const [activeSecurityFeature, setActiveSecurityFeature] = useState(0);
  const [showEncryption, setShowEncryption] = useState(false);
  const [securityScore, setSecurityScore] = useState(0);
  const [activeTab, setActiveTab] = useState('security');
  const [threatsPrevented, setThreatsPrevented] = useState(0);
  const [liveUsers, setLiveUsers] = useState(12847);
  const [dataProcessed, setDataProcessed] = useState(0);

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "256-Bit SSL Encryption",
      description: "Military-grade encryption protects every transaction and data transfer",
      detail: "Same encryption used by major banks and government institutions",
      color: "from-purple-600 to-purple-800",
      stats: "100% encrypted"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 Fraud Monitoring",
      description: "AI-powered systems detect suspicious activity in real-time",
      detail: "Machine learning algorithms analyze patterns to prevent fraud",
      color: "from-indigo-600 to-purple-600",
      stats: "99.8% accuracy"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "Data stored in encrypted, distributed servers across multiple locations",
      detail: "SOC 2 Type II certified data centers with 99.9% uptime",
      color: "from-purple-800 to-indigo-800",
      stats: "99.97% uptime"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Protection",
      description: "Instant threat detection and automated response systems",
      detail: "Advanced behavioral analysis prevents attacks before they happen",
      color: "from-yellow-600 to-orange-600",
      stats: "<0.1s response"
    }
  ];

  const certifications = [
    { name: "PCI DSS", level: "Level 1", color: "bg-green-500", icon: <CreditCard className="w-4 h-4" /> },
    { name: "ISO 27001", level: "Certified", color: "bg-blue-500", icon: <Award className="w-4 h-4" /> },
    { name: "SOC 2", level: "Type II", color: "bg-purple-500", icon: <Building2 className="w-4 h-4" /> },
    { name: "GDPR", level: "Compliant", color: "bg-indigo-500", icon: <Globe className="w-4 h-4" /> },
    { name: "HIPAA", level: "Compliant", color: "bg-pink-500", icon: <UserCheck className="w-4 h-4" /> },
    { name: "FedRAMP", level: "Moderate", color: "bg-red-500", icon: <Shield className="w-4 h-4" /> }
  ];

  const securityMetrics = [
    { label: "Uptime", value: 99.97, max: 100, color: "text-green-400" },
    { label: "Response Time", value: 0.3, max: 1, unit: "s", color: "text-blue-400" },
    { label: "Security Score", value: 98, max: 100, color: "text-purple-400" },
    { label: "Customer Satisfaction", value: 96, max: 100, unit: "%", color: "text-pink-400" }
  ];

  const liveStats = [
    { label: "Active Users", value: liveUsers.toLocaleString(), icon: <Users className="w-5 h-5" />, color: "text-green-400" },
    { label: "Threats Blocked", value: threatsPrevented.toLocaleString(), icon: <Shield className="w-5 h-5" />, color: "text-red-400" },
    { label: "Data Processed", value: `${dataProcessed}TB`, icon: <Database className="w-5 h-5" />, color: "text-blue-400" },
    { label: "Security Events", value: "Real-time", icon: <Activity className="w-5 h-5" />, color: "text-purple-400" }
  ];

  const complianceFeatures = [
    {
      title: "Multi-factor Authentication",
      description: "Biometric and hardware key support",
      icon: <Fingerprint className="w-6 h-6" />
    },
    {
      title: "Zero-trust Architecture",
      description: "Every request is verified and encrypted",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Automated Backups",
      description: "Continuous data protection across regions",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Incident Response",
      description: "24/7 security operations center",
      icon: <Bell className="w-6 h-6" />
    }
  ];

  // Animation effects
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSecurityFeature((prev) => (prev + 1) % securityFeatures.length);
    }, 4000); // Slightly slower feature rotation
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

  // Live statistics updates
  useEffect(() => {
    const threatsTimer = setInterval(() => {
      setThreatsPrevented(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const usersTimer = setInterval(() => {
      setLiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 8000);

    const dataTimer = setInterval(() => {
      setDataProcessed(prev => Math.round((prev + 0.1) * 10) / 10);
    }, 3000);

    return () => {
      clearInterval(threatsTimer);
      clearInterval(usersTimer);
      clearInterval(dataTimer);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Security & Trust
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Money is{' '}
            <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent block">
              Absolutely Secure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built with enterprise-grade security from the ground up. Every transaction, every byte of data, 
            every user interaction is protected by multiple layers of security.
          </p>
        </div>

        {/* Live Statistics Bar */}
        <div className="bg-white rounded-2xl p-6 mb-12 shadow-lg border border-purple-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {liveStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 mb-3 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
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
                        className="h-full bg-white rounded-full transition-all duration-1000"
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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-purple-100">
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'security'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Security Features
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'compliance'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Compliance
            </button>
          </div>
        </div>

        {activeTab === 'security' && (
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
                  <div
                    className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      activeSecurityFeature === index
                        ? `bg-gradient-to-r ${feature.color} text-white`
                        : 'bg-white hover:bg-purple-50'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between mb-4 ${
                        activeSecurityFeature === index ? 'text-white' : 'text-purple-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-3 rounded-xl mr-4 transition-colors duration-300 ${
                            activeSecurityFeature === index
                              ? 'bg-white bg-opacity-20'
                              : 'bg-purple-100'
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{feature.title}</h3>
                        </div>
                      </div>
                      <div
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          activeSecurityFeature === index
                            ? 'bg-white bg-opacity-20 text-white'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {feature.stats}
                      </div>
                    </div>
                    <p
                      className={`text-lg leading-relaxed mb-3 ${
                        activeSecurityFeature === index ? 'text-purple-100' : 'text-gray-600'
                      }`}
                    >
                      {feature.description}
                    </p>
                    <p
                      className={`text-sm transition-all duration-300 ${
                        activeSecurityFeature === index
                          ? 'text-purple-200 opacity-100'
                          : 'text-gray-500 opacity-0 group-hover:opacity-100'
                      }`}
                    >
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
                  <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      showEncryption ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
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

                {/* Slower Orbiting Trust Badges */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '60s' }}>
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`absolute w-16 h-16 ${cert.color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform duration-300`}
                      style={{
                        top: `${50 + 45 * Math.sin((index * 60) * Math.PI / 180)}%`,
                        left: `${50 + 45 * Math.cos((index * 60) * Math.PI / 180)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {cert.icon}
                      <span className="mt-1">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl mr-4 text-purple-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
