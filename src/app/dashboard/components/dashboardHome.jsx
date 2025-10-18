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
import { CreditCard, TrendingUp, TrendingDown, Wallet, Users, Receipt, User, Bell, ChevronDown, ArrowUpRight, ArrowDownRight, Plus, Send, Download, Scan, UserPlus, Split, MoreVertical, Search, Home, PieChart, Settings, Eye, EyeOff, ArrowRight } from 'lucide-react';

// Your custom color scheme
const colors = {
  primary: '#5f4a94',
  primaryLight: '#7d66ab',
  primaryExtraLight: '#f5f2f9',
  secondary: '#e0c9a4',
  secondaryLight: '#f0e4d0',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  dark: '#1f2937',
  gray: '#6b7280'
};

export default function DigitalWalletDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Week');
  const [showBalance, setShowBalance] = useState(true);

  const weeklySpending = [
    { day: 'Sun', amount: 160 },
    { day: 'Mon', amount: 80 },
    { day: 'Tue', amount: 120 },
    { day: 'Wed', amount: 260, highlight: true },
    { day: 'Thu', amount: 90 },
    { day: 'Fri', amount: 180 },
    { day: 'Sat', amount: 240 }
  ];

  const maxSpending = Math.max(...weeklySpending.map(d => d.amount));
  const totalWeekSpending = weeklySpending.reduce((sum, day) => sum + day.amount, 0);

  const expenseCategories = [
    { name: 'Food & Dining', percentage: 35, color: colors.primary, amount: 997.56 },
    { name: 'Shopping', percentage: 25, color: colors.success, amount: 711.83 },
    { name: 'Transportation', percentage: 20, color: colors.warning, amount: 569.46 },
    { name: 'Utilities', percentage: 12, color: colors.danger, amount: 341.68 },
    { name: 'Others', percentage: 8, color: colors.secondary, amount: 227.79 }
  ];

  const cards = [
    { id: 1, balance: 98500, currency: 'USD', last4: '4141', type: 'Mastercard', bgColor: colors.primary },
    { id: 2, balance: 76280, currency: 'EUR', last4: '8345', type: 'Visa', bgColor: colors.dark },
    { id: 3, balance: 45600, currency: 'GBP', last4: '2891', type: 'Mastercard', bgColor: colors.secondary }
  ];

  const recentTransactions = [
    { id: 1, name: 'Grocery Store', category: 'Food & Dining', date: '03 Aug 2022', time: '15:43', amount: -85.50, icon: '🛒' },
    { id: 2, name: 'Salary Deposit', category: 'Income', date: '01 Aug 2022', time: '12:58', amount: 4250.00, icon: '💰' },
    { id: 3, name: 'Electric Bill', category: 'Utilities', date: '28 Jul 2022', time: '21:40', amount: -120.00, icon: '⚡' },
    { id: 4, name: 'Restaurant', category: 'Food & Dining', date: '28 Jul 2022', time: '09:28', amount: -45.75, icon: '🍽️' },
    { id: 5, name: 'Gas Station', category: 'Transportation', date: '26 Jul 2022', time: '18:25', amount: -60.00, icon: '⛽' }
  ];

  const quickStats = [
    { label: 'Total Balance', value: '3,332.30', change: '+12.5%', trend: 'up', icon: '💰' },
    { label: 'Income', value: '$4,250.00', change: '+8.2%', trend: 'up', icon: '📈' },
    { label: 'Expenses', value: '$2,847.32', change: '-3.1%', trend: 'down', icon: '📉' },
    { label: 'Saved', value: '$1,402.68', change: '+15.3%', trend: 'up', icon: '💎' }
  ];

  const quickActions = [
    { name: 'Add Money', icon: Plus, bgColor: colors.primary },
    { name: 'Send', icon: Send, bgColor: colors.success },
    { name: 'Request', icon: Download, bgColor: colors.info },
    { name: 'Scan QR', icon: Scan, bgColor: colors.secondary },
    { name: 'Contacts', icon: UserPlus, bgColor: colors.warning },
    { name: 'Split Bill', icon: Split, bgColor: colors.danger }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: colors.primary }}>
              <Wallet className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold" style={{ color: colors.primary }}>DigitalWallet</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-11 pr-4 py-2.5 border border-gray-200 rounded-full w-80 focus:outline-none focus:border-gray-300 bg-gray-50"
              />
            </div>
            
            <button className="relative p-2 hover:bg-gray-50 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }}></span>
            </button>
            
            <div className="flex items-center gap-3 pl-6 border-l">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-800">MD. Nobin</div>
                <div className="text-xs text-gray-500">najrulislamnobin@gmail.com</div>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: colors.primary }}>
                MN
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4">
            <div className="space-y-1 mb-8">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium" style={{ backgroundColor: colors.primary }}>
                <Home className="w-5 h-5" />
                Dashboard
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                <Receipt className="w-5 h-5" />
                Transactions
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                <CreditCard className="w-5 h-5" />
                My Cards
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                <PieChart className="w-5 h-5" />
                Analytics
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                <Users className="w-5 h-5" />
                Contacts
              </button>
            </div>

            <div className="px-4 py-6 rounded-2xl mb-8" style={{ backgroundColor: colors.primaryExtraLight }}>
              <div className="text-2xl mb-2">🎁</div>
              <div className="text-sm font-semibold mb-1" style={{ color: colors.primary }}>Upgrade to Pro</div>
              <p className="text-xs text-gray-600 mb-4">Unlock premium features</p>
              <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: colors.primary }}>
                Upgrade Now
              </button>
            </div>

            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                <Settings className="w-5 h-5" />
                Settings
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-[1400px] mx-auto">
            {/* Welcome */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Welcome back, MD. Nobin 👋</h1>
              <p className="text-gray-500">Here's your financial overview</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-gray-200 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{stat.icon}</div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* Left Column - 2 parts */}
              <div className="col-span-2 space-y-8">
                {/* My Cards */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">My Cards</h2>
                    <button className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: colors.primary }}>
                      View all <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {cards.slice(0, 2).map((card, index) => (
                      <div 
                        key={card.id} 
                        className="rounded-3xl p-8 text-white relative overflow-hidden hover:shadow-xl transition-all"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: 'white', transform: 'translate(30%, -30%)' }}></div>
                        
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-16">
                            <div>
                              <div className="text-xs opacity-80 mb-2">Balance</div>
                              <div className="flex items-center gap-2">
                                <div className="text-2xl font-bold">
                                  {showBalance ? `${card.balance.toLocaleString()}` : '••••••'}
                                </div>
                                <button onClick={() => setShowBalance(!showBalance)} className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg">
                                  {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                              </div>
                              <div className="text-xs opacity-80">{card.currency}</div>
                            </div>
                            <div className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                              <CreditCard className="w-6 h-6" />
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <div className="text-lg tracking-wider">•••• {card.last4}</div>
                            <div className="text-sm font-bold opacity-90">{card.type}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                  <div className="grid grid-cols-6 gap-4">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={index}
                          className="bg-white border-2 border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-gray-200 hover:shadow-md transition-all group"
                        >
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-all" style={{ backgroundColor: action.bgColor }}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">{action.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
                    <button className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: colors.primary }}>
                      View all <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
                            {transaction.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{transaction.name}</div>
                            <div className="text-sm text-gray-500">{transaction.date} • {transaction.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                          </div>
                          <div className="text-xs text-gray-500">{transaction.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Spending Overview */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Weekly Spending</div>
                      <div className="text-2xl font-bold text-gray-800">${totalWeekSpending}</div>
                    </div>
                    <select 
                      className="text-sm border-2 border-gray-100 rounded-xl px-3 py-2 focus:outline-none focus:border-gray-200 bg-gray-50"
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                    >
                      <option>Week</option>
                      <option>Month</option>
                      <option>Year</option>
                    </select>
                  </div>
                  
                  <div className="h-52 flex items-end justify-between gap-2">
                    {weeklySpending.map((day, index) => {
                      const height = (day.amount / maxSpending) * 100;
                      return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-3 group">
                          <div className="relative w-full">
                            {day.highlight && (
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap shadow-md" style={{ backgroundColor: colors.primary }}>
                                ${day.amount}
                              </div>
                            )}
                            <div 
                              className="w-full rounded-t-xl transition-all duration-300 group-hover:opacity-80 cursor-pointer"
                              style={{ 
                                height: `${height}%`,
                                backgroundColor: day.highlight ? colors.primary : colors.secondary
                              }}
                            ></div>
                          </div>
                          <div className="text-xs font-medium text-gray-500">{day.day}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Expense Categories */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Expense Categories</h3>
                  
                  <div className="flex justify-center mb-8">
                    <div className="relative w-44 h-44">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {expenseCategories.map((category, index) => {
                          const prevSum = expenseCategories.slice(0, index).reduce((sum, cat) => sum + cat.percentage, 0);
                          const circumference = 2 * Math.PI * 35;
                          const rotation = (prevSum * 360) / 100;
                          
                          return (
                            <circle
                              key={index}
                              cx="50"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke={category.color}
                              strokeWidth="12"
                              strokeDasharray={`${(circumference * category.percentage) / 100} ${circumference}`}
                              style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '50% 50%' }}
                            />
                          );
                        })}
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-800">$2,847</div>
                          <div className="text-xs text-gray-500">Total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {expenseCategories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{category.name}</div>
                            <div className="text-xs text-gray-500">${category.amount.toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="text-sm font-bold text-gray-800">{category.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Savings Goal */}
                <div className="rounded-2xl p-6 border-2" style={{ backgroundColor: colors.primaryExtraLight, borderColor: colors.secondary }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold" style={{ color: colors.primary }}>Savings Goal</h3>
                    <div className="text-2xl">🎯</div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2" style={{ color: colors.primary }}>
                      <span>$7,250</span>
                      <span>$10,000</span>
                    </div>
                    <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '72.5%', backgroundColor: colors.primary }}></div>
                    </div>
                  </div>
                  <p className="text-sm font-medium" style={{ color: colors.primary }}>72.5% completed - Keep going! 💪</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}