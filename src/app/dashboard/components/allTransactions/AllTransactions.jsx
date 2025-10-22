"use client"
import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function AllHistory() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Sample data based on your structure
  useEffect(() => {
    // Replace this with your API call
    const mockData = [
      {
        id: "68f65aed56acf812bd284530",
        userId: "68ed2aff0ddb84254b7dfd26",
        type: "request_sent",
        amount: 100,
        currency: "BDT",
        status: "pending",
        meta: {
          toUserEmail: "najrulislamnobin@gmail.com",
          category: "food",
          requestId: "68f65aec56acf812bd28452e"
        },
        message: "You sent a money request to najrulislamnobin@gmail.com",
        createdAt: "2025-10-20T15:53:17.047+00:00",
        updatedAt: "2025-10-20T15:53:17.047+00:00"
      },
      {
        id: "68f65aed56acf812bd284531",
        userId: "68ed2aff0ddb84254b7dfd26",
        type: "request_received",
        amount: 250,
        currency: "BDT",
        status: "completed",
        meta: {
          fromUserEmail: "user@example.com",
          category: "transport",
          requestId: "68f65aec56acf812bd28452f"
        },
        message: "You received a money request from user@example.com",
        createdAt: "2025-10-19T10:30:00.000+00:00",
        updatedAt: "2025-10-19T12:30:00.000+00:00"
      },
      {
        id: "68f65aed56acf812bd284532",
        userId: "68ed2aff0ddb84254b7dfd26",
        type: "payment_sent",
        amount: 500,
        currency: "BDT",
        status: "completed",
        meta: {
          toUserEmail: "merchant@store.com",
          category: "shopping",
          paymentId: "68f65aec56acf812bd284530"
        },
        message: "You sent payment to merchant@store.com",
        createdAt: "2025-10-18T14:20:00.000+00:00",
        updatedAt: "2025-10-18T14:20:05.000+00:00"
      },
      {
        id: "68f65aed56acf812bd284533",
        userId: "68ed2aff0ddb84254b7dfd26",
        type: "payment_received",
        amount: 1200,
        currency: "BDT",
        status: "completed",
        meta: {
          fromUserEmail: "client@business.com",
          category: "income",
          paymentId: "68f65aec56acf812bd284531"
        },
        message: "You received payment from client@business.com",
        createdAt: "2025-10-17T09:15:00.000+00:00",
        updatedAt: "2025-10-17T09:15:02.000+00:00"
      },
      {
        id: "68f65aed56acf812bd284534",
        userId: "68ed2aff0ddb84254b7dfd26",
        type: "request_sent",
        amount: 75,
        currency: "BDT",
        status: "rejected",
        meta: {
          toUserEmail: "friend@email.com",
          category: "entertainment",
          requestId: "68f65aec56acf812bd284532"
        },
        message: "You sent a money request to friend@email.com",
        createdAt: "2025-10-16T18:45:00.000+00:00",
        updatedAt: "2025-10-16T20:00:00.000+00:00"
      }
    ];
    
    setTransactions(mockData);
    setFilteredTransactions(mockData);
  }, []);

  // Filter transactions
  useEffect(() => {
    let filtered = transactions;

    if (searchTerm) {
      filtered = filtered.filter(t => 
        t.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.meta.toUserEmail && t.meta.toUserEmail.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (t.meta.fromUserEmail && t.meta.fromUserEmail.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(t => t.type === filterType);
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(t => t.status === filterStatus);
    }

    if (filterCategory !== 'all') {
      filtered = filtered.filter(t => t.meta.category === filterCategory);
    }

    setFilteredTransactions(filtered);
  }, [searchTerm, filterType, filterStatus, filterCategory, transactions]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeIcon = (type) => {
    if (type.includes('sent') || type.includes('payment_sent')) {
      return <ArrowUpRight className="w-5 h-5 text-red-500" />;
    }
    return <ArrowDownLeft className="w-5 h-5 text-green-500" />;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeLabel = (type) => {
    return type.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getTotalAmount = () => {
    return filteredTransactions.reduce((sum, t) => {
      if (t.type.includes('received') || t.type === 'payment_received') {
        return sum + t.amount;
      } else {
        return sum - t.amount;
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
          <p className="text-gray-600">View and manage all your transactions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Total Transactions</div>
            <div className="text-2xl font-bold text-gray-900">{filteredTransactions.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Net Amount</div>
            <div className={`text-2xl font-bold ${getTotalAmount() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {getTotalAmount() >= 0 ? '+' : ''}{getTotalAmount()} BDT
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Pending</div>
            <div className="text-2xl font-bold text-yellow-600">
              {filteredTransactions.filter(t => t.status === 'pending').length}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="request_sent">Request Sent</option>
              <option value="request_received">Request Received</option>
              <option value="payment_sent">Payment Sent</option>
              <option value="payment_received">Payment Received</option>
            </select>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="shopping">Shopping</option>
              <option value="entertainment">Entertainment</option>
              <option value="income">Income</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredTransactions.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-lg">No transactions found</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Type Icon */}
                      <div className="mt-1">
                        {getTypeIcon(transaction.type)}
                      </div>

                      {/* Transaction Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {getTypeLabel(transaction.type)}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                            transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{transaction.message}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(transaction.createdAt)}
                          </span>
                          {transaction.meta.category && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                              {transaction.meta.category}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Amount */}
                      <div className="text-right">
                        <div className={`text-xl font-bold ${
                          transaction.type.includes('received') || transaction.type === 'payment_received'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}>
                          {transaction.type.includes('received') || transaction.type === 'payment_received' ? '+' : '-'}
                          {transaction.amount} {transaction.currency}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {getStatusIcon(transaction.status)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}