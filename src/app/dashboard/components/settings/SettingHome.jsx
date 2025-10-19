'use client';

import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Moon, Sun, Smartphone, Mail, Shield, CreditCard, Eye, Database, Trash2, Download, HelpCircle, ChevronRight, Check } from 'lucide-react';

const SettingsHome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);

  const ToggleSwitch = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
      className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none"
      style={{ backgroundColor: enabled ? '#5f4a94' : '#e5e7eb' }}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-slate-500 text-lg">Manage your preferences and app settings</p>
        </div>

        {/* Account Settings */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20" style={{ backgroundColor: '#5f4a9415' }}>
              <User className="w-6 h-6" style={{ color: '#5f4a94' }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Account Settings</h2>
              <p className="text-sm text-slate-500">Manage your account preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <User className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Profile Information</div>
                  <div className="text-sm text-slate-500">Update your personal details</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <CreditCard className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Payment Methods</div>
                  <div className="text-sm text-slate-500">Manage cards and bank accounts</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <Globe className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Language & Region</div>
                  <div className="text-sm text-slate-500">English (US) • USD</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20" style={{ backgroundColor: '#5f4a9415' }}>
              <Shield className="w-6 h-6" style={{ color: '#5f4a94' }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Security & Privacy</h2>
              <p className="text-sm text-slate-500">Keep your account secure</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#5f4a9415' }}>
                  <Lock className="w-6 h-6" style={{ color: '#5f4a94' }} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Two-Factor Authentication</div>
                  <div className="text-sm text-slate-500">Add an extra layer of security</div>
                </div>
              </div>
              <ToggleSwitch enabled={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
            </div>

            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#e0c9a415' }}>
                  <Smartphone className="w-6 h-6" style={{ color: '#e0c9a4' }} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Biometric Login</div>
                  <div className="text-sm text-slate-500">Use fingerprint or face ID</div>
                </div>
              </div>
              <ToggleSwitch enabled={biometric} onChange={() => setBiometric(!biometric)} />
            </div>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <Eye className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Privacy Settings</div>
                  <div className="text-sm text-slate-500">Control your data and visibility</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <Lock className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Change Password</div>
                  <div className="text-sm text-slate-500">Update your password regularly</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20" style={{ backgroundColor: '#e0c9a415' }}>
              <Bell className="w-6 h-6" style={{ color: '#e0c9a4' }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Notifications</h2>
              <p className="text-sm text-slate-500">Manage how you receive alerts</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-blue-50">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Push Notifications</div>
                  <div className="text-sm text-slate-500">Receive alerts on your device</div>
                </div>
              </div>
              <ToggleSwitch enabled={pushNotif} onChange={() => setPushNotif(!pushNotif)} />
            </div>

            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-green-50">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Email Notifications</div>
                  <div className="text-sm text-slate-500">Get updates via email</div>
                </div>
              </div>
              <ToggleSwitch enabled={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
            </div>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <Bell className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Notification Preferences</div>
                  <div className="text-sm text-slate-500">Customize notification types</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* App Preferences */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 bg-purple-50">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">App Preferences</h2>
              <p className="text-sm text-slate-500">Customize your app experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-slate-800">
                  {darkMode ? <Moon className="w-6 h-6 text-white" /> : <Sun className="w-6 h-6 text-yellow-500" />}
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Dark Mode</div>
                  <div className="text-sm text-slate-500">Enable dark theme</div>
                </div>
              </div>
              <ToggleSwitch enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </div>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <Database className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Data Management</div>
                  <div className="text-sm text-slate-500">Manage app data and cache</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:shadow-md transition-all">
                  <Download className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">Export Data</div>
                  <div className="text-sm text-slate-500">Download your account data</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Support & About */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <button className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60 p-8 hover:shadow-xl transition-all text-left group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 bg-blue-50 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Help & Support</h3>
            <p className="text-sm text-slate-500 mb-4">Get assistance and FAQs</p>
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#5f4a94' }}>
              Learn more <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          <button className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-slate-200/60 p-8 hover:shadow-xl transition-all text-left group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20" style={{ backgroundColor: '#5f4a9415' }}>
              <Check className="w-7 h-7" style={{ color: '#5f4a94' }} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">About</h3>
            <p className="text-sm text-slate-500 mb-4">App info and version details</p>
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#5f4a94' }}>
              View details <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Danger Zone */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-red-200/60 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20 bg-red-50">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Danger Zone</h2>
              <p className="text-sm text-slate-500">Irreversible actions</p>
            </div>
          </div>

          <button className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 rounded-2xl transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-red-100">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-red-600">Delete Account</div>
                <div className="text-sm text-red-500">Permanently delete your account and data</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsHome;