

// ============================================
// Header.jsx - Enhanced Responsiveness
// ============================================
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Wallet,
  Bell,
  Search,
  ChevronDown,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const colors = {
  primary: "#5f4a94",
  secondary: "#e0c9a4",
};

export default function Header({ user }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      await signOut({ redirect: false });
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/logout`);
      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/");
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 md:py-4">
        {/* Left: Logo - Better spacing on mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
         
        </div>

        {/* Right: Desktop Controls */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 relative">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 absolute left-3 xl:left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 xl:pl-11 pr-4 py-2 xl:py-2.5 border border-gray-200 rounded-full w-48 xl:w-72 focus:outline-none focus:border-gray-300 bg-gray-50 text-sm"
            />
          </div>

          {/* Bell */}
          <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 xl:gap-3 pl-4 xl:pl-6 border-l cursor-pointer hover:bg-gray-50 py-2 px-2 rounded-lg transition-colors"
            >
              <div className="text-right hidden xl:block">
                <div className="text-sm font-semibold text-gray-800 truncate max-w-[120px]">
                  {user?.name || "Guest User"}
                </div>
                <div className="text-xs text-gray-500 truncate max-w-[120px]">
                  {user?.email || "Not logged in"}
                </div>
              </div>
              <div
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: colors.primary }}
              >
                {user?.name ? user.name[0].toUpperCase() : "G"}
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors rounded-xl"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                ) : (
                  <Link href="/login">
                    <button className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-green-600 hover:bg-green-50 transition-colors rounded-xl">
                      <LogIn className="w-4 h-4" /> Login
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Icons - Better spacing */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="px-4 pb-3 lg:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-gray-300 bg-gray-50 text-sm"
          />
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: colors.primary }}
              >
                {user?.name ? user.name[0].toUpperCase() : "G"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-800 truncate">
                  {user?.name || "Guest User"}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {user?.email || "Not logged in"}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <LogIn className="w-4 h-4" /> Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}