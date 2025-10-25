// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Search, TrendingDown, TrendingUp, Wallet, Download, FileSpreadsheet } from 'lucide-react';
// import useUser from '@/hooks/useUser';
// import useAxiosSecure from '@/hooks/useAxiosSecure';

// export default function TransactionHistory() {
//   const user = useUser();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All');
//   const [statusFilter, setStatusFilter] = useState('All');
//   const [timeFilter, setTimeFilter] = useState('All Time');
//   const axiosSecure = useAxiosSecure();
//   const [transactions, setTransactions] = useState([]);
//   console.log(transactions);
//   const [loading, setLoading] = useState(true);

// useEffect(() => {
//   if (!user?.accessToken) return; 

//   const fetchTransactions = async () => {
//     try {
//       setLoading(true);
//       const res = await axiosSecure.get("/api/transactions/my");
//       setTransactions(res.data.transactions || []);
//     } catch (error) {
//       console.error("Failed to fetch transactions:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchTransactions();
// }, [axiosSecure, user?.accessToken]);

//   if (loading) return <p className="text-center py-6">Loading...</p>;

//   const totalIncome = transactions
//     .filter(t => t.amount > 0)
//     .reduce((sum, t) => sum + t.amount, 0);

//   const totalExpenses = Math.abs(transactions
//     .filter(t => t.amount < 0)
//     .reduce((sum, t) => sum + t.amount, 0));

//   const netBalance = totalIncome - totalExpenses;

//   return (
//     <div className="min-h-screen bg-gray-50 rounded-2xl p-4 md:p-8 hover:shadow-2xl transition-all duration-500">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
//           <p className="text-gray-600">View and manage all your financial transactions</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-sm text-gray-600">Total Income</span>
//               <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                 <TrendingDown className="text-green-600" size={20} />
//               </div>
//             </div>
//             <div className="text-2xl font-bold text-green-600">+${totalIncome.toFixed(2)}</div>
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-sm text-gray-600">Total Expenses</span>
//               <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                 <TrendingUp className="text-red-600" size={20} />
//               </div>
//             </div>
//             <div className="text-2xl font-bold text-red-600">-${totalExpenses.toFixed(2)}</div>
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-sm text-gray-600">Net Balance</span>
//               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <Wallet className="text-blue-600" size={20} />
//               </div>
//             </div>
//             <div className="text-2xl font-bold text-green-600">+${netBalance.toFixed(2)}</div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search transactions..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               />
//             </div>

//             {/* Category Filter */}
//             <select
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//               className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
//             >
//               <option>All</option>
//               <option>Transfer</option>
//               <option>Shopping</option>
//               <option>Income</option>
//               <option>Utilities</option>
//               <option>Entertainment</option>
//             </select>

//             {/* Status Filter */}
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
//             >
//               <option>All</option>
//               <option>Completed</option>
//               <option>Pending</option>
//               <option>Failed</option>
//             </select>

//             {/* Time Filter */}
//             <select
//               value={timeFilter}
//               onChange={(e) => setTimeFilter(e.target.value)}
//               className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
//             >
//               <option>All Time</option>
//               <option>Today</option>
//               <option>Last 7 Days</option>
//               <option>Last 30 Days</option>
//               <option>This Month</option>
//               <option>Last Month</option>
//             </select>
//           </div>
//         </div>

//         {/* Transactions List */}
//         <div className="bg-white rounded-xl shadow-sm">
//           <div className="p-5 border-b border-gray-100">
//             <h2 className="text-lg font-semibold text-gray-900">Transactions ({transactions.length})</h2>
//           </div>
          
