'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Lock, Bell, CreditCard, Settings, LogOut, Edit2, Save, X } from 'lucide-react';

const AccountHome = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'MD. Nobin',
    email: 'najrulislamnobin@gmail.com',
    phone: '+880 1234-567890',
    address: 'Kafrul, Dhaka, Bangladesh',
    dateOfBirth: '15 January 1995'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Account Settings</h1>
          <p className="text-gray-500">Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
                style={{ backgroundColor: '#5f4a94' }}
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#5f4a94' }}
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="flex items-start gap-8 mb-8">
            <div className="relative">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
                style={{ backgroundColor: '#5f4a94' }}
              >
                MN
              </div>
              <button
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: '#e0c9a4' }}
              >
                <Edit2 className="w-4 h-4 text-gray-800" />
              </button>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{formData.name}</h3>
              <p className="text-gray-500 mb-4">{formData.email}</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#5f4a94' }}>
                  Pro Member
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600">
                  Verified
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                  {formData.name}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                  {formData.email}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                  {formData.phone}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4" />
                Date of Birth
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                  {formData.dateOfBirth}
                </div>
              )}
            </div>

            <div className="col-span-2">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-300"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-medium">
                  {formData.address}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all text-left">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#5f4a9415' }}>
              <Lock className="w-6 h-6" style={{ color: '#5f4a94' }} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Security</h3>
            <p className="text-sm text-gray-500">Change password & 2FA</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all text-left">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e0c9a415' }}>
              <Bell className="w-6 h-6" style={{ color: '#e0c9a4' }} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Notifications</h3>
            <p className="text-sm text-gray-500">Manage preferences</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all text-left">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Payment Methods</h3>
            <p className="text-sm text-gray-500">Manage cards & accounts</p>
          </button>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Account Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-800">General Settings</div>
                  <div className="text-sm text-gray-500">App preferences and configurations</div>
                </div>
              </div>
              <div className="text-gray-400">→</div>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Privacy & Security</div>
                  <div className="text-sm text-gray-500">Control your privacy settings</div>
                </div>
              </div>
              <div className="text-gray-400">→</div>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-xl transition-all group">
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5 text-red-600" />
                <div className="text-left">
                  <div className="font-semibold text-red-600">Log Out</div>
                  <div className="text-sm text-gray-500">Sign out from your account</div>
                </div>
              </div>
              <div className="text-red-400">→</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;