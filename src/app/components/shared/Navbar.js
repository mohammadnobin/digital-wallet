"use client";
import React, { useState } from "react";
import { LogOut, LogIn, Menu, X } from "lucide-react";
import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  Send,
  CreditCard,
  Receipt,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;
  const handleLogout = async () => {
    // SweetAlert2 confirm dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // If user confirms
      await signOut({ redirect: false });
      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/logout`)
      router.push("/");
    }
  };

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", color: "bg-blue-500", href: "/dashboard" },
    { icon: Send, label: "Transfer", color: "bg-green-500", href: "/dashboard/transfer" },
    { icon: CreditCard, label: "Cards", color: "bg-purple-500", href: "/dashboard/cards" },
    { icon: Receipt, label: "Bills", color: "bg-orange-500", href: "/dashboard/bills" },
    { icon: Clock, label: "History", color: "bg-pink-500", href: "/dashboard/history" },
    // { icon: Clock, label: " ", color: "", href: "/dashboard/adminDashboard" },
  ];

  return (
    // <header className="bg-gradient-to-br from-purple-50 to-pink-50  sticky top-0 z-50 shadow-sm border-b border-gray-200">
    //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
    //     <div className="flex justify-between items-center h-16">
    //       <div className="flex-shrink-0">
    //         <Link href="/">
    //           <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary px-4 py-2 rounded-full w-fit cursor-pointer hover:shadow-lg transition">
    //             <CreditCard className="w-5 h-5 text-white" />
    //             <span className="text-white font-bold text-sm">
    //               DigitalWallet
    //             </span>
    //           </div>
    //         </Link>
    //       </div>

    //       <nav className="hidden md:flex space-x-8">
    //         {navigationItems.map((item) => (
    //           <Link
    //             key={item.label}
    //             href={item.href}
    //             className={`px-3 py-2 flex items-center gap-1 text-sm font-medium transition-colors ${pathname === item.href
    //               ? "text-primary border-b-2 border-primary"
    //               : "text-gray-500 hover:text-gray-700"
    //               }`}
    //           >
    //             <item.icon className="inline-block w-4 h-4" />
    //             {item.label}
    //           </Link>
    //         ))}
    //       </nav>

    //       <div className="flex items-center space-x-4">
    //         <button className="relative p-2 cursor-pointer text-gray-400 hover:text-gray-500">
    //           <Bell className="w-6 h-6" />
    //           {/* <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span> */}
    //         </button>

    //         <div className="relative">
    //           {/* User Info Button */}
    //           <div
    //             className="flex items-center space-x-5 cursor-pointer"
    //             onClick={() => setOpen(!open)}
    //           >
    //             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    //               <span className="text-sm font-medium text-gray-700">
    //                 {user?.name?.[0] || "U"}
    //               </span>
    //             </div>
    //             <div className="hidden md:block">
    //               <p className="text-sm font-medium text-gray-900">{user?.name || "User"}</p>
    //               <p className="text-xs text-gray-500">{user?.email || "No email"}</p>
    //             </div>
    //             <ChevronDown className="w-4 h-4 text-gray-400" />
    //           </div>

    //           {/* Dropdown Menu */}
    //           {open && (
    //             <div className="absolute right-12 mt-4 w-30  z-50">
    //               {user ? (
    //                 <button
    //                   onClick={handleLogout}
    //                   className="bg-red-400 cursor-pointer text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg w-full"
    //                 >
    //                   Logout
    //                   <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
    //                 </button>
    //               ) : (
    //                 <Link href="/login">
    //                   <button
    //                     className="bg-green-400 cursor-pointer text-white px-6 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
    //                   >
    //                     Log In
    //                     <LogIn className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    //                   </button>
    //                 </Link>
    //               )}
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>


        <header className="bg-gradient-to-br from-purple-50 to-pink-50 sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
            <div className="flex items-center gap-2 bg-primary px-3 py-2 sm:px-4 rounded-full cursor-pointer hover:shadow-lg transition">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white font-bold text-xs sm:text-sm">
                DigitalWallet
              </span>
            </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigationItems.map((item,i) => (
              <Link
                key={i}
                href={item.href}
                className={`px-3 py-2 flex items-center gap-1 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <item.icon className="inline-block w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Notification Bell */}
            <button className="relative p-2 cursor-pointer text-gray-400 hover:text-gray-500 transition-colors">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 lg:space-x-3 cursor-pointer hover:bg-white hover:bg-opacity-50 rounded-lg p-2 transition-all"
                onClick={() => setOpen(!open)}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {user?.name?.[0] || "U"}
                  </span>
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-900">{user?.name || "User"}</p>
                  <p className="text-xs text-gray-500">{user?.email || "No email"}</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-primary  rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 lg:hidden">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="w-full text-left cursor-pointer px-4 py-2 text-sm text-white   transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  ) : (
                    <button className="w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-50 transition-colors flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      Log In
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Notification Bell */}
            <button className="relative p-2 cursor-pointer text-gray-400 hover:text-gray-500 transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* Mobile User Avatar */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">
                {user?.name?.[0] || "U"}
              </span>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-50 transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          {/* User Info in Mobile */}
          <div className="px-4 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user?.name?.[0] || "U"}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{user?.name || "User"}</p>
                <p className="text-xs text-gray-500">{user?.email || "No email"}</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-2 py-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
                  <item.icon className={`w-5 h-5 ${pathname === item.href ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logout Button in Mobile */}
          <div className="px-4 py-4 border-t border-gray-200">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            ) : (
              <button className="w-full bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-md">
                <LogIn className="w-5 h-5" />
                Log In
              </button>
            )}
          </div>
        </div>
      )}
    </header>

  );

};

