"use client";
import React, { use } from "react";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Play,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Authcontext } from "@/context/AuthContext";

export default function HeroSection() {
  const {user} = use(Authcontext)
  const redirectUrl = user ? "/dashboard" : "/registration";
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 lg:py-16">
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
              <Link  href={redirectUrl}>
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
      
    </div>
  );
}
