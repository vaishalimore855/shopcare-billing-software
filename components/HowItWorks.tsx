"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchMockData } from "@/public/data/mockApi"; // Your mock API
import { Feature } from "@/app/types/features";
import {
  FileText,
  Package,
  ShoppingBag,
  ArrowRight,
  Loader2,
} from "lucide-react";

// Icon map
const iconMap = {
  FileText: FileText,
  Package: Package,
  ShoppingBag: ShoppingBag,
};

const images: string[] = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
];

export default function HowItWorks() {
  const { data: allFeatures = [], isLoading } = useQuery<Feature[]>({
    queryKey: ["workflow"],
    queryFn: () => fetchMockData("features"),
  });

  const workflows: Feature[] = allFeatures
    .filter((f) => f.category === "workflow")
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 relative overflow-hidden">
      {/* Animated Grid Background - Animation Kept */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-cyan-200/20 to-purple-200/30"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // Animation kept and enabled for bidirectional scroll
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple and efficient workflow that powers your business
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-cyan-400" />
          </div>
        ) : (
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />

            <div className="space-y-12">
              {workflows.map((workflow, index) => {
                const Icon =
                  iconMap[workflow.icon as keyof typeof iconMap] || FileText;
                const isEven = index % 2 === 1;

                return (
                  <motion.div
                    key={workflow.order}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // Animation kept and enabled for bidirectional scroll
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Step Number Circle (Smooth, Bidirectional Animation) */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      // **MODIFICATION for smooth, slow-motion effect:**
                      // 1. Removed viewport={{ once: true }} for bidirectional trigger.
                      // 2. Increased duration to 1.0s and added a slight delay.
                      transition={{
                        delay: 0.6, // Start slightly later
                        duration: 1.0, // Slow motion duration (1.0s)
                        type: "spring", // Use spring for smoothness
                        stiffness: 100, // Reduced stiffness for a slower pop
                      }}
                      className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full items-center justify-center shadow-2xl shadow-cyan-500/50"
                    >
                      <span className="text-xl font-bold text-white">
                        {index + 1}
                      </span>
                    </motion.div>

                    <div
                      className={`grid lg:grid-cols-2 gap-8 items-center ${
                        isEven ? "" : ""
                      }`}
                    >
                      {/* Content Card */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // Animation kept and enabled for bidirectional scroll
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className={`${
                          isEven ? "lg:order-2 lg:pl-4" : "lg:pr-4"
                        }`}
                      >
                        <div className="relative group">
                          {/* Glowing Border */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500" />

                          <div className="relative bg-white border border-slate-200 rounded-3xl p-5 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                            {/* Icon Badge */}
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 shadow-lg shadow-cyan-500/30"
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>

                            {/* Mobile Step */}
                            <div className="lg:hidden inline-block px-3 py-0.5 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-300 rounded-full mb-3 text-sm">
                              <span className="text-cyan-600 font-bold">
                                Step {index + 1}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                              {workflow.title}
                            </h3>

                            <p className="text-base text-slate-600 flex-grow leading-relaxed line-clamp-4">
                              {workflow.description}
                            </p>

                            <motion.button
                              whileHover={{ x: 10 }}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 rounded-lg text-cyan-600 font-semibold text-sm group hover:bg-cyan-100 transition-all"
                            >
                              Learn more
                              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </motion.button>

                            {/* Corner Decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100/50 to-transparent rounded-bl-full" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Image Card */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // Animation kept and enabled for bidirectional scroll
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className={`${
                          isEven ? "lg:order-1 lg:pr-4" : "lg:pl-4"
                        } max-w-lg lg:max-w-sm mx-auto`}
                      >
                        <div className="relative group">
                          {/* Glow Animation - Animation Kept */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-3xl"
                          />

                          {/* Image */}
                          <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-3 border border-slate-200 overflow-hidden shadow-xl">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                              className="aspect-[4/3] rounded-2xl overflow-hidden"
                            >
                              <img
                                src={images[index] || images[0]}
                                alt={workflow.title}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>

                            {/* Shine - Animation Kept */}
                            <motion.div
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            />
                          </div>

                          {/* Floating Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // Animation kept and enabled for bidirectional scroll
                            transition={{ delay: 0.6 }}
                            className={`absolute ${
                              isEven ? "-left-4" : "-right-4"
                            } -bottom-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-2xl`}
                          >
                            <p className="text-white font-semibold text-sm">
                              Step {index + 1}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
