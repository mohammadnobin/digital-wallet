"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  CreditCard,
  Plus,
  MoreVertical,
  Eye,
  Trash2,
  Edit,
  Lock,
  Download,
  ArrowLeft,
} from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useUser from "@/hooks/useUser";

export default function CardsManagement() {
  const axiosSecure = useAxiosSecure();
   const user = useUser();
  const [cards, setCards] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ open: false, type: "", card: null });
  const dropdownRef = useRef(null);



  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);


  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get(`/api/cards/my-cards`);
      setCards(res.data || []);
    } catch (err) {
      console.error(err?.response?.data || err.message);
      Swal.fire("Error", "কার্ড লোড করতে সমস্যা হয়েছে", "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!axiosSecure || !user?.accessToken) return; 
    fetchCards();
  }, [axiosSecure, user?.accessToken]);


  const totalBalance = cards.reduce((s, c) => s + (Number(c.balance) || 0), 0);

  const handleDropdownClick = (id) =>
    setOpenDropdown((prev) => (prev === id ? null : id));

  const handleDeleteCard = async (cardId) => {
    const result = await Swal.fire({
      title: "Delete card?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });
    if (!result.isConfirmed) return;

    try {
      await axiosSecure.delete(`/api/cards/${cardId}`);
      setCards((prev) => prev.filter((c) => c._id !== cardId));
      Swal.fire("Deleted!", "Card has been deleted.", "success");
    } catch (err) {
      console.error(err?.response?.data || err.message);
      Swal.fire("Error", err?.response?.data?.message || "Failed to delete card", "error");
    }
  };
 const handleModalSubmit = async (cardData) => {
    try {
      if (modal.type === "add") {
        const res = await axiosSecure.post(`/api/cards/add`, cardData);
        setCards((prev) => [res.data, ...prev]);
      } else if (modal.type === "edit") {
        const res = await axiosSecure.put(`/api/cards/${modal.card._id}`, cardData);
        setCards((prev) =>
          prev.map((c) => (c._id === modal.card._id ? res.data : c))
        );
      }
      setModal({ open: false, type: "", card: null });
      Swal.fire("Success", `Card ${modal.type === "add" ? "added" : "updated"} successfully`, "success");
    } catch (err) {
      console.error(err?.response?.data || err.message);
      Swal.fire("Error", err?.response?.data?.message || `Failed to ${modal.type === "add" ? "add" : "update"} card`, "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 rounded-2xl p-4 md:p-8 hover:shadow-2xl transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 text-gray-700 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex items-center mt-6 md:mt-0 space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Manage Cards
            </h1>
          </div>
        </div>

        {/* Add Card Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">My Cards</h2>
          <button
            onClick={() => setModal({ open: true, type: "add", card: null })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg"
          >
            <Plus size={20} /> Add New Card
          </button>
        </div>

        {loading && <div className="mb-4 text-gray-600">Loading cards...</div>}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.length === 0 && !loading && (
            <div className="col-span-full bg-white p-6 rounded-lg text-center text-gray-600 shadow">
              No cards yet. Add one to begin.
            </div>
          )}

          {cards.map((card) => {
            const gradient =
              card.cardType === "Visa"
                ? "from-blue-600 to-blue-700"
                : card.cardType === "MasterCard"
                ? "from-red-600 to-yellow-600"
                : card.cardType === "Amex"
                ? "from-green-600 to-green-700"
                : "from-purple-600 to-purple-700";

            return (
              <div key={card._id} className="group">
                <div
                  className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -right-8 -top-8 w-40 h-40 bg-white rounded-full"></div>
                    <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-8 bg-yellow-400 rounded flex items-center justify-center text-xs font-bold text-gray-900">
                          CHIP
                        </div>
                        <span className="text-sm font-medium">{card.cardType}</span>
                      </div>

                      <div className="relative" ref={openDropdown === card._id ? dropdownRef : null}>
                        <button
                          onClick={() => handleDropdownClick(card._id)}
                          className="text-white hover:bg-white/20 p-1 rounded transition-colors"
                        >
                          <MoreVertical size={20} />
                        </button>
                        {openDropdown === card._id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                            <button
                              onClick={() => Swal.fire({ title: `${card.cardName}`, html: `<pre style="text-align:left">${JSON.stringify(card, null, 2)}</pre>`, width: 600 })}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                            >
                              <Eye size={16} /> View Details
                            </button>
                            <button
                              onClick={() => setModal({ open: true, type: "edit", card })}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                            >
                              <Edit size={16} /> Edit Card
                            </button>
                            <button
                              onClick={() => Swal.fire("Not implemented", "Lock/Unlock placeholder", "info")}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                            >
                              <Lock size={16} /> Lock Card
                            </button>
                            <button
                              onClick={() => Swal.fire("Not implemented", "Download statement placeholder", "info")}
                              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                            >
                              <Download size={16} /> Download Statement
                            </button>
                            <div className="border-t border-gray-100 my-1"></div>
                            <button
                              onClick={() => handleDeleteCard(card._id)}
                              className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-3"
                            >
                              <Trash2 size={16} /> Delete Card
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6 text-2xl font-semibold tracking-wider">
                      •••• •••• •••• {card.meta?.last4 || "0000"}
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-white/70 mb-1">CARD NAME</div>
                        <div className="font-medium">{card.cardName}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/70 mb-1">EXPIRES</div>
                        <div className="font-medium">{card.expiryDate}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl mt-4 p-4 shadow-md flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Available Balance</div>
                    <div className="text-xl font-bold text-gray-900">
                      ${Number(card.balance || 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye size={18} className="text-gray-600" />
                    </button>
                    <div className="relative" ref={openDropdown === `balance-${card._id}` ? dropdownRef : null}>
                      <button 
                        onClick={() => handleDropdownClick(`balance-${card._id}`)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <MoreVertical size={18} className="text-gray-600" />
                      </button>
                      {openDropdown === `balance-${card._id}` && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                          <button onClick={() => Swal.fire("Not implemented", "View transactions placeholder", "info")} className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                            View Transactions
                          </button>
                          <button onClick={() => Swal.fire("Not implemented", "Transfer money placeholder", "info")} className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                            Transfer Money
                          </button>
                          <button onClick={() => Swal.fire("Not implemented", "Set budget placeholder", "info")} className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                            Set Budget
                          </button>
                          <button onClick={() => Swal.fire("Not implemented", "Export data placeholder", "info")} className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                            Export Data
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <CreditCard className="text-indigo-600" size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Cards</div>
              <div className="text-2xl font-bold text-gray-900">{cards.length}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <div className="w-6 h-6 flex items-center justify-center text-green-600 font-bold text-xl">
                $
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Balance</div>
              <div className="text-2xl font-bold text-gray-900">
                ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <div className="w-6 h-6 flex items-center justify-center text-purple-600 font-bold">
                ✓
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Security Status</div>
              <div className="text-lg font-bold text-green-600">All Secure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {modal.type === "add" ? "Add New Card" : "Edit Card"}
            </h2>
            <CardForm
              card={modal.card}
              onSubmit={handleModalSubmit}
              onCancel={() => setModal({ open: false, type: "", card: null })}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// CardForm component
function CardForm({ card, onSubmit, onCancel }) {
  const [cardName, setCardName] = useState(card?.cardName || "");
  const [cardNumber, setCardNumber] = useState(card?.cardNumber || ""); // optional: not returned by API when editing
  const [expiryDate, setExpiryDate] = useState(card?.expiryDate || "");
  const [cardType, setCardType] = useState(card?.cardType || "Visa");
  const [balance, setBalance] = useState(card?.balance || 0);
  const [bank, setBank] = useState(card?.meta?.bank || "");

  useEffect(() => {
    setCardName(card?.cardName || "");
    setCardNumber("");
    setExpiryDate(card?.expiryDate || "");
    setCardType(card?.cardType || "Visa");
    setBalance(card?.balance || 0);
    setBank(card?.meta?.bank || "");
  }, [card]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardName || (!cardNumber && !card?.meta?.last4) || !expiryDate) {
      return Swal.fire("Error", "Please fill required fields (card name, number or existing card, expiry)", "error");
    }
    const payload = {
      cardName,
      expiryDate,
      cardType,
      balance,
      bank,
    };
   
    if (cardNumber) payload.cardNumber = cardNumber;
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Card Name (e.g., My Visa)"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        className="border rounded-lg p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder={card ? "Enter new Card Number to replace (optional)" : "Card Number"}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="border rounded-lg p-2 w-full"
        minLength={12}
      />
      <input
        type="text"
        placeholder="Expiry (MM/YY)"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        className="border rounded-lg p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Bank (optional)"
        value={bank}
        onChange={(e) => setBank(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <select
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
        className="border rounded-lg p-2 w-full"
      >
        <option>Visa</option>
        <option>MasterCard</option>
        <option>Amex</option>
        <option>Other</option>
      </select>
      <input
        type="number"
        placeholder="Initial Balance"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
        className="border rounded-lg p-2 w-full"
      />

      <div className="flex justify-end gap-4 mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
          Save
        </button>
      </div>
    </form>
  );
}
