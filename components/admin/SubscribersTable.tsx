"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

// Components
import { InfiniteScrollTable } from "@/components/admin/InfiniteScrollTable";
import { RangeDatePicker } from "@/components/admin/RangeDatePicker";

// Data
import { subscribersData } from "@/lib/api";
import type { Subscriber } from "@/app/admin/type/subscribers";

// MUI
import { TextField, Box } from "@mui/material";

export default function SubscribersTable() {
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
    return subscribersData.filter((item) => {
      const searchText = debouncedSearch.toLowerCase();

      const matchesSearch =
        item.email.toLowerCase().includes(searchText) ||
        item.subscribedAt.toLowerCase().includes(searchText);

      const hasDate = dateRange[0] && dateRange[1];
      const matchesDate = hasDate
        ? dayjs(item.subscribedAt).isAfter(dateRange[0]!.startOf("day")) &&
          dayjs(item.subscribedAt).isBefore(dateRange[1]!.endOf("day"))
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
    { accessorKey: "email", header: "Email Address" },
    { accessorKey: "subscribedAt", header: "Subscribed At" },
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
            - Subscribers
          </span>
        </motion.h2>

        {/* DATE RANGE PICKER & SEARCH - Aligned Right */}
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
        key={filterKey}
        columns={columns}
        fetchFunction={fetchFunction}
        getRowId={(row) => row.id}
        fetchID="subscribers-table"
        isFiltered={true}
        tableRef={tableRef}
        pageSize={20}
        tableHeight="60vh"
      />
    </motion.div>
  );
}
