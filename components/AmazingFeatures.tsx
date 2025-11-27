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

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ShoppingCart,
  FileText,
  BarChart2,
  Users,
  Mail,
  RefreshCw,
  Package,
  ShoppingBag,
  LucideIcon,
  Loader2,
} from "lucide-react";

import { fetchMockData } from "@/public/data/mockApi";
import { Feature } from "@/app/types/features";

// ⭐ Card Component
const Card = ({
  icon: Icon,
  title,
  description,
  gradient,
  className = "",
}: any) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -5 }}
    className={`bg-white rounded-3xl shadow-xl border border-slate-100 p-4 flex flex-col h-full ${className}`}
  >
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} mb-4`}
    >
      <Icon className="w-7 h-7 text-white" />
    </div>

    <h3 className="text-2xl font-bold text-slate-800 mb-3 line-clamp-1">
      {title}
    </h3>

    <p className="text-base text-slate-600 flex-grow leading-relaxed line-clamp-4">
      {description}
    </p>

    <div className="mt-4"></div>
  </motion.div>
);

// Icon Map
const IconMap: { [key: string]: LucideIcon } = {
  ShoppingCart,
  FileText,
  BarChart2,
  Users,
  Mail,
  RefreshCw,
  Package,
  ShoppingBag,
};

// Gradient Palette
const gradientPalette = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-orange-500 to-red-400",
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ⭐ FIXED ONLY THIS — NOTHING ELSE CHANGED
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // TS-safe easing
  },
};

export default function AmazingFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Data
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const allFeatures = await fetchMockData("features");

        const displayed = allFeatures
          .filter((f) => f.category === "main" || f.category === "benefit")
          .slice(0, 3);

        setFeatures(displayed);
      } catch (err) {
        console.error("Failed to fetch features:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeatures();
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 lg:py-16 px-6 bg-white flex justify-center items-center h-48">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
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
            Powerful tools designed for modern businesses.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => {
              const IconComponent = IconMap[feature.icon] || Users;
              const gradient = gradientPalette[index % gradientPalette.length];

              return (
                <Card
                  key={feature.title}
                  icon={IconComponent}
                  title={feature.title}
                  description={feature.description}
                  gradient={gradient}
                  className="h-full"
                />
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
