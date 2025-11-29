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

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: videos = [], isLoading } = useQuery<Video[]>({
    queryKey: ["videos"],
    queryFn: () => fetchMockData("videos"),
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Continuous scroll with active dot (only if multiple videos)
  useEffect(() => {
    if (!carouselRef.current || videos.length <= 1) return;
    const container = carouselRef.current;
    const singleCardWidth = container.children[0].clientWidth + 20; // card width + gap
    const totalScroll = singleCardWidth * videos.length;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 1;
      if (scrollAmount >= totalScroll) scrollAmount = 0;
      container.style.transform = `translateX(-${scrollAmount}px)`;

      const index = Math.floor(scrollAmount / singleCardWidth) % videos.length;
      setActiveIndex(index);
    }, 20);

    return () => clearInterval(interval);
  }, [videos]);

  if (!mounted) return null;

  // Duplicate videos for seamless loop if more than 1
  const loopVideos = videos.length > 1 ? [...videos, ...videos] : videos;

  return (
    <section className="py-15 pb-5 px-6 bg-gradient-to-br from-blue-50 shadow-lg via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
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
          <p className="text-lg text-slate-600">
            A sophisticated and easy-to-use billing software for every business!
          </p>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-20">Loading videos...</div>
        ) : videos.length === 0 ? (
          <div className="text-center py-20">No videos available</div>
        ) : videos.length === 1 ? (
          // Single video display
          // <div className="flex justify-center">
          //   <Card gradient="from-blue-500 to-cyan-400">
          //     <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
          //       <img
          //         src={`https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg`}
          //         alt={videos[0].title}
          //         className="w-full h-full object-cover rounded-3xl"
          //       />
          //       <div className="absolute inset-0 bg-black/25 rounded-3xl" />
          //       <motion.button
          //         onClick={() => setActiveVideo(videos[0])}
          //         whileHover={{ scale: 1.1 }}
          //         whileTap={{ scale: 0.95 }}
          //         className="absolute inset-0 m-auto w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
          //       >
          //         <Play
          //           className="w-12 h-12 text-blue-600"
          //           fill="currentColor"
          //         />
          //       </motion.button>
          //     </div>
          //     <div className="p-4 flex justify-between items-center">
          //       <div>
          //         <h3 className="font-bold text-xl md:text-2xl text-slate-900 truncate">
          //           {videos[0].title}
          //         </h3>
          //         <p className="text-sm md:text-base text-slate-600 truncate">
          //           {videos[0].description}
          //         </p>
          //       </div>
          //     </div>
          //   </Card>
          // </div>
          <div className="flex justify-center px-4">
            <Card gradient="from-blue-500 to-cyan-400">
              <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden group cursor-pointer">
                <img
                  src={`https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg`}
                  alt={videos[0].title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/25 rounded-3xl" />
                <motion.button
                  onClick={() => setActiveVideo(videos[0])}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 m-auto w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
                >
                  <Play
                    className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-blue-600"
                    fill="currentColor"
                  />
                </motion.button>
              </div>
              <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex-1">
                  <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 truncate">
                    {videos[0].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 truncate">
                    {videos[0].description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          // Carousel for multiple videos
          <div className="relative overflow-hidden rounded-3xl">
            <div
              ref={carouselRef}
              className="flex gap-5 will-change-transform transition-transform"
            >
              {loopVideos.map((video, index) => {
                const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
                const isActive = index % videos.length === activeIndex;

                return (
                  <Card
                    key={`${video.id}-${index}`}
                    gradient={
                      isActive
                        ? "from-blue-500 to-cyan-400"
                        : "from-white to-white"
                    }
                  >
                    <div className="relative w-[350px] md:w-[400px] h-[240px] rounded-3xl overflow-hidden group cursor-pointer">
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-black/25 rounded-3xl" />
                      <motion.button
                        onClick={() => setActiveVideo(video)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
                      >
                        <Play
                          className="w-10 h-10 text-blue-600"
                          fill="currentColor"
                        />
                      </motion.button>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 truncate">
                          {video.title}
                        </h3>
                        <p className="text-sm text-slate-600 truncate">
                          {video.description}
                        </p>
                      </div>
                      <div className="text-sm text-slate-500 font-semibold">
                        {(index % videos.length) + 1}/{videos.length}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-5 py-10">
              <div className="flex gap-3">
                {videos.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2  rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-blue-600 scale-125"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Video Popup */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-3xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-96"
              ></iframe>

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg"
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
