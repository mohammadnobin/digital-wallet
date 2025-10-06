import { Wallet, Shield } from "lucide-react";
import Link from "next/link";
import LoginFrom from "./components/LoginFrom";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
                <Wallet className="h-10 w-10 text-white" />
              </div>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-lg">Sign in to access your digital wallet</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 space-y-6">

          <LoginFrom />
          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-500">New to our platform?</span></div>
          </div>

          {/* Sign Up */}
          <Link href="/registration">
            <button className="w-full cursor-pointer flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition duration-200">Create New Account</button>
          </Link>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center space-x-3">
          <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800 font-medium">Secure Login Protected</p>
            <p className="text-xs text-blue-600 mt-1">Your data is encrypted with bank-level security protocols.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;