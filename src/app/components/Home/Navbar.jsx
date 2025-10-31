// "use client";
// import React, { useEffect, useState } from "react";
// import { ChevronDown, CreditCard, Menu, X, Bell } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useSession, signOut } from "next-auth/react";
// import { IoMdLogOut } from "react-icons/io";
// import useAxiosSecure from "@/hooks/useAxiosSecure";
// import useUser from "@/hooks/useUser";
// import { io } from "socket.io-client";
// import Swal from "sweetalert2";

// export default function Navbar() {
//   const pathName = usePathname();
//   const { data: session } = useSession();
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openNotifications, setOpenNotifications] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const axiosSecure = useAxiosSecure();
//   const user = useUser();

//   // --- LocalStorage for read notifications ---
//   const [readNotifications, setReadNotifications] = useState(() => {
//     if (typeof window !== "undefined") {
//       return JSON.parse(localStorage.getItem("readNotifications") || "[]");
//     }
//     return [];
//   });

//   // --- Fetch notifications ---
//   useEffect(() => {
//     if (!user?.accessToken) return;

//     const fetchNotifications = async () => {
//       try {
//         setLoading(true);
//         const res = await axiosSecure.get(`/api/transactions/my`);
//         setNotifications(res.data.transactions || []);
//       } catch (error) {
//         console.error("Failed to fetch notifications:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, [axiosSecure, user?.accessToken]);

//   // ✅ Setup Socket.IO for real-time updates
//   useEffect(() => {
//     if (!user?.email) return;

//     const socket = io(process.env.NEXT_PUBLIC_BASE_URL, {
//       transports: ["websocket"],
//     });

//     socket.emit("join", user.email);

//     socket.on("transactionUpdate", (data) => {
//       const normalizedTx = {
//         _id:
//           data.transaction._id ||
//           data.transaction.transferId ||
//           Math.random().toString(36).slice(2),
//         type: data.transaction.type || "Unknown",
//         status: data.transaction.status || "completed",
//         amount: data.transaction.amount || 0,
//         currency: data.transaction.currency || "BDT",
//         createdAt: data.transaction.createdAt || new Date().toISOString(),
//         updatedAt: data.transaction.updatedAt || new Date().toISOString(),
//         meta: data.transaction.meta || {},
//         senderId: {
//           _id:
//             data.transaction.senderId?._id ||
//             data.transaction.senderId ||
//             "unknown",
//           name:
//             data.transaction.senderId?.name ||
//             data.transaction.meta?.fromUserEmail ||
//             "Unknown",
//           email:
//             data.transaction.senderId?.email ||
//             data.transaction.meta?.fromUserEmail ||
//             "Unknown",
//           photo: data.transaction.senderId?.photo || "",
//         },
//         receiverId: {
//           _id:
//             data.transaction.receiverId?._id ||
//             data.transaction.receiverId ||
//             "unknown",
//           name:
//             data.transaction.receiverId?.name ||
//             data.transaction.meta?.toUserEmail ||
//             "Unknown",
//           email:
//             data.transaction.receiverId?.email ||
//             data.transaction.meta?.toUserEmail ||
//             "Unknown",
//           photo: data.transaction.receiverId?.photo || "",
//         },
//       };

//       setNotifications((prev) => [normalizedTx, ...prev]);
//       Swal.fire({
//         title: "New Transaction",
//         position: "top-end",
//         icon: "info",
//       });
//     });

//     return () => socket.disconnect();
//   }, [user?.email]);

//   // --- Notification click handler ---
//   const handleNotificationClick = (txId) => {
//     if (!readNotifications.includes(txId)) {
//       const updated = [...readNotifications, txId];
//       setReadNotifications(updated);
//       localStorage.setItem("readNotifications", JSON.stringify(updated));
//     }
//   };

//   const notificationCount = notifications.filter(
//     (tx) => !readNotifications.includes(tx._id)
//   ).length;

//   const handleLogout = async () => {
//     await signOut({ callbackUrl: "/" });
//   };

//   if (
//     pathName.startsWith("/dashboard") ||
//     pathName.startsWith("/adminDashboard")
//   ) {
//     return null;
//   }

//   // Helper function to check if a route is active
//   const isActiveRoute = (route) => {
//     return pathName === route;
//   };

