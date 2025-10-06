import React from "react";
import RegistationsFrom from "./components/RegistationsFrom";
import Link from "next/link";
import { Wallet } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
                <Wallet className="h-10 w-10 text-white" />
              </div>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 text-lg">
            Join thousands managing their finances securely
          </p>
        </div>
        <RegistationsFrom />
      </div>
    </div>
  );
};

export default page;
