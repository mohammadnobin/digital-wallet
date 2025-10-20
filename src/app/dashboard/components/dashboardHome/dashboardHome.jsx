// 'use client';
// import React, { useState } from 'react';
// import {
//   CreditCard, Send, Download, Scan, Split, Eye, EyeOff, ArrowRight,
//   Users,
//   ArrowUpRight,
// } from 'lucide-react';
// import Link from 'next/link';

// const colors = {
//   primary: '#5f4a94',
//   primaryLight: '#7d66ab',
//   primaryExtraLight: '#f5f2f9',
//   secondary: '#e0c9a4',
//   success: '#10b981',
//   warning: '#f59e0b',
//   danger: '#ef4444',
//   info: '#3b82f6',
//   dark: '#1f2937',
//   indigo: '#cd8b62',
//   added:'#a3573a',
//   cashout: "#014D4E"
// };

// export default function DigitalWalletDashboard({ user }) {
//   const [showBalance, setShowBalance] = useState(true);
//   const [selectedPeriod, setSelectedPeriod] = useState('Week');
//  const totalBalance = user?.balance?.toFixed(2) || '0.00';

//   const weeklySpending = [
//     { day: 'Sun', amount: 160 },
//     { day: 'Mon', amount: 80 },
//     { day: 'Tue', amount: 120 },
//     { day: 'Wed', amount: 260, highlight: true },
//     { day: 'Thu', amount: 90 },
//     { day: 'Fri', amount: 180 },
//     { day: 'Sat', amount: 240 },
//   ];
//   const maxSpending = Math.max(...weeklySpending.map((d) => d.amount));
//   const totalWeekSpending = weeklySpending.reduce((sum, d) => sum + d.amount, 0);

//   const expenseCategories = [
//     { name: 'Food & Dining', percentage: 35, color: colors.primary, amount: 997.56 },
//     { name: 'Shopping', percentage: 25, color: colors.success, amount: 711.83 },
//     { name: 'Transportation', percentage: 20, color: colors.warning, amount: 569.46 },
//     { name: 'Utilities', percentage: 12, color: colors.danger, amount: 341.68 },
//     { name: 'Others', percentage: 8, color: colors.secondary, amount: 227.79 },
//   ];

//   const cards = [
//     { id: 1, balance: 98500, currency: 'USD', last4: '4141', type: 'Mastercard', bgColor: colors.primary },
//     { id: 2, balance: 76280, currency: 'EUR', last4: '8345', type: 'Visa', bgColor: colors.dark },
//   ];

//   const quickActions = [
//     { name: 'Add Money', icon: CreditCard, bgColor: colors.primary, href: "/dashboard/addMoney"},
//     { name: 'Send money', icon: Send, bgColor: colors.success, href:"/dashboard/send-money"},
//     { name: 'Cashout', icon: ArrowUpRight, bgColor: colors.cashout, href:"/dashboard/cashout"},
//     { name: 'Request', icon: Download, bgColor: colors.info, href:"/dashboard/requestMoney"},
//     { name: "Remittance", icon: Users, bgColor: colors.indigo, href: "/dashboard/remittance" },
//     { name: 'Scan QR', icon: Scan, bgColor: colors.secondary, href:"/dashboard/scanQR" },
//     { name: "Add Card",icon: CreditCard,  bgColor: colors.added, href: "/dashboard/cards" },
//     { name: 'Split Bill', icon: Split, bgColor: colors.danger, href:"/dashboard/splitBill" },
//   ];