//   return (
//     <nav className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <div className="flex items-center gap-2 bg-gradient-to-r from-[#5f4a94] to-[#5f4a94] px-4 py-2 rounded-full w-fit cursor-pointer hover:shadow-lg transition">
//                 <CreditCard className="w-5 h-5 text-white" />
//                 <span className="text-white font-bold text-sm">
//                   DigitalWallet
//                 </span>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               href="/"
//               className={`font-medium text-sm transition-all duration-300 relative group ${
//                 isActiveRoute("/")
//                   ? "text-[#5f4a94] font-bold"
//                   : "text-gray-700 hover:text-[#5f4a94]"
//               }`}
//             >
//               Home
//               <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
//                 isActiveRoute("/") ? "w-full" : "w-0 group-hover:w-full"
//               }`}></span>
//             </Link>

//             <Link
//               href="/faq"
//               className={`font-medium text-sm transition-all duration-300 relative group ${
//                 isActiveRoute("/faq")
//                   ? "text-[#5f4a94] font-bold"
//                   : "text-gray-700 hover:text-[#5f4a94]"
//               }`}
//             >
//               FAQ
//               <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
//                 isActiveRoute("/faq") ? "w-full" : "w-0 group-hover:w-full"
//               }`}></span>
//             </Link>

//             <Link
//               href="/blog"
//               className={`font-medium text-sm transition-all duration-300 relative group ${
//                 isActiveRoute("/blog")
//                   ? "text-[#5f4a94] font-bold"
//                   : "text-gray-700 hover:text-[#5f4a94]"
//               }`}
//             >
//               Blog
//               <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
//                 isActiveRoute("/blog") ? "w-full" : "w-0 group-hover:w-full"
//               }`}></span>
//             </Link>

//             <Link
//               href="/about"
//               className={`font-medium text-sm transition-all duration-300 relative group ${
//                 isActiveRoute("/about")
//                   ? "text-[#5f4a94] font-bold"
//                   : "text-gray-700 hover:text-[#5f4a94]"
//               }`}
//             >
//               About Us
//               <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
//                 isActiveRoute("/about") ? "w-full" : "w-0 group-hover:w-full"
//               }`}></span>
//             </Link>

//             <Link
//               href="/contact"
//               className={`font-medium text-sm transition-all duration-300 relative group ${
//                 isActiveRoute("/contact")
//                   ? "text-[#5f4a94] font-bold"
//                   : "text-gray-700 hover:text-[#5f4a94]"
//               }`}
//             >
//               Contact
//               <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5f4a94] transition-all duration-300 ${
//                 isActiveRoute("/contact") ? "w-full" : "w-0 group-hover:w-full"
//               }`}></span>
//             </Link>
//           </div>

//           {/* Desktop Profile / Auth Section */}
//           <div className="hidden md:flex items-center gap-4">
//             {session ? (
//               <>
//                 {/* Notification Bell */}
//                 {/* (notification section unchanged) */}
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/registration"
//                   className="bg-secondary cursor-pointer text-gray-800 font-semibold px-6 py-2 rounded-full transition hover:opacity-90"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   href="/login"
//                   className="bg-[#5f4a94] cursor-pointer text-white font-semibold px-6 py-2 rounded-full hover:bg-[#4a3a75] transition"
//                 >
//                   Sign In
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700 flex items-center gap-3"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </div>
//         </div>
//       </div>

