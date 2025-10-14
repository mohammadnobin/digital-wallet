"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center p-6">
      {/* Background gradient animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-white/40 to-blue-500/30 blur-3xl"
      />

      <div className="relative z-10 bg-white shadow-2xl rounded-3xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden">
        {/* Left Section - Info */}
        <div className="bg-primary text-white flex flex-col justify-center p-10 space-y-6">
          <h2 className="text-3xl font-bold">Let’s Get in Touch</h2>
          <p className="text-blue-100 leading-relaxed">
            Have questions, feedback, or want to collaborate?  
            We’d love to hear from you. Fill out the form or reach us directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-white" />
              <p>support@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-white" />
              <p>+1 (234) 567-890</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-white" />
              <p>123 Ocean Drive, Miami, FL</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-10 bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-5">
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="4"
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
