"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CreditCard,
  Send,
  FileText,
  QrCode,
  History,
  PieChart,
  Bell,
  Users,
  Globe,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "User Dashboard",
      description:
        "A personalized dashboard to view account balance, recent transactions, and notifications.",
    },
    {
      icon: CreditCard,
      title: "Multi-Card Management",
      description:
        "Add, remove, and manage multiple bank cards securely within your wallet.",
    },
    {
      icon: Send,
      title: "Fund Transfer",
      description:
        "Transfer money instantly to other wallet users or linked bank accounts with ease.",
    },
    {
      icon: FileText,
      title: "Bill Payments",
      description:
        "Pay utility bills, mobile recharges, and regular expenses directly from your wallet.",
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      description:
        "Make fast and secure payments by scanning merchant QR codes.",
    },
    {
      icon: History,
      title: "Transaction History",
      description:
        "View detailed transaction history with smart filters for date, amount, or category.",
    },
    {
      icon: PieChart,
      title: "Expense Tracker",
      description:
        "Categorize your spending with interactive charts and insights for better budgeting.",
    },
    {
      icon: Bell,
      title: "Notifications & Alerts",
      description:
        "Get instant alerts for payments, transfers, and any suspicious activities.",
    },
    {
      icon: Globe,
      title: "International Remittance",
      description:
        "Send money securely across borders with basic international transfer support.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8"
        >
          <div className="flex-1">
           
            <h1 className="text-5xl lg:text-6xl italic font-bold text-black leading-tight">
              Everything You Need<br />in One Wallet
            </h1>
          </div>

          <div className="lg:max-w-md">
            <p className="text-black text-lg mb-6 leading-relaxed">
              Manage your money, payments, and cards all in one place with our
              feature-rich digital wallet.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Explore More
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-8 h-8 text-purple-900" strokeWidth={1.6} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-purple-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

