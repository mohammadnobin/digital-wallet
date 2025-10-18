"use client";
import React, { useState } from "react";
import {
  Home,
  Receipt,
  CreditCard,
  PieChart,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const colors = {
  primary: "#5f4a94",
  primaryExtraLight: "#f5f2f9",
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Receipt, label: "Transfer", href: "/dashboard/transfer" },
    { icon: CreditCard, label: "My Cards", href: "/dashboard/cards" },
    { icon: PieChart, label: "Bills", href: "/dashboard/bills" },
    { icon: Users, label: "History", href: "/dashboard/history" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
 
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-  bg-white  
          shadow-lg z-40
          w-64 p-4
        hover:shadow-2xl transition-all duration-500
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        <nav className="space-y-6">
          {/* Menu Items */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Upgrade Pro
          <div
            className="px-4 py-6 rounded-2xl bg-[#f5f2f9] mb-6"
            style={{ backgroundColor: colors.primaryExtraLight }}
          >
            <div className="text-2xl mb-2">🎁</div>
            <div
              className="text-sm font-semibold mb-1"
              style={{ color: colors.primary }}
            >
              Upgrade to Pro
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Unlock premium features
            </p>
            <button
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Upgrade Now
            </button>
          </div> */}

          {/* Settings */}
          {/* <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div> */}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
