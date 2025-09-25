"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Building2,
  Smartphone,
  DollarSign,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Clock,
  Shield,
  User,
  Phone,
  Mail,
  Calculator,
} from "lucide-react";
import Link from "next/link";

const CashoutPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [amount, setAmount] = useState("");
  const [showBalance, setShowBalance] = useState(true);
  const [formData, setFormData] = useState({
    bankAccount: "",
    routingNumber: "",
    accountHolderName: "",
    mobileNumber: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const availableBalance = 2847.65;
  const dailyLimit = 5000;
  const remainingLimit = 3200;

  const cashoutMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Building2,
      fee: 0,
      processingTime: "1-3 business days",
      description: "Direct transfer to your bank account",
    },
    {
      id: "card",
      name: "Debit Card",
      icon: CreditCard,
      fee: 2.5,
      processingTime: "Instant",
      description: "Cash out to your debit card",
    },
    {
      id: "mobile",
      name: "Mobile Money",
      icon: Smartphone,
      fee: 1.0,
      processingTime: "Instant",
      description: "Send to mobile wallet",
    },
  ];

  const quickAmounts = [50, 100, 250, 500, 1000];

  const validateForm = () => {
    const newErrors = {};

    if (!amount || parseFloat(amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    } else if (parseFloat(amount) > availableBalance) {
      newErrors.amount = "Amount exceeds available balance";
    } else if (parseFloat(amount) > remainingLimit) {
      newErrors.amount = "Amount exceeds daily limit";
    }

    if (selectedMethod === "bank") {
      if (!formData.bankAccount)
        newErrors.bankAccount = "Account number is required";
      if (!formData.routingNumber)
        newErrors.routingNumber = "Routing number is required";
      if (!formData.accountHolderName)
        newErrors.accountHolderName = "Account holder name is required";
    } else if (selectedMethod === "card") {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
    } else if (selectedMethod === "mobile") {
      if (!formData.mobileNumber)
        newErrors.mobileNumber = "Mobile number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      const response = await fetch("http://localhost:5000/api/wallets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "68d312cb50092968c7ae5433", // Replace with real logged-in user ID
          amount: parseFloat(amount),
          method: selectedMethod,
          details: formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Success
      setIsProcessing(false);
      setShowSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setAmount("");
        setFormData({
          bankAccount: "",
          routingNumber: "",
          accountHolderName: "",
          mobileNumber: "",
          email: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          note: "",
        });
      }, 3000);
    } catch (error) {
      setIsProcessing(false);
      alert(error.message); // You can also show a nicer UI error
    }
  };

  
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const calculateFee = () => {
    const selectedMethodData = cashoutMethods.find(
      (m) => m.id === selectedMethod
    );
    const amountValue = parseFloat(amount) || 0;
    return (amountValue * selectedMethodData.fee) / 100;
  };

  const getTotalAmount = () => {
    const amountValue = parseFloat(amount) || 0;
    return amountValue + calculateFee();
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Cashout Successful!
          </h2>
          <p className="text-gray-600 mb-4">
            Your withdrawal request has been submitted successfully.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold">${amount}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Fee:</span>
              <span className="font-semibold">
                ${calculateFee().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Time:</span>
              <span className="font-semibold">
                {
                  cashoutMethods.find((m) => m.id === selectedMethod)
                    ?.processingTime
                }
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Make Another Withdrawal
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Cash Out</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Section */}
          <div className="lg:col-span-2">
            <div onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Enter Amount
                </h2>

                <div className="mb-4">
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className={`w-full pl-10 pr-4 py-4 text-2xl font-semibold border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.amount
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
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
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {quickAmounts.map((quickAmount) => (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="py-2 px-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      ${quickAmount}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setAmount(availableBalance.toString())}
                  className="text-blue-600 text-sm font-medium hover:text-blue-700"
                >
                  Use all available balance (${availableBalance.toFixed(2)})
                </button>
              </div>

              {/* Cashout Method Selection */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Select Cashout Method
                </h2>

                <div className="space-y-3 mb-6">
                  {cashoutMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <method.icon
                            className={`w-6 h-6 ${
                              selectedMethod === method.id
                                ? "text-blue-600"
                                : "text-gray-400"
                            }`}
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {method.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {method.fee === 0 ? "Free" : `${method.fee}% fee`}
                          </p>
                          <p className="text-xs text-gray-500">
                            {method.processingTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Method-specific inputs */}
                {selectedMethod === "bank" && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      Bank Account Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Account Number
                        </label>
                        <input
                          type="text"
                          value={formData.bankAccount}
                          onChange={(e) =>
                            handleInputChange("bankAccount", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.bankAccount
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter account number"
                        />
                        {errors.bankAccount && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.bankAccount}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Routing Number
                        </label>
                        <input
                          type="text"
                          value={formData.routingNumber}
                          onChange={(e) =>
                            handleInputChange("routingNumber", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.routingNumber
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter routing number"
                        />
                        {errors.routingNumber && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.routingNumber}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Holder Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.accountHolderName}
                          onChange={(e) =>
                            handleInputChange(
                              "accountHolderName",
                              e.target.value
                            )
                          }
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.accountHolderName
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter account holder name"
                        />
                      </div>
                      {errors.accountHolderName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.accountHolderName}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {selectedMethod === "card" && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                      Debit Card Details
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) =>
                          handleInputChange("cardNumber", e.target.value)
                        }
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.cardNumber
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="1234 5678 9012 3456"
                      />
                      {errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={formData.expiryDate}
                          onChange={(e) =>
                            handleInputChange("expiryDate", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.expiryDate
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="MM/YY"
                        />
                        {errors.expiryDate && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.expiryDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) =>
                            handleInputChange("cvv", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.cvv
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="123"
                          maxLength="4"
                        />
                        {errors.cvv && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.cvv}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === "mobile" && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                      Mobile Money Details
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
                          onChange={(e) =>
                            handleInputChange("mobileNumber", e.target.value)
                          }
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.mobileNumber
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Note */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Additional Note (Optional)
                </label>
                <textarea
                  value={formData.note}
                  onChange={(e) => handleInputChange("note", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Add any additional information..."
                  rows="3"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={
                  isProcessing || !amount || getTotalAmount() > availableBalance
                }
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                  isProcessing || !amount || getTotalAmount() > availableBalance
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Processing...
                  </span>
                ) : (
                  "Confirm Cashout"
                )}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Balance Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">
                  Available Balance
                </h3>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showBalance ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {showBalance ? `$${availableBalance.toFixed(2)}` : "••••••"}
              </p>
              <div className="text-sm text-gray-600">
                <div className="flex justify-between mb-1">
                  <span>Daily limit:</span>
                  <span>${dailyLimit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Remaining today:</span>
                  <span>${remainingLimit.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Transaction Summary */}
            {amount && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                  Transaction Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">
                      ${parseFloat(amount || 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing fee:</span>
                    <span className="font-medium">
                      ${calculateFee().toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-semibold text-gray-900">Total:</span>
                    <span className="font-bold text-gray-900">
                      ${getTotalAmount().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processing time:</span>
                    <span className="font-medium">
                      {
                        cashoutMethods.find((m) => m.id === selectedMethod)
                          ?.processingTime
                      }
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Security Notice
                  </h3>
                  <p className="text-sm text-blue-800">
                    Your transaction is protected by bank-level encryption. We
                    never store your sensitive financial information.
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Times */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Processing Times
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank Transfer:</span>
                  <span className="font-medium">1-3 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Debit Card:</span>
                  <span className="font-medium">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mobile Money:</span>
                  <span className="font-medium">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashoutPage;