export default Navbar;



// "use client";
// import React, { useState } from "react";
// import { LogOut, LogIn, Menu, X } from "lucide-react";
// import {
//   Bell,
//   ChevronDown,
//   LayoutDashboard,
//   Send,
//   CreditCard,
//   Receipt,
//   Clock,
// } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   // Mock data for demo
//   const pathname = "/dashboard";
//   const user = { name: "John Doe", email: "john@example.com" };

//   const handleLogout = () => {
//     if (confirm("Are you sure you want to logout?")) {
//       alert("Logged out successfully!");
//       setOpen(false);
//       setMobileMenuOpen(false);
//     }
//   };

//   const navigationItems = [
//     { icon: LayoutDashboard, label: "Dashboard", color: "bg-blue-500", href: "/dashboard" },
//     { icon: Send, label: "Transfer", color: "bg-green-500", href: "/dashboard/transfer" },
//     { icon: CreditCard, label: "Cards", color: "bg-purple-500", href: "/dashboard/cards" },
//     { icon: Receipt, label: "Bills", color: "bg-orange-500", href: "/dashboard/bills" },
//     { icon: Clock, label: "History", color: "bg-pink-500", href: "/dashboard/history" },
//   ];

//   return (
//     <header className="bg-gradient-to-br from-purple-50 to-pink-50 sticky top-0 z-50 shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 sm:px-4 rounded-full cursor-pointer hover:shadow-lg transition">
//               <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//               <span className="text-white font-bold text-xs sm:text-sm">
//                 DigitalWallet
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-6 xl:space-x-8">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`px-3 py-2 flex items-center gap-1 text-sm font-medium transition-colors ${
//                   pathname === item.href
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 <item.icon className="inline-block w-4 h-4" />
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Right Side - Desktop */}
//           <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
//             {/* Notification Bell */}
//             <button className="relative p-2 cursor-pointer text-gray-400 hover:text-gray-500 transition-colors">
//               <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
//             </button>

//             {/* User Dropdown */}
//             <div className="relative">
//               <div
//                 className="flex items-center space-x-2 lg:space-x-3 cursor-pointer hover:bg-white hover:bg-opacity-50 rounded-lg p-2 transition-all"
//                 onClick={() => setOpen(!open)}
//               >
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//                   <span className="text-sm font-medium text-white">
//                     {user?.name?.[0] || "U"}
//                   </span>
//                 </div>
//                 <div className="hidden lg:block">
//                   <p className="text-sm font-medium text-gray-900">{user?.name || "User"}</p>
//                   <p className="text-xs text-gray-500">{user?.email || "No email"}</p>
//                 </div>
//                 <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
//               </div>

//               {/* Dropdown Menu */}
//               {open && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
//                   <div className="px-4 py-3 border-b border-gray-100 lg:hidden">
//                     <p className="text-sm font-medium text-gray-900">{user?.name}</p>
//                     <p className="text-xs text-gray-500">{user?.email}</p>
//                   </div>
//                   {user ? (
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       Logout
//                     </button>
//                   ) : (
//                     <button className="w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-50 transition-colors flex items-center gap-2">
//                       <LogIn className="w-4 h-4" />
//                       Log In
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden items-center space-x-2">
//             {/* Mobile Notification Bell */}
//             <button className="relative p-2 cursor-pointer text-gray-400 hover:text-gray-500 transition-colors">
//               <Bell className="w-5 h-5" />
//             </button>

//             {/* Mobile User Avatar */}
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//               <span className="text-sm font-medium text-white">
//                 {user?.name?.[0] || "U"}
//               </span>
//             </div>

//             {/* Hamburger Menu */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-50 transition-all"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
//           {/* User Info in Mobile */}
//           <div className="px-4 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//                 <span className="text-sm font-medium text-white">
//                   {user?.name?.[0] || "U"}
//                 </span>
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-900">{user?.name || "User"}</p>
//                 <p className="text-xs text-gray-500">{user?.email || "No email"}</p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="px-2 py-3 space-y-1">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                   pathname === item.href
//                     ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
//                     : "text-gray-700 hover:bg-gray-50"
//                 }`}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
//                   <item.icon className={`w-5 h-5 ${pathname === item.href ? 'text-blue-600' : 'text-gray-600'}`} />
//                 </div>
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Logout Button in Mobile */}
//           <div className="px-4 py-4 border-t border-gray-200">
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-red-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-md"
//               >
//                 <LogOut className="w-5 h-5" />
//                 Logout
//               </button>
//             ) : (
//               <button className="w-full bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-md">
//                 <LogIn className="w-5 h-5" />
//                 Log In
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;