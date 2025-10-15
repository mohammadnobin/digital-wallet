"use client";
import { useState } from "react";
import {
  Users,
  RefreshCw,
  Share2,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import RequestFrom from "./RequestFrom";
import PendingRequests from "./PendingRequests";
import { useSession } from "next-auth/react";
import RequestHistory from "./RequestHistory";

export default function RequestMoney() {
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;
  const [activeTab, setActiveTab] = useState("new");


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Request Money
          </h1>
          <p className="text-gray-600">
            Request payments from friends and family
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          {["new", "pending", "history"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 cursor-pointer font-medium transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "new"
                ? "New Request"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
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
          <div className="space-y-6">
            {/* Request Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Request Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Pending</span>
                  </div>
                  <span className="font-semibold text-gray-900">$450.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">Split Bill</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors">
                  <RefreshCw className="w-5 h-5" />
                  <span className="text-sm font-medium">Recurring Request</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors">
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
