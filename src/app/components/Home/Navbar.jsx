"use client";
import React, { useState } from "react";
import { ChevronDown, CreditCard, Menu, X, Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Example notification count

  // handle logout
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  // hide navbar in dashboard pages
  if (
    pathName.startsWith("/dashboard") ||
    pathName.startsWith("/adminDashboard")
  ) {
    return null;
  }

  return (
    <nav className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary px-4 py-2 rounded-full w-fit cursor-pointer hover:shadow-lg transition">
                <CreditCard className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">
                  DigitalWallet
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium text-sm transition">
              Home
            </Link>

            <Link href="/features" className="text-gray-700 hover:text-primary font-medium text-sm transition">
              Features
            </Link>

            {/* Page Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 cursor-pointer hover:text-primary font-medium text-sm flex items-center gap-1 transition">
                Page
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/product" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition">
                  Product
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition">
                  FAQ
                </Link>
                <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition">
                  Testimonials
                </Link>
              </div>
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium text-sm transition">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium text-sm transition">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium text-sm transition">
              Contact
            </Link>
          </div>

          {/* Desktop Profile / Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                {/* Notification Bell */}
                <div className="relative">
                  <button className="relative p-2 rounded-full hover:bg-white/50 transition-all duration-300 group">
                    <Bell
                      size={22}
                      className="text-gray-700 group-hover:text-primary transition-colors duration-300 group-hover:animate-swing"
                    />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-pink-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        {notificationCount > 9 ? "9+" : notificationCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* User Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-0.5 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="w-10 h-10 rounded-full bg-white p-0.5 overflow-hidden">
                      <Image
                        src={session.user?.image || "/user.jpg"}
                        alt="user"
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white transition-transform duration-300 ${
                        openDropdown ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
                      openDropdown
                        ? "opacity-100 visible scale-100 translate-y-0"
                        : "opacity-0 invisible scale-95 -translate-y-2"
                    }`}
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-br from-blue-300 to-purple-300 px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white p-0.5 ring-2 ring-white/50">
                          <Image
                            src={session.user?.image || "/user.jpg"}
                            alt="user"
                            width={48}
                            height={48}
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm truncate">
                            {session.user?.name || "User"}
                          </p>
                          <p className="text-blue-100 text-xs truncate">
                            {session.user?.email || "user@example.com"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2 px-2">
                      <Link
                        href="/dashboard"
                        onClick={() => setOpenDropdown(false)}
                        className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 transform hover:translate-x-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-semibold group-hover:scale-110 transition-transform duration-200">
                          <CreditCard size={16} />
                        </div>
                        <span className="font-medium text-sm">Dashboard</span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="group w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:translate-x-1 mt-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                          <IoMdLogOut size={18} />
                        </div>
                        <span className="font-medium text-sm">Logout</span>
                      </button>
                    </div>
                  </div>

                  {/* Backdrop */}
                  {openDropdown && (
                    <div
                      className="fixed inset-0 z-[-1]"
                      onClick={() => setOpenDropdown(false)}
                    />
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/registration"
                  className="bg-secondary cursor-pointer hover:bg-secondary text-gray-800 font-semibold px-6 py-2 rounded-full transition"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="bg-primary cursor-pointer text-white font-semibold px-6 py-2 rounded-full hover:bg-indigo-800 transition"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t">
            <Link href="/" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">
              About Us
            </Link>
            <Link href="/features" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">
              Features
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">
              Blog
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">
              Contact
            </Link>

            <div className="flex gap-3 pt-4 px-2">
              {session ? (
                <Link
                  href="/dashboard"
                  className="flex-1 bg-primary text-center text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-800 transition"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/registration"
                    className="flex-1 text-center bg-yellow-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="flex-1 bg-primary text-center text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-800 transition"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
