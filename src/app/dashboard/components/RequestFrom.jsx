// import React, { useState } from 'react';
// import {
//   User, Car, Film, UtensilsCrossed, Lightbulb, ShoppingBag,
//   Calendar,
// } from 'lucide-react';

// const RequestFrom = () => {

//       const [amount, setAmount] = useState('');
//       const [selectedCategory, setSelectedCategory] = useState('general');
//       const [message, setMessage] = useState('');
//       const [dueDate, setDueDate] = useState('');
    
//       const categories = [
//         { id: 'general', label: 'General', icon: User },
//         { id: 'food', label: 'Food & Dining', icon: UtensilsCrossed },
//         { id: 'transportation', label: 'Transportation', icon: Car },
//         { id: 'utilities', label: 'Utilities', icon: Lightbulb },
//         { id: 'entertainment', label: 'Entertainment', icon: Film },
//         { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
//       ];
    
//       const quickAmounts = [20, 50, 100, 200];
    
//       const handleQuickAmount = (value) => {
//         setAmount(value.toString());
//       };
    
//       const handleSubmit = () => {

//       };
    

//     return (
//               <>
//                 {/* === New Request Form === */}
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-900">Request Money</h2>
//                     <p className="text-sm text-gray-500">Send a payment request to contacts</p>
//                   </div>
//                 </div>

//                 {/* Request From */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Request From</label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Enter email or select from contacts"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>

//                 {/* Amount */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
//                     <input
//                       type="number"
//                       value={amount}
//                       onChange={(e) => setAmount(e.target.value)}
//                       placeholder="0.00"
//                       className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div className="flex gap-2 mt-3">
//                     {quickAmounts.map((value) => (
//                       <button
//                         key={value}
//                         onClick={() => handleQuickAmount(value)}
//                         className="px-4 py-1.5 text-sm font-medium cursor-pointer text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//                       >
//                         ${value}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Category */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                   <div className="grid grid-cols-2 gap-3">
//                     {categories.map((category) => {
//                       const Icon = category.icon;
//                       return (
//                         <button
//                           key={category.id}
//                           onClick={() => setSelectedCategory(category.id)}
//                           className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${selectedCategory === category.id
//                               ? 'border-green-500 bg-green-50'
//                               : 'border-gray-200 hover:border-gray-300'
//                             }`}
//                         >
//                           <Icon className="w-5 h-5 text-gray-600" />
//                           <span className="text-sm font-medium text-gray-700">{category.label}</span>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Due Date */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Due Date (Optional)</label>
//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type="date"
//                       value={dueDate}
//                       onChange={(e) => setDueDate(e.target.value)}
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <textarea
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="What's this request for?"
//                     rows={4}
//                     maxLength={500}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                   />
//                   <div className="text-xs text-gray-500 mt-1">
//                     {message.length}/500 characters
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   className="w-full py-3 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//                 >
//                   Send Request
//                 </button>
//               </>
//     );
// };

// export default RequestFrom;

"use client";
import React, { useState } from 'react';
import axios from 'axios';
import {
  User, Car, Film, UtensilsCrossed, Lightbulb, ShoppingBag,
  Calendar,
} from 'lucide-react';

const RequestForm = () => {
  const [form, setForm] = useState({
    requestFrom: '',
    amount: '',
    category: 'general',
    dueDate: '',
    message: '',
  });

  const categories = [
    { id: 'general', label: 'General', icon: User },
    { id: 'food', label: 'Food & Dining', icon: UtensilsCrossed },
    { id: 'transportation', label: 'Transportation', icon: Car },
    { id: 'utilities', label: 'Utilities', icon: Lightbulb },
    { id: 'entertainment', label: 'Entertainment', icon: Film },
    { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
  ];

  const quickAmounts = [20, 50, 100, 200];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickAmount = (value) => {
    setForm(prev => ({ ...prev, amount: value.toString() }));
  };

  const handleCategorySelect = (categoryId) => {
    setForm(prev => ({ ...prev, category: categoryId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.requestFrom || !form.amount) {
      alert("Please fill in required fields!");
      return;
    }
    try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/requests`,
    //     {
    //       ...form,
    //       amount: parseFloat(form.amount),
    //       dueDate: form.dueDate || null,
    //     },
    //     { withCredentials: true }
    //   );
    //   alert("Request sent successfully!");
    //   // Reset form
      setForm({
        requestFrom: '',
        amount: '',
        category: 'general',
        dueDate: '',
        message: '',
      });
    } catch (error) {
      console.error("Error sending request:", error.response?.data || error.message);
      alert("Failed to send request.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Request From */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Request From</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="requestFrom"
            value={form.requestFrom}
            onChange={handleChange}
            placeholder="Enter email or select from contacts"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 mt-2">
          {quickAmounts.map(value => (
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
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <div className="grid grid-cols-2 gap-3">
          {categories.map(cat => {
            const Icon = cat.icon;
            const selected = form.category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  selected ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
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
        <label className="block text-sm font-medium text-gray-700 mb-2">Due Date (Optional)</label>
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
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
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
