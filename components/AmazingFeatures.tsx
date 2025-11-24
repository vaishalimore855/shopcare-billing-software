"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, FileText, BarChart2 } from "lucide-react";
import Card from "./common/Card";

export default function AmazingFeatures() {
  const features = [
    {
      icon: ShoppingCart,
      title: "POS (Point of Sales System)",
      description:
        "Complete point of sale system software with Inventory & Barcode management",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: FileText,
      title: "Simple Interfaces",
      description:
        "Easy interfaces for Quotation, Purchase, Sales, and Delivery Challan",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: BarChart2,
      title: "Robust Billing",
      description:
        "Very easy to handle & Robust Billing with GST & Non-GST formats with Barcode",
      gradient: "from-orange-500 to-red-400",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Amazing Features
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Powerful tools designed for modern businesses
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
              gradient={f.gradient}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
