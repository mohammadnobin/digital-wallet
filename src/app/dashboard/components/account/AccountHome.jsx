// 'use client';

// import React, { useState } from 'react';
// import { User, Mail, Phone, MapPin, Calendar, Lock, Bell, CreditCard, Settings, LogOut, Edit2, Save, X } from 'lucide-react';

// const AccountHome = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: 'MD. Nobin',
//     email: 'najrulislamnobin@gmail.com',
//     phone: '+880 1234-567890',
//     address: 'Kafrul, Dhaka, Bangladesh',
//     dateOfBirth: '15 January 1995'
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Add your save logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Account Settings</h1>
//           <p className="text-gray-500">Manage your account information and preferences</p>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
//             {!isEditing ? (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
//                 style={{ backgroundColor: '#5f4a94' }}
//               >
//                 <Edit2 className="w-4 h-4" />
//                 Edit Profile
//               </button>
//             ) : (
//               <div className="flex gap-2">
//                 <button
//                   onClick={handleSave}
//                   className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
//                   style={{ backgroundColor: '#5f4a94' }}
//                 >
//                   <Save className="w-4 h-4" />
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
//                 >
//                   <X className="w-4 h-4" />
//                   Cancel
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="flex items-start gap-8 mb-8">
//             <div className="relative">
//               <div
//                 className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
//                 style={{ backgroundColor: '#5f4a94' }}
//               >
//                 MN
//               </div>
//               <button
//                 className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
//                 style={{ backgroundColor: '#e0c9a4' }}
//               >
//                 <Edit2 className="w-4 h-4 text-gray-800" />
//               </button>
//             </div>

//             <div className="flex-1">
//               <h3 className="text-2xl font-bold text-gray-800 mb-1">{formData.name}</h3>
//               <p className="text-gray-500 mb-4">{formData.email}</p>
//               <div className="flex gap-2">
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#5f4a94' }}>
//                   Pro Member
//                 </span>
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600">
//                   Verified
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                 <User className="w-4 h-4" />
//                 Full Name
//               </label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
//                 />
//               ) : (
//                 <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
//                   {formData.name}
//                 </div>
//               )}
//             </div>

//             <div>
//               <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </label>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
//                 />
//               ) : (
//                 <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
//                   {formData.email}
//                 </div>
//               )}
//             </div>

//             <div>
//               <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                 <Phone className="w-4 h-4" />
//                 Phone Number
//               </label>
//               {isEditing ? (
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
//                 />
//               ) : (
//                 <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
//                   {formData.phone}
//                 </div>
//               )}
//             </div>

//             <div>
//               <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                 <Calendar className="w-4 h-4" />
//                 Date of Birth
//               </label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="dateOfBirth"
//                   value={formData.dateOfBirth}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
//                 />
//               ) : (
//                 <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
//                   {formData.dateOfBirth}
//                 </div>
//               )}
//             </div>

//             <div className="col-span-2">
//               <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                 <MapPin className="w-4 h-4" />
//                 Address
//               </label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
//                 />
//               ) : (
//                 <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
//                   {formData.address}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Quick Settings */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all text-left">
//             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#5f4a9415' }}>
//               <Lock className="w-6 h-6" style={{ color: '#5f4a94' }} />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1">Security</h3>
//             <p className="text-sm text-gray-500">Change password & 2FA</p>
//           </button>

//           <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all text-left">
//             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e0c9a415' }}>
//               <Bell className="w-6 h-6" style={{ color: '#e0c9a4' }} />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1">Notifications</h3>
//             <p className="text-sm text-gray-500">Manage preferences</p>
//           </button>

//           <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all text-left">
//             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
//               <CreditCard className="w-6 h-6 text-blue-600" />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1">Payment Methods</h3>
//             <p className="text-sm text-gray-500">Manage cards & accounts</p>
//           </button>
//         </div>

//         {/* Account Actions */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Account Actions</h2>
//           <div className="space-y-3">
//             <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all">
//               <div className="flex items-center gap-3">
//                 <Settings className="w-5 h-5 text-gray-600" />
//                 <div className="text-left">
//                   <div className="font-semibold text-gray-800">General Settings</div>
//                   <div className="text-sm text-gray-500">App preferences and configurations</div>
//                 </div>
//               </div>
//               <div className="text-gray-400">→</div>
//             </button>

//             <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all">
//               <div className="flex items-center gap-3">
//                 <Lock className="w-5 h-5 text-gray-600" />
//                 <div className="text-left">
//                   <div className="font-semibold text-gray-800">Privacy & Security</div>
//                   <div className="text-sm text-gray-500">Control your privacy settings</div>
//                 </div>
//               </div>
//               <div className="text-gray-400">→</div>
//             </button>

