


"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  RefreshCw,
  DollarSign,
  FileCheck,
  Printer,
  History,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { fetchBenefits } from "@/app/services/benefitService";

const iconMap: Record<string, any> = {
  RefreshCw,
  DollarSign,
  FileCheck,
  Printer,
  History,
};

export default function ImportantBenefits() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const { data: benefits = [], isLoading } = useQuery({
    queryKey: ["benefits"],
    queryFn: fetchBenefits,
  });

  if (!mounted) return null;

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Floating Soft Lights */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ---------------- LEFT SIDE – Modern Card + Two Badges ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">

              {/* Main Image */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://soulsoft.in/wp-content/uploads/2025/04/Untitled-design-4-1024x858.png?w=800&q=80"
                alt="Benefits"
                className="rounded-3xl shadow-xl"
              />

              {/* ✳ New Badge — Happy Clients */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl px-8 py-5 shadow-2xl flex flex-col items-center"
              >
                <p className="text-white text-3xl font-bold">95%</p>
                <p className="text-sm text-white/90">Happy Clients</p>
              </motion.div>

              {/* Existing Badge — 100% Satisfaction */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl px-8 py-6 shadow-2xl flex flex-col items-center"
              >
                <p className="text-white text-4xl font-bold">100%</p>
                <p className="text-sm text-white/90">Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ---------------- RIGHT SIDE – Benefits List ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Important{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-12">
              Powerful automation, advanced accuracy & seamless experience.
            </p>

            {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="w-10 h-10 animate-spin text-white" />
              </div>
            ) : (
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = iconMap[benefit.icon] || CheckCircle;

                  return (
                    <motion.div
                      key={benefit.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>

                        <div className="flex-1">
                          <p className="text-xl text-white font-semibold">
                            {benefit.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
