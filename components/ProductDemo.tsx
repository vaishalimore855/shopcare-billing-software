// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchMockData } from "@/public/data/mockApi";
// import Card from "./common/Card";

// interface Video {
//   id: string;
//   title: string;
//   description: string;
// }

// export default function ProductDemo() {
//   const [mounted, setMounted] = useState(false);
//   const [activeVideo, setActiveVideo] = useState<Video | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const { data: videos = [], isLoading } = useQuery<Video[]>({
//     queryKey: ["videos"],
//     queryFn: () => fetchMockData("videos"),
//   });

//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => setMounted(true), []);

//   // Continuous scroll with active dot
//   useEffect(() => {
//     if (!carouselRef.current || videos.length === 0) return;
//     const container = carouselRef.current;
//     const singleCardWidth = container.children[0].clientWidth + 20; // card width + gap
//     const totalScroll = singleCardWidth * videos.length;
//     let scrollAmount = 0;

//     const interval = setInterval(() => {
//       scrollAmount += 1;
//       if (scrollAmount >= totalScroll) scrollAmount = 0;
//       container.style.transform = `translateX(-${scrollAmount}px)`;

//       const index = Math.floor(scrollAmount / singleCardWidth) % videos.length;
//       setActiveIndex(index);
//     }, 20);

//     return () => clearInterval(interval);
//   }, [videos]);

//   if (!mounted) return null;

//   // Duplicate videos for seamless loop
//   const loopVideos = [...videos, ...videos];

//   return (
//     // <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//     <section className="py-15 pb-5 px-6 bg-gradient-to-br from-blue-50 shadow-lg via-white to-cyan-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <div className="text-center mb-10"></div>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-3">
//             {/* <span className="text-slate-900">Our </span> */}
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               Product Demo
//             </span>
//           </h2>

//           <p className="text-lg text-slate-600">
//             A sophisticated and easy-to-use billing software for every business!
//           </p>
//         </motion.div>

//         {/* Carousel */}
//         {isLoading ? (
//           <div className="text-center py-20">Loading videos...</div>
//         ) : (
//           <div className="relative overflow-hidden rounded-3xl">
//             <div
//               ref={carouselRef}
//               className="flex gap-5 will-change-transform transition-transform"
//               style={{ display: "flex" }}
//             >
//               {loopVideos.map((video, index) => {
//                 const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
//                 const isActive = index % videos.length === activeIndex;

//                 return (
//                   <Card
//                     key={`${video.id}-${index}`}
//                     gradient={
//                       isActive
//                         ? "from-blue-500 to-cyan-400"
//                         : "from-white to-white"
//                     }
//                   >
//                     <div className="relative w-[350px] md:w-[400px] h-[240px] rounded-3xl overflow-hidden group cursor-pointer">
//                       <img
//                         src={thumbnailUrl}
//                         alt={video.title}
//                         className="w-full h-full object-cover rounded-3xl"
//                         // priority
//                       />

//                       <div className="absolute inset-0 bg-black/25 rounded-3xl" />
//                       <motion.button
//                         onClick={() => setActiveVideo(video)}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
//                       >
//                         <Play
//                           className="w-10 h-10 text-blue-600"
//                           fill="currentColor"
//                         />
//                       </motion.button>
//                     </div>

//                     <div className="p-4 flex justify-between items-center">
//                       <div>
//                         <h3 className="font-bold text-lg text-slate-900 truncate">
//                           {video.title}
//                         </h3>
//                         <p className="text-sm text-slate-600 truncate">
//                           {video.description}
//                         </p>
//                       </div>
//                       <div className="text-sm text-slate-500 font-semibold">
//                         {(index % videos.length) + 1}/{videos.length}
//                       </div>
//                     </div>
//                   </Card>
//                 );
//               })}
//             </div>

//             {/* Dots Navigation (Fixed) */}
//             <div className="flex justify-center mt-5 py-10">
//               <div className="flex gap-3">
//                 {videos.map((_, i) => (
//                   <span
//                     key={i}
//                     className={`w-2 h-2  rounded-full transition-all ${
//                       i === activeIndex
//                         ? "bg-blue-600 scale-125"
//                         : "bg-slate-300"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Video Popup */}
//         {activeVideo && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="w-full max-w-3xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl relative"
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
//                 title={activeVideo.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-64 md:h-96"
//               ></iframe>

//               <button
//                 onClick={() => setActiveVideo(null)}
//                 className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg"
//               >
//                 ✕
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchMockData } from "@/public/data/mockApi";
import Card from "./common/Card";

interface Video {
  id: string;
  title: string;
  description: string;
}

export default function ProductDemo() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const { data: videos = [], isLoading } = useQuery<Video[]>({
    queryKey: ["videos"],
    queryFn: () => fetchMockData("videos"),
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Get the first video as the featured video
  const featuredVideo = videos[0];

  // Preview features/benefits
  const features = [
    "Easy-to-use interface for quick billing",
    "Real-time inventory tracking",
    "Comprehensive sales reports and analytics",
    "Multi-store management capabilities",
    "GST compliant invoicing",
    "Customer management and loyalty programs",
  ];

  return (
    <section className="py-16 pb-8 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Product Demo
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A sophisticated and easy-to-use billing software for every business!
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-600">Loading video...</p>
          </div>
        ) : featuredVideo ? (
          /* Video and Preview Grid */
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Video Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card gradient="from-blue-500 to-cyan-400">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute inset-0 bg-black/30 rounded-2xl transition-all group-hover:bg-black/40" />

                  <motion.button
                    onClick={() => setActiveVideo(featuredVideo)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-10 transition-transform"
                  >
                    <Play
                      className="w-10 h-10 text-blue-600 ml-1"
                      fill="currentColor"
                    />
                  </motion.button>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-slate-600">{featuredVideo.description}</p>
                </div>
              </Card>
            </motion.div>

            {/* Right: Preview Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Why Choose Our Software?
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Streamline your business operations with our comprehensive
                  billing solution. Designed for efficiency and built for
                  growth.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-base">{feature}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveVideo(featuredVideo)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Watch Full Demo
              </motion.button>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-20 text-slate-600">
            No video available
          </div>
        )}

        {/* Video Popup */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:bg-slate-100 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
