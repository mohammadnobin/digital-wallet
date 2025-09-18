import React from 'react';
import { ArrowRight, Shield, Zap, CreditCard, Smartphone, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-bounce animation-delay-1000">
          <Shield className="w-8 h-8 text-purple-300 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce animation-delay-3000">
          <Zap className="w-6 h-6 text-purple-200 opacity-40" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-bounce animation-delay-5000">
          <CreditCard className="w-10 h-10 text-purple-400 opacity-25" />
        </div>
        <div className="absolute top-2/3 right-1/6 animate-bounce animation-delay-2000">
          <TrendingUp className="w-7 h-7 text-purple-300 opacity-35" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-purple-600 bg-opacity-20 backdrop-blur-sm rounded-full text-purple-100 text-sm font-medium mb-6 border border-purple-400 border-opacity-30">
              <Smartphone className="w-4 h-4 mr-2" />
              Next Generation Digital Wallet
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Your Money,
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent block">
                Simplified
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed">
              Experience the future of digital payments with our secure, lightning-fast wallet.
              Send, receive, and manage your money with unprecedented ease and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/login">
                <button className="group bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                  Sign In
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <button className="border-2 border-purple-300 text-purple-100 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:bg-opacity-20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">2M+</div>
                <div className="text-purple-200 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">$50B+</div>
                <div className="text-purple-200 text-sm">Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-purple-200 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-160 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-3 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl overflow-hidden relative">

                  {/* Screen Content */}
                  <div className="p-6 text-white">
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-lg font-semibold">PurpleWallet</div>
                      <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 shadow-xl">
                      <div className="text-purple-100 text-sm mb-2">Total Balance</div>
                      <div className="text-3xl font-bold text-white mb-4">$12,543.89</div>
                      <div className="flex justify-between text-purple-100 text-sm">
                        <span>****  ****  ****  2847</span>
                        <span>12/26</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs text-purple-100">Send</div>
                      </div>
                      <div className="bg-purple-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs text-purple-100">Receive</div>
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-purple-700 bg-opacity-30 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-400 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm font-medium">Coffee Shop</div>
                            <div className="text-xs text-purple-200">2 hours ago</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium">-$4.50</div>
                      </div>
                      <div className="flex justify-between items-center bg-purple-700 bg-opacity-30 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm font-medium">Salary</div>
                            <div className="text-xs text-purple-200">Yesterday</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-green-400">+$2,500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements around Phone */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-400 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z" fill="white" fillOpacity="0.1" />
        </svg>
      </div>
    </div>
  );
}