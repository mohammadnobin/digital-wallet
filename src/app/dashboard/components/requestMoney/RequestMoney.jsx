"use client";
import { useState } from "react";
import {
  Users,
  RefreshCw,
  Share2,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Plus,
} from "lucide-react";
import RequestFrom from "./RequestFrom";
import PendingRequests from "./PendingRequests";
import RequestHistory from "./RequestHistory";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function RequestMoney() {
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;
  const [activeTab, setActiveTab] = useState("new");

  const tabs = [
    { id: "new", label: "New Request" },
    { id: "pending", label: "Pending" },
    { id: "history", label: "History" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          {/* Back Button */}
          <Link href="/dashboard">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all border border-gray-200 text-gray-700 hover:text-blue-600">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
          </Link>

          {/* Title */}
          <div className="flex items-center mt-6 md:mt-0 space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Request Money
            </h1>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-gray-600 text-sm mb-6">
          Easily request payments from your contacts and manage your money requests in one place.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 font-medium relative transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded-full transition-all"></span>
              )}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            {activeTab === "new" && (
              <RequestFrom currentUserEmail={currentUserEmail} />
            )}
            {activeTab === "pending" && (
              <PendingRequests currentUserEmail={currentUserEmail} />
            )}
            {activeTab === "history" && (
              <RequestHistory email={currentUserEmail} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Request Summary Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                Request Summary
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Pending</span>
                  </div>
                  <span className="font-semibold text-gray-900">$450.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Received</span>
                  </div>
                  <span className="font-semibold text-gray-900">$1,250.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-gray-600">Declined</span>
                  </div>
                  <span className="font-semibold text-gray-900">$75.00</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-all">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">Split Bill</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-all">
                  <RefreshCw className="w-5 h-5" />
                  <span className="text-sm font-medium">Recurring Request</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl transition-all">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Share Request Link
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
