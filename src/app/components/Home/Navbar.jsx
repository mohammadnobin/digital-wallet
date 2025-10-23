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
  const [notificationCount, setNotificationCount] = useState(3);
  const [openNotifications, setOpenNotifications] = useState(false);

  // Example notifications data
  const notifications = [
    {
      id: 1,
      title: "Payment Received",
      message: "You received $150.00 from John Doe",
      time: "2 min ago",
      read: false,
      type: "success"
    },
    {
      id: 2,
      title: "Security Alert",
      message: "New login detected from Chrome on Windows",
      time: "1 hour ago",
      read: false,
      type: "warning"
    },
    {
      id: 3,
      title: "Card Expiring Soon",
      message: "Your Visa card ending in 4532 expires next month",
      time: "3 hours ago",
      read: false,
      type: "info"
    },
    {
      id: 4,
      title: "Transaction Completed",
      message: "Payment of $45.99 to Amazon was successful",
      time: "Yesterday",
      read: true,
      type: "success"
    }
  ];

  // handle logout
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
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
              href="/about"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium text-sm transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Profile / Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                {/* Notification Bell */}
                <div className="relative">
                  <button 
                    onClick={() => setOpenNotifications(!openNotifications)}
                    className="relative p-2 rounded-full hover:bg-white/50 transition-all duration-300 group"
                  >
                    <Bell 
                      size={22} 
                      className="text-gray-700 group-hover:text-primary transition-colors duration-300 group-hover:animate-swing" 
                    />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-pink-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        {notificationCount > 9 ? '9+' : notificationCount}
                      </span>
                    )}
                  </button>

                  {/* Notification Modal */}
                  <div
                    className={`absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
                      openNotifications
                        ? "opacity-100 visible scale-100 translate-y-0"
                        : "opacity-0 invisible scale-95 -translate-y-2"
                    }`}
                  >
                    {/* Modal Header */}
                    <div className="bg-purple-400 px-6 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg">Notifications</h3>
                        <p className="text-indigo-100 text-xs">{notificationCount} unread messages</p>
                      </div>
                      <button 
                        onClick={() => setNotificationCount(0)}
                        className="text-white text-xs hover:text-indigo-100 transition-colors"
                      >
                        Mark all as read
                      </button>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification, index) => (
                        <div
                          key={notification.id}
                          className={`px-6 py-4 border-b border-gray-100 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-200 cursor-pointer ${
                            !notification.read ? 'bg-purple-50/50' : ''
                          }`}
                          style={{
                            animation: openNotifications ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                          }}
                        >
                          <div className="flex items-start gap-3">
                            {/* Notification Icon */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              notification.type === 'success' ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                              notification.type === 'warning' ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                              'bg-purple-400'
                            }`}>
                              <Bell size={18} className="text-white" />
                            </div>

                            {/* Notification Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-semibold text-gray-800 text-sm">
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                                )}
                              </div>
                              <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                                {notification.message}
                              </p>
                              <span className="text-gray-400 text-xs mt-2 block">
                                {notification.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Modal Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                      <button 
                        onClick={() => setOpenNotifications(false)}
                        className="w-full text-center text-primary font-semibold text-sm hover:text-indigo-700 transition-colors"
                      >
                        View All Notifications
                      </button>
                    </div>
                  </div>

                  {/* Backdrop */}
                  {openNotifications && (
                    <div
                      className="fixed inset-0 z-[-1]"
                      onClick={() => setOpenNotifications(false)}
                    />
                  )}
                </div>

                {/* User Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="relative bg-purple-400 rounded-full p-0.5 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl transform hover:scale-105"
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

                  {/* Animated Dropdown */}
                  <div
                    className={`absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
                      openDropdown
                        ? "opacity-100 visible scale-100 translate-y-0"
                        : "opacity-0 invisible scale-95 -translate-y-2"
                    }`}
                  >
                    {/* Dropdown Header */}
                    <div className="bg-purple-400   px-6 py-4">
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
                          <p className="text-purple-100 text-xs truncate">
                            {session.user?.email || "user@example.com"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Menu Items */}
                    <div className="py-2 px-2">
                      <Link
                        href="/dashboard"
                        onClick={() => setOpenDropdown(false)}
                        className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 rounded-xl transition-all duration-200 transform hover:translate-x-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-400 flex items-center justify-center text-white text-sm font-semibold group-hover:scale-110 transition-transform duration-200">
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
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 flex items-center gap-3"
          >
            {/* Mobile Notification Bell */}
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenNotifications(!openNotifications);
                }}
                className="relative p-2 rounded-full hover:bg-white/50 transition-all duration-300"
              >
                <Bell 
                  size={20} 
                  className="text-gray-700" 
                />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile User Avatar (if logged in) */}
            {session && (
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(!openDropdown);
                }}
                className="relative bg-gradient-to-br from-purple-400 to-purple-500 rounded-full p-0.5 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-white p-0.5 overflow-hidden">
                  <Image
                    src={session.user?.image || "/user.jpg"}
                    alt="user"
                    width={32}
                    height={32}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            )}

            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* Mobile Notification Modal */}
        {openNotifications && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-fadeIn">
            <div 
              className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[80vh] flex flex-col animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 px-6 py-5 flex items-center justify-between rounded-t-3xl sm:rounded-t-3xl">
                <div>
                  <h3 className="text-white font-bold text-lg">Notifications</h3>
                  <p className="text-indigo-100 text-xs">{notificationCount} unread messages</p>
                </div>
                <button 
                  onClick={() => setOpenNotifications(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mark all as read button */}
              <div className="px-6 py-3 border-b border-gray-200">
                <button 
                  onClick={() => setNotificationCount(0)}
                  className="text-primary text-sm font-semibold hover:text-indigo-700 transition-colors"
                >
                  Mark all as read
                </button>
              </div>

              {/* Notifications List */}
              <div className="flex-1 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`px-6 py-4 border-b border-gray-100 active:bg-gradient-to-r active:from-purple-50 active:to-purple-100 transition-all duration-200 ${
                      !notification.read ? 'bg-purple-50/50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Notification Icon */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        notification.type === 'success' ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                        notification.type === 'warning' ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                        'bg-purple-400'
                      }`}>
                        <Bell size={18} className="text-white" />
                      </div>

                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-gray-800 text-sm">
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        <p className="text-gray-600 text-xs mt-1">
                          {notification.message}
                        </p>
                        <span className="text-gray-400 text-xs mt-2 block">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button 
                  onClick={() => setOpenNotifications(false)}
                  className="w-full text-center text-primary font-semibold text-sm py-2 hover:text-indigo-700 transition-colors"
                >
                  View All Notifications
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile User Dropdown Modal */}
        {session && openDropdown && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-fadeIn">
            <div 
              className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-sm animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dropdown Header */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 px-6 py-5 rounded-t-3xl sm:rounded-t-3xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">Account</h3>
                  <button 
                    onClick={() => setOpenDropdown(false)}
                    className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white p-0.5 ring-2 ring-white/50">
                    <Image
                      src={session.user?.image || "/user.jpg"}
                      alt="user"
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-base truncate">
                      {session.user?.name || "User"}
                    </p>
                    <p className="text-purple-100 text-sm truncate">
                      {session.user?.email || "user@example.com"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dropdown Menu Items */}
              <div className="py-4 px-4">
                <Link
                  href="/dashboard"
                  onClick={() => setOpenDropdown(false)}
                  className="flex items-center gap-3 px-4 py-4 text-gray-700 active:bg-gradient-to-r active:from-purple-50 active:to-purple-100 rounded-xl transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-400 flex items-center justify-center text-white">
                    <CreditCard size={20} />
                  </div>
                  <span className="font-medium">Dashboard</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-4 text-red-600 active:bg-red-50 rounded-xl transition-all duration-200 mt-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white">
                    <IoMdLogOut size={22} />
                  </div>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

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
              {!session && (
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

            {/* Mobile Dashboard & Logout for logged-in users */}
            {session && (
              <div className="space-y-2 pt-2">
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 mx-2 text-gray-700 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-400 flex items-center justify-center text-white">
                    <CreditCard size={20} />
                  </div>
                  <span className="font-medium">Dashboard</span>
                </Link>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 mx-2 text-red-600 bg-red-50 rounded-xl transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white">
                    <IoMdLogOut size={22} />
                  </div>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add keyframe animation for notification items */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}