//   const recentTransactions = [
//     { id: 1, name: 'Grocery Store', category: 'Food & Dining', date: '03 Aug 2022', time: '15:43', amount: -85.5, icon: '🛒' },
//     { id: 2, name: 'Salary Deposit', category: 'Income', date: '01 Aug 2022', time: '12:58', amount: 4250.0, icon: '💰' },
//     { id: 3, name: 'Electric Bill', category: 'Utilities', date: '28 Jul 2022', time: '21:40', amount: -120.0, icon: '⚡' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
//       {/* Welcome Section - Responsive text sizing */}
//       <div className="mb-6 sm:mb-8 text-center md:text-left">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
//           Welcome back <span className="text-primary break-words">{user.name}</span>
//         </h1>
//         <p className="text-gray-500 text-xs sm:text-sm md:text-base">Here's your financial overview</p>
//       </div>

//       {/* Quick Stats - Enhanced responsive grid */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
//         {[
//           { label: 'Total Balance', value: `$${totalBalance}`, change: '+12.5%', trend: 'up', icon: '💰' },
//           { label: 'Income', value: '$4,250.00', change: '+8.2%', trend: 'up', icon: '📈' },
//           { label: 'Expenses', value: '$2,847.32', change: '-3.1%', trend: 'down', icon: '📉' },
//           { label: 'Saved', value: '$1,402.68', change: '+15.3%', trend: 'up', icon: '💎' },
//         ].map((stat, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-100 hover:shadow-md transition"
//           >
//             <div className="flex items-start justify-between mb-2 sm:mb-3">
//               <span className="text-xl sm:text-2xl md:text-3xl">{stat.icon}</span>
//               <span
//                 className={`text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
//                   stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
//                 }`}
//               >
//                 {stat.change}
//               </span>
//             </div>
//             <div className="text-gray-500 text-[11px] sm:text-xs md:text-sm mb-1">{stat.label}</div>
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate">{stat.value}</div>
//           </div>
//         ))}
//       </div>

//       {/* Main Dashboard Content - Enhanced responsive layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//         {/* Left Section */}
//         <div className="lg:col-span-2 space-y-6 sm:space-y-8">
//           {/* My Cards - Responsive card grid */}
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">My Cards</h2>
//               <button className="text-xs sm:text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
//                 View all <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
//               </button>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//               {cards.map((card) => (
//                 <div
//                   key={card.id}
//                   className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden hover:shadow-xl transition-all"
//                   style={{ backgroundColor: card.bgColor }}
//                 >
//                   <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-10 bg-white transform translate-x-1/3 -translate-y-1/3"></div>
//                   <div className="relative z-10">
//                     <div className="flex justify-between items-start mb-10 sm:mb-12 md:mb-16">
//                       <div className="min-w-0 flex-1">
//                         <div className="text-[10px] sm:text-xs opacity-80 mb-1 sm:mb-2">Balance</div>
//                         <div className="flex items-center gap-2">
//                           <div className="text-lg sm:text-xl md:text-2xl font-bold truncate">
//                             {showBalance ? `${card.balance.toLocaleString()}` : '•••••'}
//                           </div>
//                           <button 
//                             onClick={() => setShowBalance(!showBalance)} 
//                             className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg flex-shrink-0"
//                           >
//                             {showBalance ? <Eye className="w-3 h-3 sm:w-4 sm:h-4" /> : <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />}
//                           </button>
//                         </div>
//                         <div className="text-[10px] sm:text-xs opacity-80">{card.currency}</div>
//                       </div>
//                       <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
//                         <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
//                       </div>
//                     </div>
//                     <div className="flex justify-between items-end">
//                       <div className="text-base sm:text-lg tracking-wider">•••• {card.last4}</div>
//                       <div className="text-xs sm:text-sm font-bold">{card.type}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Actions - Enhanced responsive grid */}
//           <div>
//             <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
//               {quickActions.map((action, i) => {
//                 const Icon = action.icon;
//                 return (
//                   <Link key={i} href={action.href || "#"}>
//                     <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-2 hover:border-gray-200 hover:shadow-md transition cursor-pointer">
//                       <div
//                         className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0"
//                         style={{ backgroundColor: action.bgColor }}
//                       >
//                         <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//                       </div>
//                       <span className="text-[10px] sm:text-xs font-medium text-gray-700 text-center leading-tight">{action.name}</span>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Recent Transactions - Enhanced mobile layout */}
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Recent Transactions</h2>
//               <button className="text-xs sm:text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
//                 View all <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
//               </button>
//             </div>
//             <div className="space-y-2">
//               {recentTransactions.map((tx) => (
//                 <div
//                   key={tx.id}
//                   className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all gap-2"
//                 >
//                   <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
//                     <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
//                       {tx.icon}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <div className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base truncate">{tx.name}</div>
//                       <div className="text-[10px] sm:text-xs text-gray-500">
//                         <span className="hidden sm:inline">{tx.date} • </span>{tx.time}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right flex-shrink-0">
//                     <div className={`text-sm sm:text-base md:text-lg font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
//                       {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
//                     </div>
//                     <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{tx.category}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Charts & Savings */}
//         <div className="space-y-6 sm:space-y-8">
//           {/* Weekly Spending - Enhanced responsive chart */}
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-500 mb-1">Weekly Spending</p>
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">${totalWeekSpending}</h3>
//               </div>
//               <select
//                 className="text-xs sm:text-sm border border-gray-200 rounded-lg sm:rounded-xl px-2 py-1 sm:py-1.5 bg-gray-50 focus:outline-none focus:border-gray-300"
//                 value={selectedPeriod}
//                 onChange={(e) => setSelectedPeriod(e.target.value)}
//               >
//                 <option>Week</option>
//                 <option>Month</option>
//                 <option>Year</option>
//               </select>
//             </div>

