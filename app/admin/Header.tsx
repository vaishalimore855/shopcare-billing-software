// "use client";

// import Image from "next/image";
// import shopcare_logo from "@/public/images/shopcare_logo.jpg";
// import { LogOut } from "lucide-react";

// interface HeaderProps {
//   activeTab: "leads" | "subscribers";
//   setActiveTab: (tab: "leads" | "subscribers") => void;
//   onLogout: () => void;
// }

// export default function Header({
//   activeTab,
//   setActiveTab,
//   onLogout,
// }: HeaderProps) {
//   return (
//     <div className="w-full bg-white shadow-lg px-4 md:px-6 py-4 flex flex-wrap items-center justify-between">
//       {/* LEFT — LOGO */}
// <div className="flex items-center gap-2 mb-3 md:mb-0">
//   <Image
//     src={shopcare_logo}
//     alt="Shopcare Logo"
//     className="w-30 h-18 bg-gradient-to-r from-blue-600  via-cyan-500 to-blue-600 bg-clip-text text-transparent"
//     width={36}
//     height={36}
//     priority
//   />
//   <div className="flex flex-col leading-tight">
//     {/* <span className="text-sm font-bold text-gray-900">Shopcare</span>
//     <span className="text-xs text-gray-600">Billing</span> */}
//   </div>
// </div>

//       {/* RIGHT — NAVIGATION */}
//       <div className="flex items-center gap-6 md:gap-10">
//         {/* TABS */}
//         <div className="flex items-center gap-4 md:gap-8">
//           <button
//             onClick={() => setActiveTab("leads")}
//             className={`text-base md:text-lg font-semibold pb-1 ${
//               activeTab === "leads"
//                 ? "bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent border-b-2 border-cyan-600"
//                 : "text-gray-500"
//             }`}
//           >
//             Leads
//           </button>

//           <button
//             onClick={() => setActiveTab("subscribers")}
//             className={`text-base md:text-lg font-semibold pb-1 ${
//               activeTab === "subscribers"
//                 ? "text-cyan-600 border-b-2 border-cyan-600"
//                 : "text-gray-500"
//             }`}
//           >
//             Subscribers
//           </button>
//         </div>

//         {/* LOGOUT */}

//         <button
//           onClick={onLogout}
//           className="text-red-600 font-semibold flex items-center gap-2 hover:text-red-700 text-sm md:text-base"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { LogOut } from "lucide-react";
import shopcare_logo from "@/public/images/shopcare_logo.jpg";

interface HeaderProps {
  activeTab: "leads" | "subscribers";
  setActiveTab: (tab: "leads" | "subscribers") => void;
  onLogout: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  onLogout,
}: HeaderProps) {
  return (
    <div className="w-full bg-white fixed top-0 z-50 shadow-[0_2px_4px_rgba(0,0,0,0.1)] px-6 py-3 flex items-center justify-between">
      {/* LEFT — LOGO */}
      <div className="flex items-center gap-2">
        <Image
          src={shopcare_logo}
          alt="Shopcare Logo"
          className="w-30 h-18 bg-gradient-to-r from-blue-600  via-cyan-500 to-blue-600 bg-clip-text text-transparent"
          width={36}
          height={36}
          priority
        />
      </div>

      {/* RIGHT — TABS + LOGOUT */}
      <div className="flex items-center gap-6 ml-auto">
        <button
          onClick={() => setActiveTab("leads")}
          className={`text-sm md:text-base font-medium pb-1 ${
            activeTab === "leads"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Leads
        </button>

        <button
          onClick={() => setActiveTab("subscribers")}
          className={`text-sm md:text-base font-medium pb-1 ${
            activeTab === "subscribers"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Subscribers
        </button>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm md:text-base"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
