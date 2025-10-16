"use client";
import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const formObj = Object.fromEntries(formData.entries());
  //   const { email, password } = formObj;

  //   // Simple validation
  //   if (!email || !password) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "Please fill all required fields",
  //     });
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     const response = await signIn("credentials", {
  //       email,
  //       password,
  //       redirect: true,
  //       callbackUrl: redirect ? redirect : "/",
  //     });

  //     if (response.ok) {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Login Successful",
  //         text: "Welcome back!",
  //       });
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Login Failed",
  //         text: response.error || "Please check your credentials",
  //       });
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "An error occurred while signing in.",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill all required fields",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: true, // এখানে true থাকলে NextAuth নিজে redirect করবে
 callbackUrl: redirect ? redirect : "/dashboard", // redirect query থাকলে সেখানে নেবে
      });
      console.log(response);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email Address
        </label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
          />

          <button
            type="button"
            className="absolute cursor-pointer inset-y-0 right-0 pr-4 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {" "}
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            )}{" "}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 cursor-pointer focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">Remember me</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Forgot password?
        </Link>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center cursor-pointer items-center py-3 px-4 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            Sign In <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default LoginFrom;
