


"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
  Home, // Added Home icon for location context
} from "lucide-react";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61553252073568", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/soulsoft.infotech/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prasad-godage-98739619/", color: "hover:text-blue-600" },
    { icon: Youtube, href: "https://www.youtube.com/@soulsoftinfotech", color: "hover:text-red-500" },
  ];

  // Updated company links based on the screenshot
  const companyLinks: string[] = ["Home", "About Us", "POS Products", "Services", "Contact"];

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Animated Background (kept from original for design consistency) */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info and Text */}
          <div className="lg:col-span-1">
            {/* Logo area - Replaced generic icon with image/placeholder */}
            <div className="mb-6">
              {/* Replace 'path/to/soulsoft-logo.png' with the actual path to the logo image */}
              <img src="https://soulsoft.in/wp-content/uploads/2022/01/logo.png" className="w-48 h-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              SoulSoft Infotech aspire to be the global sourcing choice of the world market and revolutionizes the way service processes function.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center ${social.color} transition-all`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Get In Touch (Locations and Contact) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            
            <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Office Location</h4>
                <p className="text-slate-400">S-10-B, 2nd Floor, Top-Ten Imperial<br/>Sangamner 422605, Ahmednagar</p>
            </div>
            
            <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Registration Location</h4>
                <p className="text-slate-400">H-576, Near Bus stand, At post Chandanapur<br/>Sangamner 422605, Ahmednagar</p>
            </div>

            <div>
                <h4 className="font-semibold text-white mb-2">Contact</h4>
                <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>Phone : +91 9146 79 86 79 / +91 8149 7986 79</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>Gmail : soulsoftinfotech@gmail.com</span>
                    </li>
                </ul>
            </div>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {/* Note: I kept href="#" as in your original code, but these should be actual paths */}
                  <a
                    href={`/${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Business Hours
            </h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span>Opening Days</span>
                    </h4>
                    <p className="text-slate-400">
                        Monday – Saturday : **8 am to 8 pm**
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                        <Home className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span>Closing Days</span>
                    </h4>
                    <p className="text-slate-400">
                        **Sunday Closed**
                    </p>
                </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        {/* Simplified the bottom section to match the screenshot's simplicity */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm text-center">
            ©2023 Soulsoft Infotech pvt ltd. All Rights Reserved.
          </p>
        </div>
      </div>
      
      {/* WhatsApp Floating Button (Keep if this is part of the overall design) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/919146798679" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-7 h-7">
            <path d="M12 2a10 10 0 0 0-8.9 14.8l-1.1 4.2 4.4-1.2A10 10 0 1 0 12 2z" />
            <path d="M16.5 13.5c-.3-.2-.5-.3-.7-.5-.2-.2-.4-.3-.7-.3s-.6.1-.8.3c-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6s-.4.3-.7.3-.6-.1-1-.4-1.6-1.1-2.4-2.2c-.8-1.2-1.3-2.5-1.5-3.8-.1-.6 0-1.1.3-1.4.2-.2.4-.3.7-.4s.6-.1.8-.1.5.1.7.3c.2.2.4.4.6.6.2.2.4.4.6.6s.4.4.7.4.5-.1.7-.3.4-.4.6-.6.4-.4.6-.6.4-.3.7-.3c.3 0 .6 0 .9.2.3.2.5.4.7.7.2.3.3.6.3.9 0 .4 0 .7-.2 1s-.5.6-1.1 1.2z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}