'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Clock, Zap, Wifi, Droplet, Phone, Flame, Shield, MoreVertical, Edit, Trash2, Bell } from 'lucide-react';

export default function BillsPayment() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [bills, setBills] = useState([
    {
      id: 1,
      name: 'Electricity Bill',
      company: 'PowerGrid Electric',
      amount: 89.5,
      status: 'pending',
      daysOverdue: 619,
      dueDate: '1/20/2024',
      autoPay: true,
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      id: 2,
      name: 'Internet Service',
      company: 'FastNet Broadband',
      amount: 65,
      status: 'pending',
      daysOverdue: 617,
      dueDate: '1/22/2024',
      autoPay: false,
      icon: Wifi,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Water Bill',
      company: 'City Water Department',
      amount: 45.75,
      status: 'pending',
      daysOverdue: 614,
      dueDate: '1/25/2024',
      autoPay: true,
      icon: Droplet,
      color: 'bg-cyan-500'
    },
    {
      id: 4,
      name: 'Phone Bill',
      company: 'MobileConnect',
      amount: 55,
      status: 'overdue',
      daysOverdue: 621,
      dueDate: '1/18/2024',
      autoPay: false,
      icon: Phone,
      color: 'bg-green-500'
    },
    {
      id: 5,
      name: 'Gas Bill',
      company: 'Natural Gas Co.',
      amount: 78.25,
      status: 'pending',
      daysOverdue: 611,
      dueDate: '1/28/2024',
      autoPay: true,
      icon: Flame,
      color: 'bg-orange-500'
    },
    {
      id: 6,
      name: 'Insurance Premium',
      company: 'SafeGuard Insurance',
      amount: 125,
      status: 'pending',
      daysOverdue: 609,
      dueDate: '1/30/2024',
      autoPay: true,
      icon: Shield,
      color: 'bg-purple-500'
    }
  ]);

  const totalUpcoming = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const overdueBills = bills.filter(bill => bill.status === 'overdue').length;
  const autoPayActive = bills.filter(bill => bill.autoPay).length;

  const handleDropdownClick = (billId) => {
    setOpenDropdown(openDropdown === billId ? null : billId);
  };

  const handleAction = (action, billId) => {
    setOpenDropdown(null);
  };

  const toggleAutoPay = (billId) => {
    setBills(bills.map(bill => 
      bill.id === billId ? { ...bill, autoPay: !bill.autoPay } : bill
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Upcoming</span>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">${totalUpcoming.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Overdue Bills</span>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-red-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{overdueBills}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">AutoPay Active</span>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{autoPayActive}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">This Month</span>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">${totalUpcoming.toFixed(2)}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-1 flex gap-2">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'upcoming'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Clock size={18} />
              Upcoming Bills
            </span>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'history'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Payment History
            </span>
          </button>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Bills</h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-200">
            <Plus size={18} />
            Add Bill
          </button>
        </div>

        {/* Bills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bills.map((bill) => {
            const Icon = bill.icon;
            return (
              <div key={bill.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${bill.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{bill.name}</h3>
                        <p className="text-sm text-gray-500">{bill.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">${bill.amount}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        bill.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {bill.status}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div>
                      <span className="block">{bill.daysOverdue} days overdue</span>
                      <span className="block">Due: {bill.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">AutoPay</span>
                      <button
                        onClick={() => toggleAutoPay(bill.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          bill.autoPay ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            bill.autoPay ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors">
                      Pay Now
                    </button>
                    <div className="relative" ref={openDropdown === bill.id ? dropdownRef : null}>
                      <button
                        onClick={() => handleDropdownClick(bill.id)}
                        className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <MoreVertical size={18} className="text-gray-600" />
                      </button>
                      
                      {openDropdown === bill.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                          <button
                            onClick={() => handleAction('Edit Bill', bill.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <Edit size={16} />
                            <span className="text-sm">Edit Bill</span>
                          </button>
                          <button
                            onClick={() => handleAction('View Details', bill.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="text-sm">View Details</span>
                          </button>
                          <button
                            onClick={() => handleAction('Set Reminder', bill.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <Bell size={16} />
                            <span className="text-sm">Set Reminder</span>
                          </button>
                          <div className="border-t border-gray-100 my-1"></div>
                          <button
                            onClick={() => handleAction('Delete Bill', bill.id)}
                            className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                          >
                            <Trash2 size={16} />
                            <span className="text-sm">Delete Bill</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}