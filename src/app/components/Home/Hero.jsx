"use client";
import React from "react";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Play,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-8">
              <span className="text-orange-700 text-sm font-medium">
                Trusted by 10M+ users worldwide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Simple & Secure
              <span className="text-primary block">Digital Payments</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Send money instantly, pay bills effortlessly, and manage your
              finances with complete security. Join millions who trust PayWallet
              for their daily transactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/registration">
                <button className="bg-indigo-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
                  Open Free Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-orange-500 cursor-pointer text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch How It Works
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bank-Level Security
                </h3>
                <p className="text-gray-600">
                  256-bit encryption protects every transaction
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Instant Transfers
                </h3>
                <p className="text-gray-600">
                  Send money in seconds, 24/7 availability
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Network
                </h3>
                <p className="text-gray-600">
                  Connect with users in 50+ countries
                </p>
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
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
              <div className="text-gray-600 font-medium">Monthly Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
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
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Quick Payments
                    </h4>
                    <p className="text-gray-600">
                      Send money using just phone numbers or QR codes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Bill Management
                    </h4>
                    <p className="text-gray-600">
                      Automate recurring payments and never miss a due date
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Smart Analytics
                    </h4>
                    <p className="text-gray-600">
                      Track spending patterns and optimize your budget
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 cursor-pointer bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Download App
              </button>
            </div>

            {/* Right Phone Mockup */}
            <div className="flex justify-center cursor-pointer">
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
                            <h3 className="text-lg font-semibold text-gray-900">
                              Good morning!
                            </h3>
                            <p className="text-gray-600">Sarah Johnson</p>
                          </div>
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">SJ</span>
                          </div>
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div className="px-6 py-6">
                        <div className="bg-primary rounded-2xl p-6 text-white">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-indigo-200 text-sm mb-1">
                                Available Balance
                              </p>
                              <p className="text-3xl font-bold">$15,847.32</p>
                            </div>
                            <div className="w-12 h-8 bg-white bg-opacity-20 rounded"></div>
                          </div>
                          <p className="text-indigo-200 text-sm">
                            **** **** **** 4829
                          </p>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-orange-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-secondary" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">
                              Send
                            </p>
                          </div>
                          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-green-600 transform rotate-180" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">
                              Request
                            </p>
                          </div>
                          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">
                              Pay Bills
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div className="px-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Recent Activity
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-green-100 rounded-full mr-3 flex items-center justify-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">
                                  Coffee Shop
                                </p>
                                <p className="text-gray-500 text-xs">
                                  2 hours ago
                                </p>
                              </div>
                            </div>
                            <span className="text-red-500 font-semibold text-sm">
                              -$4.80
                            </span>
                          </div>
                          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">
                                  Salary Deposit
                                </p>
                                <p className="text-gray-500 text-xs">
                                  Yesterday
                                </p>
                              </div>
                            </div>
                            <span className="text-green-500 font-semibold text-sm">
                              +$3,200
                            </span>
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