//             <div className="h-32 sm:h-40 flex items-end justify-between gap-1.5 sm:gap-2">
//               {weeklySpending.map((day, i) => {
//                 const height = (day.amount / maxSpending) * 100;
//                 return (
//                   <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
//                     <div
//                       className="w-full rounded-t-lg sm:rounded-t-xl transition-all duration-300 hover:opacity-80 cursor-pointer"
//                       style={{
//                         height: `${height}%`,
//                         backgroundColor: day.highlight ? colors.primary : colors.secondary,
//                       }}
//                     ></div>
//                     <span className="text-[10px] sm:text-xs font-medium text-gray-500">{day.day}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Savings Goal - Enhanced responsive layout */}
//           <div
//             className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2"
//             style={{ backgroundColor: colors.primaryExtraLight, borderColor: colors.secondary }}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.primary }}>
//                 Savings Goal
//               </h3>
//               <div className="text-xl sm:text-2xl">🎯</div>
//             </div>
//             <div className="mb-3">
//               <div className="flex justify-between text-xs sm:text-sm mb-1" style={{ color: colors.primary }}>
//                 <span>$7,250</span>
//                 <span>$10,000</span>
//               </div>
//               <div className="w-full h-2.5 sm:h-3 bg-white rounded-full overflow-hidden">
//                 <div
//                   className="h-full rounded-full transition-all duration-500"
//                   style={{ width: '72.5%', backgroundColor: colors.primary }}
//                 ></div>
//               </div>
//             </div>
//             <p className="text-xs sm:text-sm font-medium" style={{ color: colors.primary }}>
//               72.5% completed - Keep going! 💪
//             </p>
//           </div>

//           {/* Expense Categories - Additional mobile-friendly section */}
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100">
//             <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Expense Breakdown</h3>
//             <div className="space-y-3">
//               {expenseCategories.map((category, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between items-center mb-1.5">
//                     <span className="text-xs sm:text-sm font-medium text-gray-700 truncate mr-2">{category.name}</span>
//                     <span className="text-xs sm:text-sm font-bold text-gray-800 flex-shrink-0">${category.amount.toFixed(2)}</span>
//                   </div>
//                   <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="h-full rounded-full transition-all duration-500"
//                       style={{ 
//                         width: `${category.percentage}%`, 
//                         backgroundColor: category.color 
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CreditCard, Send, Download, Scan, Split, Eye, EyeOff, ArrowRight,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import useUser from '@/hooks/useUser';

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
  added:'#a3573a',
  cashout: "#014D4E"
};

