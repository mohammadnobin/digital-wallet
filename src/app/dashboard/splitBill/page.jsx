'use client';
import React, { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  TrendingUp,
  TrendingDown,
  Utensils,
  Plane,
  Film,
  Car,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

export default function SplitBills() {
  const [activeTab, setActiveTab] = useState('all');
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({
    title: '',
    total: '',
    people: '',
    date: '',
    status: 'pending',
  });

  // Replace with the logged-in user's email
  const userEmail = "test@example.com";

  // Fetch bills from server
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/splitbills?user=${userEmail}`);
        setBills(res.data.bills || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBills();
  }, []);

  // Filter bills based on tab
  const filteredBills = bills.filter(bill => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return bill.status === 'pending';
    if (activeTab === 'settled') return bill.status === 'settled' || bill.status === 'paid';
    return true;
  });

  // Stats calculation
  const stats = {
    owed: bills.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.yourShare, 0),
    paid: bills.filter(b => b.status === 'paid' || b.status === 'settled').reduce((sum, b) => sum + b.yourShare, 0),
    totalBills: bills.length,
    activeGroups: 8, // static for now
  };

  // Map icon name to component
  const iconMap = { Utensils, Plane, Film, Car };

  // Handle create new bill
  const handleCreateBill = async (e) => {
    e.preventDefault();
    const { title, total, people, date, status } = form;
    if (!title || !total || !people || !date) return;

    const newBill = {
      title,
      total: Number(total),
      people: Number(people),
      date,
      status,
      createdBy: userEmail,
      icon: "Utensils",
    };

    try {
      const res = await axios.post("http://localhost:5000/api/splitbills", newBill);
      if (res.data.success) {
        setBills([res.data.bill, ...bills]);
        setForm({ title: '', total: '', people: '', date: '', status: 'pending' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back to Dashboard */}
        <div className="mb-6">
          <Link href="/dashboard">
            <button className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all border border-gray-200 text-gray-700 hover:text-blue-600">
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
        </div>

        {/* Stats */}
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Column: Create Bill */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Create New Bill</h2>
            <form onSubmit={handleCreateBill} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="border p-2 rounded w-full"
                value={form.title}
                onChange={e => setForm({...form, title: e.target.value})}
              />
              <input
                type="number"
                placeholder="Total Amount"
                className="border p-2 rounded w-full"
                value={form.total}
                onChange={e => setForm({...form, total: e.target.value})}
              />
              <input
                type="number"
                placeholder="Number of People"
                className="border p-2 rounded w-full"
                value={form.people}
                onChange={e => setForm({...form, people: e.target.value})}
              />
              <input
                type="date"
                className="border p-2 rounded w-full"
                value={form.date}
                onChange={e => setForm({...form, date: e.target.value})}
              />
              <select
                className="border p-2 rounded w-full"
                value={form.status}
                onChange={e => setForm({...form, status: e.target.value})}
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="settled">Settled</option>
              </select>
              <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Create Bill</button>
            </form>
          </div>

          {/* Right Column: Bills History */}
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
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {filteredBills.length === 0 && (
                <div className="px-6 py-5 text-center text-gray-500">No bills found for this tab.</div>
              )}
              {filteredBills.map(bill => {
                const Icon = iconMap[bill.icon] || Utensils;
                return (
                  <div key={bill._id} className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center">
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
                          <span>{new Date(bill.date).toLocaleDateString()}</span>
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
    </div>
  );
}
