'use client';
import { useState } from 'react';
import { Send, Bell, Settings, User, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function MoneyTransfer() {
  const [activeTab, setActiveTab] = useState('send');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [transferSpeed, setTransferSpeed] = useState('instant');
  const [message, setMessage] = useState('');

  const recentContacts = [
    { name: 'John Smith', email: 'john@email.com', date: 'Last: Jan 15', avatar: 'JS' },
    { name: 'Emily Davis', email: 'emily@email.com', date: 'Last: Jan 14', avatar: 'ED' },
    { name: 'Michael Brown', email: 'michael@email.com', date: 'Last: Jan 12', avatar: 'MB' },
    { name: 'Sarah Wilson', email: 'sarah@email.com', date: 'Last: Jan 10', avatar: 'SW' },
  ];

  const transferHistory = [
    { name: 'John Smith', date: 'Jan 15, 08:30 PM', amount: -250.00, status: 'completed' },
    { name: 'Emily Davis', date: 'Jan 14, 02:20 PM', amount: 475.50, status: 'completed' },
    { name: 'Michael Brown', date: 'Jan 13, 10:45 PM', amount: -120.00, status: 'pending' },
    { name: 'Sarah Wilson', date: 'Jan 12, 03:15 PM', amount: 300.00, status: 'completed' },
  ];

  const quickAmounts = [10, 25, 50, 100];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Money Transfer</h1>
          <p className="text-gray-600">Send money instantly to friends and family</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transfer Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Tabs */}
              <div className="flex space-x-4 mb-6 border-b">
                <button
                  onClick={() => setActiveTab('send')}
                  className={`pb-3 px-4 font-medium transition-colors ${
                    activeTab === 'send'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Send Money
                </button>
              </div>

              {/* Send Money Form */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-4 flex items-start space-x-3">
                  <Send className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Send Money</h3>
                    <p className="text-sm text-gray-600">Transfer funds instantly</p>
                  </div>
                </div>

                {/* Send To */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Send To
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email or phone number"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <p className="mt-2 text-xs text-gray-500">Enter email address or phone number</p>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                    />
                  </div>
                  <div className="flex gap-2 mt-3">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt.toString())}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transfer Speed */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Transfer Speed
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border-2 border-blue-500 rounded-xl cursor-pointer bg-blue-50">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="speed"
                          value="instant"
                          checked={transferSpeed === 'instant'}
                          onChange={(e) => setTransferSpeed(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Instant Transfer</p>
                          <p className="text-sm text-gray-600">Available in minutes</p>
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold">$1.99</span>
                    </label>
                    <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="speed"
                          value="standard"
                          checked={transferSpeed === 'standard'}
                          onChange={(e) => setTransferSpeed(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Standard Transfer</p>
                          <p className="text-sm text-gray-600">1-3 business days</p>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold">Free</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Add a note..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={500}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                  <p className="mt-2 text-xs text-gray-500">{message.length}/500 characters</p>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-blue-400 cursor-pointer text-white py-4 rounded-xl font-semibold hover:from-gray-300 hover:to-indigo-200 transition-all shadow-lg hover:shadow-xl">
                  Send Money
                </button>

                {/* Security Notice */}
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-900">Secure Transfer</p>
                    <p className="text-xs text-green-700">Your transfer is protected by bank-level encryption and fraud monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Recent Contacts</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              <div className="space-y-3">
                {recentContacts.map((contact, idx) => (
                  <button
                    key={idx}
                    onClick={() => setRecipient(contact.email)}
                    className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {contact.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{contact.name}</p>
                      <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                    </div>
                    <p className="text-xs text-gray-400">{contact.date}</p>
                  </button>
                ))}
                <button className="w-full py-3 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-300 transition-colors">
                  <span>+</span>
                  <span>Add New Contact</span>
                </button>
              </div>
            </div>

            {/* Transfer History */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Transfer History</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              <div className="space-y-3">
                {transferHistory.map((transfer, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      transfer.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        transfer.amount > 0 ? 'bg-green-600' : 'bg-red-600'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{transfer.name}</p>
                      <p className="text-xs text-gray-500">{transfer.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold text-sm ${
                        transfer.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transfer.amount > 0 ? '+' : ''}{transfer.amount < 0 ? '-' : ''}${Math.abs(transfer.amount).toFixed(2)}
                      </p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        transfer.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {transfer.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}