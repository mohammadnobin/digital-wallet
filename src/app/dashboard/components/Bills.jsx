"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Clock,
  Zap,
  Wifi,
  Droplet,
  Phone,
  Flame,
  Shield,
  MoreVertical,
  Edit,
  Trash2,
  Bell,
  X,
} from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import useUser from "@/hooks/useUser";
import useAxiosSecure from "@/hooks/useAxiosSecure";

export default function BillsPayment() {
  const user = useUser();
  const axiossecure = useAxiosSecure();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [bills, setBills] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userBalance, setUserBalance] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    amount: "",
    dueDate: "",
    autoPay: false,
    color: "bg-blue-500",
    icon: "Zap",
    userEmail: "",
  });

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch Bills only if user and accessToken exist
  const fetchBills = async () => {
    if (!user?.accessToken) return;
    try {
      const res = await axiossecure.get("/api/bills", {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      });
      if (res.data.success) {
        setBills(res.data.bills);
      }
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  useEffect(() => {
    fetchBills();
  }, [user?.accessToken]);

  // Add Bill only if user and accessToken exist
  const handleAddBill = async (e) => {
    e.preventDefault();
    if (!user?.accessToken) {
      Swal.fire("Error", "You must be logged in to add a bill", "error");
      return;
    }

    try {
      const billPayload = { ...formData, userEmail: user.email };
      const res = await axios.post(
        "http://localhost:5000/api/bills/add",
        billPayload,
        {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        }
      );
      if (res.data.success) {
        Swal.fire("Success", "Bill added successfully", "success");
        setShowModal(false);
        setFormData({
          name: "",
          company: "",
          amount: "",
          dueDate: "",
          autoPay: false,
          color: "bg-blue-500",
          icon: "Zap",
          userEmail: "",
        });
        fetchBills();
      }
    } catch (error) {
      console.error("Error adding bill:", error);
      Swal.fire(
        "Error",
        error.response?.data?.message || "Failed to add bill",
        "error"
      );
    }
  };

  // Toggle AutoPay
  const toggleAutoPay = async (billId, current) => {
    try {
      const res = await axiossecure.patch(
        `/api/bills/${billId}`,
        { autoPay: !current },
        { headers: { Authorization: `Bearer ${user?.accessToken}` } }
      );
      setBills((prev) =>
        prev.map((b) => (b._id === billId ? res.data.bill : b))
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Bill
  const deleteBill = async (billId) => {
    if (!confirm("Are you sure you want to delete this bill?")) return;
    try {
      await axiossecure.delete(`/api/bills/${billId}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      });
      setBills(bills.filter((b) => b._id !== billId));
    } catch (error) {
      console.error(error);
    }
  };

  // Pay Bill
  const handlePay = async (bill) => {
    try {
      const res = await axiossecure.patch(`/api/bills/pay/${bill}`, {}, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      });

      if (res.data.success) {
        Swal.fire("Payment Successful", res.data.message, "success");
        setBills((prev) =>
          prev.map((b) => (b._id === bill._id ? res.data.bill : b))
        );
        setUserBalance(res.data.userBalance);
      }
    } catch (error) {
      console.error("Payment error:", error);
      Swal.fire(
        "Payment Failed",
        error.response?.data?.message || "An error occurred during payment.",
        "error"
      );
    }
  };

  const totalUpcoming = bills.reduce((sum, bill) => sum + Number(bill.amount), 0);
  const overdueBills = bills.filter((bill) => bill.status === "overdue").length;
  const autoPayActive = bills.filter((bill) => bill.autoPay).length;



  return (
    <div className="min-h-screen bg-gray-50 rounded-2xl p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* === Stats Section === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Total Upcoming</span>
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold">
              ${totalUpcoming.toFixed(2)}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Overdue Bills</span>
              <Bell className="w-5 h-5 text-red-600" />
            </div>
            <div className="text-2xl font-bold">{overdueBills}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">AutoPay Active</span>
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold">{autoPayActive}</div>
          </div>
        </div>

        {/* === Header === */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Bills</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2"
          >
            <Plus size={18} />
            Add Bill
          </button>
        </div>

        {/* === Bills Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bills.map((bill) => {
            const Icon =
              { Zap, Wifi, Droplet, Phone, Flame, Shield }[bill.icon] || Zap;
            return (
              <div key={bill._id} className="bg-white rounded-xl shadow p-5">
                <div className="flex justify-between mb-4">
                  <div className="flex gap-3">
                    <div
                      className={`${bill.color} w-12 h-12 rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{bill.name}</h3>
                      <p className="text-sm text-gray-500">{bill.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">${bill.amount}</div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        bill.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </div>
                </div>

                {/* AutoPay */}
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div>Due: {bill.dueDate}</div>
                  <div className="flex items-center gap-2">
                    <span>AutoPay</span>
                    <button
                      onClick={() => toggleAutoPay(bill._id, bill.autoPay)}
                      className={`relative cursor-pointer inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        bill.autoPay ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          bill.autoPay ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePay(bill._id)}
                    disabled={bill.status === "paid"} // ✅ যদি paid হয়, disabled হবে
                    className={`flex-1 cursor-pointer py-2.5 rounded-lg font-medium transition-colors ${
                      bill.status === "paid"
                        ? "bg-gray-400 text-white" // Paid হলে gray
                        : "bg-blue-600 hover:bg-blue-700 text-white" // Otherwise blue
                    }`}
                  >
                    {bill.status === "paid" ? "Paid" : "Pay Now"}{" "}
                    {/* Paid হলে text দেখাবে */}
                  </button>

                  <button
                    onClick={() => deleteBill(bill._id)}
                    className="p-2.5 cursor-pointer border border-gray-200 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* === Modal === */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add New Bill</h3>
              <button onClick={() => setShowModal(false)}>
                <X />
              </button>
            </div>
            <form onSubmit={handleAddBill} className="space-y-3">
              <input
                type="text"
                placeholder="Bill Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Due Date (e.g., 2025-10-30)"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.autoPay}
                  onChange={(e) =>
                    setFormData({ ...formData, autoPay: e.target.checked })
                  }
                />
                <label>Enable AutoPay</label>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
              >
                Add Bill
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
