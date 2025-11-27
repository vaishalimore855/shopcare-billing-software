// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// import {
//   ShoppingCart,
//   FileText,
//   BarChart2,
//   Users,
//   Mail,
//   RefreshCw,
//   Package,
//   ShoppingBag,
//   LucideIcon,
//   Loader2,
// } from "lucide-react";

// import { fetchMockData } from "@/public/data/mockApi";
// import { Feature } from "@/app/types/features";

// // ⭐ UPDATED Card (same styling used in SpecialFeatures)
// const Card = ({
//   icon: Icon,
//   title,
//   description,
//   gradient,
//   className = "",
// }: any) => (
//   <motion.div
//     variants={cardVariants}
//     whileHover={{ y: -5 }}
//     className={`bg-white rounded-3xl shadow-xl border border-slate-100 p-4 flex flex-col h-full ${className}`}
//   >
//     <div
//       className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} mb-4`}
//     >
//       <Icon className="w-7 h-7 text-white" />
//     </div>

//     <h3 className="text-2xl font-bold text-slate-800 mb-3 line-clamp-1">
//       {title}
//     </h3>

//     <p className="text-base text-slate-600 flex-grow leading-relaxed line-clamp-4">
//       {description}
//     </p>

//     <div className="mt-4"></div>
//   </motion.div>
// );

// // Icon Map
// const IconMap: { [key: string]: LucideIcon } = {
//   ShoppingCart,
//   FileText,
//   BarChart2,
//   Users,
//   Mail,
//   RefreshCw,
//   Package,
//   ShoppingBag,
// };

// // Gradient Palette
// const gradientPalette = [
//   "from-blue-500 to-cyan-400",
//   "from-purple-500 to-pink-400",
//   "from-orange-500 to-red-400",
// ];

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// export default function AmazingFeatures() {
//   const [features, setFeatures] = useState<Feature[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch Data
//   useEffect(() => {
//     const loadFeatures = async () => {
//       try {
//         const allFeatures = await fetchMockData("features");

//         const displayed = allFeatures
//           .filter((f) => f.category === "main" || f.category === "benefit")
//           .slice(0, 3);

//         setFeatures(displayed);
//       } catch (err) {
//         console.error("Failed to fetch features:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadFeatures();
//   }, []);

//   if (isLoading) {
//     return (
//       <section className="py-12 lg:py-16 px-6 bg-white flex justify-center items-center h-48">
//         <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 lg:py-16 px-6 bg-white relative">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-3">
//             <span className="text-slate-900">Our </span>
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               Amazing Features
//             </span>
//           </h2>

//           <p className="text-lg text-slate-600">
//             Powerful tools designed for modern businesses.
//           </p>
//         </motion.div>

//         {isLoading ? (
//           <div className="flex justify-center items-center h-48">
//             <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
//           </div>
//         ) : (
//           <motion.div
//             className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {features.map((feature, index) => {
//               const IconComponent = IconMap[feature.icon] || Users;
//               const gradient = gradientPalette[index % gradientPalette.length];

//               return (
//                 <Card
//                   key={feature.title}
//                   icon={IconComponent}
//                   title={feature.title}
//                   description={feature.description}
//                   gradient={gradient}
//                   className="h-full"
//                 />
//               );
//             })}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Card from "./common/Card";

// Import Icons
import {
  ShoppingCart,
  FileText,
  BarChart2,
  Users,
  Mail,
  RefreshCw,
  Package,
  ShoppingBag,
} from "lucide-react";

// Fetch mock API
import { fetchMockData } from "@/public/data/mockApi";
import { Feature } from "@/app/types/features";

// Icon Mapping
const IconMap = {
  ShoppingCart,
  FileText,
  BarChart2,
  Users,
  Mail,
  RefreshCw,
  Package,
  ShoppingBag,
};

// Gradient palette
const gradientPalette = [
  "linear-gradient(135deg, #6D5DFB 0%, #928BFF 100%)",
  "linear-gradient(135deg, #FF8A00 0%, #FFC000 100%)",
  "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
  "linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%)",
];

// Animation Variants (Fixed Type Error)
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as any, // FIXED FOR NETLIFY
    },
  },
};

export default function AmazingFeatures() {
  const { data: features = [], isLoading } = useQuery<Feature[]>({
    queryKey: ["features"],
    queryFn: () => fetchMockData("features"),
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-slate-900">Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Amazing Features
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Discover the powerful tools that make our platform fast, easy, and
            enjoyable to use.
          </p>
        </motion.div>
        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading && (
            <p className="col-span-3 text-center text-gray-500">
              Loading features...
            </p>
          )}

          {/* Map Features */}
          {!isLoading &&
            features?.map((feature, index) => {
              // SAFETY CHECK → FIXES NETLIFY ERROR
              if (!feature || !feature.icon) return null;

              // Safe Icon Mapping
              const key = feature.icon as keyof typeof IconMap;
              const IconComponent = IconMap[key];

              const gradient = gradientPalette[index % gradientPalette.length];

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="p-6 rounded-2xl shadow-xl bg-white flex flex-col gap-4"
                >
                  {/* ICON */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
                    style={{ background: gradient }}
                  >
                    <IconComponent size={30} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
