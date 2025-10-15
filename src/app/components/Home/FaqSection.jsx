"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is my personal data safe in this wallet?",
      answer:
        "Absolutely. Your personal data and financial details are protected with end-to-end encryption and are never shared with third parties without your consent.",
    },
    {
      question: "Do I need an account to use the wallet?",
      answer:
        "Yes, you’ll need to create an account to access features like balance tracking, payments, and transfers securely.",
    },
    {
      question: "What payment methods can I use to add money?",
      answer:
        "You can top up your wallet using debit/credit cards, bank transfers, or mobile banking services depending on your region.",
    },
    {
      question: "Can I send money internationally?",
      answer:
        "Yes, our wallet supports basic international remittance. You can securely transfer funds to supported countries using our global payment network.",
    },
    {
      question: "Why do I need to verify my identity?",
      answer:
        "Identity verification helps prevent fraud and ensures compliance with financial regulations. It also keeps your wallet more secure.",
    },
    {
      question: "What should I do if a transaction fails?",
      answer:
        "If a transaction fails but the amount is deducted, don’t worry. It’s usually reversed automatically within 2–3 business days.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-purple-700 uppercase font-semibold tracking-wider mb-3">
          FAQs
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center cursor-pointer justify-between text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>
              <span className="ml-4 flex-shrink-0 text-purple-700">
                {openIndex === index ? <Minus /> : <Plus />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
