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
import { usePathname } from "next/navigation";

const colors = {
  primary: "#5f4a94",
  primaryExtraLight: "#f5f2f9",
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0   w-64 bg-white shadow-xl z-40 p-6
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        
        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all
                  ${isActive
                      ? "bg-[#f5f2f9] text-[#5f4a94] shadow-sm"
                      : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${isActive ? "text-[#5f4a94]" : "text-gray-500"}`}
                  />
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section
        <div className="absolute bottom-6 left-0 w-full px-6">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div> */}
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
