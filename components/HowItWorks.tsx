// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { fetchMockData } from "@/app/data/mockApi";
// import { Feature } from "@/app/types/features";

// import {
//   FileText,
//   Package,
//   ShoppingBag,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const iconMap: Record<string, any> = {
//   FileText,
//   Package,
//   ShoppingBag,
// };

// const images = [
//   "https://soulsoft.in/wp-content/uploads/2025/04/Dashboard-1-1024x1024.png?w=600&q=80",
//   "https://soulsoft.in/wp-content/uploads/2025/04/Dashboard-2-1024x1024.png?w=600&q=80",
//   "https://soulsoft.in/wp-content/uploads/2025/04/Dashboard-3-1024x1024.png?w=600&q=80",
// ];

// export default function HowItWorks() {
//   const { data: allFeatures = [], isLoading } = useQuery({
//     queryKey: ["workflow"],
//     queryFn: () => fetchMockData("features"),
//   });

//   // Filter workflow steps
//   const workflows: Feature[] = allFeatures
//     .filter((f) => f.category === "workflow")
//     .sort((a, b) => (a.order || 0) - (b.order || 0));

//   return (
//     <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 relative overflow-hidden">
//       {/* Animated Background */}
//       <motion.div
//         animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//         transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 20% 50%, rgba(59,130,246,.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6,182,212,.1) 0%, transparent 50%)",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-slate-900">How It </span>
//             <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//               Works
//             </span>
//           </h2>
//           <p className="text-xl text-slate-600">
//             Simple and efficient workflow that powers your business
//           </p>
//         </motion.div>

//         {/* Loading */}
//         {isLoading ? (
//           <div className="flex justify-center items-center py-20">
//             <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
//           </div>
//         ) : (
//           <div className="space-y-32">
//             {workflows.map((workflow, index) => {
//               const Icon = iconMap[workflow.icon || "FileText"];
//               const isEven = index % 2 === 1;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                   className={`grid lg:grid-cols-2 gap-12 items-center ${
//                     isEven ? "lg:flex-row-reverse" : ""
//                   }`}
//                 >
//                   {/* Content */}
//                   <div className={isEven ? "lg:order-2" : ""}>
//                     <div className="flex items-start mb-6">
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30"
//                       >
//                         <Icon className="w-8 h-8 text-white" />
//                       </motion.div>

//                       <div className="flex-1">
//                         <span className="inline-block text-7xl font-bold text-blue-100 -mt-4 mb-2">
//                           0{index + 1}
//                         </span>
//                       </div>
//                     </div>

//                     <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
//                       {workflow.title}
//                     </h3>

//                     <p className="text-lg text-slate-600 leading-relaxed mb-6">
//                       {workflow.description}
//                     </p>

//                     <motion.div
//                       whileHover={{ x: 10 }}
//                       className="inline-flex items-center text-blue-600 font-semibold cursor-pointer group"
//                     >
//                       Learn more
//                       <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                     </motion.div>
//                   </div>

//                   {/* Image */}
//                   <div className={isEven ? "lg:order-1" : ""}>
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.3 }}
//                       className="relative group"
//                     >
//                       {/* Glow Effect */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />

//                       {/* Card */}
//                       <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
//                         <div className="aspect-[4/3] rounded-2xl overflow-hidden">
//                           <img
//                             src={images[index] || images[0]}
//                             alt={workflow.title}
//                             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                           />
//                         </div>
//                       </div>

//                       {/* Decorative Circle */}
//                       <div
//                         className={`absolute ${
//                           isEven ? "-left-8" : "-right-8"
//                         } top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-2xl`}
//                       />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchMockData } from "@/app/data/mockApi"; // Your mock API
import { Feature } from "@/app/types/features";
import { FileText, Package, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";

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
    <section className="py-32 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 relative overflow-hidden">
      {/* Animated Grid Background */}
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
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-cyan-400 text-sm font-semibold">
              Our Process
            </span>
          </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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

            <div className="space-y-24">
              {workflows.map((workflow, index) => {
                const Icon = iconMap[workflow.icon as keyof typeof iconMap] || FileText;
                const isEven = index % 2 === 1;

                return (
                  <motion.div
                    key={workflow.order}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full items-center justify-center shadow-2xl shadow-cyan-500/50"
                    >
                      <span className="text-3xl font-bold text-white">{index + 1}</span>
                    </motion.div>

                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : ""}`}>
                      {/* Content Card */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className={`${isEven ? "lg:order-2 lg:pl-16" : "lg:pr-16"}`}
                      >
                        <div className="relative group">
                          {/* Glowing Border */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500" />

                          <div className="relative bg-white border border-slate-200 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                            {/* Icon Badge */}
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-cyan-500/30"
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </motion.div>

                            {/* Mobile Step */}
                            <div className="lg:hidden inline-block px-4 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-300 rounded-full mb-4">
                              <span className="text-cyan-600 font-bold">Step {index + 1}</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                              {workflow.title}
                            </h3>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">{workflow.description}</p>

                            <motion.button
                              whileHover={{ x: 10 }}
                              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 rounded-xl text-cyan-600 font-semibold group hover:bg-cyan-100 transition-all"
                            >
                              Learn more
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </motion.button>

                            {/* Corner Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/50 to-transparent rounded-bl-full" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Image Card */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className={`${isEven ? "lg:order-1 lg:pr-16" : "lg:pl-16"}`}
                      >
                        <div className="relative group">
                          {/* Glow Animation */}
                          <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-3xl"
                          />

                          {/* Image */}
                          <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-4 border border-slate-200 overflow-hidden shadow-xl">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="aspect-[4/3] rounded-2xl overflow-hidden">
                              <img src={images[index] || images[0]} alt={workflow.title} className="w-full h-full object-cover" />
                            </motion.div>

                            {/* Shine */}
                            <motion.div initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </div>

                          {/* Floating Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className={`absolute ${isEven ? "-left-6" : "-right-6"} -bottom-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-2xl`}
                          >
                            <p className="text-white font-bold">Step {index + 1}</p>
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
