'use client';
import React, { useState } from 'react';
import { Download, Share2, Copy, CheckCircle, ArrowLeft } from 'lucide-react';

const ShareQRPage = () => {
    const [copied, setCopied] = useState(false);
    
    // User data for QR code
    const userData = {
        name: 'John Doe',
        email: 'user@example.com',
        userId: 'USER123456',
        accountNumber: '1234567890'
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`https://app.com/pay/${userData.userId}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        alert('QR Code downloaded successfully!');
    };

    const handleShare = () => {
        alert('QR Code shared successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
            <div className="max-w-2xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 text-gray-700 hover:text-blue-600 mb-6"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Dashboard
                </button>

                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">My QR Code</h1>
                    <p className="text-sm sm:text-base text-gray-600">Share this code to receive payments</p>
                </div>

                {/* QR Code Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-center">
                        <h2 className="text-lg sm:text-xl font-bold text-white">Scan to Pay</h2>
                    </div>

                    {/* QR Code Display */}
                    <div className="p-4 sm:p-8">
                        <div className="bg-white border-4 sm:border-8 border-gray-100 rounded-2xl p-4 sm:p-8 text-center">
                            {/* QR Code SVG */}
                            <div className="bg-white w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 sm:mb-6 relative">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    {/* QR Code Pattern */}
                                    <rect width="100" height="100" fill="white"/>
                                    
                                    {/* Corner squares */}
                                    <rect x="5" y="5" width="20" height="20" fill="none" stroke="black" strokeWidth="2"/>
                                    <rect x="8" y="8" width="14" height="14" fill="black"/>
                                    
                                    <rect x="75" y="5" width="20" height="20" fill="none" stroke="black" strokeWidth="2"/>
                                    <rect x="78" y="8" width="14" height="14" fill="black"/>
                                    
                                    <rect x="5" y="75" width="20" height="20" fill="none" stroke="black" strokeWidth="2"/>
                                    <rect x="8" y="78" width="14" height="14" fill="black"/>
                                    
                                    {/* Random QR pattern */}
                                    <rect x="10" y="30" width="4" height="4" fill="black"/>
                                    <rect x="15" y="30" width="4" height="4" fill="black"/>
                                    <rect x="20" y="30" width="4" height="4" fill="black"/>
                                    <rect x="30" y="30" width="4" height="4" fill="black"/>
                                    <rect x="35" y="30" width="4" height="4" fill="black"/>
                                    
                                    <rect x="10" y="35" width="4" height="4" fill="black"/>
                                    <rect x="20" y="35" width="4" height="4" fill="black"/>
                                    <rect x="25" y="35" width="4" height="4" fill="black"/>
                                    <rect x="35" y="35" width="4" height="4" fill="black"/>
                                    
                                    <rect x="10" y="40" width="4" height="4" fill="black"/>
                                    <rect x="15" y="40" width="4" height="4" fill="black"/>
                                    <rect x="25" y="40" width="4" height="4" fill="black"/>
                                    <rect x="30" y="40" width="4" height="4" fill="black"/>
                                    <rect x="35" y="40" width="4" height="4" fill="black"/>
                                    
                                    <rect x="40" y="10" width="4" height="4" fill="black"/>
                                    <rect x="45" y="10" width="4" height="4" fill="black"/>
                                    <rect x="50" y="10" width="4" height="4" fill="black"/>
                                    <rect x="55" y="10" width="4" height="4" fill="black"/>
                                    <rect x="60" y="10" width="4" height="4" fill="black"/>
                                    <rect x="65" y="10" width="4" height="4" fill="black"/>
                                    
                                    <rect x="40" y="15" width="4" height="4" fill="black"/>
                                    <rect x="50" y="15" width="4" height="4" fill="black"/>
                                    <rect x="60" y="15" width="4" height="4" fill="black"/>
                                    <rect x="65" y="15" width="4" height="4" fill="black"/>
                                    
                                    <rect x="40" y="20" width="4" height="4" fill="black"/>
                                    <rect x="45" y="20" width="4" height="4" fill="black"/>
                                    <rect x="55" y="20" width="4" height="4" fill="black"/>
                                    <rect x="65" y="20" width="4" height="4" fill="black"/>
                                    
                                    <rect x="45" y="35" width="4" height="4" fill="black"/>
                                    <rect x="50" y="35" width="4" height="4" fill="black"/>
                                    <rect x="55" y="35" width="4" height="4" fill="black"/>
                                    <rect x="60" y="35" width="4" height="4" fill="black"/>
                                    
                                    <rect x="45" y="40" width="4" height="4" fill="black"/>
                                    <rect x="50" y="40" width="4" height="4" fill="black"/>
                                    <rect x="60" y="40" width="4" height="4" fill="black"/>
                                    <rect x="65" y="40" width="4" height="4" fill="black"/>
                                    
                                    <rect x="10" y="50" width="4" height="4" fill="black"/>
                                    <rect x="15" y="50" width="4" height="4" fill="black"/>
                                    <rect x="20" y="50" width="4" height="4" fill="black"/>
                                    <rect x="30" y="50" width="4" height="4" fill="black"/>
                                    
                                    <rect x="10" y="55" width="4" height="4" fill="black"/>
                                    <rect x="20" y="55" width="4" height="4" fill="black"/>
                                    <rect x="25" y="55" width="4" height="4" fill="black"/>
                                    <rect x="30" y="55" width="4" height="4" fill="black"/>
                                    
                                    <rect x="10" y="60" width="4" height="4" fill="black"/>
                                    <rect x="15" y="60" width="4" height="4" fill="black"/>
                                    <rect x="25" y="60" width="4" height="4" fill="black"/>
                                    <rect x="35" y="60" width="4" height="4" fill="black"/>
                                    
                                    <rect x="45" y="50" width="4" height="4" fill="black"/>
                                    <rect x="50" y="50" width="4" height="4" fill="black"/>
                                    <rect x="60" y="50" width="4" height="4" fill="black"/>
                                    <rect x="70" y="50" width="4" height="4" fill="black"/>
                                    
                                    <rect x="45" y="55" width="4" height="4" fill="black"/>
                                    <rect x="55" y="55" width="4" height="4" fill="black"/>
                                    <rect x="60" y="55" width="4" height="4" fill="black"/>
                                    <rect x="70" y="55" width="4" height="4" fill="black"/>
                                    
                                    <rect x="45" y="60" width="4" height="4" fill="black"/>
                                    <rect x="50" y="60" width="4" height="4" fill="black"/>
                                    <rect x="55" y="60" width="4" height="4" fill="black"/>
                                    <rect x="65" y="60" width="4" height="4" fill="black"/>
                                    <rect x="70" y="60" width="4" height="4" fill="black"/>
                                    
                                    <rect x="30" y="80" width="4" height="4" fill="black"/>
                                    <rect x="35" y="80" width="4" height="4" fill="black"/>
                                    <rect x="40" y="80" width="4" height="4" fill="black"/>
                                    <rect x="50" y="80" width="4" height="4" fill="black"/>
                                    
                                    <rect x="30" y="85" width="4" height="4" fill="black"/>
                                    <rect x="40" y="85" width="4" height="4" fill="black"/>
                                    <rect x="45" y="85" width="4" height="4" fill="black"/>
                                    <rect x="50" y="85" width="4" height="4" fill="black"/>
                                    
                                    <rect x="30" y="90" width="4" height="4" fill="black"/>
                                    <rect x="35" y="90" width="4" height="4" fill="black"/>
                                    <rect x="45" y="90" width="4" height="4" fill="black"/>
                                    <rect x="50" y="90" width="4" height="4" fill="black"/>
                                </svg>
                            </div>

                            {/* User Info */}
                            <div className="space-y-2">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{userData.name}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{userData.email}</p>
                                <p className="text-xs sm:text-sm text-gray-500">ID: {userData.userId}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
                            <button
                                onClick={handleDownload}
                                className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                            >
                                <div className="bg-blue-600 p-2 sm:p-3 rounded-full">
                                    <Download className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Download</span>
                            </button>

                            <button
                                onClick={handleShare}
                                className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
                            >
                                <div className="bg-purple-600 p-2 sm:p-3 rounded-full">
                                    <Share2 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Share</span>
                            </button>

                            <button
                                onClick={handleCopyLink}
                                className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
                            >
                                <div className="bg-green-600 p-2 sm:p-3 rounded-full">
                                    {copied ? (
                                        <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                    ) : (
                                        <Copy className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                    )}
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">
                                    {copied ? 'Copied!' : 'Copy Link'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Card */}
                <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-3">How to use:</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex gap-2">
                            <span className="text-blue-600">•</span>
                            Share this QR code with others to receive payments
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600">•</span>
                            They can scan it with their phone camera
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600">•</span>
                            Download or share the code easily
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShareQRPage;