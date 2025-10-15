'use client';

import React, { useState } from 'react';
import { TrendingUp, Calendar, Users, Clock, CheckCircle, AlertCircle, Loader, Send } from 'lucide-react';

export default function InternationalRemittance() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCurrency, setSelectedCurrency] = useState('PHP');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        recipient: '',
        country: '',
        amount: '',
        currency: 'PHP',
        purpose: '',
        method: 'bank'
    });

    const stats = [
        {
            icon: TrendingUp,
            value: '$12,450',
            label: 'Total Sent',
            change: '+8.2%',
            isPositive: true,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            icon: Calendar,
            value: '$2,340',
            label: 'This Month',
            change: '+12.5%',
            isPositive: true,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            icon: Users,
            value: '8',
            label: 'Active Recipients',
            change: '+2',
            isPositive: true,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            icon: Clock,
            value: '2.5 hrs',
            label: 'Avg. Transfer Time',
            change: '-15 min',
            isPositive: true,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        }
    ];

    const transfers = [
        {
            id: 1,
            name: 'Maria Santos',
            initials: 'MS',
            country: 'Philippines',
            purpose: 'Family Support',
            amount: '-$500',
            localAmount: '28,125 PHP',
            status: 'completed',
            date: '2024-01-15',
            color: 'bg-purple-500'
        },
        {
            id: 2,
            name: 'Raj Patel',
            initials: 'RP',
            country: 'India',
            purpose: 'Education',
            amount: '-$300',
            localAmount: '24,936 INR',
            status: 'processing',
            date: '2024-01-14',
            color: 'bg-blue-500'
        },
        {
            id: 3,
            name: 'Carlos Rodriguez',
            initials: 'CR',
            country: 'Mexico',
            purpose: 'Medical Expenses',
            amount: '-$750',
            localAmount: '13,387 MXN',
            status: 'completed',
            date: '2024-01-13',
            color: 'bg-indigo-500'
        },
        {
            id: 4,
            name: 'Ahmed Hassan',
            initials: 'AH',
            country: 'Bangladesh',
            purpose: 'Business Investment',
            amount: '-$200',
            localAmount: '22,090 BDT',
            status: 'failed',
            date: '2024-01-12',
            color: 'bg-orange-500'
        }
    ];

    const exchangeRates = [
        { code: 'PHP', name: 'Philippines', rate: '56.25 PHP', change: '+0.15%', isPositive: true },
        { code: 'INR', name: 'India', rate: '83.12 INR', change: '-0.08%', isPositive: false },
        { code: 'MXN', name: 'Mexico', rate: '17.85 MXN', change: '+0.22%', isPositive: true },
        { code: 'BDT', name: 'Bangladesh', rate: '110.45 BDT', change: '+0.05%', isPositive: true },
        { code: 'PKR', name: 'Pakistan', rate: '287.5 PKR', change: '-0.12%', isPositive: false },
        { code: 'VND', name: 'Vietnam', rate: '24,150 VND', change: '+0.18%', isPositive: true }
    ];

    const filteredTransfers = transfers.filter(transfer => {
        if (activeTab === 'all') return true;
        return transfer.status === activeTab;
    });

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-4 h-4" />;
            case 'processing':
                return <Loader className="w-4 h-4" />;
            case 'failed':
                return <AlertCircle className="w-4 h-4" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-700';
            case 'processing':
                return 'bg-yellow-100 text-yellow-700';
            case 'failed':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const calculateConvertedAmount = () => {
        const rate = exchangeRates.find(r => r.code === formData.currency);
        if (!rate || !formData.amount) return '0.00';
        const rateValue = parseFloat(rate.rate.split(' ')[0].replace(',', ''));
        return (parseFloat(formData.amount) * rateValue).toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending money:', formData);
        alert(`Successfully initiated transfer of ${formData.amount} to ${formData.recipient} in ${formData.country}`);
        setIsModalOpen(false);
        setFormData({
            recipient: '',
            country: '',
            amount: '',
            currency: 'PHP',
            purpose: '',
            method: 'bank'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">International Remittance</h1>
                        <p className="text-gray-600 mt-1">Send money to your loved ones worldwide</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors" onClick={() => setIsModalOpen(true)}>
                        <Send className="w-5 h-5" />
                        Send Money
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`${stat.bgColor} p-3 rounded-lg`}>
                                        <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                                    </div>
                                    <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Transfers */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-900">Recent Transfers</h2>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    View All
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-200 px-6">
                                <div className="flex gap-6">
                                    {['all', 'completed', 'processing', 'failed'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`py-3 text-sm font-medium transition-colors relative ${activeTab === tab
                                                    ? 'text-blue-600'
                                                    : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                            {activeTab === tab && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Transfer List */}
                            <div className="divide-y divide-gray-200">
                                {filteredTransfers.map((transfer) => (
                                    <div key={transfer.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 flex-1">
                                                <div className={`${transfer.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold`}>
                                                    {transfer.initials}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-gray-900">{transfer.name}</h3>
                                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(transfer.status)}`}>
                                                            {getStatusIcon(transfer.status)}
                                                            {transfer.status.charAt(0).toUpperCase() + transfer.status.slice(1)}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {transfer.country} • {transfer.purpose}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">{transfer.date}</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-gray-900">{transfer.amount}</div>
                                                <div className="text-sm text-gray-600">{transfer.localAmount}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Live Exchange Rates */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-900">Live Exchange Rates</h2>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-gray-600">Live rates</span>
                                </div>
                            </div>

                            <div className="px-6 py-4 text-xs text-gray-600">
                                Updated every 30 seconds
                            </div>

                            <div className="divide-y divide-gray-200">
                                {exchangeRates.map((rate) => (
                                    <div key={rate.code} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <span className="font-bold text-blue-600 text-sm">{rate.code}</span>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{rate.code}</div>
                                                    <div className="text-xs text-gray-600">{rate.name}</div>
                                                </div>
                                            </div>
                                            <span className={`text-sm font-medium ${rate.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                                {rate.change}
                                            </span>
                                        </div>
                                        <div className="text-lg font-bold text-gray-900 mb-1">{rate.rate}</div>
                                        <div className="text-xs text-gray-600">per 1 USD</div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Calculator */}
                            <div className="px-6 py-4 border-t border-gray-200 bg-blue-50">
                                <div className="mb-3">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Quick Calculator</div>
                                    <div className="text-xs text-blue-600">1 USD = 56.25 PHP</div>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition-colors">
                                    Send to PHP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Send Money Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                                <h2 className="text-2xl font-bold text-gray-900">Send Money</h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                                >
                                    ×
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6">
                                <div className="space-y-5">
                                    {/* Recipient Info */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Recipient Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="recipient"
                                            value={formData.recipient}
                                            onChange={handleInputChange}
                                            placeholder="Enter recipient name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Country *
                                        </label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        >
                                            <option value="">Select country</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="India">India</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Vietnam">Vietnam</option>
                                        </select>
                                    </div>

                                    {/* Amount Section */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Amount (USD) *
                                            </label>
                                            <input
                                                type="number"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                placeholder="0.00"
                                                min="1"
                                                step="0.01"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Currency *
                                            </label>
                                            <select
                                                name="currency"
                                                value={formData.currency}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            >
                                                <option value="PHP">PHP - Philippines Peso</option>
                                                <option value="INR">INR - Indian Rupee</option>
                                                <option value="MXN">MXN - Mexican Peso</option>
                                                <option value="BDT">BDT - Bangladeshi Taka</option>
                                                <option value="PKR">PKR - Pakistani Rupee</option>
                                                <option value="VND">VND - Vietnamese Dong</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Conversion Display */}
                                    {formData.amount && (
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="text-sm text-gray-600">Recipient will receive</div>
                                                    <div className="text-2xl font-bold text-blue-600">
                                                        {calculateConvertedAmount()} {formData.currency}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm text-gray-600">Exchange rate</div>
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        1 USD = {exchangeRates.find(r => r.code === formData.currency)?.rate.split(' ')[0]} {formData.currency}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Purpose */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Purpose of Transfer *
                                        </label>
                                        <select
                                            name="purpose"
                                            value={formData.purpose}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        >
                                            <option value="">Select purpose</option>
                                            <option value="Family Support">Family Support</option>
                                            <option value="Education">Education</option>
                                            <option value="Medical Expenses">Medical Expenses</option>
                                            <option value="Business Investment">Business Investment</option>
                                            <option value="Gift">Gift</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Transfer Method */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            Transfer Method *
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, method: 'bank' }))}
                                                className={`p-4 border-2 rounded-lg transition-all ${formData.method === 'bank'
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                            >
                                                <div className="font-semibold text-gray-900">Bank Transfer</div>
                                                <div className="text-xs text-gray-600 mt-1">2-3 business days</div>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, method: 'instant' }))}
                                                className={`p-4 border-2 rounded-lg transition-all ${formData.method === 'instant'
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                            >
                                                <div className="font-semibold text-gray-900">Instant Transfer</div>
                                                <div className="text-xs text-gray-600 mt-1">Within minutes</div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Fee Information */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-600">Transfer Fee</span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                ${formData.method === 'instant' ? '4.99' : '2.99'}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                                            <span className="text-sm font-semibold text-gray-900">Total Amount</span>
                                            <span className="text-lg font-bold text-gray-900">
                                                ${formData.amount ? (parseFloat(formData.amount) + (formData.method === 'instant' ? 4.99 : 2.99)).toFixed(2) : '0.00'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Money
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}