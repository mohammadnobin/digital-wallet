"use client"
import React, { useState, useEffect } from 'react';
import { Search, Calendar, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

export default function AllHistory() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Pagination states
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/transactions/all?page=${pageNumber}&limit=${limit}`);
      setTransactions(res.data.transactions);
      setFilteredTransactions(res.data.transactions);
      setTotalPages(Math.ceil(res.data.total / limit));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(page);
  }, [page]);

  // Filter transactions
  useEffect(() => {
    let filtered = transactions;

if (searchTerm) {
  filtered = filtered.filter(t => 
    (t.message && t.message.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (t.meta?.toUserEmail && t.meta.toUserEmail.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (t.meta?.fromUserEmail && t.meta.fromUserEmail.toLowerCase().includes(searchTerm.toLowerCase()))
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
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeIcon = (type) => {
    if (type.includes('sent') || type.includes('payment_sent')) return <ArrowUpRight className="w-5 h-5 text-red-500" />;
    return <ArrowDownLeft className="w-5 h-5 text-green-500" />;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const getTypeLabel = (type) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getTotalAmount = () => {
    return filteredTransactions.reduce((sum, t) => {
      if (t.type.includes('received') || t.type === 'payment_received') return sum + t.amount;
      return sum - t.amount;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
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
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-4 py-2 border rounded-lg">
            <option value="all">All Types</option>
            <option value="request_sent">Request Sent</option>
            <option value="request_received">Request Received</option>
            <option value="payment_sent">Payment Sent</option>
            <option value="payment_received">Payment Received</option>
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2 border rounded-lg">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="px-4 py-2 border rounded-lg">
            <option value="all">All Categories</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
            <option value="income">Income</option>
          </select>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading...</div>
          ) : filteredTransactions.length === 0 ? (
            <div className="p-12 text-center text-gray-500">No transactions found</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <div key={transaction._id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between">
                  <div className="flex items-center space-x-4">
                    {getTypeIcon(transaction.type)}
                    <div>
                      <h3 className="text-lg font-semibold">{getTypeLabel(transaction.type)}</h3>
                      <p className="text-gray-600">{transaction.message}</p>
                      <span className="text-sm text-gray-500">{formatDate(transaction.createdAt)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${transaction.type.includes('received') ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type.includes('received') ? '+' : '-'}{transaction.amount} {transaction.currency}
                    </div>
                    {getStatusIcon(transaction.status)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button 
            disabled={page === 1} 
            onClick={() => setPage(page - 1)} 
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setPage(idx + 1)}
              className={`px-4 py-2 rounded ${page === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {idx + 1}
            </button>
          ))}
          <button 
            disabled={page === totalPages} 
            onClick={() => setPage(page + 1)} 
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
