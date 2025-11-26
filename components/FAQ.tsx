"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { fetchMockData } from "@/public/data/mockApi"; // Assuming path to mockapi
import { FAQItem } from "@/app/types/faq"; // Assuming path to types

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]); // Initialize with empty array and use FAQItem[] type
  const [openIndex, setOpenIndex] = useState<number>(-1); // Use -1 to represent nothing open
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch data on component mount
  useEffect(() => {
    const loadFaqs = async () => {
      try {
        const data = await fetchMockData("faqs");
        setFaqs(data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFaqs();
  }, []);

  if (isLoading) {
    // Simple loading state
    return (
      <section className="py-32 px-6 flex justify-center items-center h-[500px] bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="text-xl text-slate-700">Loading FAQs...</span>
      </section>
    );
  }

  return (
    <section className="py-5 px-2 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-lg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 rounded-full mb-4"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">
                Got Questions?
              </span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              <span className="text-slate-900">Frequently Asked </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-lg text-slate-600">
              Find answers to common questions about Shopcare Billing Software
            </p>
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "border-blue-300 shadow-xl shadow-blue-500/10"
                    : "border-slate-200 hover:border-blue-200 hover:shadow-xl"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                          : "bg-gradient-to-br from-slate-100 to-slate-200"
                      }`}
                    >
                      <MessageCircle
                        className={`w-5 h-5 transition-colors ${
                          openIndex === index ? "text-white" : "text-slate-500"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold transition-colors ${
                        openIndex === index ? "text-blue-600" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-slate-100"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        openIndex === index ? "text-white" : "text-slate-500"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="pl-14 border-l-2 border-l-blue-400 ml-5">
                          <p className="text-slate-600 leading-relaxed pl-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active Gradient Border */}
                {openIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-slate-700">Still have questions?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
