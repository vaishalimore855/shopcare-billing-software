// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import { leadsData } from "@/lib/api";
// import type { Lead } from "@/app/admin/type/leads";

// import { motion } from "framer-motion";
// import dayjs from "dayjs";

// // MUI Core
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Box,
//   TableSortLabel,
// } from "@mui/material";

// // MUI Date Picker
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

// export default function LeadsTable() {
//   const [search, setSearch] = useState("");
//   const [visibleRows, setVisibleRows] = useState<Lead[]>([]);
//   const [page, setPage] = useState(1);

//   const ITEMS_PER_PAGE = 15;
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const [dateRange, setDateRange] = useState<
//     [dayjs.Dayjs | null, dayjs.Dayjs | null]
//   >([null, null]);

//   const [sortConfig, setSortConfig] = useState<{
//     key: keyof Lead;
//     direction: "asc" | "desc";
//   } | null>(null);

//   useEffect(() => {
//     loadMore();
//   }, []);

//   const loadMore = () => {
//     const start = (page - 1) * ITEMS_PER_PAGE;
//     const end = page * ITEMS_PER_PAGE;
//     const nextItems = leadsData.slice(start, end);

//     if (nextItems.length > 0) {
//       setVisibleRows((prev) => [...prev, ...nextItems]);
//       setPage((prev) => prev + 1);
//     }
//   };

//   const handleScroll = () => {
//     if (!containerRef.current) return;

//     const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

//     if (scrollTop + clientHeight >= scrollHeight - 10) {
//       loadMore();
//     }
//   };

//   // 🔥 Filter + Search + Sorting Logic
//   const filteredData = useMemo(() => {
//     let data = visibleRows.filter((item) => {
//       const searchText = search.toLowerCase();
//       const matchesSearch =
//         item.fullName.toLowerCase().includes(searchText) ||
//         item.email.toLowerCase().includes(searchText) ||
//         item.phone.toLowerCase().includes(searchText) ||
//         item.business.toLowerCase().includes(searchText) ||
//         item.source.toLowerCase().includes(searchText) ||
//         item.message.toLowerCase().includes(searchText);

//       const hasDateFilter = dateRange[0] && dateRange[1];
//       const matchesDateRange = hasDateFilter
//         ? dayjs(item.datetime).isAfter(dateRange[0]!.startOf("day")) &&
//           dayjs(item.datetime).isBefore(dateRange[1]!.endOf("day"))
//         : true;

//       return matchesSearch && matchesDateRange;
//     });

//     if (sortConfig !== null) {
//       data = data.sort((a, b) => {
//         const aValue = a[sortConfig.key];
//         const bValue = b[sortConfig.key];

//         if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//         if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//         return 0;
//       });
//     }

//     return data;
//   }, [visibleRows, search, dateRange, sortConfig]);

//   const handleSort = (key: keyof Lead) => {
//     setSortConfig((prev) => {
//       if (prev?.key === key) {
//         return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
//       }
//       return { key, direction: "asc" };
//     });
//   };

//   const headers: { label: string; key: keyof Lead }[] = [
//     { label: "Full Name", key: "fullName" },
//     { label: "Email", key: "email" },
//     { label: "Phone", key: "phone" },
//     { label: "Business", key: "business" },
//     { label: "Source", key: "source" },
//     { label: "Message", key: "message" },
//     { label: "Date & Time", key: "datetime" },
//   ];

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <motion.div
//         className="w-full mt-20 overflow-x-auto"
//         initial={{ opacity: 0, y: 25 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         {/* Header */}
//         <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
//           <motion.h2
//             className="text-2xl font-bold"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-slate-900">Admin Panel </span>
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               - Leads
//             </span>
//           </motion.h2>

//           {/* DATE RANGE PICKER */}
//           <Box sx={{ width: 280 }}>
//             <DateRangePicker
//               value={dateRange}
//               onChange={(newValue) => setDateRange(newValue)}
//               format="DD-MM-YYYY"
//               slotProps={{
//                 textField: {
//                   size: "small",
//                   sx: {
//                     background: "white",
//                     borderRadius: 2,
//                     "& .MuiOutlinedInput-root": {
//                       height: "42px",
//                       borderRadius: "10px",
//                     },
//                   },
//                 },
//               }}
//             />
//           </Box>

