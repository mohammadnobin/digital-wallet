"use client";

import React, { use, useState } from "react";
import axios from "axios";
import {
  Eye,
  EyeOff,
  Wallet,
  Shield,
  Lock,
  Mail,
  User,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Authcontext } from "@/context/AuthContext";
import { registerUser } from "../actions/auth/registerUser";

export default function RegisterPage() {
  const router = useRouter();
  const {createUser,updateUserProfile} = use(Authcontext)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    // Check password strength
    if (e.target.name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak";
    if (passwordStrength <= 3) return "Medium";
    return "Strong";
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      alert("Please enter your first name");
      return false;
    }

    if (!formData.lastName.trim()) {
      alert("Please enter your last name");
      return false;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email address");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number");
      return false;
    }

    if (!formData.password) {
      alert("Please enter a password");
      return false;
    }

    if (passwordStrength < 3) {
      alert("Please create a stronger password (at least Medium strength)");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return;
    }



    setIsLoading(true);
try {
  const { firstName, lastName, email,password } = formData;
  const name = firstName + " " + lastName;
   const result = await createUser(email, password);
    const loggedUser = result.user;
     // Update Firebase user profile with name and photo
      await updateUserProfile(name);

    // Backend এ ইউজার save করা
    const { data } = await axios.post("http://localhost:5000/api/users", {
      name,
      email,
    });

    console.log("User saved:", data);

<<<<<<< HEAD
    router.push("/dashboard");
  } catch (error) {
    console.error("Signup error:", error);
  } finally {
  setIsLoading(false);
}
=======
      await registerUser("Submitted Data:", { firstName, lastName, email, phone, password });
      // Simulate API call for user registration
      // In a real application, you would make an actual API call here
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Registration submitted:", formData);

      // Show success message
      setShowSuccessMessage(true);

      // Wait for a moment to show success message, then navigate
      setTimeout(() => {
        // Navigate to home page after successful registration
        router.push("/dashboard");
      }, 1500);

    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
>>>>>>> bb5897061c80322d6712280d6d76e73e75fa72ea
  };

  // Success message component
  if (showSuccessMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Account Created Successfully!
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to our platform! You will be redirected to the home page shortly.
            </p>
            <div className="flex justify-center">
              <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Link href='/'>
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

        {/* Registration Card */}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-600">
                      Password strength:
                    </span>
                    <span
                      className={`text-xs font-medium ${passwordStrength <= 2
                        ? "text-red-600"
                        : passwordStrength <= 3
                          ? "text-yellow-600"
                          : "text-green-600"
                        }`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
              {formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    Passwords do not match
                  </p>
                )}
            </div>

            {/* Terms and Marketing Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <label
                  htmlFor="agreeTerms"
                  className="ml-3 text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-500 font-medium"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-500 font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  id="agreeMarketing"
                  name="agreeMarketing"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                  checked={formData.agreeMarketing}
                  onChange={handleChange}
                />
                <label
                  htmlFor="agreeMarketing"
                  className="ml-3 text-sm text-gray-700"
                >
                  I would like to receive marketing communications and updates
                </label>
              </div>
            </div>

            {/* Register Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Sign In Link */}
            <Link href="/login">
              <button
                className="w-full flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200 cursor-pointer"
              >
                Sign In Instead
              </button>
            </Link>
          </div>
        </form>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
            <div className="ml-3">
              <p className="text-sm text-green-800 font-medium">
                Your Information is Secure
              </p>
              <p className="text-xs text-green-600 mt-1">
                All data is encrypted and stored with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}