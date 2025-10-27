// 'use client';
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AddUserForm = ({user}) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [users, setUsers] = useState(user || []);

//   // Fetch all users

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/users", formData);
//       setMessage("User created successfully!");
//       setFormData({ name: "", email: "", password: "" });
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Add New User</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           {loading ? "Creating..." : "Add User"}
//         </button>
//       </form>

//       {message && <p className="mt-4 text-center text-red-500">{message}</p>}

//       {/* User List */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Users</h3>
//         {users.length === 0 ? (
//           <p>No users found.</p>
//         ) : (
//           <ul className="space-y-2">
//             {users.map((user) => (
//               <li key={user._id} className="p-2 border rounded bg-white">
//                 <p><strong>Name:</strong> {user.name}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Balance:</strong> ${user.balance}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddUserForm;

// pages/users.js

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:5000/api/users');
//   const data = await res.json();

//   return {
//     props: {
//       users: data,
//     },
//     revalidate: 10, // ISR (Incremental Static Regeneration) প্রতি 10 সেকেন্ডে refresh হবে
//   };
// }

// export default function AddUserForm({ users }) {
//   return (
//     <div>
//       <h1>All Users</h1>
//       <ul>
//         {users?.map((user) => (
//           <li key={user._id}>
//             {user.name} — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const revalidate = 10; // প্রতি 10 সেকেন্ড পর page regenerate হবে

// export default async function AddUserForm() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, { next: { revalidate: 1 } });
//   const users = await res.json();

//   return (
//     <div>
//       <h1>All Users</h1>
//       <ul>
//         {users?.map((user) => (
//           <li key={user._id}>
//             {user.name} — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const revalidate = 1;

// export default async function AddUserForm() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);
//   const users = await res.json();

//   return (
//     <div>
//       <h1>All Users</h1>
//       <ul>
//         {users?.map((user) => (
//           <li key={user._id}>
//             {user.name} — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";

// import {
//   Eye,
//   EyeOff,
//   Wallet,
//   Lock,
//   Mail,
//   User,
//   Phone,
//   ArrowRight,
// } from "lucide-react";
// import React, { useState } from "react";

// const AddUserForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const formObj = Object.fromEntries(formData.entries());
//     const { firstName, lastName, email, password } = formObj;
//     const name = `${firstName} ${lastName}`;
//   };

//   return (
//     <div className="max-w-md mx-auto my-10">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 space-y-6"
//       >
//         {/* Name */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               First Name
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="firstName"
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//                 placeholder="First name"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//               placeholder="Last name"
//               required
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Email
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <Mail className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="email"
//               name="email"
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//               placeholder="Email address"
//               required
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Phone
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <Phone className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="tel"
//               name="phone"
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//               placeholder="Phone number"
//               required
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Password
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <Lock className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//               placeholder="Password"
//               required
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-0 pr-4 flex items-center"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <EyeOff className="h-5 w-5 text-gray-400" />
//               ) : (
//                 <Eye className="h-5 w-5 text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Confirm Password
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <Lock className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 transition"
//               placeholder="Confirm Password"
//               required
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-0 pr-4 flex items-center"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               {showConfirmPassword ? (
//                 <EyeOff className="h-5 w-5 text-gray-400" />
//               ) : (
//                 <Eye className="h-5 w-5 text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Terms */}
//         <div className="flex items-start space-x-2">
//           <input
//             type="checkbox"
//             name="agreeTerms"
//             className="h-4 w-4 text-purple-600 border-gray-300 rounded mt-1"
//             required
//           />
//           <label className="text-sm text-gray-700">
//             I agree to the{" "}
//             <a href="#" className="text-purple-600">
//               Terms & Privacy
//             </a>
//           </label>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50"
//         >
//           {isLoading ? "Creating..." : "Create Account"}{" "}
//           <ArrowRight className="inline ml-2 h-4 w-4" />
//         </button>

//         <div className="text-center text-sm text-gray-500">
//           Already have an account?{" "}
//           <Link href="/login" className="text-purple-600 font-medium">
//             Sign In
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;

import authOptions from "@/lib/authOptions";
import { getServerSession } from 'next-auth/next';
const AddUserForm = async () => {
      const session = await getServerSession(authOptions);

  return (
    <div>
      hello
    </div>
  );
};

export default AddUserForm;