// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { Star, Quote, Loader2 } from "lucide-react";
// import { Testimonial } from "@/app/types/testimonials";
// import { fetchMockData } from "@/app/data/mockApi";
// import Card from "./common/Card";
// export default function CustomerReviews() {
//   const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
//     queryKey: ["testimonials"],
//     queryFn: () => fetchMockData("testimonials"),
//   });

//   return (
//     <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-slate-900">What Our </span>
//             <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//               Customers Say
//             </span>
//           </h2>
//           <p className="text-xl text-slate-600">
//             Real feedback from businesses using Shopcare
//           </p>
//         </motion.div>

//         {/* Loading State */}
//         {isLoading ? (
//           <div className="flex justify-center items-center py-20">
//             <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="group"
//               >
//                 <Card gradient="from-blue-500 to-cyan-400" delay={index * 0.1}>
//                   {/* Quote Icon */}
//                   <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center opacity-50">
//                     <Quote className="w-10 h-10 text-blue-600" />
//                   </div>

//                   {/* Stars */}
//                   <div className="flex items-center space-x-1 mb-4 mt-2">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-5 h-5 text-yellow-400"
//                         fill="currentColor"
//                       />
//                     ))}
//                   </div>

//                   {/* Review */}
//                   <p className="text-slate-700 leading-relaxed mb-6 text-lg relative z-10">
//                     {testimonial.review}
//                   </p>

//                   {/* Customer Info */}
//                   <div className="flex items-center space-x-4 pt-6 border-t border-slate-200">
//                     <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center shadow-lg">
//                       {testimonial.image_url ? (
//                         <img
//                           src={testimonial.image_url}
//                           alt={testimonial.customer_name}
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <span className="text-white font-bold text-xl">
//                           {testimonial.customer_name[0]}
//                         </span>
//                       )}
//                     </div>
//                     <div>
//                       <p className="font-bold text-slate-900">
//                         {testimonial.customer_name}
//                       </p>
//                       <p className="text-sm text-slate-600">
//                         {testimonial.business_name}
//                       </p>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0 opacity-20">
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   backgroundImage:
//                     "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//                   backgroundSize: "40px 40px",
//                 }}
//               />
//             </div>

//             <div className="relative z-10">
//               <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 We can help you in Your Business!
//               </h3>
//               <p className="text-xl text-blue-100 mb-8">
//                 Join 1500+ satisfied customers and transform your business
//                 operations today
//               </p>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
//               >
//                 Purchase Now
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Star, Quote, Loader2 } from "lucide-react";
import { Testimonial } from "@/app/types/testimonials";
import { fetchMockData } from "@/app/data/mockApi";
import Card from "./common/Card";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CustomerReviews() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: () => fetchMockData("testimonials"),
  });

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-slate-900">What Our </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Real feedback from businesses using Shopcare
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card gradient="from-blue-500 to-cyan-400" delay={index * 0.1}>
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center opacity-50">
                    <Quote className="w-10 h-10 text-blue-600" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-slate-700 leading-relaxed mb-6 text-lg relative z-10">
                    {testimonial.review}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-slate-200">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center shadow-lg">
                      {testimonial.image_url ? (
                        <img
                          src={testimonial.image_url}
                          alt={testimonial.customer_name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-bold text-xl">
                          {testimonial.customer_name[0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">
                        {testimonial.customer_name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.business_name}
                      </p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                We can help you in Your Business!
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Join 1500+ satisfied customers and transform your business
                operations today
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Purchase Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
