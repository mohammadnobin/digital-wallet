// "use client";

// import { useState } from "react";
// import {
//   Users,
//   DollarSign,
//   BarChart3,
//   Settings,
//   LogOut,
//   Menu,
//   Activity,
//   TrendingUp,
//   CreditCard,
//   UserPlus,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// export default function page() {
//   const [activePage, setActivePage] = useState("statistics");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const pages = [
//     { id: "statistics", label: "Statistics", icon: Activity },
//     { id: "users", label: "Users", icon: Users },
//     { id: "payments", label: "Payments", icon: DollarSign },
//     { id: "reports", label: "Reports", icon: BarChart3 },
//     { id: "settings", label: "Settings", icon: Settings },
//   ];

//   // Demo data
//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Member" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Michael Lee", email: "michael@example.com", role: "Member" },
//   ];

//   const payments = [
//     { id: 1, user: "John Doe", amount: "$120", status: "Paid" },
//     { id: 2, user: "Jane Smith", amount: "$90", status: "Pending" },
//     { id: 3, user: "Michael Lee", amount: "$150", status: "Paid" },
//   ];

//   const reports = [
//     { id: 1, title: "Monthly Income", value: "$2,400", change: "+12%" },
//     { id: 2, title: "New Users", value: "34", change: "+8%" },
//     { id: 3, title: "Pending Payments", value: "5", change: "-3%" },
//   ];

//   const chartData = [
//     { month: "Jan", revenue: 4000, users: 50 },
//     { month: "Feb", revenue: 3000, users: 60 },
//     { month: "Mar", revenue: 5000, users: 80 },
//     { month: "Apr", revenue: 7000, users: 90 },
//     { month: "May", revenue: 6000, users: 70 },
//     { month: "Jun", revenue: 8000, users: 100 },
//   ];

//   const renderStatistics = () => (
//     <motion.div
//       key="stats"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-6">Statistics Overview</h2>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-50 p-6 rounded-xl shadow-sm">
//           <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
//           <h3 className="text-lg font-medium">Total Revenue</h3>
//           <p className="text-2xl font-bold mt-1">$12,540</p>
//           <p className="text-sm text-gray-500 mt-1">+15% from last month</p>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} className="bg-green-50 p-6 rounded-xl shadow-sm">
//           <UserPlus className="w-8 h-8 text-green-600 mb-2" />
//           <h3 className="text-lg font-medium">Active Users</h3>
//           <p className="text-2xl font-bold mt-1">342</p>
//           <p className="text-sm text-gray-500 mt-1">+24 new this week</p>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} className="bg-yellow-50 p-6 rounded-xl shadow-sm">
//           <CreditCard className="w-8 h-8 text-yellow-600 mb-2" />
//           <h3 className="text-lg font-medium">Pending Payments</h3>
//           <p className="text-2xl font-bold mt-1">8</p>
//           <p className="text-sm text-gray-500 mt-1">-2 from last week</p>
//         </motion.div>
//       </div>

//       {/* Revenue & Users Chart */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow-sm p-6">
//           <h3 className="text-lg font-semibold mb-4">Revenue Growth</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={chartData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm p-6">
//           <h3 className="text-lg font-semibold mb-4">User Growth</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={chartData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="users" fill="#10b981" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </motion.div>
//   );

//   const renderContent = () => {
//     switch (activePage) {
//       case "statistics":
//         return renderStatistics();
//       case "users":
//         return (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <h2 className="text-2xl font-semibold mb-6">User Management</h2>
//             <table className="w-full bg-white rounded-xl shadow-sm">
//               <thead className="bg-gray-100 text-gray-700">
//                 <tr>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr key={u.id} className="border-t hover:bg-gray-50">
//                     <td className="p-3">{u.name}</td>
//                     <td className="p-3">{u.email}</td>
//                     <td className="p-3">{u.role}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </motion.div>
//         );
//       case "payments":
//         return (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <h2 className="text-2xl font-semibold mb-6">Payment Overview</h2>
//             <table className="w-full bg-white rounded-xl shadow-sm">
//               <thead className="bg-gray-100 text-gray-700">
//                 <tr>
//                   <th className="p-3 text-left">User</th>
//                   <th className="p-3 text-left">Amount</th>
//                   <th className="p-3 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {payments.map((p) => (
//                   <tr key={p.id} className="border-t hover:bg-gray-50">
//                     <td className="p-3">{p.user}</td>
//                     <td className="p-3">{p.amount}</td>
//                     <td
//                       className={`p-3 font-medium ${
//                         p.status === "Paid" ? "text-green-600" : "text-yellow-600"
//                       }`}
//                     >
//                       {p.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </motion.div>
//         );
//       case "reports":
//         return (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <h2 className="text-2xl font-semibold mb-6">Reports & Analytics</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               {reports.map((r) => (
//                 <div key={r.id} className="bg-white p-6 rounded-xl shadow-sm">
//                   <h3 className="text-lg font-semibold">{r.title}</h3>
//                   <p className="text-2xl font-bold mt-2">{r.value}</p>
//                   <p
//                     className={`mt-1 text-sm font-medium ${
//                       r.change.startsWith("+") ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {r.change} from last month
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         );
//       case "settings":
//         return (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <h2 className="text-2xl font-semibold mb-6">System Settings</h2>
//             <p className="text-gray-600">
//               Configure user roles, update site information, or manage security settings.
//             </p>
//           </motion.div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isSidebarOpen ? "w-64" : "w-20"
//         } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
//       >
//         <div className="flex items-center justify-between p-4 border-b">
//           <h1
//             className={`text-xl font-bold text-blue-600 transition-all duration-300 ${
//               isSidebarOpen ? "opacity-100" : "opacity-0 w-0"
//             }`}
//           >
//             Admin Panel
//           </h1>
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="p-2 rounded-md hover:bg-gray-100"
//           >
//             <Menu className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         <nav className="flex-1 p-3 space-y-1">
//           {pages.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setActivePage(item.id)}
//                 className={`flex items-center w-full gap-3 px-4 py-2 rounded-lg transition-all ${
//                   activePage === item.id
//                     ? "bg-blue-50 text-blue-600"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
//               </button>
//             );
//           })}
//         </nav>

//         <div className="p-3 border-t">
//           <button className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
//             <LogOut className="w-5 h-5" />
//             {isSidebarOpen && <span className="text-sm font-medium">Logout</span>}
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-y-auto">
//         <header className="mb-6 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-gray-900">
//             {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
//           </h1>
//           <div className="text-sm text-gray-500">Admin Dashboard</div>
//         </header>

//         <div className="">{renderContent()}</div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import AdminDashboard from '../../components/adminDashboard/page';

export default function page() {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
}

