// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { CheckCircle, Loader, AlertCircle, Send } from 'lucide-react';
// // import useUser from '@/hooks/useUser';
// // import Swal from 'sweetalert2';

// // export default function InternationalRemittance() {
// //     const user = useUser();
// //     const [isModalOpen, setIsModalOpen] = useState(false);
// //     const [loading, setLoading] = useState(false);
// //     const [formData, setFormData] = useState({
// //         recipient: '',
// //         amount: '',
// //     });

// //     const [history, setHistory] = useState({ sent: [], received: [] });
// //     const [loadingHistory, setLoadingHistory] = useState(true);
// //     const [activeTab, setActiveTab] = useState('all');

// //     // ✅ Input handler
// //     const handleInputChange = e =>
// //         setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

// //     // ✅ Conversion
// //     const calculateConvertedAmount = () => {
// //         if (!formData.amount) return '0.00';
// //         if (user?.currency === 'USD') return (parseFloat(formData.amount) * 110.45).toFixed(2);
// //         if (user?.currency === 'BDT') return (parseFloat(formData.amount) * 0.009).toFixed(2);
// //         return '0.00';
// //     };

// //     // ✅ Send remittance
// //     const handleSubmit = async e => {
// //         e.preventDefault();
// //         setLoading(true);
// //         try {
// //             const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/send`, {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({
// //                     senderEmail: user?.email,
// //                     receiverEmail: formData.recipient,
// //                     amount: parseFloat(formData.amount),
// //                 }),
// //             });

// //             const data = await res.json();
// //             if (data.success) {
// //                 Swal.fire("Success", data.message + `\nReceiver gets: ${data.data.amountReceived} ${data.data.toCurrency}`, "success");
// //                 setIsModalOpen(false);
// //                 fetchHistory(); // Refresh history
// //             } else {
// //                 Swal.fire("Error", data.message, "error");
// //             }
// //         } catch (error) {
// //             console.error(error);
// //             Swal.fire("Error", "Failed to send money. Please try again.", "error");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     // ✅ Fetch user remittance history
// //     const fetchHistory = async () => {
// //         if (!user?.email) return;
// //         setLoadingHistory(true);
// //         try {
// //             const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/history?email=${user?.email}`);
// //             const data = await res.json();
// //             if (data.success) setHistory(data.data);
// //         } catch (error) {
// //             console.error(error);
// //         } finally {
// //             setLoadingHistory(false);
// //         }
// //     };

// //     useEffect(() => { fetchHistory(); }, [user]);

// //     const allTransfers = [...history.sent, ...history.received].sort(
// //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
// //     );

// //     const filteredTransfers = allTransfers.filter(t =>
// //         activeTab === 'all' ? true : t.status.toLowerCase() === activeTab
// //     );

// //     const getStatusColor = status => {
// //         if (status === 'Completed') return 'bg-green-100 text-green-700';
// //         if (status === 'Processing') return 'bg-yellow-100 text-yellow-700';
// //         if (status === 'Failed') return 'bg-red-100 text-red-700';
// //         return 'bg-gray-100 text-gray-700';
// //     };

// //     const getStatusIcon = status => {
// //         if (status === 'Completed') return <CheckCircle className="w-4 h-4" />;
// //         if (status === 'Processing') return <Loader className="w-4 h-4" />;
// //         if (status === 'Failed') return <AlertCircle className="w-4 h-4" />;
// //         return null;
// //     };

// //     return (
// //         <div className="min-h-screen bg-gray-50 p-6">
// //             <div className="flex justify-between items-center mb-6">
// //                 <h1 className="text-3xl font-bold">International Remittance</h1>
// //                 <button
// //                     onClick={() => setIsModalOpen(true)}
// //                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
// //                 >
// //                     <Send className="w-5 h-5" /> Send Money
// //                 </button>
// //             </div>

