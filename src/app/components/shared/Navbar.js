"use client";
import React, { use, useState } from "react";
import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  Send,
  CreditCard,
  Receipt,
  Clock,
} from "lucide-react";
import { Authcontext } from "@/context/AuthContext";
import Link from "next/link";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { user, logOut } = use(Authcontext);
  const [open, setOpen] = useState(false);
  console.log(user);
  const handleLogout = () => {
    logOut();
  };

  const navigationItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      color: "bg-blue-500",
      href: "/dashboard",
    },
    {
      icon: Send,
      label: "Transfer",
      color: "bg-green-500",
      href: "/dashboard/transfer",
    },
    {
      icon: CreditCard,
      label: "Cards",
      color: "bg-purple-500",
      href: "/dashboard/cards",
    },
    {
      icon: Receipt,
      label: "Bills",
      color: "bg-orange-500",
      href: "/dashboard/bills",
    },
    {
      icon: Clock,
      label: "History",
      color: "bg-pink-500",
      href: "/dashboard/history",
    },
  ];
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    DigitalWallet
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <button
                    onClick={() => setActiveTab(item.label)}
                    className={`px-3 py-2 cursor-pointer text-sm font-medium transition-colors ${
                      activeTab === item.label
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {/* optional icon */}
                    <item.icon className="inline-block w-4 h-4 mr-1" />
                    {item.label}
                  </button>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </button>
              <div className="relative">
                {/* User Info Button */}
                <div
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">
                      {user?.displayName?.[0] || "U"}
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.displayName}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Dropdown Menu */}
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link href="/login">
                        <button className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                          LogIn
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