//             <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-xl transition-all group">
//               <div className="flex items-center gap-3">
//                 <LogOut className="w-5 h-5 text-red-600" />
//                 <div className="text-left">
//                   <div className="font-semibold text-red-600">Log Out</div>
//                   <div className="text-sm text-gray-500">Sign out from your account</div>
//                 </div>
//               </div>
//               <div className="text-red-400">→</div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountHome;
// 'use client';

// import React, { useState } from 'react';
// import {
//   User, Mail, Phone, MapPin, Calendar, Lock,
//   Bell, CreditCard, Settings, LogOut, Edit2, Save, X
// } from 'lucide-react';

// const AccountHome = ({user}) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: 'MD. Nobin',
//     email: 'najrulislamnobin@gmail.com',
//     phone: '+880 1234-567890',
//     address: 'Kafrul, Dhaka, Bangladesh',
//     dateOfBirth: '15 January 1995'
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Add save logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="mb-6 sm:mb-8 text-center md:text-left">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Account Settings</h1>
//           <p className="text-gray-500 text-sm sm:text-base">
//             Manage your account information and preferences
//           </p>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800">Profile Information</h2>
//             {!isEditing ? (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all w-full sm:w-auto"
//                 style={{ backgroundColor: '#5f4a94' }}
//               >
//                 <Edit2 className="w-4 h-4" />
//                 Edit Profile
//               </button>
//             ) : (
//               <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//                 <button
//                   onClick={handleSave}
//                   className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
//                   style={{ backgroundColor: '#5f4a94' }}
//                 >
//                   <Save className="w-4 h-4" />
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
//                 >
//                   <X className="w-4 h-4" />
//                   Cancel
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8">
//             <div className="relative">
//               <div
//                 className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold"
//                 style={{ backgroundColor: '#5f4a94' }}
//               >
//                 MN
//               </div>
//               <button
//                 className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white shadow-lg"
//                 style={{ backgroundColor: '#e0c9a4' }}
//               >
//                 <Edit2 className="w-4 h-4 text-gray-800" />
//               </button>
//             </div>

