'use client';

import React, { useState } from 'react';
import { Users, FileText, TrendingUp, TrendingDown, Utensils, Plane, Film, Car, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SplitBills() {
  const [activeTab, setActiveTab] = useState('all');

  const bills = [
    { id: 1, title: 'Dinner at Italian Restaurant', icon: Utensils, total: 240.0, people: 4, date: '2024-01-15', status: 'pending', yourShare: 60.0 },
    { id: 2, title: 'Weekend Trip to Mountains', icon: Plane, total: 800.0, people: 3, date: '2024-01-12', status: 'paid', yourShare: 266.67 },
    { id: 3, title: 'Office Lunch Order', icon: Utensils, total: 156.5, people: 5, date: '2024-01-10', status: 'settled', yourShare: 31.3 },
    { id: 4, title: 'Movie Night Snacks', icon: Film, total: 45.8, people: 2, date: '2024-01-14', status: 'pending', yourShare: 22.9 },
    { id: 5, title: 'Uber Ride to Airport', icon: Car, total: 85.0, people: 3, date: '2024-01-08', status: 'paid', yourShare: 28.33 },
  ];

  const filteredBills = bills.filter(bill => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return bill.status === 'pending';
    if (activeTab === 'settled') return bill.status === 'settled' || bill.status === 'paid';
    return true;
  });

  const stats = {
    owed: bills.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.yourShare, 0),
    paid: bills.filter(b => b.status === 'paid' || b.status === 'settled').reduce((sum, b) => sum + b.yourShare, 0),
    totalBills: bills.length,
    activeGroups: 8,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back to Dashboard Button */}
        <div className="mb-6">
          <Link href="/dashboard">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all border border-gray-200 text-gray-700 hover:text-blue-600">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
          </Link>
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Split Bills</h1>
            <p className="text-gray-600 mt-1">Manage shared expenses with friends and groups</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            <span className="text-xl">+</span>
            Create Split
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Amount Owed</span>
              <div className="bg-red-50 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-red-600">${stats.owed.toFixed(2)}</div>
            <div className="text-sm text-gray-500 mt-1">{bills.filter(b => b.status === 'pending').length} pending bills</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Amount Paid</span>
              <div className="bg-green-50 p-2 rounded-lg">
                <TrendingDown className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600">${stats.paid.toFixed(2)}</div>
            <div className="text-sm text-gray-500 mt-1">{bills.filter(b => b.status === 'paid' || b.status === 'settled').length} settled bills</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Bills</span>
              <div className="bg-blue-50 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.totalBills}</div>
            <div className="text-sm text-gray-500 mt-1">All time</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Active Groups</span>
              <div className="bg-purple-50 p-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.activeGroups}</div>
            <div className="text-sm text-gray-500 mt-1">With friends</div>
          </div>
        </div>

        {/* Bills List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-8">
              {['all', 'pending', 'settled'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-medium transition-colors relative ${
                    activeTab === tab ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'all' ? 'All Bills' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Bills Items */}
          <div className="divide-y divide-gray-200">
            {filteredBills.length === 0 && (
              <div className="px-6 py-5 text-center text-gray-500">No bills found for this tab.</div>
            )}
            {filteredBills.map(bill => {
              const Icon = bill.icon;
              return (
                <div key={bill.id} className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-gray-900">{bill.title}</h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            bill.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : bill.status === 'paid'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Total: ${bill.total.toFixed(2)}</span>
                        <span>•</span>
                        <span>{bill.people} people</span>
                        <span>•</span>
                        <span>{bill.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Your share</div>
                    <div className="text-xl font-bold text-gray-900">${bill.yourShare.toFixed(2)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
