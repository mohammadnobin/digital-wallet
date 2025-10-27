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
  Plus,
  Calendar,
  DollarSign,
  UserCheck,
  Trash2,
  Check,
  Clock,
  X,
} from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

export default function SplitBills() {
  const [activeTab, setActiveTab] = useState('all');
  const [bills, setBills] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    total: '',
    people: '',
    date: '',
    status: 'pending',
  });

  const userEmail = 'test@example.com';

  // Fetch bills from server
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/splitbills?user=${userEmail}`);
        const billsWithIcon = res.data.bills.map(b => ({
          ...b,
          icon: iconMap[b.icon] || Utensils,
        }));
        setBills(billsWithIcon);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBills();
  }, []);

  const iconMap = { Utensils, Plane, Film, Car };

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
      icon: 'Utensils',
      yourShare: Number(total) / Number(people),
    };

    try {
      const res = await axios.post('http://localhost:5000/api/splitbills', newBill);
      if (res.data.success) {
        const billWithIcon = { ...res.data.bill, icon: iconMap[res.data.bill.icon] || Utensils };
        setBills([billWithIcon, ...bills]);
        setForm({ title: '', total: '', people: '', date: '', status: 'pending' });
        setShowCreateForm(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteBill = async (id) => {
    if (!confirm('Are you sure you want to delete this bill?')) return;
    try {
      const res = await axios.delete(`http://localhost:5000/api/splitbills/bill/${id}`);
      if (res.data.success) {
        setBills(bills.filter(bill => bill._id !== id));
        alert('Bill deleted successfully');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete bill');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <div className="mb-6">
          <Link href="/dashboard">
            <button className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm hover:shadow-lg hover:-translate-x-1 transition-all border-2 border-slate-200/60 text-slate-700 hover:text-purple-600 font-medium">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-2">
              Split Bills
            </h1>
            <p className="text-slate-500 text-lg">Manage shared expenses with friends and groups</p>
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            style={{ backgroundColor: '#5f4a94' }}
          >
            <Plus className="w-5 h-5" />
            Create New Bill
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Amount Owed */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border-2 border-slate-200/60 hover:shadow-xl hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-600 text-sm font-medium">Amount Owed</span>
              <div className="bg-red-50 p-3 rounded-2xl shadow-md">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">${stats.owed.toFixed(2)}</div>
            <div className="text-sm text-slate-500 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {bills.filter(b => b.status === 'pending').length} pending bills
            </div>
          </div>

          {/* Amount Paid */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border-2 border-slate-200/60 hover:shadow-xl hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-600 text-sm font-medium">Amount Paid</span>
              <div className="bg-green-50 p-3 rounded-2xl shadow-md">
                <Check className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">${stats.paid.toFixed(2)}</div>
            <div className="text-sm text-slate-500 flex items-center gap-1">
              <Check className="w-4 h-4" />
              {bills.filter(b => b.status === 'paid' || b.status === 'settled').length} settled bills
            </div>
          </div>

          {/* Total Bills */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border-2 border-slate-200/60 hover:shadow-xl hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-600 text-sm font-medium">Total Bills</span>
              <div className="p-3 rounded-2xl shadow-md" style={{ backgroundColor: '#5f4a9415' }}>
                <FileText className="w-6 h-6" style={{ color: '#5f4a94' }} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">{stats.totalBills}</div>
            <div className="text-sm text-slate-500 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              All time
            </div>
          </div>

          {/* Active Groups */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border-2 border-slate-200/60 hover:shadow-xl hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-600 text-sm font-medium">Active Groups</span>
              <div className="p-3 rounded-2xl shadow-md" style={{ backgroundColor: '#e0c9a415' }}>
                <Users className="w-6 h-6" style={{ color: '#e0c9a4' }} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">{stats.activeGroups}</div>
            <div className="text-sm text-slate-500 flex items-center gap-1">
              <UserCheck className="w-4 h-4" />
              With friends
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6">
          {/* Bills History */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60">
            {/* Tabs */}
            <div className="border-b border-slate-200 px-6">
              <div className="flex gap-8">
                {['all', 'pending', 'settled'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 font-semibold transition-all relative ${
                      activeTab === tab ? 'text-purple-600' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    style={activeTab === tab ? { color: '#5f4a94' } : {}}
                  >
                    {tab === 'all' ? 'All Bills' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                        style={{ backgroundColor: '#5f4a94' }}
                      ></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Bills List */}
            <div className="divide-y divide-slate-200 max-h-[700px] overflow-y-auto">
              {filteredBills.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-slate-400" />
                  </div>
                  <p className="text-slate-500 text-lg font-medium">No bills found for this tab</p>
                  <p className="text-slate-400 text-sm mt-1">Create a new bill to get started</p>
                </div>
              )}
              {filteredBills.map(bill => {
                const Icon = bill.icon;
                return (
                  <div
                    key={bill._id}
                    className="px-6 py-6 hover:bg-slate-50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Left Side */}
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className="p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: '#5f4a9415' }}
                        >
                          <Icon className="w-7 h-7" style={{ color: '#5f4a94' }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-slate-900 text-lg">{bill.title}</h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
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
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-semibold">${bill.total.toFixed(2)}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{bill.people} people</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(bill.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-xs text-slate-500 font-medium mb-1">Your share</div>
                          <div className="text-2xl font-bold text-slate-900">
                            ${bill.yourShare.toFixed(2)}
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteBill(bill._id)}
                          className="p-3 rounded-xl hover:bg-red-50 transition-all group/delete"
                        >
                          <Trash2 className="w-5 h-5 text-slate-400 group-hover/delete:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Create Bill Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowCreateForm(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-xl transition-all"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Create New Bill</h2>

            <form onSubmit={handleCreateBill} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Bill Title</label>
                <input
                  type="text"
                  placeholder="e.g., Dinner at Restaurant"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-300 transition-all"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Total Amount</label>
                <div className="relative">
                  <DollarSign className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-300 transition-all"
                    value={form.total}
                    onChange={e => setForm({ ...form, total: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Number of People</label>
                <div className="relative">
                  <Users className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-300 transition-all"
                    value={form.people}
                    onChange={e => setForm({ ...form, people: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-300 transition-all"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
                <select
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-300 transition-all"
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                >
                  <option value="pending">Pending</option>
                  <option value="paid">Paid</option>
                  <option value="settled">Settled</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: '#5f4a94' }}
                >
                  Create Bill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}