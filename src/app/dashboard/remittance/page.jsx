'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Loader, AlertCircle, Send } from 'lucide-react';
import useUser from '@/hooks/useUser';

export default function InternationalRemittance() {
    const user = useUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        recipient: '',
        amount: '',
    });

    const [history, setHistory] = useState({ sent: [], received: [] });
    const [loadingHistory, setLoadingHistory] = useState(true);
    const [activeTab, setActiveTab] = useState('all');

    // ✅ Input handler
    const handleInputChange = e =>
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    // ✅ Conversion
    const calculateConvertedAmount = () => {
        if (!formData.amount) return '0.00';
        if (user?.currency === 'USD') return (parseFloat(formData.amount) * 110.45).toFixed(2);
        if (user?.currency === 'BDT') return (parseFloat(formData.amount) * 0.009).toFixed(2);
        return '0.00';
    };

    // ✅ Send remittance
    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    senderEmail: user?.email,
                    receiverEmail: formData.recipient,
                    amount: parseFloat(formData.amount),
                }),
            });

            const data = await res.json();
            if (data.success) {
                alert(`✅ ${data.message}\nReceiver gets: ${data.data.amountReceived} ${data.data.toCurrency}`);
                setIsModalOpen(false);
                fetchHistory(); // Refresh history
            } else {
                alert(`❌ ${data.message}`);
            }
        } catch (error) {
            console.error(error);
            alert('Server error occurred!');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch user remittance history
    const fetchHistory = async () => {
        if (!user?.email) return;
        setLoadingHistory(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/remittance/history?email=${user?.email}`);
            const data = await res.json();
            if (data.success) setHistory(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingHistory(false);
        }
    };

    useEffect(() => { fetchHistory(); }, [user]);

    const allTransfers = [...history.sent, ...history.received].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const filteredTransfers = allTransfers.filter(t =>
        activeTab === 'all' ? true : t.status.toLowerCase() === activeTab
    );

    const getStatusColor = status => {
        if (status === 'Completed') return 'bg-green-100 text-green-700';
        if (status === 'Processing') return 'bg-yellow-100 text-yellow-700';
        if (status === 'Failed') return 'bg-red-100 text-red-700';
        return 'bg-gray-100 text-gray-700';
    };

    const getStatusIcon = status => {
        if (status === 'Completed') return <CheckCircle className="w-4 h-4" />;
        if (status === 'Processing') return <Loader className="w-4 h-4" />;
        if (status === 'Failed') return <AlertCircle className="w-4 h-4" />;
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">International Remittance</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                    <Send className="w-5 h-5" /> Send Money
                </button>
            </div>

            {/* History Tabs */}
            <div className="mb-4 flex gap-4">
                {['all', 'Completed', 'Processing', 'Failed'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* History List */}
            {loadingHistory ? (
                <div className="text-gray-500">Loading...</div>
            ) : filteredTransfers.length === 0 ? (
                <div className="text-gray-500">No transfers found.</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
                    {filteredTransfers.map(t => (
                        <div key={t._id} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <div>
                                <h3 className="font-semibold">{t.senderEmail === user.email ? `To: ${t.receiverEmail}` : `From: ${t.senderEmail}`}</h3>
                                <p className="text-sm text-gray-600">
                                    {t.amountSent} {t.fromCurrency} → {t.amountReceived} {t.toCurrency}
                                </p>
                                <p className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleString()}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(t.status)}`}>
                                {getStatusIcon(t.status)}
                                {t.status}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Send Money Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6">
                        <h2 className="text-2xl font-bold mb-4">Send Money</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium">Recipient Email *</label>
                                <input type="email" name="recipient" value={formData.recipient} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-lg" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Amount ({user?.currency}) *</label>
                                <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-lg" />
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-gray-600">Receiver will get:</p>
                                <p className="text-lg font-bold">{calculateConvertedAmount()} {user?.currency === 'USD' ? 'BDT' : 'USD'}</p>
                            </div>

                            <div className="flex gap-3">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-2 border rounded-lg">Cancel</button>
                                <button type="submit" disabled={loading} className="flex-1 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2">
                                    {loading ? 'Sending...' : 'Send Money'}
                                    {loading && <Loader className="w-4 h-4 animate-spin" />}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
