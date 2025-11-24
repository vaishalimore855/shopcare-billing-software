"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppScreenshots() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // wait for client

  const screenshots = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80",
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80",
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-slate-900">App </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              ScreenShots
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Screenshots Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Notch */}
                      <div className="h-8 bg-slate-900 flex items-center justify-center relative">
                        <div className="w-24 h-1.5 bg-slate-700 rounded-full" />
                      </div>
                      {/* Screen */}
                      <div className="h-64">
                        <img
                          src={screenshot}
                          alt={`App Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Right - Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
                Download Our App!
              </h3>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary regelialia. 
              It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>

            {/* App Ratings */}
            <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-slate-200">
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-slate-600">4.8 Rating on App Store</p>
              </div>
              <div className="h-12 w-px bg-slate-300" />
              <div>
                <p className="text-3xl font-bold text-slate-900">50K+</p>
                <p className="text-sm text-slate-600">Downloads</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <motion.div whileHover={{ x: 10 }} className="group">
                <Button className="w-full md:w-auto h-16 px-8 bg-black hover:bg-slate-800 text-white rounded-2xl flex items-center justify-start space-x-4 shadow-xl">
                  {/* App Store Icon */}
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="group">
                <Button className="w-full md:w-auto h-16 px-8 bg-black hover:bg-slate-800 text-white rounded-2xl flex items-center justify-start space-x-4 shadow-xl">
                  {/* Google Play Icon */}
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </Button>
              </motion.div>
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
            >
              <div className="flex items-start space-x-4">
                <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Available on all platforms</h4>
                  <p className="text-sm text-slate-600">
                    Compatible with iOS 12+ and Android 6.0+. Stay connected to your business wherever you are.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
