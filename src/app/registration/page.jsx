// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Eye,
//   EyeOff,
//   Wallet,
//   Lock,
//   Mail,
//   User,
//   Phone,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     agreeTerms: false,
//     agreeMarketing: false,
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);

//   const handleChange = (e) => {
//     const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });

//     if (e.target.name === "password") checkPasswordStrength(value);
//   };

//   const checkPasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;
//     setPasswordStrength(strength);
//   };

//   const getPasswordStrengthColor = () => {
//     if (passwordStrength <= 2) return "bg-red-500";
//     if (passwordStrength <= 3) return "bg-yellow-500";
//     return "bg-green-500";
//   };

//   const getPasswordStrengthText = () => {
//     if (passwordStrength <= 2) return "Weak";
//     if (passwordStrength <= 3) return "Medium";
//     return "Strong";
//   };

//   const validateForm = () => {
//     if (!formData.firstName.trim()) return alert("Enter first name");
//     if (!formData.lastName.trim()) return alert("Enter last name");
//     if (!formData.email.trim()) return alert("Enter email");
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) return alert("Enter valid email");
//     if (!formData.phone.trim()) return alert("Enter phone");
//     if (!formData.password) return alert("Enter password");
//     if (passwordStrength < 3) return alert("Password too weak");
//     if (formData.password !== formData.confirmPassword) return alert("Passwords do not match");
//     if (!formData.agreeTerms) return alert("Agree to Terms & Conditions");
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const { firstName, lastName, email, phone, password } = formData;
//       const name = `${firstName} ${lastName}`;

//       // Save user to backend
//       const { data } = await axios.post(`${baseUrl}/api/users/register`, {
//         name,
//         email,
//         phone,
//         password,
//       });

//       if (data?.success) {
//         alert("Account created successfully!");
//         router.push("/login"); // redirect to login page
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert(error.response?.data?.message || "Signup failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="max-w-lg w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <Link href="/">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
//                 <Wallet className="h-10 w-10 text-white" />
//               </div>
//             </Link>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
//           <p className="text-gray-600 text-lg">Join thousands managing their finances securely</p>
//         </div>

//         {/* Registration Form */}
//         <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 space-y-6">
//           {/* Name */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                   placeholder="First name"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                 placeholder="Last name"
//                 required
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                 placeholder="Email address"
//                 required
//               />
//             </div>
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <Phone className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                 placeholder="Phone number"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                 placeholder="Password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                 placeholder="Confirm Password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
//               </button>
//             </div>
//             {formData.confirmPassword && formData.password !== formData.confirmPassword && (
//               <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
//             )}
//           </div>

//           {/* Terms */}
//           <div className="flex items-start space-x-2">
//             <input
//               type="checkbox"
//               name="agreeTerms"
//               checked={formData.agreeTerms}
//               onChange={handleChange}
//               className="h-4 w-4 text-purple-600 border-gray-300 rounded mt-1"
//               required
//             />
//             <label className="text-sm text-gray-700">
//               I agree to the <a href="#" className="text-purple-600">Terms & Privacy</a>
//             </label>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50"
//           >
//             {isLoading ? "Creating..." : "Create Account"} <ArrowRight className="inline ml-2 h-4 w-4" />
//           </button>

//           <div className="text-center text-sm text-gray-500">
//             Already have an account? <Link href="/login" className="text-purple-600 font-medium">Sign In</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data.users || res.data); // backend response অনুযায়ী
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
        console.log(formData);
      const res = await axios.post("http://localhost:5000/api/users", formData);
      const response = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });
        console.log(email, password)
      setMessage("User created successfully!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Creating..." : "Add User"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}

      {/* User List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Users</h3>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user._id} className="p-2 border rounded bg-white">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Balance:</strong> ${user.balance}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default page;
