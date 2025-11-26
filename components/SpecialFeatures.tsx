// // // "use client";

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { useQuery } from "@tanstack/react-query";
// // // import { fetchMockData } from "@/app/data/mockApi";
// // // import { Feature } from "@/app/types/features";

// // // import {
// // //   Users,
// // //   Database,
// // //   MessageSquare,
// // //   Shield,
// // //   TrendingUp,
// // //   Mail,
// // //   ShoppingCart,
// // //   BarChart2,
// // //   FileText,
// // //   RefreshCw,
// // //   DollarSign,
// // //   Loader2,
// // // } from "lucide-react";

// // // // Icon Mapping
// // // const iconMap: Record<string, any> = {
// // //   Users,
// // //   Database,
// // //   MessageSquare,
// // //   Shield,
// // //   TrendingUp,
// // //   Mail,
// // //   ShoppingCart,
// // //   BarChart2,
// // //   FileText,
// // //   RefreshCw,
// // //   DollarSign,
// // // };

// // // const gradients = [
// // //   "from-blue-500 to-cyan-400",
// // //   "from-purple-500 to-pink-400",
// // //   "from-cyan-500 to-blue-400",
// // //   "from-green-500 to-emerald-400",
// // //   "from-orange-500 to-red-400",
// // //   "from-pink-500 to-rose-400",
// // // ];

// // // export default function SpecialFeatures() {
// // //   const [mounted, setMounted] = React.useState(false);
// // //   React.useEffect(() => setMounted(true), []);

// // //   const { data: allFeatures = [], isLoading } = useQuery({
// // //     queryKey: ["features"],
// // //     queryFn: () => fetchMockData("features"),
// // //   });

// // //   if (!mounted) return null; // wait for client

// // //   // Filter special features
// // //   const features: Feature[] = allFeatures.filter(
// // //     (f) => f.category === "special"
// // //   );

// // //   return (
// // //     <section className="py-24 px-6 bg-white relative overflow-hidden">
// // //       <div className="absolute inset-0">
// // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
// // //         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto relative z-10 text-center">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="mb-16"
// // //         >
// // //           <h2 className="text-5xl md:text-6xl font-bold mb-4">
// // //             <span className="text-slate-900">Our </span>
// // //             <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
// // //               Special Features
// // //             </span>
// // //           </h2>
// // //           <p className="text-xl text-slate-600">
// // //             Advanced capabilities that set us apart from the competition.
// // //           </p>
// // //         </motion.div>