// //             {/* History Tabs */}
// //             <div className="mb-4 flex gap-4">
// //                 {['all', 'Completed', 'Processing', 'Failed'].map(tab => (
// //                     <button
// //                         key={tab}
// //                         onClick={() => setActiveTab(tab.toLowerCase())}
// //                         className={`px-4 py-2 rounded-lg font-medium transition-colors ${
// //                             activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
// //                         }`}
// //                     >
// //                         {tab}
// //                     </button>
// //                 ))}
// //             </div>

// //             {/* History List */}
// //             {loadingHistory ? (
// //                 <div className="text-gray-500">Loading...</div>
// //             ) : filteredTransfers.length === 0 ? (
// //                 <div className="text-gray-500">No transfers found.</div>
// //             ) : (
// //                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
// //                     {filteredTransfers.map(t => (
// //                         <div key={t._id} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
// //                             <div>
// //                                 <h3 className="font-semibold">{t.senderEmail === user.email ? `To: ${t.receiverEmail}` : `From: ${t.senderEmail}`}</h3>
// //                                 <p className="text-sm text-gray-600">
// //                                     {t.amountSent} {t.fromCurrency} → {t.amountReceived} {t.toCurrency}
// //                                 </p>
// //                                 <p className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleString()}</p>
// //                             </div>
// //                             <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(t.status)}`}>
// //                                 {getStatusIcon(t.status)}
// //                                 {t.status}
// //                             </span>
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}

// //             {/* Send Money Modal */}
// //             {isModalOpen && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //                     <div className="bg-white rounded-2xl max-w-md w-full p-6">
// //                         <h2 className="text-2xl font-bold mb-4">Send Money</h2>
// //                         <form onSubmit={handleSubmit} className="space-y-4">
// //                             <div>
// //                                 <label className="block mb-1 font-medium">Recipient Email *</label>
// //                                 <input type="email" name="recipient" value={formData.recipient} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-lg" />
// //                             </div>

// //                             <div>
// //                                 <label className="block mb-1 font-medium">Amount ({user?.currency}) *</label>
// //                                 <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-lg" />
// //                             </div>

// //                             <div className="bg-blue-50 p-3 rounded-lg">
// //                                 <p className="text-gray-600">Receiver will get:</p>
// //                                 <p className="text-lg font-bold">{calculateConvertedAmount()} {user?.currency === 'USD' ? 'BDT' : 'USD'}</p>
// //                             </div>

// //                             <div className="flex gap-3">
// //                                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-2 border rounded-lg">Cancel</button>
// //                                 <button type="submit" disabled={loading} className="flex-1 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2">
// //                                     {loading ? 'Sending...' : 'Send Money'}
// //                                     {loading && <Loader className="w-4 h-4 animate-spin" />}
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { CheckCircle, Loader, AlertCircle, Send } from 'lucide-react';
// import useUser from '@/hooks/useUser';
// import Swal from 'sweetalert2';

// export default function InternationalRemittance() {
//   const user = useUser();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     recipient: '',
//     amount: '',
//   });

//   const [history, setHistory] = useState({ sent: [], received: [] });
//   const [loadingHistory, setLoadingHistory] = useState(true);
//   const [activeTab, setActiveTab] = useState('all');

//   // ✅ Input handler
//   const handleInputChange = e =>
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   // ✅ Conversion
//   const calculateConvertedAmount = () => {
//     if (!formData.amount) return '0.00';
//     if (user?.currency === 'USD') return (parseFloat(formData.amount) * 110.45).toFixed(2);
//     if (user?.currency === 'BDT') return (parseFloat(formData.amount) * 0.009).toFixed(2);
//     return '0.00';
//   };

