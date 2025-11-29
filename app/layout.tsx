// import "./globals.css";
// import { Inter } from "next/font/google";
// import React from "react";
// import QueryProvider from "./providers/QueryProvider"; // client component wrapper

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Shopcare Billing Software",
//   description: "A modern, comprehensive billing solution.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.className} overflow-x-hidden`}>
//       <body className="overflow-x-hidden">
//         <QueryProvider>{children}</QueryProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import QueryProvider from "./providers/QueryProvider";
// import "antd/dist/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopcare Billing Software",
  description: "A modern, comprehensive billing solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} overflow-x-hidden`}>
      <body className="overflow-x-hidden max-w-full">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