//           {/* SEARCH */}
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search leads..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             sx={{
//               width: 260,
//               background: "white",
//               borderRadius: "8px",
//               "& .MuiOutlinedInput-root": {
//                 height: "42px",
//               },
//             }}
//           />
//         </div>

//         {/* TABLE */}
//         <TableContainer
//           component={Paper}
//           elevation={2}
//           className="rounded-xl border border-gray-200 max-h-[500px] overflow-y-auto"
//           ref={containerRef}
//           onScroll={handleScroll}
//         >
//           <Table sx={{ minWidth: 650 }}>
//             <TableHead>
//               <motion.tr
//                 initial={{ opacity: 0, y: -8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 {headers.map((head) => (
//                   <TableCell
//                     key={head.key}
//                     sx={{
//                       color: "#2563EB",
//                       fontWeight: 600,
//                       background: "#F9FAFB",
//                       cursor: "pointer",
//                       whiteSpace: "nowrap",
//                     }}
//                     sortDirection={
//                       sortConfig?.key === head.key
//                         ? sortConfig.direction
//                         : false
//                     }
//                   >
//                     <TableSortLabel
//                       active={sortConfig?.key === head.key}
//                       direction={
//                         sortConfig?.key === head.key
//                           ? sortConfig.direction
//                           : "asc"
//                       }
//                       onClick={() => handleSort(head.key)}
//                     >
//                       {head.label}
//                     </TableSortLabel>
//                   </TableCell>
//                 ))}
//               </motion.tr>
//             </TableHead>

//             <TableBody>
//               {filteredData.map((item, index) => (
//                 <motion.tr
//                   key={item.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.3,
//                     delay: index * 0.03,
//                   }}
//                 >
//                   <TableCell>{item.fullName}</TableCell>
//                   <TableCell>{item.email}</TableCell>
//                   <TableCell>{item.phone}</TableCell>
//                   <TableCell>{item.business}</TableCell>
//                   <TableCell>{item.source}</TableCell>
//                   <TableCell>{item.message}</TableCell>
//                   <TableCell>{item.datetime}</TableCell>
//                 </motion.tr>
//               ))}

//               {filteredData.length === 0 && (
//                 <TableRow>
//                   <TableCell
//                     colSpan={7}
//                     className="text-center py-4 text-gray-500"
//                   >
//                     No results found
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </motion.div>
//     </LocalizationProvider>
//   );
// }

"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

// Components
import { InfiniteScrollTable } from "@/components/admin/InfiniteScrollTable";
import { RangeDatePicker } from "@/components/admin/RangeDatePicker";

// Data
import { leadsData } from "@/lib/api";
import type { Lead } from "@/app/admin/type/leads";

// MUI
import { TextField, Box } from "@mui/material";

export default function LeadsTable() {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([null, null]);

  const tableRef = useRef(null);

  // ------------------------------------
  // Filters: Search + Date Range
  // ------------------------------------
  const filteredData = useMemo(() => {
    return leadsData.filter((item) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        item.fullName.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText) ||
        item.phone.toLowerCase().includes(searchText) ||
        item.business.toLowerCase().includes(searchText) ||
        item.source.toLowerCase().includes(searchText) ||
        item.message.toLowerCase().includes(searchText);

      const hasDate = dateRange[0] && dateRange[1];
      const matchesDate = hasDate
        ? dayjs(item.datetime).isAfter(dateRange[0]!.startOf("day")) &&
          dayjs(item.datetime).isBefore(dateRange[1]!.endOf("day"))
        : true;

      return matchesSearch && matchesDate;
    });
  }, [search, dateRange]);

  // ------------------------------------
  // Fetch function for InfiniteScrollTable
  // ------------------------------------
  const fetchFunction = async ({ pageParam = 0, pageSize = 20 }) => {
    const start = pageParam * pageSize;
    const end = start + pageSize;
    const pageData = filteredData.slice(start, end);

    return {
      data: pageData,
      hasMore: end < filteredData.length,
    };
  };

  // ------------------------------------
  // Table Columns
  // ------------------------------------
  const columns = [
    { accessorKey: "fullName", header: "Full Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "business", header: "Business" },
    { accessorKey: "source", header: "Source" },
    { accessorKey: "message", header: "Message" },
    { accessorKey: "datetime", header: "Date & Time" },
  ];

  return (
    <motion.div
      className="w-full mt-30"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-slate-900">Admin Panel </span>
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            - Leads
          </span>
        </motion.h2>

        {/* DATE RANGE PICKER */}
        <Box sx={{ width: 280 }}>
          <RangeDatePicker
            label="Filter by Date"
            value={dateRange}
            onChange={(dates) => setDateRange(dates)}
            format="DD-MM-YYYY"
          />
        </Box>

        {/* SEARCH */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: 260,
            background: "white",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              height: "42px",
            },
          }}
        />
      </div>

      {/* INFINITE SCROLL TABLE */}
      <InfiniteScrollTable
        columns={columns}
        fetchFunction={fetchFunction}
        getRowId={(row) => row.id}
        fetchID="leads-table"
        isFiltered={true}
        tableRef={tableRef}
        pageSize={20}
        tableHeight="60vh"
      />
    </motion.div>
  );
}
