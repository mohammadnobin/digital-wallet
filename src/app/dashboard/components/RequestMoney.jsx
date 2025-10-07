'use client';

import { useState } from 'react';
import {
  User, Car, Film, UtensilsCrossed, Lightbulb, ShoppingBag,
  Calendar, Info, Users, RefreshCw, Share2, Clock, CheckCircle, XCircle
} from 'lucide-react';

export default function RequestMoney() {
  const [activeTab, setActiveTab] = useState('new');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [dueDate, setDueDate] = useState('');

  const categories = [
    { id: 'general', label: 'General', icon: User },
    { id: 'food', label: 'Food & Dining', icon: UtensilsCrossed },
    { id: 'transportation', label: 'Transportation', icon: Car },
    { id: 'utilities', label: 'Utilities', icon: Lightbulb },
    { id: 'entertainment', label: 'Entertainment', icon: Film },
    { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
  ];

  const quickAmounts = [20, 50, 100, 200];

  const pendingRequests = [
    { id: 1, from: 'alice@example.com', amount: 120, category: 'Food & Dining', dueDate: '2025-10-10' },
    { id: 2, from: 'bob@example.com', amount: 75, category: 'Transportation', dueDate: '2025-10-15' }
  ];

  const historyRequests = [
    { id: 1, from: 'charlie@example.com', amount: 250, category: 'Shopping', status: 'Received' },
    { id: 2, from: 'david@example.com', amount: 60, category: 'Utilities', status: 'Declined' },
    { id: 3, from: 'emma@example.com', amount: 90, category: 'Entertainment', status: 'Received' }
  ];

  const handleQuickAmount = (value) => {
    setAmount(value.toString());
  };

  const handleSubmit = () => {
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Money</h1>
          <p className="text-gray-600">Request payments from friends and family</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          {['new', 'pending', 'history'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 cursor-pointer font-medium transition-colors ${activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab === 'new' ? 'New Request' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">

            {activeTab === 'new' && (
              <>
                {/* === New Request Form === */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Request Money</h2>
                    <p className="text-sm text-gray-500">Send a payment request to contacts</p>
                  </div>
                </div>

                {/* Request From */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Request From</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter email or select from contacts"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2 mt-3">
                    {quickAmounts.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleQuickAmount(value)}
                        className="px-4 py-1.5 text-sm font-medium cursor-pointer text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        ${value}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${selectedCategory === category.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">{category.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Due Date */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date (Optional)</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What's this request for?"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {message.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Send Request
                </button>
              </>
            )}

            {activeTab === 'pending' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Requests</h2>
                <div className="space-y-4">
                  {pendingRequests.map(req => (
                    <div key={req.id} className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{req.from}</p>
                        <p className="text-sm text-gray-600">{req.category} • Due {req.dueDate}</p>
                      </div>
                      <span className="font-semibold text-yellow-700">${req.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">History</h2>
                <div className="space-y-4">
                  {historyRequests.map(req => (
                    <div key={req.id} className="flex items-center justify-between p-4 rounded-lg border bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">{req.from}</p>
                        <p className="text-sm text-gray-600">{req.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {req.status === 'Received' && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {req.status === 'Declined' && <XCircle className="w-5 h-5 text-red-500" />}
                        <span className="font-semibold text-gray-900">${req.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Request Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Pending</span>
                  </div>
                  <span className="font-semibold text-gray-900">$450.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Received</span>
                  </div>
                  <span className="font-semibold text-gray-900">$1,250.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-gray-600">Declined</span>
                  </div>
                  <span className="font-semibold text-gray-900">$75.00</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">Split Bill</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors">
                  <RefreshCw className="w-5 h-5" />
                  <span className="text-sm font-medium">Recurring Request</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share Request Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
