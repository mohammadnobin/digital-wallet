'use client';

import { useState } from 'react';
import {
  User, Car, Film, UtensilsCrossed, Lightbulb, ShoppingBag,
  Calendar, Info, Users, RefreshCw, Share2, Clock, CheckCircle, XCircle
} from 'lucide-react';
import RequestFrom from './RequestFrom';

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
              <RequestFrom />
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
