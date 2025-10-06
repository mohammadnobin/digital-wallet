"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BankHero() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh]  bg-primary overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent blur-3xl" />

      {/* Floating shapes */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 md:px-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Your Money.  
          <span className="text-blue-400"> Smarter.</span>  
          <br />
          <span className="text-indigo-300">Faster. Safer.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Experience next-generation digital banking — instant transfers,
          intelligent insights, and total control of your finances.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <Link
            href="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all"
          >
            Open an Account
          </Link>
          <Link
            href="/learn-more"
            className="border border-white/40 hover:border-white text-white px-6 py-3 rounded-full text-lg font-semibold backdrop-blur-sm transition-all"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Decorative glass card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl w-[90%] md:w-[60%] max-w-3xl text-white"
      >
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold text-blue-400">250K+</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Transactions Processed</h3>
            <p className="text-3xl font-bold text-indigo-400">$1.2B+</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Countries Supported</h3>
            <p className="text-3xl font-bold text-purple-400">85+</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
