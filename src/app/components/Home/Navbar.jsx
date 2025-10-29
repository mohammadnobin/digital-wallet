"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, CreditCard, Menu, X, Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useUser from "@/hooks/useUser";
import { io } from "socket.io-client";
import Swal from "sweetalert2";

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiosSecure = useAxiosSecure();
  const user = useUser();

  // --- LocalStorage for read notifications ---
  const [readNotifications, setReadNotifications] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("readNotifications") || "[]");
    }
    return [];
  });

  // --- Fetch notifications ---
  useEffect(() => {
    if (!user?.accessToken) return;

    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/api/transactions/my`);
        setNotifications(res.data.transactions || []);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [axiosSecure, user?.accessToken]);

  // ✅ Setup Socket.IO for real-time updates
  useEffect(() => {
    if (!user?.email) return;

    const socket = io(process.env.NEXT_PUBLIC_BASE_URL, {
      transports: ["websocket"],
    });

    socket.emit("join", user.email);

    socket.on("transactionUpdate", (data) => {
      const normalizedTx = {
        _id:
          data.transaction._id ||
          data.transaction.transferId ||
          Math.random().toString(36).slice(2),
        type: data.transaction.type || "Unknown",
        status: data.transaction.status || "completed",
        amount: data.transaction.amount || 0,
        currency: data.transaction.currency || "BDT",
        createdAt: data.transaction.createdAt || new Date().toISOString(),
        updatedAt: data.transaction.updatedAt || new Date().toISOString(),
        meta: data.transaction.meta || {},
        senderId: {
          _id:
            data.transaction.senderId?._id ||
            data.transaction.senderId ||
            "unknown",
          name:
            data.transaction.senderId?.name ||
            data.transaction.meta?.fromUserEmail ||
            "Unknown",
          email:
            data.transaction.senderId?.email ||
            data.transaction.meta?.fromUserEmail ||
            "Unknown",
          photo: data.transaction.senderId?.photo || "",
        },
        receiverId: {
          _id:
            data.transaction.receiverId?._id ||
            data.transaction.receiverId ||
            "unknown",
          name:
            data.transaction.receiverId?.name ||
            data.transaction.meta?.toUserEmail ||
            "Unknown",
          email:
            data.transaction.receiverId?.email ||
            data.transaction.meta?.toUserEmail ||
            "Unknown",
          photo: data.transaction.receiverId?.photo || "",
        },
      };

      setNotifications((prev) => [normalizedTx, ...prev]);
      Swal.fire({
        title: "New Transaction",
        position: "top-end",
        icon: "info",
      });
    });

    return () => socket.disconnect();
  }, [user?.email]);

  // --- Notification click handler ---
  const handleNotificationClick = (txId) => {
    if (!readNotifications.includes(txId)) {
      const updated = [...readNotifications, txId];
      setReadNotifications(updated);
      localStorage.setItem("readNotifications", JSON.stringify(updated));
    }
  };

  const notificationCount = notifications.filter(
    (tx) => !readNotifications.includes(tx._id)
  ).length;

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (
    pathName.startsWith("/dashboard") ||
    pathName.startsWith("/adminDashboard")
  ) {
    return null;
  }

  // Helper function to check if a route is active
  const isActiveRoute = (route) => {
    return pathName === route;
  };

  return (
    <nav className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#5f4a94] to-[#5f4a94] px-4 py-2 rounded-full w-fit cursor-pointer hover:shadow-lg transition">
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
              className={`font-medium text-sm transition-all duration-300 relative group ${
                isActiveRoute("/")
                  ? "text-[#5f4a94] font-bold"
                  : "text-gray-700 hover:text-[#5f4a94]"
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
                isActiveRoute("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            <Link
              href="/faq"
              className={`font-medium text-sm transition-all duration-300 relative group ${
                isActiveRoute("/faq")
                  ? "text-[#5f4a94] font-bold"
                  : "text-gray-700 hover:text-[#5f4a94]"
              }`}
            >
              FAQ
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
                isActiveRoute("/faq") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            <Link
              href="/blog"
              className={`font-medium text-sm transition-all duration-300 relative group ${
                isActiveRoute("/blog")
                  ? "text-[#5f4a94] font-bold"
                  : "text-gray-700 hover:text-[#5f4a94]"
              }`}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
                isActiveRoute("/blog") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            <Link
              href="/about"
              className={`font-medium text-sm transition-all duration-300 relative group ${
                isActiveRoute("/about")
                  ? "text-[#5f4a94] font-bold"
                  : "text-gray-700 hover:text-[#5f4a94]"
              }`}
            >
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
                isActiveRoute("/about") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            <Link
              href="/contact"
              className={`font-medium text-sm transition-all duration-300 relative group ${
                isActiveRoute("/contact")
                  ? "text-[#5f4a94] font-bold"
                  : "text-gray-700 hover:text-[#5f4a94]"
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
                isActiveRoute("/contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </div>

          {/* Desktop Profile / Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                {/* Notification Bell */}
                {/* (notification section unchanged) */}
              </>
            ) : (
              <>
                <Link
                  href="/registration"
                  className="bg-secondary cursor-pointer text-gray-800 font-semibold px-6 py-2 rounded-full transition hover:opacity-90"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="bg-[#5f4a94] cursor-pointer text-white font-semibold px-6 py-2 rounded-full hover:bg-[#4a3a75] transition"
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {/* Keyframes */}
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
      `}</style>
    </nav>
  );
}