//             <div className="flex-1 text-center sm:text-left">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{formData.name}</h3>
//               <p className="text-gray-500 mb-3 text-sm sm:text-base">{formData.email}</p>
//               <div className="flex flex-wrap justify-center sm:justify-start gap-2">
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#5f4a94' }}>
//                   Pro Member
//                 </span>
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600">
//                   Verified
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Form grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             {[
//               { label: "Full Name", name: "name", icon: User },
//               { label: "Email Address", name: "email", icon: Mail },
//               { label: "Phone Number", name: "phone", icon: Phone },
//               { label: "Date of Birth", name: "dateOfBirth", icon: Calendar },
//             ].map(({ label, name, icon: Icon }) => (
//               <div key={name}>
//                 <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                   <Icon className="w-4 h-4" />
//                   {label}
//                 </label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name={name}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300 text-sm sm:text-base"
//                   />
//                 ) : (
//                   <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium text-sm sm:text-base">
//                     {formData[name]}
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Address field (full width) */}
//             <div className="col-span-1 sm:col-span-2">
//               <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                 <MapPin className="w-4 h-4" />
//                 Address
//               </label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300 text-sm sm:text-base"
//                 />
//               ) : (
//                 <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium text-sm sm:text-base">
//                   {formData.address}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Quick Settings */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
//           <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 hover:shadow-md transition-all text-left">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#5f4a9415' }}>
//               <Lock className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#5f4a94' }} />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Security</h3>
//             <p className="text-xs sm:text-sm text-gray-500">Change password & 2FA</p>
//           </button>

//           <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 hover:shadow-md transition-all text-left">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e0c9a415' }}>
//               <Bell className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#e0c9a4' }} />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Notifications</h3>
//             <p className="text-xs sm:text-sm text-gray-500">Manage preferences</p>
//           </button>

//           <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 hover:shadow-md transition-all text-left">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
//               <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Payment Methods</h3>
//             <p className="text-xs sm:text-sm text-gray-500">Manage cards & accounts</p>
//           </button>
//         </div>

//         {/* Account Actions */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6">
//           <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Account Actions</h2>
//           <div className="space-y-3">
//             {[
//               { icon: Settings, title: "General Settings", desc: "App preferences and configurations" },
//               { icon: Lock, title: "Privacy & Security", desc: "Control your privacy settings" },
//             ].map(({ icon: Icon, title, desc }) => (
//               <button
//                 key={title}
//                 className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all text-left"
//               >
//                 <div className="flex items-center gap-3">
//                   <Icon className="w-5 h-5 text-gray-600" />
//                   <div>
//                     <div className="font-semibold text-gray-800 text-sm sm:text-base">{title}</div>
//                     <div className="text-xs sm:text-sm text-gray-500">{desc}</div>
//                   </div>
//                 </div>
//                 <div className="text-gray-400 text-lg">→</div>
//               </button>
//             ))}

//             <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-xl transition-all group">
//               <div className="flex items-center gap-3">
//                 <LogOut className="w-5 h-5 text-red-600" />
//                 <div>
//                   <div className="font-semibold text-red-600 text-sm sm:text-base">Log Out</div>
//                   <div className="text-xs sm:text-sm text-gray-500">Sign out from your account</div>
//                 </div>
//               </div>
//               <div className="text-red-400 text-lg">→</div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountHome;


'use client';

import React, { useState, useEffect } from 'react';
import {
  User, Mail, Phone, MapPin, Calendar, Lock,
  Bell, CreditCard, Settings, LogOut, Edit2, Save, X
} from 'lucide-react';
import Swal from 'sweetalert2';
import { signOut } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AccountHome = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+880 1234-567890',
    address: 'Kafrul, Dhaka, Bangladesh',
    dateOfBirth: '15 January 1995'
  });

  // when user data is received from props
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        role: user.role || '',
        phone: user.phone || '+880 1234-567890',
        address: user.address || 'Kafrul, Dhaka, Bangladesh',
        dateOfBirth: user.dateOfBirth || '15 January 1995',
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogout = async () => {
    // SweetAlert2 confirm dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // If user confirms
      await signOut({ redirect: false });
      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/logout`)
      router.push("/");
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // here you can call your backend to update user info
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading user information...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Account Settings</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Manage your account information and preferences
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-6">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Profile Information</h2>

            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 cursor-pointer transition-all w-full sm:w-auto"
                style={{ backgroundColor: '#5f4a94' }}
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#5f4a94' }}
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8">
            <div className="relative">
              {user?.image ? (
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border"
                />
              ) : (
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold"
                  style={{ backgroundColor: '#5f4a94' }}
                >
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </div>
              )}
              <button
                className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg"
                style={{ backgroundColor: '#e0c9a4' }}
              >
                <Edit2 className="w-4 h-4 text-gray-800 cursor-pointer" />
              </button>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold  text-gray-800 mb-1">{formData.name}</h3>
              <p className="text-gray-500 mb-3 text-sm sm:text-base">{formData.email}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#5f4a94' }}>
                  {formData.role}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Editable Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: "Full Name", name: "name", icon: User },
              { label: "Email Address", name: "email", icon: Mail },
              { label: "Phone Number", name: "phone", icon: Phone },
              { label: "Date of Birth", name: "dateOfBirth", icon: Calendar },
            ].map(({ label, name, icon: Icon }) => (
              <div key={name}>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none cursor-pointer focus:border-purple-300 text-sm sm:text-base"
                  />
                ) : (
                  <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 cursor-pointer font-medium text-sm sm:text-base">
                    {formData[name]}
                  </div>
                )}
              </div>
            ))}

            {/* Address field */}
            <div className="col-span-1 sm:col-span-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                Address
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none cursor-pointer focus:border-purple-300 text-sm sm:text-base"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 cursor-pointer font-medium text-sm sm:text-base">
                  {formData.address}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 hover:shadow-md transition-all text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#5f4a9415' }}>
              <Lock className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#5f4a94' }} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Security</h3>
            <p className="text-xs sm:text-sm text-gray-500">Change password & 2FA</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 hover:shadow-md transition-all text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e0c9a415' }}>
              <Bell className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#e0c9a4' }} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Notifications</h3>
            <p className="text-xs sm:text-sm text-gray-500">Manage preferences</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 hover:shadow-md transition-all text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Payment Methods</h3>
            <p className="text-xs sm:text-sm text-gray-500">Manage cards & accounts</p>
          </button>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Account Actions</h2>
          <div className="space-y-3">
            {[{ icon: Settings, title: "General Settings", desc: "App preferences and configurations" },
            { icon: Lock, title: "Privacy & Security", desc: "Control your privacy settings" }]
              .map(({ icon: Icon, title, desc }) => (
                <button
                  key={title}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">{title}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{desc}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-lg">→</div>
                </button>
              ))}

            <button onClick={handleLogout} className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-xl transition-all group">
              <div className="flex gap-3">
                <LogOut className="w-5 h-5 text-red-600" />
                <div>
                  <div className="font-semibold text-red-600 text-sm sm:text-base">Log Out</div>
                  <div className="text-xs sm:text-sm text-gray-500">Sign out from your account</div>
                </div>
              </div>
              <div className="text-red-400 text-lg">→</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
