// "use client";
// import React, { use, useState } from "react";
// import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
// import Link from "next/link";
// import { Authcontext } from "@/context/AuthContext";
// import Swal from "sweetalert2";

// export default function ForgotPasswordPage() {
//   const { resetPassword } = use(Authcontext);
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleReset = async () => {
//     if (!email) {
//       Swal.fire({
//         icon: "warning",
//         title: "Email Required",
//         text: "Please enter your email address",
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       await resetPassword(email);
//       Swal.fire({
//         icon: "success",
//         title: "Password Reset Email Sent",
//         text: "Check your inbox for the reset link.",
//       });
//       setEmail("");
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: error?.message || "Failed to send reset email",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password</h1>
//           <p className="text-gray-600">
//             Enter your email address and we’ll send you a reset link.
//           </p>
//         </div>

//         {/* Email Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Email Address
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <Mail className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               id="email"
//               type="email"
//               className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 border-gray-300 focus:ring-blue-500"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Reset Button */}
//         <button
//           onClick={handleReset}
//           disabled={loading}
//           className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? (
//             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Send Reset Link"
//           )}
//         </button>

//         {/* Back to Login */}
//         <div className="text-center mt-6">
//           <Link
//             href="/login"
//             className="flex items-center justify-center text-blue-600 hover:text-blue-500 transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


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
