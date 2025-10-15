'use client';
import React, { useState } from 'react';
import { Search, TrendingDown, TrendingUp, Wallet, ShoppingCart, ArrowUpRight, ArrowDownLeft, FileText, Zap, Coffee, DollarSign, Download, FileSpreadsheet } from 'lucide-react';

export default function TransactionHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All Time');

  const transactions = [
    {
      id: 1,
      title: 'Transfer to Sarah Johnson',
      date: 'Jan 15, 2024, 04:30 PM',
      status: 'Completed',
      transactionId: 'TXN001234567',
      amount: -250.00,
      type: 'Transfer',
      icon: ArrowUpRight,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Online Shopping - Amazon',
      date: 'Jan 15, 2024, 02:45 PM',
      status: 'Completed',
      transactionId: 'PAY001234568',
      amount: -89.99,
      type: 'Shopping',
      icon: ShoppingCart,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Salary Deposit',
      date: 'Jan 14, 2024, 03:00 PM',
      status: 'Completed',
      transactionId: 'DEP001234569',
      amount: 2500.00,
      type: 'Income',
      icon: ArrowDownLeft,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 4,
      title: 'Electricity Bill Payment',
      date: 'Jan 13, 2024, 06:20 PM',
      status: 'Completed',
      transactionId: 'BILL001234570',
      amount: -125.50,
      type: 'Utilities',
      icon: Zap,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 5,
      title: 'Transfer to Michael Chen',
      date: 'Jan 12, 2024, 10:15 PM',
      status: 'Completed',
      transactionId: 'TXN001234571',
      amount: -75.00,
      type: 'Transfer',
      icon: ArrowUpRight,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 6,
      title: 'Netflix Subscription',
      date: 'Jan 12, 2024, 06:00 PM',
      status: 'Completed',
      transactionId: 'PAY001234572',
      amount: -45.99,
      type: 'Entertainment',
      icon: ShoppingCart,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 7,
      title: 'Internet Bill Payment',
      date: 'Jan 8, 2024, 04:00 PM',
      status: 'Completed',
      transactionId: 'BILL001234576',
      amount: -89.99,
      type: 'Utilities',
      icon: FileText,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 8,
      title: 'Coffee Shop - Starbucks',
      date: 'Jan 8, 2024, 02:30 PM',
      status: 'Completed',
      transactionId: 'PAY001234577',
      amount: -25.50,
      type: 'Food & Drink',
      icon: Coffee,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 9,
      title: 'Freelance Payment',
      date: 'Jan 7, 2024, 08:00 PM',
      status: 'Completed',
      transactionId: 'DEP001234578',
      amount: 150.00,
      type: 'Income',
      icon: ArrowDownLeft,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  const totalIncome = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = Math.abs(transactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0));

  const netBalance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
          <p className="text-gray-600">View and manage all your financial transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Total Income</span>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="text-green-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">+${totalIncome.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Total Expenses</span>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-red-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-red-600">-${totalExpenses.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Net Balance</span>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wallet className="text-blue-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">+${netBalance.toFixed(2)}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option>All</option>
              <option>Transfer</option>
              <option>Shopping</option>
              <option>Income</option>
              <option>Utilities</option>
              <option>Entertainment</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>

            {/* Time Filter */}
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option>All Time</option>
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Transactions ({transactions.length})</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => {
              const Icon = transaction.icon;
              return (
                <div 
                  key={transaction.id} 
                  className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`${transaction.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={transaction.iconColor} size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{transaction.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{transaction.date}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {transaction.status}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="text-xs">{transaction.transactionId}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <div className={`text-xl font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{transaction.type}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Export Buttons */}
          <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
              <Download size={18} />
              Export PDF
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
              <FileSpreadsheet size={18} />
              Export Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}