export default function DigitalWalletDashboard({ user }) {
  const users = useUser()
  const [showBalance, setShowBalance] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Week');

  // ✅ API Data State
  const [summary, setSummary] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
    totalSaved: 0
  });

  const [loading, setLoading] = useState(true);

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

  const cards = [
    { id: 1, balance: 98500, currency: 'USD', last4: '4141', type: 'Mastercard', bgColor: colors.primary },
    { id: 2, balance: 76280, currency: 'EUR', last4: '8345', type: 'Visa', bgColor: colors.dark },
  ];

  const quickActions = [
    { name: 'Add Money', icon: CreditCard, bgColor: colors.primary, href: "/dashboard/addMoney"},
    { name: 'Send money', icon: Send, bgColor: colors.success, href:"/dashboard/send-money"},
    { name: 'Cashout', icon: ArrowUpRight, bgColor: colors.cashout, href:"/dashboard/cashout"},
    { name: 'Request', icon: Download, bgColor: colors.info, href:"/dashboard/requestMoney"},
    { name: "Remittance", icon: Users, bgColor: colors.indigo, href: "/dashboard/remittance" },
    { name: 'Scan QR', icon: Scan, bgColor: colors.secondary, href:"/dashboard/scanQR" },
    { name: "Add Card",icon: CreditCard,  bgColor: colors.added, href: "/dashboard/cards" },
    { name: 'Split Bill', icon: Split, bgColor: colors.danger, href:"/dashboard/splitBill" },
  ];

  const recentTransactions = [
    { id: 1, name: 'Grocery Store', category: 'Food & Dining', date: '03 Aug 2022', time: '15:43', amount: -85.5, icon: '🛒' },
    { id: 2, name: 'Salary Deposit', category: 'Income', date: '01 Aug 2022', time: '12:58', amount: 4250.0, icon: '💰' },
    { id: 3, name: 'Electric Bill', category: 'Utilities', date: '28 Jul 2022', time: '21:40', amount: -120.0, icon: '⚡' },
  ];

  // ✅ Fetch Transaction Summary
  useEffect(() => {
    if (!users?.accessToken) return; 
    const fetchSummary = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); // ensure JWT is stored
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions/summary`, {
          headers: { Authorization: `Bearer ${users?.accessToken}` },
        });
        setSummary(res.data);
      } catch (error) {
        console.error('Failed to fetch summary:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [users?.accessToken]);

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
          { label: 'Total Balance', value: `$${summary.totalBalance.toFixed(2)}`, trend: 'up', icon: '💰' },
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
                className={`text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                  stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
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
              <button className="text-xs sm:text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                View all <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden hover:shadow-xl transition-all"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-10 bg-white transform translate-x-1/3 -translate-y-1/3"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10 sm:mb-12 md:mb-16">
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] sm:text-xs opacity-80 mb-1 sm:mb-2">Balance</div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold truncate">
                            {showBalance ? `${card.balance.toLocaleString()}` : '•••••'}
                          </div>
                          <button 
                            onClick={() => setShowBalance(!showBalance)} 
                            className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg flex-shrink-0"
                          >
                            {showBalance ? <Eye className="w-3 h-3 sm:w-4 sm:h-4" /> : <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />}
                          </button>
                        </div>
                        <div className="text-[10px] sm:text-xs opacity-80">{card.currency}</div>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-base sm:text-lg tracking-wider">•••• {card.last4}</div>
                      <div className="text-xs sm:text-sm font-bold">{card.type}</div>
                    </div>
                  </div>
                </div>
              ))}
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
              <button className="text-xs sm:text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                View all <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all gap-2"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {tx.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base truncate">{tx.name}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        <span className="hidden sm:inline">{tx.date} • </span>{tx.time}
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