//           <div className="divide-y divide-gray-100">
//             {transactions.map((transaction) => {
//               const Icon = transaction.icon;
//               return (
//                 <div 
//                   key={transaction._id} 
//                   className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4 flex-1">
//                       <div className="flex-1 min-w-0">
//                         <h3 className="font-semibold text-gray-900 mb-1">{transaction.title}</h3>
//                         <div className="flex items-center gap-3 text-sm text-gray-500">
//                           <span>{transaction.date}</span>
//                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
//                           <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
//                             {transaction.status}
//                           </span>
//                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
//                           <span className="text-xs">{transaction.transactionId}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-right ml-4 flex-shrink-0">
//                       <div className={`text-xl font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
//                         {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
//                       </div>
//                       <div className="text-sm text-gray-500 mt-1">{transaction.type}</div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Export Buttons */}
//           <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-center gap-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
//               <Download size={18} />
//               Export PDF
//             </button>
//             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
//               <FileSpreadsheet size={18} />
//               Export Excel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useEffect, useState } from 'react';
import { Search, TrendingDown, TrendingUp, Wallet, Download, FileSpreadsheet } from 'lucide-react';
import useUser from '@/hooks/useUser';
import useAxiosSecure from '@/hooks/useAxiosSecure';

export default function TransactionHistory() {
  const user = useUser();
  const axiosSecure = useAxiosSecure();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // page size
  const [total, setTotal] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All Time');

  // ✅ Fetch transactions with pagination
  useEffect(() => {
    if (!user?.accessToken) return;

    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/api/transactions/my?page=${page}&limit=${limit}`);
        setTransactions(res.data.transactions || []);
        setTotal(res.data.total || 0);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [axiosSecure, user?.accessToken, page, limit]);

  if (loading) return <p className="text-center py-6">Loading...</p>;

  const totalIncome = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = Math.abs(transactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0));

  const netBalance = totalIncome - totalExpenses;

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-gray-50 rounded-2xl p-4 md:p-8 hover:shadow-2xl transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
          <p className="text-gray-600">View and manage all your financial transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Total Income</span>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="text-green-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">+${totalIncome.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Total Expenses</span>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-red-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-red-600">-${totalExpenses.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Net Balance</span>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wallet className="text-blue-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">+${netBalance.toFixed(2)}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option>All</option>
              <option>Transfer</option>
              <option>Shopping</option>
              <option>Income</option>
              <option>Utilities</option>
              <option>Entertainment</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>

            {/* Time Filter */}
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option>All Time</option>
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Transactions ({total})</h2>
          </div>
          
          {/* <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <div 
                key={transaction._id} 
                className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{new Date(transaction.createdAt).toLocaleDateString()}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {transaction.status}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-xs">{transaction._id.slice(-6)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4 flex-shrink-0">
                    <div className={`text-xl font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}


<div className="divide-y divide-gray-100">
  {transactions.map((transaction) => (
    <div
      key={transaction._id}
      className="p-5 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left side: transaction info */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base mb-1">
            {transaction.type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h3>

          {/* Sender & Receiver Info */}
          <div className="text-sm text-gray-500 mb-1">
            <p>
              <span className="font-medium text-gray-700">From:</span>{" "}
              {transaction.senderId?.name || "N/A"}{" "}
              <span className="text-gray-400">({transaction.senderId?.email})</span>
            </p>
            <p>
              <span className="font-medium text-gray-700">To:</span>{" "}
              {transaction.receiverId?.name || "N/A"}{" "}
              <span className="text-gray-400">({transaction.receiverId?.email})</span>
            </p>
          </div>

          {/* Meta message if available */}
          {transaction.meta?.messageSender && (
            <p className="text-sm text-gray-600 italic">
              💬 {transaction.meta.messageSender}
            </p>
          )}

          {/* Date + Status */}
          <div className="flex items-center flex-wrap gap-2 mt-2 text-xs text-gray-500">
            <span>{new Date(transaction.createdAt).toLocaleDateString()}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span
              className={`px-2 py-0.5 rounded-full font-medium ${
                transaction.status === "completed"
                  ? "bg-green-100 text-green-700"
                  : transaction.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {transaction.status}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-400">ID: {transaction._id.slice(-6)}</span>
          </div>
        </div>

        {/* Right side: Amount */}
        <div className="text-right ml-4 flex-shrink-0">
          <div
            className={`text-xl font-bold ${
              transaction.amount > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {transaction.amount > 0 ? "+" : "-"}
            {transaction.currency || "BDT"} {Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Pagination */}
          <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-3">{page} / {totalPages}</span>
            <button
              onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Export Buttons */}
          <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium
            flex items-center gap-2 transition-colors shadow-sm">
              <Download size={18} />
              Export PDF
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
              <FileSpreadsheet size={18} />
              Export Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
