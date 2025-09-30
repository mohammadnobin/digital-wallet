'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CreditCard, Plus, MoreVertical, ShoppingBag, Fuel, Store, Eye, Trash2, Edit, Lock, Download } from 'lucide-react';

export default function CardsManagement() {
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

  const [cards, setCards] = useState([
    {
      id: 1,
      bank: 'Chase Bank',
      lastDigits: '4532',
      cardholder: 'Sarah Johnson',
      expires: '12/26',
      balance: 5420.5,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 2,
      bank: 'Bank of America',
      lastDigits: '8765',
      cardholder: 'Sarah Johnson',
      expires: '08/25',
      balance: 2150.75,
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 3,
      bank: 'American Express',
      lastDigits: '9812',
      cardholder: 'Sarah Johnson',
      expires: '03/27',
      balance: 8750.25,
      color: 'from-green-600 to-green-700'
    }
  ]);

  const activities = [
    {
      id: 1,
      name: 'Amazon Purchase',
      card: '4532',
      time: 'Today 2:30 PM',
      amount: -156.99,
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      name: 'Shell Gas Station',
      card: '8765',
      time: 'Yesterday 8:45 AM',
      amount: -45.20,
      icon: Fuel,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      name: "McDonald's",
      card: '9812',
      time: 'Yesterday 12:15 PM',
      amount: -12.50,
      icon: Store,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const totalBalance = cards.reduce((sum, card) => sum + card.balance, 0);

  const handleDropdownClick = (cardId) => {
    setOpenDropdown(openDropdown === cardId ? null : cardId);
  };

  const handleAction = (action, cardId) => {
    console.log(`${action} for card ${cardId}`);
    setOpenDropdown(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Cards</h1>
            <p className="text-gray-600">Manage your payment cards securely</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-200">
            <Plus size={20} />
            Add New Card
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div key={card.id} className="group">
              <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-white rounded-full"></div>
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white rounded-full"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-8 bg-yellow-400 rounded flex items-center justify-center text-xs font-bold text-gray-900">
                        CHIP
                      </div>
                      <span className="text-sm font-medium">{card.bank}</span>
                    </div>
                    <div className="relative" ref={openDropdown === card.id ? dropdownRef : null}>
                      <button 
                        onClick={() => handleDropdownClick(card.id)}
                        className="text-white hover:bg-white/20 p-1 rounded transition-colors"
                      >
                        <MoreVertical size={20} />
                      </button>
                      
                      {openDropdown === card.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                          <button
                            onClick={() => handleAction('View Details', card.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <Eye size={16} />
                            <span className="text-sm">View Details</span>
                          </button>
                          <button
                            onClick={() => handleAction('Edit Card', card.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <Edit size={16} />
                            <span className="text-sm">Edit Card</span>
                          </button>
                          <button
                            onClick={() => handleAction('Lock Card', card.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <Lock size={16} />
                            <span className="text-sm">Lock Card</span>
                          </button>
                          <button
                            onClick={() => handleAction('Download Statement', card.id)}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <Download size={16} />
                            <span className="text-sm">Download Statement</span>
                          </button>
                          <div className="border-t border-gray-100 my-1"></div>
                          <button
                            onClick={() => handleAction('Delete Card', card.id)}
                            className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                          >
                            <Trash2 size={16} />
                            <span className="text-sm">Delete Card</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-2xl font-semibold tracking-wider">
                      •••• •••• •••• {card.lastDigits}
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-white/70 mb-1">CARDHOLDER</div>
                      <div className="font-medium">{card.cardholder}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/70 mb-1">EXPIRES</div>
                      <div className="font-medium">{card.expires}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Balance Info */}
              <div className="bg-white rounded-xl mt-4 p-4 shadow-md flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Available Balance</div>
                  <div className="text-xl font-bold text-gray-900">
                    ${card.balance.toLocaleString('en-US', { minimumFractionDigits: 1 })}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye size={18} className="text-gray-600" />
                  </button>
                  <div className="relative" ref={openDropdown === `balance-${card.id}` ? dropdownRef : null}>
                    <button 
                      onClick={() => handleDropdownClick(`balance-${card.id}`)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <MoreVertical size={18} className="text-gray-600" />
                    </button>
                    
                    {openDropdown === `balance-${card.id}` && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                        <button
                          onClick={() => handleAction('View Transactions', card.id)}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <Eye size={16} />
                          <span className="text-sm">View Transactions</span>
                        </button>
                        <button
                          onClick={() => handleAction('Transfer Money', card.id)}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                          <span className="text-sm">Transfer Money</span>
                        </button>
                        <button
                          onClick={() => handleAction('Set Budget', card.id)}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span className="text-sm">Set Budget</span>
                        </button>
                        <button
                          onClick={() => handleAction('Export Data', card.id)}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <Download size={16} />
                          <span className="text-sm">Export Data</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <CreditCard className="text-indigo-600" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Cards</div>
                <div className="text-2xl font-bold text-gray-900">{cards.length}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <div className="w-6 h-6 flex items-center justify-center text-green-600 font-bold text-xl">$</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Balance</div>
                <div className="text-2xl font-bold text-gray-900">
                  ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 1 })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Security Status</div>
                <div className="text-lg font-bold text-green-600">All Secure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Card Activity</h2>
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${activity.color} rounded-xl`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{activity.name}</div>
                      <div className="text-sm text-gray-500">
                        •••• {activity.card} • {activity.time}
                      </div>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${activity.amount < 0 ? 'text-gray-900' : 'text-green-600'}`}>
                    ${Math.abs(activity.amount).toFixed(2)}
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