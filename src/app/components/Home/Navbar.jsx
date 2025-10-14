'use client';
import React, { useState } from 'react';
import { ChevronDown, CreditCard, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathNmae = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  if (pathNmae.startsWith("/dashboard")) {
    return null
  }

  return (
    <nav className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary px-4 py-2 rounded-full w-fit cursor-pointer hover:shadow-lg transition">
                <div>
                     <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-sm">DigitalWallet</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium text-sm transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium text-sm transition">About Us</Link>
            
            {/* Features Dropdown */}
            <div className="relative group">
             <Link href="/features">
              <button className="text-gray-700 coupo cursor-pointer hover:text-primary font-medium text-sm flex items-center gap-1 transition">
                Features
              </button>
              
             </Link>
            </div>

            {/* Page Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 cursor-pointer hover:text-primary font-medium text-sm flex items-center gap-1 transition">
                Page
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/product" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm first:rounded-t-lg transition">Product</Link>
                <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm transition">FAQ</Link>
                <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-primary text-sm last:rounded-b-lg transition">Testimonials</Link>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
             <Link href="/blog">
              <button className="text-gray-700 cursor-pointer hover:text-primary font-medium text-sm flex items-center gap-1 transition">
                Blog
              </button></Link>     
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium text-sm transition">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/registration">
              <button className="bg-secondary cursor-pointer hover:bg-secondary text-gray-800 font-semibold px-6 py-2 rounded-full transition">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-primary cursor-pointer hover:bg-primary text-white font-semibold px-6 py-2 rounded-full transition">
                Sign In
              </button>
            </Link>
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
            <Link href="/" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">About Us</Link>

            {/* Mobile Dropdowns */}
            <button onClick={() => toggleDropdown('features')} className="w-full text-left text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded flex items-center justify-between transition">
              Features
              <ChevronDown size={16} className={`transition ${openDropdown === 'features' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'features' && (
              <div className="bg-gray-50 rounded">
                <Link href="/features/payments" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Payment Solutions</Link>
                <Link href="/features/security" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Security</Link>
                <Link href="/features/analytics" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Analytics</Link>
              </div>
            )}

            <button onClick={() => toggleDropdown('page')} className="w-full text-left text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded flex items-center justify-between transition">
              Page
              <ChevronDown size={16} className={`transition ${openDropdown === 'page' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'page' && (
              <div className="bg-gray-50 rounded">
                <Link href="/pages/pricing" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Pricing</Link>
                <Link href="/pages/faq" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">FAQ</Link>
                <Link href="/pages/terms" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Terms & Conditions</Link>
              </div>
            )}

            <button onClick={() => toggleDropdown('blog')} className="w-full text-left text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded flex items-center justify-between transition">
              Blog
              <ChevronDown size={16} className={`transition ${openDropdown === 'blog' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'blog' && (
              <div className="bg-gray-50 rounded">
                <Link href="/blog" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Latest Articles</Link>
                <Link href="/blog/tutorials" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Tutorials</Link>
                <Link href="/blog/tips" className="block text-gray-600 hover:text-primary text-sm py-2 px-6 transition">Tips & Tricks</Link>
              </div>
            )}

            <Link href="/contact" className="block text-gray-700 hover:bg-gray-50 font-medium text-sm py-2 px-2 rounded transition">Contact</Link>

            <div className="flex gap-3 pt-4 px-2">
              <Link href="/signup" className="flex-1 cursor-pointer ">
                <button className="w-full bg-yellow-200 text-gray-800 font-semibold cursor-pointer px-4 py-2 rounded-full hover:bg-yellow-300 transition">
                  Sign Up
                </button>
              </Link>
              <Link href="/signin" className="flex-1 cursor-pointer">
                <button className="w-full bg-primary text-white font-semibold px-4 cursor-pointer py-2 rounded-full hover:bg-indigo-800 transition">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
