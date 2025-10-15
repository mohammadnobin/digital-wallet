"use client";
import React, { useState } from "react";
import { ChevronDown, CreditCard, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

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
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              About Us
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              Features
            </Link>

            {/* Page Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 cursor-pointer hover:text-primary font-medium text-sm flex items-center gap-1 transition">
                Page
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition"
                />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/product"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition"
                >
                  Product
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition"
                >
                  FAQ
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition"
                >
                  Testimonials
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <Link
                href="/dashboard"
                className="bg-primary cursor-pointer text-white font-semibold px-6 py-2 rounded-full hover:bg-indigo-800 transition"
              >
                Dashboard
              </Link>
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
            <Link
              href="/"
              className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition"
            >
              About Us
            </Link>
            <Link
              href="/features"
              className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition"
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition"
            >
              Contact
            </Link>

            <div className="flex gap-3 pt-4 px-2">
              {session ? (
                // ✅ Mobile Dashboard Button
                <Link href="/dashboard" className="flex-1 bg-primary text-center text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-800 transition">
              
                    Dashboard
    
                </Link>
              ) : (
                // ✅ Mobile Sign Up / Sign In
                <>
                  <Link href="/registration" className="flex-1 text-center bg-yellow-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition">
                
                      Sign Up
        
                  </Link>
                  <Link href="/login" className="flex-1 bg-primary text-center text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-800 transition">
                  
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
