'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Send, CheckCircle, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MoneyTransfer({ user, session }) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [transferSpeed, setTransferSpeed] = useState('instant');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [transfers, setTransfers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const token = session.user.accessToken;
  if (!session || !session.user || !session.user.accessToken) {
    return <p>Loading user data...</p>;
  }

  const senderEmail = user.email;
  const quickAmounts = [10, 25, 50, 100];
  const fetchTransfers = async () => {

    try {
      setFetching(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/transfers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransfers(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchTransfers();
  }, [token]);


  const handleSendMoney = async () => {
    if (!recipient || !amount) {
      return Swal.fire('Warning', 'Please fill in all required fields', 'warning');
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('access-token');

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/transfers/send`,
        {
          senderEmail,
          recipientEmail: recipient,
          amount: parseFloat(amount),
          speed: transferSpeed,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: 'success',
        title: 'Transfer Successful!',
        text: `You sent $${amount} to ${recipient}`,
        confirmButtonColor: '#5f4a94',
      });

      // Reset form + reload history
      setAmount('');
      setRecipient('');
      setMessage('');
      setTransferSpeed('instant');
      fetchTransfers();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Transfer Failed',
        text: error.response?.data?.message || 'Something went wrong',
        confirmButtonColor: '#d33',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 rounded-2xl transition-all duration-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Link href="/dashboard">
          <button
            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 text-gray-700 hover:text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </Link>


      </div>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Money</h1>
          <p className="text-gray-600">Transfer funds instantly to friends or family</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 mb-10">
          {/* Recipient */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Send To
            </label>
            <input
              type="text"
              placeholder="Enter recipient email"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg"
              />
            </div>
            <div className="flex gap-2 mt-3">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt.toString())}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          {/* Speed */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Transfer Speed
            </label>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 border-2 border-primary rounded-xl cursor-pointer bg-blue-50">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="speed"
                    value="instant"
                    checked={transferSpeed === 'instant'}
                    onChange={(e) => setTransferSpeed(e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Instant Transfer</p>
                    <p className="text-sm text-gray-600">Available in minutes</p>
                  </div>
                </div>
                <span className="text-primary font-semibold">$1.99</span>
              </label>

              <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="speed"
                    value="standard"
                    checked={transferSpeed === 'standard'}
                    onChange={(e) => setTransferSpeed(e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Standard Transfer</p>
                    <p className="text-sm text-gray-600">1-3 business days</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">Free</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              placeholder="Add a note..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            />
            <p className="mt-2 text-xs text-gray-500">{message.length}/500 characters</p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSendMoney}
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
              }`}
          >
            <Send className="w-5 h-5" />
            {loading ? 'Processing...' : 'Send Money'}
          </button>

          {/* Security Info */}
          <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-green-900">Secure Transfer</p>
              <p className="text-xs text-green-700">
                Your transfer is protected by bank-level encryption and fraud monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* === TRANSFER HISTORY === */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" /> Transfer History
          </h2>

          {fetching ? (
            <p className="text-gray-500">Loading transfer history...</p>
          ) : transfers.length === 0 ? (
            <p className="text-gray-500">No transfers found.</p>
          ) : (
            <div className="space-y-3">
              {transfers.map((t) => (
                <div
                  key={t._id}
                  className="p-4 border border-gray-200 rounded-xl flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="text-sm text-gray-700">
                      {t.senderEmail === senderEmail ? (
                        <>
                          Sent <span className="font-semibold">${t.amount}</span> to{' '}
                          <span className="font-semibold">{t.recipientEmail}</span>
                        </>
                      ) : (
                        <>
                          Received <span className="font-semibold">${t.amount}</span> from{' '}
                          <span className="font-semibold">{t.senderEmail}</span>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleString()}</p>
                  </div>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${t.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                      }`}
                  >
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
