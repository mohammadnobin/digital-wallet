"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";


export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const sendOtp = async () => {
    if (!email) return Swal.fire("Error", "Please enter your email", "warning");
    setLoading(true);
    try {
      await axiosSecure.post("/api/send-otp", { email });
      Swal.fire("Success", "OTP sent to your email!", "success");
      setStep(2);
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Failed to send OTP", "error");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) return Swal.fire("Error", "Please enter OTP", "warning");
    setLoading(true);
    try {
      await axiosSecure.post("/api/verify-otp", { email, otp });
      Swal.fire("Verified", "OTP verified successfully!", "success");
      setStep(3);
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Invalid OTP", "error");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    if (!newPassword) return Swal.fire("Error", "Enter a new password", "warning");
    setLoading(true);
    try {
      await axiosSecure.post("/api/reset-password", { email, newPassword });
      Swal.fire("Success", "Password changed successfully!", "success");
      router.push("/login");
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Reset Password</h1>

        {step === 1 && (
          <>
            <label className="block mb-2 font-semibold">Email Address</label>
            <div className="relative mb-4">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 p-3 border rounded-xl"
              />
            </div>
            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block mb-2 font-semibold">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 border rounded-xl mb-4"
            />
            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label className="block mb-2 font-semibold">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full p-3 border rounded-xl mb-4"
            />
            <button
              onClick={resetPassword}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
