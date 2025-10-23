'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CreditCard, Send, Download, Scan, Split, Eye, EyeOff, ArrowRight,
  Users,
  ArrowUpRight,
  Trash2,
  MoreVertical,
} from 'lucide-react';
import Link from 'next/link';
import useUser from '@/hooks/useUser';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const colors = {
  primary: '#5f4a94',
  primaryLight: '#7d66ab',
  primaryExtraLight: '#f5f2f9',
  secondary: '#e0c9a4',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  dark: '#1f2937',
  indigo: '#cd8b62',
  added: '#a3573a',
  cashout: "#014D4E"
};

export default function DigitalWalletDashboard({ user }) {
  const users = useUser()
  const axiosSecure = useAxiosSecure();
  const [showBalance, setShowBalance] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Week');
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  // ✅ API Data State
const [summary, setSummary] = useState({
  totalBalance: 0,
  totalIncome: 0,
  totalExpenses: 0,
  totalSaved: 0,
});



  // Quick dummy data
  const weeklySpending = [
    { day: 'Sun', amount: 160 },
    { day: 'Mon', amount: 80 },
    { day: 'Tue', amount: 120 },
    { day: 'Wed', amount: 260, highlight: true },
    { day: 'Thu', amount: 90 },
    { day: 'Fri', amount: 180 },
    { day: 'Sat', amount: 240 },
  ];
  const maxSpending = Math.max(...weeklySpending.map((d) => d.amount));
  const totalWeekSpending = weeklySpending.reduce((sum, d) => sum + d.amount, 0);

  const expenseCategories = [
    { name: 'Food & Dining', percentage: 35, color: colors.primary, amount: 997.56 },
    { name: 'Shopping', percentage: 25, color: colors.success, amount: 711.83 },
    { name: 'Transportation', percentage: 20, color: colors.warning, amount: 569.46 },
    { name: 'Utilities', percentage: 12, color: colors.danger, amount: 341.68 },
    { name: 'Others', percentage: 8, color: colors.secondary, amount: 227.79 },
  ];

  const quickActions = [
    { name: 'Add Money', icon: CreditCard, bgColor: colors.primary, href: "/dashboard/addMoney" },
    { name: 'Send money', icon: Send, bgColor: colors.success, href: "/dashboard/transfer" },
    { name: 'Cashout', icon: ArrowUpRight, bgColor: colors.cashout, href: "/dashboard/cashout" },
    { name: 'Request', icon: Download, bgColor: colors.info, href: "/dashboard/requestMoney" },
    { name: "Remittance", icon: Users, bgColor: colors.indigo, href: "/dashboard/remittance" },
    { name: 'Scan QR', icon: Scan, bgColor: colors.secondary, href: "/dashboard/scanQR" },
    { name: "Add Card", icon: CreditCard, bgColor: colors.added, href: "/dashboard/cards" },
    { name: 'Split Bill', icon: Split, bgColor: colors.danger, href: "/dashboard/splitBill" },
  ];


  // fetch history
  useEffect(() => {
    if (!users?.accessToken) return;

    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get("/api/transactions/my");
        setTransactions(res.data.transactions.slice(0, 4) || []);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [axiosSecure, users?.accessToken]);

  // fetch cards
  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get(`/api/cards/my-cards`);
      setCards(res.data.slice(0, 2) || []);
    } catch (err) {
      console.error(err?.response?.data || err.message);
      Swal.fire("Error", "কার্ড লোড করতে সমস্যা হয়েছে", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!axiosSecure || !users?.accessToken) return;
    fetchCards();
  }, [axiosSecure, users?.accessToken]);

  // ✅ Fetch Transaction Summary
