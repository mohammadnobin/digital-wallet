"use client";

import { useState } from "react";
import {
  Users,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Activity,
  TrendingUp,
  CreditCard,
  UserPlus,
  Bell,
  FileText,
  Wallet,
  ShieldCheck,
  Database,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// 💜 Theme Colors
const COLORS = {
  primary: "#5f4a94",
  secondary: "#f5f2f9",
  text: "#1f1f1f",
  border: "#e5e7eb",
};

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("overview");

  const chartData = [
    { month: "Jan", revenue: 4000, users: 50 },
    { month: "Feb", revenue: 3000, users: 60 },
    { month: "Mar", revenue: 5000, users: 80 },
    { month: "Apr", revenue: 7000, users: 90 },
    { month: "May", revenue: 6000, users: 70 },
    { month: "Jun", revenue: 8000, users: 100 },
  ];

  const latestUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", joined: "2d ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", joined: "5d ago" },
    { id: 3, name: "Alex Kim", email: "alex@example.com", joined: "1w ago" },
  ];

  const recentTransactions = [
    { id: 1, name: "John Doe", type: "Deposit", amount: "$250", status: "Completed" },
    { id: 2, name: "Jane Smith", type: "Withdrawal", amount: "$120", status: "Pending" },
    { id: 3, name: "Alex Kim", type: "Transfer", amount: "$400", status: "Completed" },
  ];

  const activities = [
    "New user registered: Emily Rose",
    "Admin updated system settings",
    "Payment processed successfully",
    "User John Doe upgraded to Premium",
  ];

  const menuItems = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "users", label: "Users", icon: Users },
    { id: "transactions", label: "Transactions", icon: DollarSign },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  // --- Render Section Based on Active Page ---
  const renderContent = () => {
    switch (activePage) {
      case "overview":
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">System Overview</h2>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard icon={Wallet} title="Total Revenue" value="$24,800" color="#5f4a94" change="+12%" />
              <StatCard icon={UserPlus} title="New Users" value="185" color="#10b981" change="+9%" />
              <StatCard icon={CreditCard} title="Transactions" value="1,240" color="#3b82f6" change="+5%" />
              <StatCard icon={ShieldCheck} title="Active Admins" value="5" color="#f59e0b" change="Stable" />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ChartCard title="Revenue Growth">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke={COLORS.primary} strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="User Growth">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill={COLORS.primary} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            {/* Latest Users & Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DataTable title="Latest Users" data={latestUsers} columns={["Name", "Email", "Joined"]} />
              <DataTable
                title="Recent Transactions"
                data={recentTransactions}
                columns={["Name", "Type", "Amount", "Status"]}
              />
            </div>

            {/* Activity Feed */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#5f4a94]">Recent Activity</h3>
              <ul className="space-y-3 text-gray-700">
                {activities.map((a, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowUpRight className="w-4 h-4 text-[#5f4a94]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );

      case "users":
        return (
          <SectionPage
            title="User Management"
            description="Manage user roles, view profiles, and control access permissions."
          />
        );

      case "transactions":
        return (
          <SectionPage
            title="Transactions"
            description="Review and manage all transaction records and logs."
          />
        );

      case "reports":
        return (
          <SectionPage
            title="Reports & Analytics"
            description="Generate and export business performance reports."
          />
        );

      case "settings":
        return (
          <SectionPage
            title="System Settings"
            description="Configure platform preferences and security options."
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#1f1f1f]">
            {menuItems.find((m) => m.id === activePage)?.label}
          </h1>
          <Bell className="w-5 h-5 text-gray-500" />
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

/* ------------------ Helper Components ------------------ */

const StatCard = ({ icon: Icon, title, value, color, change }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="flex items-center justify-between">
      <Icon className="w-6 h-6" style={{ color }} />
      <span className="text-xs font-medium text-gray-500">{change}</span>
    </div>
    <h3 className="text-sm text-gray-500 mt-2">{title}</h3>
    <p className="text-2xl font-bold mt-1 text-gray-900">{value}</p>
  </motion.div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold mb-4 text-[#5f4a94]">{title}</h3>
    {children}
  </div>
);

const DataTable = ({ title, data, columns }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold mb-4 text-[#5f4a94]">{title}</h3>
    <table className="w-full text-sm text-gray-700">
      <thead className="bg-[#f5f2f9] text-[#5f4a94]">
        <tr>
          {columns.map((col) => (
            <th key={col} className="p-3 text-left font-medium">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            {Object.values(row)
              .slice(1)
              .map((val, j) => (
                <td key={j} className="p-3">
                  {val}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionPage = ({ title, description }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-2xl font-semibold mb-4 text-[#5f4a94]">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-gray-600">
      Coming soon...
    </div>
  </motion.div>
);
