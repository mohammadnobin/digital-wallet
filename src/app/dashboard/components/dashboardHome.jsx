'use client';
import React, { useState } from 'react';
import {
  QrCode,
  CreditCard,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownLeft,
  Zap,
  Eye,
  EyeOff,


  Plus,
  SquareArrowOutUpRight
} from 'lucide-react';
import Link from 'next/link';

const DigitalWalletDashboard = ({user}) => {

  const [showBalance, setShowBalance] = useState(true);
  const [totalbalance, setTotalBalance] = useState(user?.balance || 0);


  const quickActions = [
    { icon: Plus, label: "Add Money", color: "bg-blue-500", href: "/dashboard/addMoney" },
    { icon: SquareArrowOutUpRight, label: "Cash Out", color: "bg-green-500", href: "/dashboard/cashout" },
    { icon: DollarSign, label: "Request Money", color: "bg-pink-500", href: "/dashboard/requestMoney" },
    { icon: QrCode, label: "Scan QR", color: "bg-purple-500", href: "/scan-qr" },
    { icon: CreditCard, label: "Add Card", color: "bg-orange-500", href: "/dashboard/cards" },
    { icon: Users, label: "Split Bill", color: "bg-indigo-500", href: "/split-bill" },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'received',
      title: 'Payment from Sarah Wilson',
      date: '2024-01-15',
      time: '2:30 PM',
      amount: 450.00,
      icon: ArrowDownLeft,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'sent',
      title: 'Grocery Store Payment',
      date: '2024-01-15',
      time: '11:45 AM',
      amount: -89.50,
      icon: ArrowUpRight,
      color: 'text-red-500'
    },
    {
      id: 3,
      type: 'bill',
      title: 'Electricity Bill',
      date: '2024-01-14',
      time: '6:20 PM',
      amount: -125.75,
      icon: Zap,
      color: 'text-orange-500'
    },
    {
      id: 4,
      type: 'received',
      title: 'Freelance Payment',
      date: '2024-01-14',
      time: '3:15 PM',
      amount: 1200.00,
      icon: ArrowDownLeft,
      color: 'text-green-500'
    }
  ];

  const expenseCategories = [
    { name: 'Food & Dining', percentage: 35, color: 'bg-blue-500' },
    { name: 'Shopping', percentage: 25, color: 'bg-green-500' },
    { name: 'Transportation', percentage: 20, color: 'bg-orange-500' },
    { name: 'Utilities', percentage: 12, color: 'bg-red-500' },
    { name: 'Entertainment', percentage: 8, color: 'bg-purple-500' }
  ];

  const weeklySpendingData = [
    { day: 'Mon', amount: 80 },
    { day: 'Tue', amount: 120 },
    { day: 'Wed', amount: 160 },
    { day: 'Thu', amount: 90 },
    { day: 'Fri', amount: 180 },
    { day: 'Sat', amount: 240 },
    { day: 'Sun', amount: 160 }
  ];

  const maxSpending = Math.max(...weeklySpendingData.map(d => d.amount));

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}</h1>
          <p className="text-gray-600">Manage your finances with ease</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Account Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="w-8 h-8 text-blue-600" />
                    <button
                      onClick={() => setShowBalance(!showBalance)}
                      className="text-blue-600 cursor-pointer hover:text-blue-700"
                    >
                      {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Total Balance</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {showBalance ? `${totalbalance}` : '••••••'}
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <ArrowDownLeft className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Monthly Income</p>
                  <p className="text-2xl font-bold text-gray-900">$4,250.00</p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <ArrowUpRight className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Monthly Expenses</p>
                  <p className="text-2xl font-bold text-gray-900">$2,847.32</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Active Cards</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {quickActions.map((action, index) => (
                  <Link href={action.href} key={index}>

                    <button
                      className="flex flex-col cursor-pointer items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{action.label}</span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
                        <transaction.icon className={`w-5 h-5 ${transaction.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.title}</p>
                        <p className="text-sm text-gray-500">{transaction.date} • {transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Weekly Spending Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Weekly Spending</h2>
              <div className="space-y-4">
                {weeklySpendingData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 w-8">{data.day}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(data.amount / maxSpending) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">${data.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Expense Categories</h2>

              {/* Donut Chart Representation */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-8 border-blue-500 relative">
                  <div className="absolute inset-2 rounded-full border-8 border-green-500">
                    <div className="absolute inset-2 rounded-full border-8 border-orange-500">
                      <div className="absolute inset-2 rounded-full border-8 border-red-500">
                        <div className="absolute inset-2 rounded-full border-4 border-purple-500">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-sm text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{category.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalWalletDashboard;