// "use client";
// import React, { useState } from "react";
// import { Eye, EyeOff, Wallet, Shield, Lock, Mail, ArrowRight, CheckCircle } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import Swal from "sweetalert2";

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginError, setLoginError] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });
//     if (loginError) setLoginError("");
//   };

//   const validateForm = () => {
//     if (!formData.email.trim()) {
//       setLoginError("Please enter your email address");
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setLoginError("Please enter a valid email address");
//       return false;
//     }
//     if (!formData.password) {
//       setLoginError("Please enter your password");
//       return false;
//     }
//     if (formData.password.length < 6) {
//       setLoginError("Password must be at least 6 characters long");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     setIsLoading(true);
//     const { email, password } = formData;

//     // Use NextAuth signIn with credentials
//     const result = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     setIsLoading(false);

//     if (result?.error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: result.error,
//       });
//     } else {
//       Swal.fire({
//         title: "Good job!",
//         text: "Login Successful",
//         icon: "success",
//       }).then(() => {
//         router.push("/dashboard");
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <Link href="/">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
//                 <Wallet className="h-10 w-10 text-white" />
//               </div>
//             </Link>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
//           <p className="text-gray-600 text-lg">Sign in to access your digital wallet</p>
//         </div>

//         {/* Login Card */}
//         <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
//           <div className="space-y-6">
//             {/* Error Message */}
//             {loginError && (
//               <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm text-red-800 font-medium">{loginError}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 ${
//                     loginError && loginError.includes("email")
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-blue-500"
//                   }`}
//                   placeholder="Enter your email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 ${
//                     loginError && loginError.includes("password")
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-blue-500"
//                   }`}
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="rememberMe"
//                   name="rememberMe"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
//             >
//               {isLoading ? (
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               ) : (
//                 <>
//                   Sign In
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </>
//               )}
//             </button>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">New to our platform?</span>
//               </div>
//             </div>

//             {/* Sign Up Link */}
//             <Link href="/registration">
//               <button className="w-full flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200 cursor-pointer">
//                 Create New Account
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Security Notice */}
//         <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
//           <div className="flex items-center">
//             <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
//             <div className="ml-3">
//               <p className="text-sm text-blue-800 font-medium">Secure Login Protected</p>
//               <p className="text-xs text-blue-600 mt-1">Your data is encrypted with bank-level security protocols.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Wallet, Shield, Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (loginError) setLoginError("");
  };

  const validateForm = () => {
    if (!formData.email.trim()) return setLoginError("Please enter your email address");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return setLoginError("Please enter a valid email address");
    if (!formData.password) return setLoginError("Please enter your password");
    if (formData.password.length < 6) return setLoginError("Password must be at least 6 characters long");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    const { email, password } = formData;

    const result = await signIn("credentials", { redirect: false, email, password });
    setIsLoading(false);

    if (result?.error) {
      Swal.fire({ icon: "error", title: "Oops...", text: result.error });
    } else {
      Swal.fire({ title: "Success!", text: "Login Successful", icon: "success" }).then(() => {
        router.push("/dashboard");
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/">
            <div className="flex justify-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
              <Wallet className="h-10 w-10 text-white" />
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-lg">Sign in to access your digital wallet</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 space-y-6">
          {loginError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 font-medium">
              {loginError}
            </div>
          )}

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute inset-y-0 left-0 pl-4 h-5 w-5 text-gray-400 flex items-center pointer-events-none" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 ${
                  loginError.includes("email") ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute inset-y-0 left-0 pl-4 h-5 w-5 text-gray-400 flex items-center pointer-events-none" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 ${
                  loginError.includes("password") ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot password?</Link>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <>Sign In <ArrowRight className="ml-2 h-4 w-4" /></>}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-500">New to our platform?</span></div>
          </div>

          {/* Sign Up */}
          <Link href="/registration">
            <button className="w-full flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition duration-200">Create New Account</button>
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
}
