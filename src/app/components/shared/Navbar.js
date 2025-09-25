// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Bell, LogOut, HelpCircle, Settings, Shield, Wallet, Menu, X, WalletCards, ScanLineIcon } from "lucide-react";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center relative">
//       {/* Logo */}
//       {/* its for gone home page */}
//         <Link href='/' >
//       <div className="flex items-center gap-2">
//         <WalletCards className="w-7 h-7 text-purple-600" />
//         <span className="text-xl font-bold text-purple-700">DigitalWallet</span>
//       </div>
//         </Link>
//       {/* Desktop Links */}
//       <div className="hidden md:flex gap-6 text-gray-700 font-medium">
//         <Link href="/dashboard" className="hover:text-purple-600">Dashboard</Link>
//         <Link href="/transfer" className="hover:text-purple-600">Transfer</Link>
//         <Link href="/cards" className="hover:text-purple-600">Cards</Link>
//         <Link href="/bills" className="hover:text-purple-600">Bills</Link>
//         <Link href="/history" className="hover:text-purple-600">History</Link>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Notifications */}
//         <div className="relative cursor-pointer">
//           <Bell className="w-6 h-6 text-gray-700" />
//         </div>

//         <div className="relative cursor-pointer">
//           <ScanLineIcon className="w-6 h-6 text-gray-700" />
//         </div>

//         {/* User Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300"
//           >
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="User"
//               className="w-full h-full object-cover"
//             />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-md p-2 z-50">
//               <div className="px-3 py-2 border-b">
//                 <p className="font-semibold text-gray-800">Sarah Johnson</p>
//                 <p className="text-xs text-gray-500">sarahjohnson@email.com</p>
//               </div>
//               <ul className="mt-2">
//                 <li className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
//                   <Settings className="w-4 h-4 mr-2" /> Profile Settings
//                 </li>
//                 <li className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
//                   <Shield className="w-4 h-4 mr-2" /> Security
//                 </li>
//                 <li className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
//                   <HelpCircle className="w-4 h-4 mr-2" /> Help Center
//                 </li>
//                 <li className="flex items-center px-3 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
//                   <LogOut className="w-4 h-4 mr-2" /> Sign Out
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-4 p-4 text-gray-600">
//           <Link href="/dashboard" className="hover:text-purple-600 ">Dashboard</Link>
//           <Link href="/transfer" className="hover:text-purple-600">Transfer</Link>
//           <Link href="/cards" className="hover:text-purple-600">Cards</Link>
//           <Link href="/bills" className="hover:text-purple-600">Bills</Link>
//           <Link href="/history" className="hover:text-purple-600">History</Link>
//         </div>
//       )}
//     </nav>
//   );
// }
'use client';
import React, { useState } from 'react';
import { 
  CreditCard, 
  Bell,
  ChevronDown,

} from 'lucide-react';

const Navbar = () => {
   const [activeTab, setActiveTab] = useState('Dashboard');
  
    const navigationItems = ['Dashboard', 'Cards', 'Transfer', 'Bills', 'Transactions'];
  return (
<<<<<<< HEAD:src/app/components/shared/Navbar.js
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <WalletCards className="w-7 h-7 text-purple-600" />
        <span className="text-xl font-bold text-purple-700">DigitalWallet</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
    
        <Link href="/dashboard" className="hover:text-purple-600">Dashboard</Link>
        <Link href="/transfer" className="hover:text-purple-600">Transfer</Link>
        <Link href="/cards" className="hover:text-purple-600">Cards</Link>
        <Link href="/bills" className="hover:text-purple-600">Bills</Link>
        <Link href="/history" className="hover:text-purple-600">History</Link>
         <Link href="/components/Login" className="hover:text-purple-600">Login</Link>
         <Link href="/components/signup" className="hover:text-purple-600">Signup</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-700" />
        </div>

        <div className="relative cursor-pointer">
          <ScanLineIcon className="w-6 h-6 text-gray-700" />
        </div>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-full h-full object-cover"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-md p-2 z-50">
              <div className="px-3 py-2 border-b">
                <p className="font-semibold text-gray-800">Sarah Johnson</p>
                <p className="text-xs text-gray-500">sarahjohnson@email.com</p>
=======
    <div>
            {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">DigitalWallet</span>
>>>>>>> fb2eb25af1b805c73a4d99dff7eaf4ab0e1ef458:src/app/components/shared/Navbar.jsx
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === item
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">AJ</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
                  <p className="text-xs text-gray-500">alex.johnson@email.com</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;