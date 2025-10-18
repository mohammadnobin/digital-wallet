// "use client";
// import React from "react";
// import { Wallet, Bell, Search } from "lucide-react";

// const colors = {
//   primary: "#5f4a94",
//   secondary: "#e0c9a4",
// };

// export default function Header() {
//   return (
//     <header className="bg-white border-b sticky top-0 z-50">
//       <div className="px-8 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <div
//             className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
//             style={{ backgroundColor: colors.primary }}
//           >
//             <Wallet className="w-6 h-6" />
//           </div>
//           <span
//             className="text-2xl font-bold"
//             style={{ color: colors.primary }}
//           >
//             DigitalWallet
//           </span>
//         </div>

//         {/* Search + Notification + Profile */}
//         <div className="flex items-center gap-6">
//           <div className="relative">
//             <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="pl-11 pr-4 py-2.5 border border-gray-200 rounded-full w-80 focus:outline-none focus:border-gray-300 bg-gray-50"
//             />
//           </div>

//           <button className="relative p-2 hover:bg-gray-50 rounded-full">
//             <Bell className="w-5 h-5 text-gray-600" />
//             <span
//               className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
//               style={{ backgroundColor: colors.secondary }}
//             ></span>
//           </button>

//           <div className="flex items-center gap-3 pl-6 border-l">
//             <div className="text-right">
//               <div className="text-sm font-semibold text-gray-800">
//                 MD. Nobin
//               </div>
//               <div className="text-xs text-gray-500">
//                 najrulislamnobin@gmail.com
//               </div>
//             </div>
//             <div
//               className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
//               style={{ backgroundColor: colors.primary }}
//             >
//               MN
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";
import React, { useState } from "react";
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

  // 🔐 Logout handler
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
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* 🔹 Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span
              className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap"
              style={{ color: colors.primary }}
            >
              DigitalWallet
            </span>
          </div>
        </div>

        {/* 🔹 Right: Desktop Controls */}
        <div className="hidden md:flex items-center gap-6 relative">
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-11 pr-4 py-2.5 border border-gray-200 rounded-full w-72 focus:outline-none focus:border-gray-300 bg-gray-50"
            />
          </div>

          {/* Bell */}
          <button className="relative p-2 hover:bg-gray-50 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
            <span
              className="absolute top-1 right-1 w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.secondary }}
            ></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 pl-6 border-l cursor-pointer"
            >
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-800">
                  {user?.name || "Guest User"}
                </div>
                <div className="text-xs text-gray-500">
                  {user?.email || "Not logged in"}
                </div>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
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
              <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                ) : (
                  <Link href="/login">
                    <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-50 transition-colors">
                      <LogIn className="w-4 h-4" /> Login
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Mobile Icons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-gray-50 rounded-full"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          <button className="relative p-2 hover:bg-gray-50 rounded-full">
            <Bell className="w-5 h-5 text-gray-700" />
            <span
              className="absolute top-1 right-1 w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.secondary }}
            ></span>
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Search Bar */}
      {showSearch && (
        <div className="px-4 pb-3 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-gray-300 bg-gray-50"
          />
        </div>
      )}

      {/* 🔹 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: colors.primary }}
              >
                {user?.name ? user.name[0].toUpperCase() : "G"}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  {user?.name || "Guest User"}
                </div>
                <div className="text-xs text-gray-500">
                  {user?.email || "Not logged in"}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors">
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