useEffect(() => {
  if (!users?.accessToken) return;
  
  const fetchSummary = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get(`/api/transactions/summary`);
      setSummary(res.data.data); // ✅ ঠিক করা হয়েছে
    } catch (error) {
      console.error('Failed to fetch summary:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchSummary();
}, [users?.accessToken]);


useEffect(() => {
  if (!user?.accessToken) return;

  const fetchRecentTransactions = async () => {
    try {
      setLoadingRecent(true);
      const { data } = await axiosSecure.get(`/api/transactions/recent`);
      setRecentTransactions(data.transactions || []);
    } catch (error) {
      console.error("Failed to fetch recent transactions:", error.response?.data || error.message);
    } finally {
      setLoadingRecent(false);
    }
  };

  fetchRecentTransactions();
}, [user?.accessToken, axiosSecure]);

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Welcome Section */}
      <div className="mb-6 sm:mb-8 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          Welcome back <span className="text-primary break-words">{user.name}</span>
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">Here's your financial overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
        {[
          { label: 'Total Balance', value: `$${user.balance.toFixed(2)}`, trend: 'up', icon: '💰' },
          { label: 'Income', value: `$${summary.totalIncome.toFixed(2)}`, trend: 'up', icon: '📈' },
          { label: 'Expenses', value: `$${summary.totalExpenses.toFixed(2)}`, trend: 'down', icon: '📉' },
          { label: 'Saved', value: `$${summary.totalSaved.toFixed(2)}`, trend: 'up', icon: '💎' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <span className="text-xl sm:text-2xl md:text-3xl">{stat.icon}</span>
              <span
                className={`text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}
              >
                {loading ? '...' : stat.trend === 'up' ? '+0%' : '-0%'}
              </span>
            </div>
            <div className="text-gray-500 text-[11px] sm:text-xs md:text-sm mb-1">{stat.label}</div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate">
              {loading ? 'Loading...' : stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Rest of the dashboard remains same */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Section: Cards + Quick Actions + Recent Transactions */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* My Cards */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">My Cards</h2>
              <Link href="/dashboard/cards">
                <button className="text-xs sm:text-sm cursor-pointer font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                  View all <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {cards.map((card) => {
                const gradient =
                  card.cardType === "Visa"
                    ? "from-blue-600 to-blue-700"
                    : card.cardType === "MasterCard"
                      ? "from-red-600 to-yellow-600"
                      : card.cardType === "Amex"
                        ? "from-green-600 to-green-700"
                        : "from-purple-600 to-purple-700";

                return (
                  <div key={card._id} className="group">
                    <div
                      className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white rounded-full"></div>
                        <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white rounded-full"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-8 bg-yellow-400 rounded flex items-center justify-center text-xs font-bold text-gray-900">
                              CHIP
                            </div>
                            <span className="text-sm font-medium">
                              {card.cardType}
                            </span>
                          </div>


                        </div>

                        <div className="mb-6 text-2xl font-semibold tracking-wider">
                          •••• •••• •••• {card.meta?.last4 || "0000"}
                        </div>

                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-xs text-white/70 mb-1">
                              CARD NAME
                            </div>
                            <div className="font-medium">{card.cardName}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-white/70 mb-1">
                              EXPIRES
                            </div>
                            <div className="font-medium">{card.expiryDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md flex justify-between items-center">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Available Balance
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          $
                          {Number(card.balance || 0).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <Link key={i} href={action.href || "#"}>
                    <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-2 hover:border-gray-200 hover:shadow-md transition cursor-pointer">
                      <div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0"
                        style={{ backgroundColor: action.bgColor }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-gray-700 text-center leading-tight">{action.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Recent Transactions</h2>
              <Link href="/dashboard/history">
                <button className="text-xs sm:text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                  View all <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </Link>
            </div>
            <div className="space-y-2">
              {transactions.map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all gap-2"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base truncate">{tx.type
                      }</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        <span className="hidden sm:inline">{tx.createdAt
                        } </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-sm sm:text-base md:text-lg font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                      {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{tx.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Weekly Spending + Savings + Expense Categories */}
        <div className="space-y-6 sm:space-y-8">
          {/* Weekly Spending */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Weekly Spending</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">${totalWeekSpending}</h3>
              </div>
              <select
                className="text-xs sm:text-sm border border-gray-200 rounded-lg sm:rounded-xl px-2 py-1 sm:py-1.5 bg-gray-50 focus:outline-none focus:border-gray-300"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
              </select>
            </div>

            <div className="h-32 sm:h-40 flex items-end justify-between gap-1.5 sm:gap-2">
              {weeklySpending.map((day, i) => {
                const height = (day.amount / maxSpending) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div
                      className="w-full rounded-t-lg sm:rounded-t-xl transition-all duration-300 hover:opacity-80 cursor-pointer"
                      style={{
                        height: `${height}%`,
                        backgroundColor: day.highlight ? colors.primary : colors.secondary,
                      }}
                    ></div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-500">{day.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Savings Goal */}
          <div
            className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2"
            style={{ backgroundColor: colors.primaryExtraLight, borderColor: colors.secondary }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.primary }}>
                Savings Goal
              </h3>
              <div className="text-xl sm:text-2xl">🎯</div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs sm:text-sm mb-1" style={{ color: colors.primary }}>
                <span>$7,250</span>
                <span>$10,000</span>
              </div>
              <div className="w-full h-2.5 sm:h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: '72.5%', backgroundColor: colors.primary }}
                ></div>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-medium" style={{ color: colors.primary }}>
              72.5% completed - Keep going! 💪
            </p>
          </div>

          {/* Expense Categories */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Expense Breakdown</h3>
            <div className="space-y-3">
              {expenseCategories.map((category, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate mr-2">{category.name}</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 flex-shrink-0">${category.amount.toFixed(2)}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${category.percentage}%`,
                        backgroundColor: category.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


