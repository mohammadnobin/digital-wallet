import React, { useState } from "react";
import axios from "axios";
import {
  User,
  Car,
  Film,
  UtensilsCrossed,
  Lightbulb,
  ShoppingBag,
  Calendar,
} from "lucide-react";

const RequestForm = ({currentUserEmail}) => {
  console.log(currentUserEmail);
  const [form, setForm] = useState({
    receiverEmail: "",
    amount: "",
    category: "general",
    dueDate: "",
    message: "",
  });

  const categories = [
    { id: "general", label: "General", icon: User },
    { id: "food", label: "Food & Dining", icon: UtensilsCrossed },
    { id: "transportation", label: "Transportation", icon: Car },
    { id: "utilities", label: "Utilities", icon: Lightbulb },
    { id: "entertainment", label: "Entertainment", icon: Film },
    { id: "shopping", label: "Shopping", icon: ShoppingBag },
  ];

  const quickAmounts = [20, 50, 100, 200];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickAmount = (value) => {
    setForm((prev) => ({ ...prev, amount: value.toString() }));
  };

  const handleCategorySelect = (categoryId) => {
    setForm((prev) => ({ ...prev, category: categoryId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.receiverEmail || !form.amount) {
      alert("Please fill in required fields!");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/requests`,
        {
          senderEmail: currentUserEmail, 
          receiverEmail: form.receiverEmail,
          amount: Number(form.amount),
          category: form.category,
          dueDate: form.dueDate || null,
          message: form.message,
        }
      );
      console.log(res.data);
      alert("Request sent successfully!");
      setForm({
        receiverEmail: "",
        amount: "",
        category: "general",
        dueDate: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending request:", error.response?.data || error.message);
      alert("Failed to send request.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Receiver Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Request To (Email)
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="receiverEmail"
            value={form.receiverEmail}
            onChange={handleChange}
            placeholder="Enter receiver's email"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
            $
          </span>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="0.00"
            min="0"
            className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="flex gap-2 mt-2">
          {quickAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => handleQuickAmount(value)}
              className="px-3 py-1 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              ${value}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const selected = form.category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  selected ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Due Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Due Date (Optional)
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What's this request for?"
          rows={4}
          maxLength={500}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <div className="text-xs text-gray-500 mt-1">{form.message.length}/500 characters</div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
      >
        Send Request
      </button>
    </form>
  );
};

export default RequestForm;