//       {/* Keyframes */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }




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
import { io } from 'socket.io-client';
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
        transports: ['websocket'],
      });
  
      socket.emit('join', user.email);
  
      socket.on('transactionUpdate', (data) => {
        // Normalize socket data to match DB format
        const normalizedTx = {
          _id: data.transaction._id || data.transaction.transferId || Math.random().toString(36).slice(2),
          type: data.transaction.type || "Unknown",
          status: data.transaction.status || "completed",
          amount: data.transaction.amount || 0,
          currency: data.transaction.currency || "BDT",
          createdAt: data.transaction.createdAt || new Date().toISOString(),
          updatedAt: data.transaction.updatedAt || new Date().toISOString(),
          meta: data.transaction.meta || {},
          senderId: {
            _id: data.transaction.senderId?._id || data.transaction.senderId || "unknown",
            name: data.transaction.senderId?.name || data.transaction.meta?.fromUserEmail || "Unknown",
            email: data.transaction.senderId?.email || data.transaction.meta?.fromUserEmail || "Unknown",
            photo: data.transaction.senderId?.photo || "",
          },
          receiverId: {
            _id: data.transaction.receiverId?._id || data.transaction.receiverId || "unknown",
            name: data.transaction.receiverId?.name || data.transaction.meta?.toUserEmail || "Unknown",
            email: data.transaction.receiverId?.email || data.transaction.meta?.toUserEmail || "Unknown",
            photo: data.transaction.receiverId?.photo || "",
          },
        };
  
        setNotifications((prev) => [normalizedTx, ...prev]);
        Swal.fire({
          title: 'New Transaction',
          position: 'top-end',
          icon: 'info', 
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

  // --- Bell count calculation ---
  const notificationCount = notifications.filter(
    (tx) => !readNotifications.includes(tx._id)
  ).length;

  // --- Handle logout ---
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  // --- Hide navbar on dashboard pages ---
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

            <div className="relative group">
              <button className="text-gray-700 cursor-pointer hover:text-primary font-medium text-sm flex items-center gap-1 transition">
                Page
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
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
                    className="relative cursor-pointer p-2 rounded-full hover:bg-white/50 transition-all duration-300 group"
                  >
                    <Bell
                      size={22}
                      className="text-gray-700 group-hover:text-primary transition-colors duration-300 group-hover:animate-swing"
                    />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        {notificationCount > 9 ? "9+" : notificationCount}
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
                    <div className="bg-primary px-6 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          Notifications
                        </h3>
                        <p className="text-indigo-100 text-xs">
                          {notificationCount} unread messages
                        </p>
                      </div>
                      <button
                        onClick={() => setReadNotifications(notifications.map(tx => tx._id))}
                        className="text-white text-xs hover:text-indigo-100 transition-colors"
                      >
                        Mark all as read
                      </button>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-96 overflow-y-auto">
                      {notifications?.map((tx, index) => (
                        <div
                          key={tx._id}
                          className={`px-6 py-4 border-b border-gray-100 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-200 cursor-pointer ${
                            readNotifications.includes(tx._id) ? "" : "bg-purple-50/50"
                          }`}
                          style={{
                            animation: openNotifications
                              ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                              : "none",
                          }}
                          onClick={() => handleNotificationClick(tx._id)}
                        >
                          <div className="flex items-start gap-3">
                            {/* Notification Icon */}
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                tx.status === "completed"
                                  ? "bg-gradient-to-br from-green-400 to-emerald-500"
                                  : tx.status === "failed"
                                  ? "bg-gradient-to-br from-orange-400 to-red-500"
                                  : "bg-purple-400"
                              }`}
                            >
                              <Bell size={18} className="text-white" />
                            </div>

                            {/* Notification Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-semibold text-gray-800 text-sm">
                                  {tx.senderId?.email === user?.email
                                    ? "Money Sent"
                                    : "Money Received"}
                                </h4>
                              </div>

                              <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                                {tx.senderId?.email === user?.email
                                  ? `You sent ${tx.amount} ${tx.currency} to ${tx.receiverId?.name}`
                                  : `You received ${tx.amount} ${tx.currency} from ${tx.senderId?.name}`}
                              </p>

                              <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-400 text-xs">
                                  {new Date(tx.createdAt).toLocaleString()}
                                </span>
                                <span
                                  className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                                    tx.status === "completed"
                                      ? "text-green-700 bg-green-100"
                                      : tx.status === "failed"
                                      ? "text-red-700 bg-red-100"
                                      : "text-gray-700 bg-gray-100"
                                  }`}
                                >
                                  {tx.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Modal Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                      <Link
                        href="/dashboard/history"
                        onClick={() => setOpenNotifications(false)}
                        className="w-full text-center cursor-pointer text-primary font-semibold text-sm hover:text-indigo-700 transition-colors"
                      >
                        View All Notifications
                      </Link>
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

                  <div
                    className={`absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
                      openDropdown
                        ? "opacity-100 visible scale-100 translate-y-0"
                        : "opacity-0 invisible scale-95 -translate-y-2"
                    }`}
                  >
                    <div className="bg-primary px-6 py-4">
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

                    <div className="py-2 px-2">
                      <Link
                        href="/dashboard"
                        onClick={() => setOpenDropdown(false)}
                        className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 rounded-xl transition-all duration-200 transform hover:translate-x-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-semibold group-hover:scale-110 transition-transform duration-200">
                          <CreditCard size={16} />
                        </div>
                        <span className="font-medium text-sm">Dashboard</span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="group w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:translate-x-1 mt-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                          <IoMdLogOut size={18} />
                        </div>
                        <span className="font-medium text-sm">Logout</span>
                      </button>
                    </div>
                  </div>

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
