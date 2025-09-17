"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, LogOut, HelpCircle, Settings, Shield, Wallet, Menu, X, Wallet2Icon, WalletCards, ScanLineIcon } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <WalletCards className="w-7 h-7 text-purple-600" />
        <span className="text-xl font-bold text-purple-700">DigitalWallet</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/dashboard" className="hover:text-purple-600">Dashboard</Link>
        <Link href="/transfer" className="hover:text-purple-600">Transfer</Link>
        <Link href="/cards" className="hover:text-purple-600">Cards</Link>
        <Link href="/bills" className="hover:text-purple-600">Bills</Link>
        <Link href="/history" className="hover:text-purple-600">History</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-700" />
        </div>

        <div className="relative cursor-pointer">
          <ScanLineIcon className="w-6 h-6 text-gray-700" />
        </div>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-full h-full object-cover"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-md p-2 z-50">
              <div className="px-3 py-2 border-b">
                <p className="font-semibold text-gray-800">Sarah Johnson</p>
                <p className="text-xs text-gray-500">sarahjohnson@email.com</p>
              </div>
              <ul className="mt-2">
                <li className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" /> Profile Settings
                </li>
                <li className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <Shield className="w-4 h-4 mr-2" /> Security
                </li>
                <li className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <HelpCircle className="w-4 h-4 mr-2" /> Help Center
                </li>
                <li className="flex items-center px-3 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" /> Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-4 p-4 text-gray-600">
          <Link href="/dashboard" className="hover:text-purple-600 ">Dashboard</Link>
          <Link href="/transfer" className="hover:text-purple-600">Transfer</Link>
          <Link href="/cards" className="hover:text-purple-600">Cards</Link>
          <Link href="/bills" className="hover:text-purple-600">Bills</Link>
          <Link href="/history" className="hover:text-purple-600">History</Link>
        </div>
      )}
    </nav>
  );
}