// // //         {isLoading ? (
// // //           <div className="flex justify-center items-center py-20">
// // //             <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
// // //           </div>
// // //         ) : (
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {features.map((feature, index) => {
// // //               const Icon = iconMap[feature.icon || "Users"];
// // //               const gradient = gradients[index % gradients.length];

// // //               return (
// // //                 <motion.div
// // //                   key={index}
// // //                   initial={{ opacity: 0, y: 50 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: index * 0.05 }}
// // //                   whileHover={{ y: -10, scale: 1.02 }}
// // //                   className="group relative"
// // //                 >
// // //                   <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
// // //                     <motion.div
// // //                       whileHover={{ rotate: 360 }}
// // //                       transition={{ duration: 0.6 }}
// // //                       className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl mb-6 shadow-lg`}
// // //                     >
// // //                       <Icon className="w-7 h-7 text-white" />
// // //                     </motion.div>

// // //                     <h3 className="text-xl font-bold text-slate-800 mb-3">
// // //                       {feature.title}
// // //                     </h3>
// // //                     <p className="text-slate-600">{feature.description}</p>

// // //                     <div
// // //                       className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
// // //                     />
// // //                     <div
// // //                       className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full`}
// // //                     />
// // //                   </div>
// // //                 </motion.div>
// // //               );
// // //             })}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { useQuery } from "@tanstack/react-query";
// // import { fetchMockData } from "@/app/data/mockApi";
// // import { Feature } from "@/app/types/features";

// // import {
// //   Users,
// //   Database,
// //   MessageSquare,
// //   Shield,
// //   TrendingUp,
// //   Mail,
// //   ShoppingCart,
// //   BarChart2,
// //   FileText,
// //   RefreshCw,
// //   DollarSign,
// // } from "lucide-react";
// // import { Loader2 } from "lucide-react";
// // import Card from "./common/Card";

// // // icon mapping
// // const iconMap: Record<string, any> = {
// //   Users,
// //   Database,
// //   MessageSquare,
// //   Shield,
// //   TrendingUp,
// //   Mail,
// //   ShoppingCart,
// //   BarChart2,
// //   FileText,
// //   RefreshCw,
// //   DollarSign,
// // };

// // const gradients = [
// //   "from-blue-500 to-cyan-400",
// //   "from-purple-500 to-pink-400",
// //   "from-cyan-500 to-blue-400",
// //   "from-green-500 to-emerald-400",
// //   "from-orange-500 to-red-400",
// //   "from-pink-500 to-rose-400",
// // ];

// // export default function SpecialFeatures() {
// //   const { data: allFeatures = [], isLoading } = useQuery({
// //     queryKey: ["features"],
// //     queryFn: () => fetchMockData("features"),
// //   });

// //   const features: Feature[] = allFeatures.filter(
// //     (f) => f.category === "special"
// //   );

// //   return (
// //     <section className="py-24 px-6 bg-white relative overflow-hidden">
// //       <div className="max-w-7xl mx-auto relative z-10 text-center">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="mb-16"
// //         >
// //           <h2 className="text-4xl lg:text-5xl md:text-4xl font-bold mb-3">
// //             <span className="text-slate-900">Our </span>
// //             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
// //               Special Features
// //             </span>
// //           </h2>

// //           <p className="text-xl text-slate-600">
// //             Advanced capabilities that set us apart from the competition.
// //           </p>
// //         </motion.div>

// //         {/* Loading */}
// //         {isLoading ? (
// //           <div className="flex justify-center items-center py-20">
// //             <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
// //           </div>
// //         ) : (
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {features.map((feature, index) => {
// //               const Icon = iconMap[feature.icon || "Users"];
// //               const gradient = gradients[index % gradients.length];

// //               return (
// //                 <Card
// //                   key={index}
// //                   icon={Icon}
// //                   title={feature.title}
// //                   description={feature.description}
// //                   gradient={gradient}
// //                   delay={index * 0.05}
// //                   hoverRotate={true}
// //                 />
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { fetchMockData } from "@/app/data/mockApi";
// import { Feature } from "@/app/types/features";

// import {
//   Users,
//   Database,
//   MessageSquare,
//   Shield,
//   TrendingUp,
//   Mail,
//   ShoppingCart,
//   BarChart2,
//   FileText,
//   RefreshCw,
//   DollarSign,
// } from "lucide-react";
// import { Loader2 } from "lucide-react";

// // Assuming Card component looks something like this (since it's not provided)
// const Card = ({
//   icon: Icon,
//   title,
//   description,
//   gradient,
//   delay,
//   hoverRotate,
// }: {
//   icon: any;
//   title: string;
//   description: string;
//   gradient: string;
//   delay: number;
//   hoverRotate: boolean;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: delay, duration: 0.5 }}
//     whileHover={{ y: -5, scale: 1.01 }}
//     className="group relative h-full"
//   >
//     <div className="h-full bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center">
//       <motion.div
//         whileHover={{ rotate: hoverRotate ? 360 : 0 }}
//         transition={{ duration: 0.6 }}
//         className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl mb-4 shadow-lg`}
//       >
//         <Icon className="w-6 h-6 text-white" />
//       </motion.div>

//       <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
//       <p className="text-sm text-slate-600 flex-grow">{description}</p>

//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
//       />
//       <div
//         className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full`}
//       />
//     </div>
//   </motion.div>
// );

// // icon mapping
// const iconMap: Record<string, any> = {
//   Users,
//   Database,
//   MessageSquare,
//   Shield,
//   TrendingUp,
//   Mail,
//   ShoppingCart,
//   BarChart2,
//   FileText,
//   RefreshCw,
//   DollarSign,
// };

// const gradients = [
//   "from-blue-500 to-cyan-400",
//   "from-purple-500 to-pink-400",
//   "from-cyan-500 to-blue-400",
//   "from-green-500 to-emerald-400",
//   "from-orange-500 to-red-400",
//   "from-pink-500 to-rose-400",
// ];

// export default function SpecialFeatures() {
//   const { data: allFeatures = [], isLoading } = useQuery<Feature[]>({
//     queryKey: ["features"],
//     queryFn: () => fetchMockData("features"),
//   });

//   const features: Feature[] = allFeatures.filter(
//     (f) => f.category === "special"
//   );

//   return (
//     <section className="py-16 px-6 bg-white relative overflow-hidden">
//            {" "}
//       <div className="max-w-7xl mx-auto relative z-10 text-center">
//                    {" "}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           {" "}
//           <h2 className="text-4xl lg:text-5xl md:text-4xl font-bold mb-3">
//             <span className="text-slate-900">Our </span>
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               Special Features
//             </span>
//           </h2>
//           <p className="text-xl text-slate-600">
//             Advanced capabilities that set us apart from the competition.
//           </p>
//         </motion.div>
//         {isLoading ? (
//           <div className="flex justify-center items-center py-20">
//             <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => {
//               const Icon = iconMap[feature.icon || "Users"];
//               const gradient = gradients[index % gradients.length];

//               return (
//                 <Card
//                   key={index}
//                   icon={Icon}
//                   title={feature.title}
//                   description={feature.description}
//                   gradient={gradient}
//                   delay={index * 0.05}
//                   hoverRotate={true}
//                 />
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

import { fetchMockData } from "@/app/data/mockApi";
import { Feature } from "@/app/types/features";

import {
  Users,
  Database,
  MessageSquare,
  Shield,
  TrendingUp,
  Mail,
  ShoppingCart,
  BarChart2,
  FileText,
  RefreshCw,
  DollarSign,
  LucideIcon,
  Loader2,
} from "lucide-react";

// Icon Mapping
const IconMap: Record<string, LucideIcon> = {
  Users,
  Database,
  MessageSquare,
  Shield,
  TrendingUp,
  Mail,
  ShoppingCart,
  BarChart2,
  FileText,
  RefreshCw,
  DollarSign,
};

// Gradient Palette (Cycling)
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ⭐ UPDATED CARD COMPONENT (reduced padding + bigger fonts)
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

export default function SpecialFeatures() {
  const { data: allFeatures = [], isLoading } = useQuery<Feature[]>({
    queryKey: ["features"],
    queryFn: () => fetchMockData("features"),
  });

  const features = allFeatures.filter((f) => f.category === "special");

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
              Special Features
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Advanced capabilities that set us apart from the competition.
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
