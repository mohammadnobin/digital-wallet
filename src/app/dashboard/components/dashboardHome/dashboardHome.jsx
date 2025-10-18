// 'use client';
// import React, { useState } from 'react';
// import {
//   QrCode,
//   CreditCard,
//   DollarSign,
//   Users,
//   ArrowUpRight,
//   ArrowDownLeft,
//   Zap,
//   Eye,
//   EyeOff,


//   Plus,
//   SquareArrowOutUpRight
// } from 'lucide-react';
// import Link from 'next/link';

// const DigitalWalletDashboard = ({user}) => {

//   const [showBalance, setShowBalance] = useState(true);
//   const [totalbalance, setTotalBalance] = useState(user?.balance || 0);


//   const quickActions = [
//     { icon: Plus, label: "Add Money", color: "bg-blue-500", href: "/dashboard/addMoney" },
//     { icon: SquareArrowOutUpRight, label: "Cash Out", color: "bg-green-500", href: "/dashboard/cashout" },
//     { icon: DollarSign, label: "Request Money", color: "bg-pink-500", href: "/dashboard/requestMoney" },
//     { icon: Users, label: "Remittance", color: "bg-indigo-500", href: "/dashboard/remittance" },
//     { icon: QrCode, label: "Scan QR", color: "bg-purple-500", href: "/dashboard/scanQR" },
//     { icon: CreditCard, label: "Add Card", color: "bg-orange-500", href: "/dashboard/cards" },
//     { icon: Users, label: "Split Bill", color: "bg-indigo-500", href: "/dashboard/splitBill" },
    
//   ];

//   const recentTransactions = [
//     {
//       id: 1,
//       type: 'received',
//       title: 'Payment from Sarah Wilson',
//       date: '2024-01-15',
//       time: '2:30 PM',
//       amount: 450.00,
//       icon: ArrowDownLeft,
//       color: 'text-green-500'
//     },
//     {
//       id: 2,
//       type: 'sent',
//       title: 'Grocery Store Payment',
//       date: '2024-01-15',
//       time: '11:45 AM',
//       amount: -89.50,
//       icon: ArrowUpRight,
//       color: 'text-red-500'
//     },
//     {
//       id: 3,
//       type: 'bill',
//       title: 'Electricity Bill',
//       date: '2024-01-14',
//       time: '6:20 PM',
//       amount: -125.75,
//       icon: Zap,
//       color: 'text-orange-500'
//     },
//     {
//       id: 4,
//       type: 'received',
//       title: 'Freelance Payment',
//       date: '2024-01-14',
//       time: '3:15 PM',
//       amount: 1200.00,
//       icon: ArrowDownLeft,
//       color: 'text-green-500'
//     }
//   ];

//   const expenseCategories = [
//     { name: 'Food & Dining', percentage: 35, color: 'bg-blue-500' },
//     { name: 'Shopping', percentage: 25, color: 'bg-green-500' },
//     { name: 'Transportation', percentage: 20, color: 'bg-orange-500' },
//     { name: 'Utilities', percentage: 12, color: 'bg-red-500' },
//     { name: 'Entertainment', percentage: 8, color: 'bg-purple-500' }
//   ];

//   const weeklySpendingData = [
//     { day: 'Mon', amount: 80 },
//     { day: 'Tue', amount: 120 },
//     { day: 'Wed', amount: 160 },
//     { day: 'Thu', amount: 90 },
//     { day: 'Fri', amount: 180 },
//     { day: 'Sat', amount: 240 },
//     { day: 'Sun', amount: 160 }
//   ];

//   const maxSpending = Math.max(...weeklySpendingData.map(d => d.amount));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">


//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}</h1>
//           <p className="text-gray-600">Manage your finances with ease</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Account Overview */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Overview</h2>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                 <div className="bg-blue-50 rounded-lg p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <CreditCard className="w-8 h-8 text-blue-600" />
//                     <button
//                       onClick={() => setShowBalance(!showBalance)}
//                       className="text-blue-600 cursor-pointer hover:text-blue-700"
//                     >
//                       {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
//                     </button>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-1">Total Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {showBalance ? `${totalbalance}` : '••••••'}
//                   </p>
//                 </div>

