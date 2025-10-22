"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  Receipt,
  CreditCard,
  PieChart,
  Users,
  Menu,
  X,
  Wallet,
  User,
  Settings,
  FileText,
  BarChart2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const colors = {
  primary: "#5f4a94",
  primaryExtraLight: "#f5f2f9",
};

export default function Sidebar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // সাধারণ menu items
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Receipt, label: "Transfer", href: "/dashboard/transfer" },
    { icon: CreditCard, label: "My Cards", href: "/dashboard/cards" },
    { icon: PieChart, label: "Bills", href: "/dashboard/bills" },
    { icon: Users, label: "History", href: "/dashboard/history" },
    { icon: Users, label: "AI", href: "/dashboard/aiChatBot" },
  ];

  // যদি user admin হয়, extra menu items যোগ করা হচ্ছে
  if (user?.role === "admin") {
    menuItems.push(
      { icon: Users, label: "User Management", href: "/dashboard/admin/users" },
      { icon: BarChart2, label: "Admin Reports", href: "/dashboard/admin/reports" },
      { icon: FileText, label: "All Transactions", href: "/dashboard/admin/transactions" }
    );
  }

  return (
    <>
      {/* Mobile Top Bar (Menu button + Logo) */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow-sm px-4 py-3 z-50 md:hidden">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: colors.primary }}
          >
            <Wallet className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold" style={{ color: colors.primary }}>
            Digital<span className="hidden sm:inline">Wallet</span>
          </span>
        </Link>

        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="p-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-white z-40 
        pt-20 pb-6 px-4 sm:px-6
        transform transition-transform duration-300 ease-in-out
        shadow-lg md:shadow-none
        overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:pt-6`}
      >
        {/* Logo (Desktop only) */}
        <div className="hidden md:flex items-center gap-2 mb-8">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold" style={{ color: colors.primary }}>
              DigitalWallet
            </span>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 pb-20">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href}>
                <button
                  className={`w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    isActive ? "bg-[#f5f2f9] text-[#5f4a94] shadow-sm" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-[#5f4a94]" : "text-gray-500"}`}
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Buttons (Account & Settings) */}
        <div className="absolute bottom-12 left-0 w-full px-4">
          <Link href="/dashboard/account">
            <button
              className={`w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                pathname === "/dashboard/account" ? "bg-[#f5f2f9] text-[#5f4a94] shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
          </Link>

          <Link href="/dashboard/settings">
            <button
              className={`w-full flex mt-2.5 cursor-pointer items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                pathname === "/dashboard/settings" ? "bg-[#f5f2f9] text-[#5f4a94] shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
