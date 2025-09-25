'use client';
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CreditCard, 
  Building2, 
  Smartphone, 
  DollarSign,
  Plus,
  CheckCircle,
  AlertCircle,
  Shield,
  Clock,
  Calculator,
  User,
  Phone,
  Calendar,
  Lock,
  Zap,
  Receipt,
  Star,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const AddMoneyPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [amount, setAmount] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
    bankAccount: '',
    routingNumber: '',
    accountHolderName: '',
    mobileNumber: '',
    paypalEmail: '',
    savePaymentMethod: false
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const currentBalance = 2847.65;
  const dailyAddLimit = 10000;
  const monthlyAddLimit = 50000;
  const remainingDaily = 7500;
  const remainingMonthly = 35000;

  const fundingSources = [
    {
      id: 'card',
      name: 'Debit/Credit Card',
      icon: CreditCard,
      fee: 2.9,
      processingTime: 'Instant',
      description: 'Add money from your bank card',
      popular: true
    },
    {
      id: 'bank',
      name: 'Bank Account',
      icon: Building2,
      fee: 0,
      processingTime: '1-3 business days',
      description: 'Direct transfer from bank account'
    },
    {
      id: 'mobile',
      name: 'Mobile Payment',
      icon: Smartphone,
      fee: 1.5,
      processingTime: 'Instant',
      description: 'Add via mobile payment services'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Receipt,
      fee: 3.5,
      processingTime: 'Instant',
      description: 'Transfer from PayPal account'
    }
  ];

  const quickAmounts = [25, 50, 100, 250, 500, 1000];

  const savedPaymentMethods = [
    {
      id: 1,
      type: 'card',
      name: 'Visa ending in 4242',
      icon: CreditCard,
      isDefault: true
    },
    {
      id: 2,
      type: 'bank',
      name: 'Chase Bank ****1234',
      icon: Building2,
      isDefault: false
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!amount || parseFloat(amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    } else if (parseFloat(amount) < 5) {
      newErrors.amount = 'Minimum amount is $5';
    } else if (parseFloat(amount) > remainingDaily) {
      newErrors.amount = 'Amount exceeds daily limit';
    } else if (parseFloat(amount) > remainingMonthly) {
      newErrors.amount = 'Amount exceeds monthly limit';
    }

    if (selectedMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.cardHolderName) newErrors.cardHolderName = 'Cardholder name is required';
    } else if (selectedMethod === 'bank') {
      if (!formData.bankAccount) newErrors.bankAccount = 'Account number is required';
      if (!formData.routingNumber) newErrors.routingNumber = 'Routing number is required';
      if (!formData.accountHolderName) newErrors.accountHolderName = 'Account holder name is required';
    } else if (selectedMethod === 'mobile') {
      if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
    } else if (selectedMethod === 'paypal') {
      if (!formData.paypalEmail) newErrors.paypalEmail = 'PayPal email is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setAmount('');
        setFormData({
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          cardHolderName: '',
          bankAccount: '',
          routingNumber: '',
          accountHolderName: '',
          mobileNumber: '',
          paypalEmail: '',
          savePaymentMethod: false
        });
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const calculateFee = () => {
    const selectedMethodData = fundingSources.find(m => m.id === selectedMethod);
    const amountValue = parseFloat(amount) || 0;
    return (amountValue * selectedMethodData.fee) / 100;
  };

  const getTotalAmount = () => {
    const amountValue = parseFloat(amount) || 0;
    return amountValue + calculateFee();
  };

  const getNewBalance = () => {
    return currentBalance + (parseFloat(amount) || 0);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Money Added Successfully!</h2>
          <p className="text-gray-600 mb-4">Your wallet has been funded and is ready to use.</p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Amount Added:</span>
              <span className="font-semibold text-green-600">+${amount}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Processing Fee:</span>
              <span className="font-semibold">${calculateFee().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">New Balance:</span>
              <span className="font-bold text-blue-600">${getNewBalance().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Time:</span>
              <span className="font-semibold">{fundingSources.find(m => m.id === selectedMethod)?.processingTime}</span>
            </div>
          </div>
          <button 
            onClick={() => setShowSuccess(false)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Add More Money
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href='/dashboard'>
            <button className="flex cursor-pointer items-center text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Add Money</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Current Balance */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-sm p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Current Balance</h2>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold mb-2">${currentBalance.toFixed(2)}</p>
                <p className="text-blue-100">Ready to add more funds</p>
              </div>

              {/* Amount Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Enter Amount</h2>
                
                <div className="mb-4">
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className={`w-full pl-10 pr-4 py-4 text-2xl font-semibold border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.amount ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.amount && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.amount}
                    </p>
                  )}
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                  {quickAmounts.map((quickAmount) => (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="py-2 px-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      ${quickAmount}
                    </button>
                  ))}
                </div>

                {amount && (
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      Your new balance will be: <span className="font-semibold">${getNewBalance().toFixed(2)}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Saved Payment Methods */}
              {savedPaymentMethods.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Saved Payment Methods</h2>
                  <div className="space-y-3">
                    {savedPaymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <method.icon className="w-6 h-6 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">{method.name}</p>
                            {method.isDefault && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <Star className="w-3 h-3 mr-1" />
                                Default
                              </span>
                            )}
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Use This
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Funding Method Selection */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Funding Source</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {fundingSources.map((method) => (
                    <div
                      key={method.id}
                      className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedMethod === method.id 
                          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      {method.popular && (
                        <span className="absolute -top-2 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <method.icon className={`w-6 h-6 ${selectedMethod === method.id ? 'text-blue-600' : 'text-gray-400'}`} />
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {method.fee === 0 ? 'Free' : `${method.fee}% fee`}
                          </p>
                          <p className="text-xs text-gray-500">{method.processingTime}</p>
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{method.name}</h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  ))}
                </div>

                {/* Method-specific inputs */}
                {selectedMethod === 'card' && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                      Card Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.cardHolderName}
                          onChange={(e) => handleInputChange('cardHolderName', e.target.value)}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.cardHolderName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.cardHolderName && (
                        <p className="mt-1 text-sm text-red-600">{errors.cardHolderName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.cardNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="1234 5678 9012 3456"
                      />
                      {errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.expiryDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                            placeholder="MM/YY"
                          />
                        </div>
                        {errors.expiryDate && (
                          <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.cvv ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                            placeholder="123"
                            maxLength="4"
                          />
                        </div>
                        {errors.cvv && (
                          <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'bank' && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      Bank Account Details
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Holder Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.accountHolderName}
                          onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.accountHolderName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Account holder name"
                        />
                      </div>
                      {errors.accountHolderName && (
                        <p className="mt-1 text-sm text-red-600">{errors.accountHolderName}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Account Number
                        </label>
                        <input
                          type="text"
                          value={formData.bankAccount}
                          onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.bankAccount ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Account number"
                        />
                        {errors.bankAccount && (
                          <p className="mt-1 text-sm text-red-600">{errors.bankAccount}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Routing Number
                        </label>
                        <input
                          type="text"
                          value={formData.routingNumber}
                          onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.routingNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Routing number"
                        />
                        {errors.routingNumber && (
                          <p className="mt-1 text-sm text-red-600">{errors.routingNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'mobile' && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                      Mobile Payment Details
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.mobileNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.mobileNumber}</p>
                      )}
                    </div>
                  </div>
                )}

                {selectedMethod === 'paypal' && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <Receipt className="w-5 h-5 mr-2 text-blue-600" />
                      PayPal Details
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        PayPal Email
                      </label>
                      <input
                        type="email"
                        value={formData.paypalEmail}
                        onChange={(e) => handleInputChange('paypalEmail', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.paypalEmail ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.paypalEmail && (
                        <p className="mt-1 text-sm text-red-600">{errors.paypalEmail}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Save Payment Method */}
                <div className="border-t pt-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.savePaymentMethod}
                      onChange={(e) => handleInputChange('savePaymentMethod', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Save this payment method for future use
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isProcessing || !amount || parseFloat(amount) <= 0}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                  isProcessing || !amount || parseFloat(amount) <= 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Add ${parseFloat(amount || 0).toFixed(2)} to Wallet
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Transaction Summary */}
            {amount && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-green-600" />
                  Transaction Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount to add:</span>
                    <span className="font-medium text-green-600">+${parseFloat(amount || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing fee:</span>
                    <span className="font-medium">${calculateFee().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total charge:</span>
                    <span className="font-medium">${getTotalAmount().toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-gray-600">New balance:</span>
                    <span className="font-bold text-blue-600">${getNewBalance().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processing time:</span>
                    <span className="font-medium">
                      {fundingSources.find(m => m.id === selectedMethod)?.processingTime}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Add Limits */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Add Money Limits
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Daily Limit</span>
                    <span className="font-medium">${remainingDaily.toFixed(2)} / ${dailyAddLimit.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((dailyAddLimit - remainingDaily) / dailyAddLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Monthly Limit</span>
                    <span className="font-medium">${remainingMonthly.toFixed(2)} / ${monthlyAddLimit.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((monthlyAddLimit - remainingMonthly) / monthlyAddLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Secure & Protected</h3>
                  <p className="text-sm text-blue-800 mb-3">
                    Your payment information is encrypted and never stored on our servers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      256-bit SSL encryption
                    </div>
                    <div className="flex items-center text-sm text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      PCI DSS compliant
                    </div>
                    <div className="flex items-center text-sm text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Fraud monitoring
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Times */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Processing Times & Fees
              </h3>
              <div className="space-y-3">
                {fundingSources.map((source) => (
                  <div key={source.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-2">
                      <source.icon className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{source.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{source.processingTime}</div>
                      <div className="text-gray-500">
                        {source.fee === 0 ? 'Free' : `${source.fee}% fee`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-green-600" />
                Quick Tips
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Use debit cards for instant transfers</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Bank transfers are free but take longer</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Save payment methods for faster checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoneyPage;