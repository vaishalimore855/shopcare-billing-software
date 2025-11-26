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
    <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Soft Lights */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ---------------- LEFT SIDE ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative"
          >
            <div className="relative p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl w-[90%] mx-auto">
              {/* Image */}
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                src="https://soulsoft.in/wp-content/uploads/2025/04/Untitled-design-4-1024x858.png?w=800&q=80"
                alt="Benefits"
                className="rounded-2xl shadow-lg w-full h-auto"
              />

              {/* Happy Clients Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-green-400 to-emerald-500 
                  rounded-xl px-6 py-3 shadow-xl flex flex-col items-center"
              >
                <p className="text-white text-2xl font-bold">95%</p>
                <p className="text-xs text-white/90">Happy Clients</p>
              </motion.div>

              {/* Satisfaction Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-400 to-blue-500 
                  rounded-xl px-6 py-4 shadow-xl flex flex-col items-center"
              >
                <p className="text-white text-3xl font-bold">100%</p>
                <p className="text-xs text-white/90">Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ---------------- RIGHT SIDE ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Important{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>

            <p className="text-base text-blue-100 mb-8">
              Powerful automation, advanced accuracy & seamless experience.
            </p> */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                <span className="text-slate-900 text-white">Important </span>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>

              <p className="text-lg text-slate-600">
                Powerful automation, advanced accuracy & seamless experience.
              </p>
            </motion.div>
            {isLoading ? (
              <div className="flex justify-center items-center py-6">
                <Loader2 className="w-8 h-8 animate-spin text-white" />
              </div>
            ) : (
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = iconMap[benefit.icon] || CheckCircle;

                  return (
                    <motion.div
                      key={benefit.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.07 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className="flex items-start space-x-3 bg-white/5 backdrop-blur-lg 
                        rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 
                            rounded-lg flex items-center justify-center shadow-md"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Title */}
                        <div className="flex-1">
                          <p className="text-lg text-white font-semibold">
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
