"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/common/button"; // Assuming this is defined
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  LucideIcon,
} from "lucide-react";

const backgroundImages: string[] = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
];

interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const stats: StatItem[] = [
    { icon: Users, label: "1500+ Customers", value: "1500+" },
    { icon: TrendingUp, label: "Since 2012", value: "12+" },
    { icon: CheckCircle2, label: "GST Compliant", value: "100%" },
  ];

  return (
    // FIX 1: Increased pt-32 to pt-40 to ensure the top badge is not cut off on various devices.
    <section className="min-h-screen pt-40 pb-16 px-6 relative overflow-hidden flex items-center">
      {/* Background images (Kept as is) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5 },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Slide Indicators - Higher Z-index and slightly more space from bottom (mb-4) */}
      <div className="absolute   bottom-2 left-1/2 -translate-x-1/2 z-40 flex space-x-3 mb-4">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-12 bg-white"
                : "w-8 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.div
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-white">
                #PointOfSale
              </span>
            </motion.div> */}

            <motion.h1
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Shopcare</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Billing Software
              </span>
            </motion.h1>

            <motion.div transition={{ delay: 0.4 }} className="space-y-3 mb-6">
              <p className="text-lg text-white leading-relaxed">
                One of the leading providers of POS systems is{" "}
                <span className="font-bold text-cyan-400">
                  SOULSOFT INFOTECH PVT LTD.
                </span>{" "}
                (Serving 1500+ customers since 2012)
              </p>

              <p className="text-base text-blue-100">
                No.1 Billing Software that is very easy to use and understand.
              </p>

              <p className="text-base text-blue-100">
                Accounting & GST Billing with Barcode Inventory Management
                Software.
              </p>
            </motion.div>

            <motion.div
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button className="h-12 px-6 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 rounded-xl text-base font-semibold">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <span className="text-xs text-blue-200">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Floating UI */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative block max-w-sm w-full mx-auto mt-10 lg:mt-0 px-4"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <div className="h-3 bg-gradient-to-r from-cyan-400 to-blue-500" />
                <div className="p-0">
                  <img
                    src="https://soulsoft.in/wp-content/uploads/2025/04/Dashboard-4-1-1024x1024.png"
                    alt="Dashboard"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 right-4 sm:right-0 sm:-top-10 transform sm:translate-x-1/2
    bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 border border-white/50 z-50"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-xl font-bold text-slate-800">100%</p>
                  <p className="text-xs text-slate-500">GST Ready</p>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 left-4 sm:left-0 sm:-bottom-6 transform sm:-translate-x-1/2
    bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 border border-white/50 z-50"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-xl font-bold text-slate-800">24/7</p>
                  <p className="text-xs text-slate-500">Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