//                 <div className="bg-green-50 rounded-lg p-4">
//                   <div className="flex items-center mb-2">
//                     <ArrowDownLeft className="w-8 h-8 text-green-600" />
//                   </div>
//                   <p className="text-sm text-gray-600 mb-1">Monthly Income</p>
//                   <p className="text-2xl font-bold text-gray-900">$4,250.00</p>
//                 </div>

//                 <div className="bg-red-50 rounded-lg p-4">
//                   <div className="flex items-center mb-2">
//                     <ArrowUpRight className="w-8 h-8 text-red-600" />
//                   </div>
//                   <p className="text-sm text-gray-600 mb-1">Monthly Expenses</p>
//                   <p className="text-2xl font-bold text-gray-900">$2,847.32</p>
//                 </div>

//                 <div className="bg-purple-50 rounded-lg p-4">
//                   <div className="flex items-center mb-2">
//                     <CreditCard className="w-8 h-8 text-purple-600" />
//                   </div>
//                   <p className="text-sm text-gray-600 mb-1">Active Cards</p>
//                   <p className="text-2xl font-bold text-gray-900">3</p>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
//               <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//                 {quickActions.map((action, index) => (
//                   <Link href={action.href} key={index}>

//                     <button
//                       className="flex flex-col cursor-pointer items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
//                     >
//                       <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
//                         <action.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <span className="text-sm font-medium text-gray-700">{action.label}</span>
//                     </button>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Transactions */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
//                 <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                   View All
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 {recentTransactions.map((transaction) => (
//                   <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
//                     <div className="flex items-center space-x-4">
//                       <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
//                         <transaction.icon className={`w-5 h-5 ${transaction.color}`} />
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{transaction.title}</p>
//                         <p className="text-sm text-gray-500">{transaction.date} • {transaction.time}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
//                         {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             {/* Weekly Spending Chart */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-6">Weekly Spending</h2>
//               <div className="space-y-4">
//                 {weeklySpendingData.map((data, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <span className="text-sm text-gray-600 w-8">{data.day}</span>
//                     <div className="flex-1 bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full transition-all duration-300"
//                         style={{ width: `${(data.amount / maxSpending) * 100}%` }}
//                       ></div>
//                     </div>
//                     <span className="text-sm font-medium text-gray-900 w-8">${data.amount}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Expense Categories */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-6">Expense Categories</h2>

//               {/* Donut Chart Representation */}
//               <div className="relative w-32 h-32 mx-auto mb-6">
//                 <div className="w-full h-full rounded-full border-8 border-blue-500 relative">
//                   <div className="absolute inset-2 rounded-full border-8 border-green-500">
//                     <div className="absolute inset-2 rounded-full border-8 border-orange-500">
//                       <div className="absolute inset-2 rounded-full border-8 border-red-500">
//                         <div className="absolute inset-2 rounded-full border-4 border-purple-500">
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 {expenseCategories.map((category, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
//                       <span className="text-sm text-gray-700">{category.name}</span>
//                     </div>
//                     <span className="text-sm font-medium text-gray-900">{category.percentage}%</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DigitalWalletDashboard;


'use client';
import React, { useState } from 'react';
import {
  CreditCard, Send, Download, Scan, UserPlus, Split, Eye, EyeOff, ArrowRight,
  Users,
} from 'lucide-react';
import { href } from 'react-router';
import Link from 'next/link';

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
  added:'#a3573a'
};

export default function DigitalWalletDashboard({ user }) {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Week');

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
    { name: 'Send', icon: Send, bgColor: colors.success, href:"/dashboard/cashout"},
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Welcome Section */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          Welcome back <span className="text-primary">{user.name}</span> 👋
        </h1>
        <p className="text-gray-500 text-sm md:text-base">Here's your financial overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: 'Total Balance', value: '$3,332.30', change: '+12.5%', trend: 'up', icon: '💰' },
          { label: 'Income', value: '$4,250.00', change: '+8.2%', trend: 'up', icon: '📈' },
          { label: 'Expenses', value: '$2,847.32', change: '-3.1%', trend: 'down', icon: '📉' },
          { label: 'Saved', value: '$1,402.68', change: '+15.3%', trend: 'up', icon: '💎' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl md:text-3xl">{stat.icon}</span>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="text-gray-500 text-sm mb-1">{stat.label}</div>
            <div className="text-lg md:text-2xl font-bold text-gray-800">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section (Cards + Quick Actions + Transactions) */}
        <div className="lg:col-span-2 space-y-8">
          {/* My Cards */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800">My Cards</h2>
              <button className="text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                View all <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-3xl p-6 md:p-8 text-white relative overflow-hidden hover:shadow-xl transition-all"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-white transform translate-x-1/3 -translate-y-1/3"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12 md:mb-16">
                      <div>
                        <div className="text-xs opacity-80 mb-2">Balance</div>
                        <div className="flex items-center gap-2">
                          <div className="text-xl md:text-2xl font-bold">
                            {showBalance ? `${card.balance.toLocaleString()}` : '•••••'}
                          </div>
                          <button onClick={() => setShowBalance(!showBalance)} className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg">
                            {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                        </div>
                        <div className="text-xs opacity-80">{card.currency}</div>
                      </div>
                      <div className="w-10 h-10 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center">
                        <CreditCard className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-lg tracking-wider">•••• {card.last4}</div>
                      <div className="text-sm font-bold">{card.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          {/* <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <button
                    key={i}
                    className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-gray-200 hover:shadow-md transition"
                  >
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: action.bgColor }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{action.name}</span>
                  </button>
                );
              })}
            </div>
          </div> */}

          <div>
  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
    {quickActions.map((action, i) => {
      const Icon = action.icon;
      return (
        <Link key={i} href={action.href || "#"}>
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-gray-200 hover:shadow-md transition cursor-pointer">
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: action.bgColor }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xs font-medium text-gray-700">{action.name}</span>
          </div>
        </Link>
      );
    })}
  </div>
</div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800">Recent Transactions</h2>
              <button className="text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                View all <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
                      {tx.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">{tx.name}</div>
                      <div className="text-xs text-gray-500">{tx.date} • {tx.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm md:text-lg font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                      {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">{tx.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Charts & Savings) */}
        <div className="space-y-8">
          {/* Weekly Spending */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Weekly Spending</p>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">${totalWeekSpending}</h3>
              </div>
              <select
                className="text-sm border border-gray-200 rounded-xl px-2 py-1 bg-gray-50"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
              </select>
            </div>

            <div className="h-40 flex items-end justify-between gap-2">
              {weeklySpending.map((day, i) => {
                const height = (day.amount / maxSpending) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div
                      className="w-full rounded-t-xl transition-all duration-300"
                      style={{
                        height: `${height}%`,
                        backgroundColor: day.highlight ? colors.primary : colors.secondary,
                      }}
                    ></div>
                    <span className="text-xs font-medium text-gray-500">{day.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Savings Goal */}
          <div
            className="rounded-2xl p-6 border-2"
            style={{ backgroundColor: colors.primaryExtraLight, borderColor: colors.secondary }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold" style={{ color: colors.primary }}>
                Savings Goal
              </h3>
              <div className="text-2xl">🎯</div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1" style={{ color: colors.primary }}>
                <span>$7,250</span>
                <span>$10,000</span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: '72.5%', backgroundColor: colors.primary }}
                ></div>
              </div>
            </div>
            <p className="text-sm font-medium" style={{ color: colors.primary }}>
              72.5% completed - Keep going! 💪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
