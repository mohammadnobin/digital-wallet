"use client";

import React, { useState } from "react";
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
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  const router = useRouter();
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

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call for user registration
      // In a real application, you would make an actual API call here
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Registration submitted:", formData);

      // Show success message
      setShowSuccessMessage(true);

      // Wait for a moment to show success message, then navigate
      setTimeout(() => {
        // Navigate to home page after successful registration
        router.push("/");
      }, 1500);

    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
        <RegisterForm
          formData={formData}
          handleChange={handleChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          passwordStrength={passwordStrength}
          getPasswordStrengthColor={getPasswordStrengthColor}
          getPasswordStrengthText={getPasswordStrengthText}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />


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