//   // ✅ Send remittance
//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/send`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           senderEmail: user?.email,
//           receiverEmail: formData.recipient,
//           amount: parseFloat(formData.amount),
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         Swal.fire("Success", data.message + `\nReceiver gets: ${data.data.amountReceived} ${data.data.toCurrency}`, "success");
//         setFormData({ recipient: '', amount: '' });
//         fetchHistory();
//       } else {
//         Swal.fire("Error", data.message, "error");
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire("Error", "Failed to send money. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Fetch history
//   const fetchHistory = async () => {
//     if (!user?.email) return;
//     setLoadingHistory(true);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/history?email=${user?.email}`);
//       const data = await res.json();
//       if (data.success) setHistory(data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoadingHistory(false);
//     }
//   };

//   useEffect(() => { fetchHistory(); }, [user]);

//   const allTransfers = [...history.sent, ...history.received].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   const filteredTransfers = allTransfers.filter(t =>
//     activeTab === 'all' ? true : t.status.toLowerCase() === activeTab
//   );

//   const getStatusColor = status => {
//     if (status === 'Completed') return 'bg-green-100 text-green-700';
//     if (status === 'Processing') return 'bg-yellow-100 text-yellow-700';
//     if (status === 'Failed') return 'bg-red-100 text-red-700';
//     return 'bg-gray-100 text-gray-700';
//   };

//   const getStatusIcon = status => {
//     if (status === 'Completed') return <CheckCircle className="w-4 h-4" />;
//     if (status === 'Processing') return <Loader className="w-4 h-4 animate-spin" />;
//     if (status === 'Failed') return <AlertCircle className="w-4 h-4" />;
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-6">International Remittance</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {/* LEFT SIDE — Send Money Form */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//             <Send className="w-5 h-5 text-blue-600" /> Send Money
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block mb-1 font-medium">Recipient Email *</label>
//               <input
//                 type="email"
//                 name="recipient"
//                 value={formData.recipient}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Amount ({user?.currency}) *</label>
//               <input
//                 type="number"
//                 name="amount"
//                 value={formData.amount}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             <div className="bg-blue-50 p-3 rounded-lg">
//               <p className="text-gray-600">Receiver will get:</p>
//               <p className="text-lg font-bold">
//                 {calculateConvertedAmount()} {user?.currency === 'USD' ? 'BDT' : 'USD'}
//               </p>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   Sending...
//                   <Loader className="w-4 h-4 animate-spin" />
//                 </>
//               ) : (
//                 <>
//                   Send Money
//                   <Send className="w-4 h-4" />
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* RIGHT SIDE — Transaction History */}
//         <div>
//           <div className="mb-4 flex gap-3">
//             {['all', 'Completed', 'Processing', 'Failed'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab.toLowerCase())}
//                 className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                   activeTab === tab.toLowerCase()
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700 border border-gray-300'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {loadingHistory ? (
//             <div className="text-gray-500">Loading...</div>
//           ) : filteredTransfers.length === 0 ? (
//             <div className="text-gray-500">No transfers found.</div>
//           ) : (
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-200">
//               {filteredTransfers.map(t => (
//                 <div
//                   key={t._id}
//                   className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
//                 >
//                   <div>
//                     <h3 className="font-semibold">
//                       {t.senderEmail === user.email
//                         ? `To: ${t.receiverEmail}`
//                         : `From: ${t.senderEmail}`}
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       {t.amountSent} {t.fromCurrency} → {t.amountReceived} {t.toCurrency}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {new Date(t.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(
//                       t.status
//                     )}`}
//                   >
//                     {getStatusIcon(t.status)}
//                     {t.status}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { CheckCircle, Loader, AlertCircle, Send, ArrowRight, TrendingUp } from 'lucide-react';

// // Mock user hook for demo
// const useUser = () => ({
//   email: 'user@example.com',
//   currency: 'USD'
// });

// // Mock Swal for demo
// const Swal = {
//   fire: (title, message, type) => alert(`${title}: ${message}`)
// };

// export default function InternationalRemittance() {
//   const user = useUser();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     recipient: '',
//     amount: '',
//   });

//   const [history, setHistory] = useState({ sent: [], received: [] });
//   const [loadingHistory, setLoadingHistory] = useState(false);
//   const [activeTab, setActiveTab] = useState('all');

//   // ✅ Input handler
//   const handleInputChange = e =>
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   // ✅ Conversion
//   const calculateConvertedAmount = () => {
//     if (!formData.amount) return '0.00';
//     if (user?.currency === 'USD') return (parseFloat(formData.amount) * 110.45).toFixed(2);
//     if (user?.currency === 'BDT') return (parseFloat(formData.amount) * 0.009).toFixed(2);
//     return '0.00';
//   };

//   // ✅ Send remittance
//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/send`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           senderEmail: user?.email,
//           receiverEmail: formData.recipient,
//           amount: parseFloat(formData.amount),
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         Swal.fire("Success", data.message + `\nReceiver gets: ${data.data.amountReceived} ${data.data.toCurrency}`, "success");
//         setFormData({ recipient: '', amount: '' });
//         fetchHistory();
//       } else {
//         Swal.fire("Error", data.message, "error");
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire("Error", "Failed to send money. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Fetch history
//   const fetchHistory = async () => {
//     if (!user?.email) return;
//     setLoadingHistory(true);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remittance/history?email=${user?.email}`);
//       const data = await res.json();
//       if (data.success) setHistory(data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoadingHistory(false);
//     }
//   };

//   useEffect(() => { fetchHistory(); }, [user]);

//   // Demo data
//   useEffect(() => {
//     setHistory({
//       sent: [
//         {
//           _id: '1',
//           senderEmail: 'user@example.com',
//           receiverEmail: 'recipient@example.com',
//           amountSent: 100,
//           amountReceived: 11045,
//           fromCurrency: 'USD',
//           toCurrency: 'BDT',
//           status: 'Completed',
//           createdAt: new Date().toISOString()
//         },
//         {
//           _id: '2',
//           senderEmail: 'user@example.com',
//           receiverEmail: 'another@example.com',
//           amountSent: 50,
//           amountReceived: 5522.5,
//           fromCurrency: 'USD',
//           toCurrency: 'BDT',
//           status: 'Processing',
//           createdAt: new Date(Date.now() - 86400000).toISOString()
//         }
//       ],
//       received: [
//         {
//           _id: '3',
//           senderEmail: 'sender@example.com',
//           receiverEmail: 'user@example.com',
//           amountSent: 5000,
//           amountReceived: 45,
//           fromCurrency: 'BDT',
//           toCurrency: 'USD',
//           status: 'Completed',
//           createdAt: new Date(Date.now() - 172800000).toISOString()
//         }
//       ]
//     });
//     setLoadingHistory(false);
//   }, []);

//   const allTransfers = [...history.sent, ...history.received].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   const filteredTransfers = allTransfers.filter(t =>
//     activeTab === 'all' ? true : t.status.toLowerCase() === activeTab
//   );

//   const getStatusColor = status => {
//     if (status === 'Completed') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//     if (status === 'Processing') return 'bg-amber-50 text-amber-700 border-amber-200';
//     if (status === 'Failed') return 'bg-rose-50 text-rose-700 border-rose-200';
//     return 'bg-gray-50 text-gray-700 border-gray-200';
//   };

//   const getStatusIcon = status => {
//     if (status === 'Completed') return <CheckCircle className="w-4 h-4" />;
//     if (status === 'Processing') return <Loader className="w-4 h-4 animate-spin" />;
//     if (status === 'Failed') return <AlertCircle className="w-4 h-4" />;
//     return null;
//   };

//   return (
//     <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ background: 'linear-gradient(135deg, #f8f6fc 0%, #faf7f0 100%)' }}>
//       <style>{`
//         .primary-bg { background-color: #5f4a94; }
//         .secondary-bg { background-color: #e0c9a4; }
//         .primary-text { color: #5f4a94; }
//         .secondary-text { color: #e0c9a4; }
//         .primary-border { border-color: #5f4a94; }
//         .secondary-border { border-color: #e0c9a4; }
//         .gradient-primary { background: linear-gradient(135deg, #5f4a94 0%, #7a5fb8 100%); }
//         .gradient-hover:hover { background: linear-gradient(135deg, #4d3b78 0%, #5f4a94 100%); }
//         .primary-shadow { box-shadow: 0 10px 40px rgba(95, 74, 148, 0.15); }
//       `}</style>

//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="p-2 rounded-xl gradient-primary">
//               <TrendingUp className="w-6 h-6 text-white" />
//             </div>
//             <h1 className="text-3xl sm:text-4xl font-bold primary-text">
//               International Remittance
//             </h1>
//           </div>
//           <p className="text-gray-600 ml-14">Send money globally with competitive rates</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
//           {/* LEFT SIDE — Send Money Form */}
//           <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 relative overflow-hidden primary-shadow">
//             <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 -z-10" style={{ background: 'radial-gradient(circle, #5f4a94 0%, transparent 70%)' }}></div>
            
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 rounded-xl gradient-primary">
//                 <Send className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">Send Money</h2>
//             </div>

//             <div className="space-y-5">
//               <div>
//                 <label className="block mb-2 font-semibold text-gray-700 text-sm">Recipient Email</label>
//                 <input
//                   type="email"
//                   name="recipient"
//                   value={formData.recipient}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="recipient@example.com"
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-colors bg-gray-50"
//                   style={{ borderColor: formData.recipient ? '#5f4a94' : '' }}
//                   onFocus={(e) => e.target.style.borderColor = '#5f4a94'}
//                   onBlur={(e) => !formData.recipient && (e.target.style.borderColor = '')}
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 font-semibold text-gray-700 text-sm">
//                   Amount ({user?.currency})
//                 </label>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={formData.amount}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="0.00"
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-colors bg-gray-50 text-lg font-semibold"
//                   style={{ borderColor: formData.amount ? '#5f4a94' : '' }}
//                   onFocus={(e) => e.target.style.borderColor = '#5f4a94'}
//                   onBlur={(e) => !formData.amount && (e.target.style.borderColor = '')}
//                 />
//               </div>

//               {formData.amount && (
//                 <div className="p-5 rounded-2xl border-2 secondary-border" style={{ background: 'linear-gradient(135deg, #faf8f3 0%, #f5f0e8 100%)' }}>
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-gray-600 font-medium">You send</span>
//                     <span className="text-lg font-bold text-gray-800">
//                       {formData.amount} {user?.currency}
//                     </span>
//                   </div>
                  
//                   <div className="flex justify-center my-2">
//                     <ArrowRight className="w-5 h-5 primary-text" />
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600 font-medium">Recipient gets</span>
//                     <span className="text-2xl font-bold primary-text">
//                       {calculateConvertedAmount()} {user?.currency === 'USD' ? 'BDT' : 'USD'}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="w-full py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] gradient-primary gradient-hover primary-shadow"
//               >
//                 {loading ? (
//                   <>
//                     <Loader className="w-5 h-5 animate-spin" />
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Send Money
//                   </>
//                 )}
//               </button>
//             </div>

//             <div className="mt-6 p-4 rounded-xl border secondary-border" style={{ backgroundColor: '#faf8f3' }}>
//               <p className="text-xs text-gray-600 text-center">
//                 🔒 Your transaction is encrypted and secure
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE — Transaction History */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <h2 className="text-xl font-bold text-gray-800">Transaction History</h2>
//             </div>

//             <div className="mb-4 flex flex-wrap gap-2">
//               {['all', 'completed', 'processing', 'failed'].map(tab => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab.toLowerCase())}
//                   className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
//                     activeTab === tab.toLowerCase()
//                       ? 'text-white primary-shadow scale-105'
//                       : 'bg-white text-gray-700 border-2 border-gray-200 hover:shadow-md'
//                   }`}
//                   style={activeTab === tab.toLowerCase() ? { backgroundColor: '#5f4a94' } : {}}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {loadingHistory ? (
//               <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center primary-shadow">
//                 <Loader className="w-8 h-8 animate-spin mx-auto mb-3 primary-text" />
//                 <p className="text-gray-500">Loading transactions...</p>
//               </div>
//             ) : filteredTransfers.length === 0 ? (
//               <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center primary-shadow">
//                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-gray-400" />
//                 </div>
//                 <p className="text-gray-500 font-medium">No transfers found</p>
//                 <p className="text-gray-400 text-sm mt-1">Start sending money to see your history</p>
//               </div>
//             ) : (
//               <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden primary-shadow">
//                 {filteredTransfers.map((t, index) => (
//                   <div
//                     key={t._id}
//                     className={`px-6 py-5 flex justify-between items-center transition-all duration-300 cursor-pointer group ${
//                       index !== filteredTransfers.length - 1 ? 'border-b border-gray-100' : ''
//                     }`}
//                     style={{ ':hover': { background: 'linear-gradient(90deg, #faf8f3 0%, #f5f0e8 100%)' } }}
//                     onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #faf8f3 0%, #f5f0e8 100%)'}
//                     onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
//                   >
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <h3 className="font-semibold text-gray-800 group-hover:primary-text transition-colors">
//                           {t.senderEmail === user.email
//                             ? `To: ${t.receiverEmail}`
//                             : `From: ${t.senderEmail}`}
//                         </h3>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                         <span className="font-semibold">{t.amountSent} {t.fromCurrency}</span>
//                         <ArrowRight className="w-3 h-3" />
//                         <span className="font-semibold">{t.amountReceived} {t.toCurrency}</span>
//                       </div>
//                       <p className="text-xs text-gray-400">
//                         {new Date(t.createdAt).toLocaleString()}
//                       </p>
//                     </div>
//                     <span
//                       className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${getStatusColor(
//                         t.status
//                       )}`}
//                     >
//                       {getStatusIcon(t.status)}
//                       {t.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Loader, AlertCircle, Send, ArrowRight, TrendingUp } from 'lucide-react';
import useUser from '@/hooks/useUser';
import Swal from 'sweetalert2';

export default function InternationalRemittance() {
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
  });
  const [history, setHistory] = useState({ sent: [], received: [] });
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  // ✅ Input handler
  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // ✅ Currency conversion (USD ⇄ BDT)
  const calculateConvertedAmount = () => {
    if (!formData.amount) return '0.00';
    const amount = parseFloat(formData.amount);
    if (user?.currency === 'USD') return (amount * 110.45).toFixed(2);
    if (user?.currency === 'BDT') return (amount * 0.009).toFixed(2);
    return '0.00';
  };

  // ✅ Fetch remittance history
  const fetchHistory = async () => {
    if (!user?.email) return;
    setLoadingHistory(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/history?email=${encodeURIComponent(
          user.email
        )}`
      );
      const data = await res.json();
      if (data.success) {
        setHistory(data.data);
      } else {
        console.error('Failed to fetch history:', data.message);
      }
    } catch (error) {
      console.error('History fetch error:', error);
    } finally {
      setLoadingHistory(false);
    }
  };

  // ✅ Send money request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.recipient || !formData.amount) {
      Swal.fire('Error', 'Please fill out all fields.', 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/send`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            senderEmail: user?.email,
            receiverEmail: formData.recipient,
            amount: parseFloat(formData.amount),
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        Swal.fire(
          'Success',
          `${data.message}\nReceiver gets: ${data.data.amountReceived} ${data.data.toCurrency}`,
          'success'
        );
        setFormData({ recipient: '', amount: '' });
        fetchHistory(); // Refresh after successful send
      } else {
        Swal.fire('Error', data.message, 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to send money. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Load history on mount
  useEffect(() => {
    fetchHistory();
  }, [user]);

  // ✅ Filter and sort transactions
  const allTransfers = [...history.sent, ...history.received].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const filteredTransfers = allTransfers.filter((t) =>
    activeTab === 'all' ? true : t.status.toLowerCase() === activeTab
  );

  // ✅ Styling helpers
  const getStatusColor = (status) => {
    if (status === 'Completed')
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (status === 'Processing')
      return 'bg-amber-50 text-amber-700 border-amber-200';
    if (status === 'Failed') return 'bg-rose-50 text-rose-700 border-rose-200';
    return 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getStatusIcon = (status) => {
    if (status === 'Completed') return <CheckCircle className="w-4 h-4" />;
    if (status === 'Processing')
      return <Loader className="w-4 h-4 animate-spin" />;
    if (status === 'Failed') return <AlertCircle className="w-4 h-4" />;
    return null;
  };

  // ✅ Component JSX
  return (
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8"
      style={{
        background: 'linear-gradient(135deg, #f8f6fc 0%, #faf7f0 100%)',
      }}
    >
      <style>{`
        .primary-bg { background-color: #5f4a94; }
        .primary-text { color: #5f4a94; }
        .primary-shadow { box-shadow: 0 10px 40px rgba(95, 74, 148, 0.15); }
        .gradient-primary { background: linear-gradient(135deg, #5f4a94 0%, #7a5fb8 100%); }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl gradient-primary">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold primary-text">
              International Remittance
            </h1>
          </div>
          <p className="text-gray-600 ml-14">
            Send money globally with competitive rates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT — Send Money */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 relative overflow-hidden primary-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 -z-10"
              style={{
                background:
                  'radial-gradient(circle, #5f4a94 0%, transparent 70%)',
              }}
            ></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl gradient-primary">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Send Money</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm">
                  Recipient Email
                </label>
                <input
                  type="email"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleInputChange}
                  required
                  placeholder="recipient@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-[#5f4a94]"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm">
                  Amount ({user?.currency})
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  placeholder="0.00"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-[#5f4a94] text-lg font-semibold"
                />
              </div>

              {formData.amount && (
                <div className="p-5 rounded-2xl border-2 border-[#e0c9a4] bg-[#faf8f3]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 font-medium">You send</span>
                    <span className="text-lg font-bold text-gray-800">
                      {formData.amount} {user?.currency}
                    </span>
                  </div>

                  <div className="flex justify-center my-2">
                    <ArrowRight className="w-5 h-5 primary-text" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">
                      Receiver gets
                    </span>
                    <span className="text-2xl font-bold primary-text">
                      {calculateConvertedAmount()}{' '}
                      {user?.currency === 'USD' ? 'BDT' : 'USD'}
                    </span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 gradient-primary hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Money
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 rounded-xl border border-[#e0c9a4] bg-[#faf8f3]">
              <p className="text-xs text-gray-600 text-center">
                🔒 Your transaction is encrypted and secure
              </p>
            </div>
          </div>

          {/* RIGHT — Transaction History */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Transaction History
              </h2>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {['all', 'completed', 'processing', 'failed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.toLowerCase()
                      ? 'text-white primary-shadow scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:shadow-md'
                  }`}
                  style={
                    activeTab === tab.toLowerCase()
                      ? { backgroundColor: '#5f4a94' }
                      : {}
                  }
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {loadingHistory ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center primary-shadow">
                <Loader className="w-8 h-8 animate-spin mx-auto mb-3 primary-text" />
                <p className="text-gray-500">Loading transactions...</p>
              </div>
            ) : filteredTransfers.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center primary-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No transfers found</p>
                <p className="text-gray-400 text-sm mt-1">
                  Start sending money to see your history
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden primary-shadow">
                {filteredTransfers.map((t, index) => (
                  <div
                    key={t._id}
                    className={`px-6 py-5 flex justify-between items-center ${
                      index !== filteredTransfers.length - 1
                        ? 'border-b border-gray-100'
                        : ''
                    } hover:bg-[#faf8f3] transition`}
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {t.senderEmail === user.email
                          ? `To: ${t.receiverEmail}`
                          : `From: ${t.senderEmail}`}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <span className="font-semibold">
                          {t.amountSent} {t.fromCurrency}
                        </span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="font-semibold">
                          {t.amountReceived} {t.toCurrency}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(t.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${getStatusColor(
                        t.status
                      )}`}
                    >
                      {getStatusIcon(t.status)}
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
