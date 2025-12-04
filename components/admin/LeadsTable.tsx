"use client";

import { useState, useMemo, useRef, useEffect } from "react";
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
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([null, null]);

  const tableRef = useRef(null);

  // Debounce search input (wait 500ms after user stops typing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ------------------------------------
  // Filters: Search + Date Range
  // ------------------------------------
  const filteredData = useMemo(() => {
    return leadsData.filter((item) => {
      const searchText = debouncedSearch.toLowerCase();

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
  }, [debouncedSearch, dateRange]);

  // Create a stable key from filter values to reset table when filters change
  const filterKey = useMemo(() => {
    const dateKey =
      dateRange[0] && dateRange[1]
        ? `${dateRange[0].valueOf()}-${dateRange[1].valueOf()}`
        : "no-date";
    return `${debouncedSearch}-${dateKey}`;
  }, [debouncedSearch, dateRange]);

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
        />
      </div>

      {/* INFINITE SCROLL TABLE */}
      <InfiniteScrollTable
        key={filterKey}
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
