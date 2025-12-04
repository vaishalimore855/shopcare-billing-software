// import React, { useMemo, useImperativeHandle } from "react";
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from "material-react-table";
// import { CircularProgress, Typography } from "@mui/material";
// import {
//   useInfiniteQuery,
//   UseInfiniteQueryResult,
// } from "@tanstack/react-query";

// interface InfiniteScrollTableProps {
//   columns: any[];
//   fetchFunction: (params: {
//     pageParam?: number;
//     pageSize?: number;
//   }) => Promise<any>;
//   getRowId: (row: any, index: number) => string;
//   pageSize?: number;
//   tableHeight?: string;
//   isFiltered?: boolean;
//   fetchID?: string;
//   initialState?: any;
//   getSubRows?: (row: any) => any[];
//   renderDetailPanel?: (props: { row: any }) => React.ReactNode;
//   enableTotalRow?: boolean;
//   totalRowCalculator?: (data: any[]) => any;
//   enableRowSelection?: boolean | ((row: any) => boolean);
//   onRowSelectionChange?: (rowSelection: any) => void;
//   tableRef?: React.RefObject<any>;
// }

// export const InfiniteScrollTable: React.FC<InfiniteScrollTableProps> = ({
//   columns,
//   fetchFunction,
//   getRowId,
//   initialState,
//   pageSize = 20,
//   tableHeight,
//   isFiltered = false,
//   fetchID,
//   getSubRows,
//   renderDetailPanel,
//   enableTotalRow = false,
//   totalRowCalculator,
//   enableRowSelection = false,
//   onRowSelectionChange,
//   tableRef,
//   ...tableProps
// }) => {
//   // Helper function to extract data from response
//   const extractDataFromResponse = (response: any): any[] => {
//     if (Array.isArray(response)) {
//       return response;
//     }
//     if (response && typeof response === "object") {
//       if (Array.isArray(response.data)) {
//         return response.data;
//       }
//       if (Array.isArray(response.VotersData)) {
//         return response.VotersData;
//       }
//     }
//     return [];
//   };

//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     error,
//   }: UseInfiniteQueryResult<any, Error> = useInfiniteQuery({
//     queryKey: ["tableData", fetchID],
//     queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
//       fetchFunction({ pageParam: Number(pageParam), pageSize }),

//     initialPageParam: 0, // ✅ REQUIRED in React Query v5

//     getNextPageParam: (lastPage: any, pages: any[]) => {
//       const pageData = extractDataFromResponse(lastPage);
//       const hasMore =
//         lastPage?.hasMore !== false && pageData.length === pageSize;
//       return hasMore ? pages.length : undefined;
//     },

//     enabled: !!fetchID && isFiltered,
//   });

//   //  UseInfiniteQueryResult<any, Error> = useInfiniteQuery({
//   //   queryKey: ["tableData", fetchID],
//   //   queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
//   //     fetchFunction({ pageParam: Number(pageParam), pageSize }),
//   //   getNextPageParam: (lastPage: any, pages: any[]) => {
//   //     const pageData = extractDataFromResponse(lastPage);
//   //     const hasMore =
//   //       lastPage?.hasMore !== false && pageData.length === pageSize;
//   //     return hasMore ? pages.length : undefined;
//   //   },
//   //   enabled: !!fetchID && isFiltered,
//   //   // initialPageParam: 0,
//   // });

//   // Memoize and deduplicate the flat data to prevent duplicate rows
//   const flatData = useMemo(() => {
//     if (!data?.pages) {
//       return [];
//     }

//     const allRows = data.pages.flatMap((page: any) =>
//       extractDataFromResponse(page)
//     );

//     const uniqueRows = new Map();
//     allRows.forEach((row: any, index: number) => {
//       try {
//         const id = getRowId(row, index);
//         if (!uniqueRows.has(id)) {
//           uniqueRows.set(id, row);
//         }
//       } catch (err) {
//         const fallbackId = `row-${index}`;
//         uniqueRows.set(fallbackId, row);
//       }
//     });

//     let finalData = Array.from(uniqueRows.values());

//     // Add total row if enabled and we have data
//     if (enableTotalRow && totalRowCalculator && finalData.length > 0) {
//       const totalRow = totalRowCalculator(finalData);
//       finalData = [...finalData, totalRow];
//     }

//     return finalData;
//   }, [data, getRowId, enableTotalRow, totalRowCalculator]);

//   // Custom scroll handler that only triggers for main table content
//   const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
//     const target = e.currentTarget;
//     const { scrollTop, clientHeight, scrollHeight } = target;

//     if (
//       scrollTop + clientHeight >= scrollHeight - 150 &&
//       hasNextPage &&
//       !isFetching
//     ) {
//       fetchNextPage();
//     }
//   };
//   const processedColumns = columns.map((col) => {
//     const existingHeadProps =
//       typeof col.muiTableHeadCellProps === "function"
//         ? {}
//         : col.muiTableHeadCellProps || {};
//     const existingBodyProps =
//       typeof col.muiTableBodyCellProps === "function"
//         ? {}
//         : col.muiTableBodyCellProps || {};

//     return {
//       ...col,
//       muiTableHeadCellProps: {
//         ...existingHeadProps,
//         sx: {
//           ...existingHeadProps.sx,

//           fontFamily: "Poppins, sans-serif !important",
//           fontSize: {
//             xs: "0.55rem", // mobile
//             sm: "0.65rem",
//             md: "0.75rem",
//             lg: "0.75rem",
//             xl: "0.95rem", // desktop
//           },
//         },
//       },
//       muiTableBodyCellProps: {
//         ...existingBodyProps,
//         sx: {
//           ...existingBodyProps.sx,

//           fontFamily: "Poppins, sans-serif !important",
//           fontSize: {
//             xs: "0.55rem", // mobile
//             sm: "0.65rem",
//             md: "0.75rem",
//             lg: "0.75rem",
//             xl: "0.95rem", // desktop
//           },
//           paddingTop: "0.25rem",
//           paddingBottom: "0.25rem",
//         },
//       },
//     };
//   });
//   const table = useMaterialReactTable({
//     columns: processedColumns,
//     data: flatData,
//     enableExpanding: !!getSubRows,
//     getSubRows: getSubRows,
//     renderDetailPanel,
//     enablePagination: false,
//     enableGlobalFilterModes: true,
//     manualSorting: true,
//     enableRowVirtualization: false,
//     enableStickyHeader: true,
//     enableRowSelection: enableRowSelection,
//     enableSelectAll:
//       typeof enableRowSelection === "boolean" ? enableRowSelection : true,
//     onRowSelectionChange: onRowSelectionChange,
//     state: {
//       rowSelection: initialState?.rowSelection || {},
//       ...(initialState || {}),
//     },
//     initialState: { density: "compact" },
//     getRowId: getRowId,
//     muiTableContainerProps: {
//       sx: {
//         height: {
//           xs: tableHeight || "45vh",
//           sm: tableHeight || "45vh",
//           md: tableHeight || "50vh",
//           lg: tableHeight || "55vh",
//           xl: tableHeight || "65vh",
//         },
//         overflow: "auto",
//         "&:has(.Mui-expanded)": {
//           scrollBehavior: "auto",
//         },
//       },
//       onScroll: handleScroll,
//     },
//     muiTableBodyProps: {
//       sx: {
//         opacity: isFetching ? 0.5 : 1,
//         transition: "opacity 0.2s",
//         "& .MuiTableRow-root[data-expanded='true']": {
//           backgroundColor: "rgba(0, 0, 0, 0.02)",
//         },
//       },
//     },
//     ...tableProps,
//   });

//   if (error) {
//     return (
//       <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
//         <Typography variant="h6">Error loading data</Typography>
//         <Typography variant="body2">{error.message}</Typography>
//       </div>
//     );
//   }

//   // Expose table instance to parent via ref
//   useImperativeHandle(tableRef, () => table, [table]);

//   return (
//     <>
//       <MaterialReactTable table={table} />
//       {isFetching && (
//         <div
//           style={{
//             position: "absolute",
//             bottom: 70,
//             right: 37,
//             width: "100%",
//             textAlign: "center",
//             padding: "8px 0",
//             fontWeight: "bold",
//             zIndex: 1000,
//           }}
//         >
//           Loading more data... <CircularProgress size={17} disableShrink />
//         </div>
//       )}
//     </>
//   );
// };
import React, { useMemo, useImperativeHandle } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { CircularProgress, Typography, Box } from "@mui/material";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

interface InfiniteScrollTableProps {
  columns: any[];
  fetchFunction: (params: {
    pageParam?: number;
    pageSize?: number;
  }) => Promise<any>;
  getRowId: (row: any, index: number) => string;
  pageSize?: number;
  tableHeight?: string;
  isFiltered?: boolean;
  fetchID?: string;
  initialState?: any;
  getSubRows?: (row: any) => any[];
  renderDetailPanel?: (props: { row: any }) => React.ReactNode;
  enableTotalRow?: boolean;
  totalRowCalculator?: (data: any[]) => any;
  enableRowSelection?: boolean | ((row: any) => boolean);
  onRowSelectionChange?: (rowSelection: any) => void;
  tableRef?: React.RefObject<any>;
}

export const InfiniteScrollTable: React.FC<InfiniteScrollTableProps> = ({
  columns,
  fetchFunction,
  getRowId,
  initialState,
  pageSize = 20,
  tableHeight,
  isFiltered = false,
  fetchID,
  getSubRows,
  renderDetailPanel,
  enableTotalRow = false,
  totalRowCalculator,
  enableRowSelection = false,
  onRowSelectionChange,
  tableRef,
  ...tableProps
}) => {
  // Helper function to extract data from response
  const extractDataFromResponse = (response: any): any[] => {
    if (Array.isArray(response)) {
      return response;
    }
    if (response && typeof response === "object") {
      if (Array.isArray(response.data)) {
        return response.data;
      }
      if (Array.isArray(response.VotersData)) {
        return response.VotersData;
      }
    }
    return [];
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
  }: UseInfiniteQueryResult<any, Error> = useInfiniteQuery({
    queryKey: ["tableData", fetchID],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      fetchFunction({ pageParam: Number(pageParam), pageSize }),

    initialPageParam: 0,

    getNextPageParam: (lastPage: any, pages: any[]) => {
      const pageData = extractDataFromResponse(lastPage);
      const hasMore =
        lastPage?.hasMore !== false && pageData.length === pageSize;
      return hasMore ? pages.length : undefined;
    },

    enabled: !!fetchID && isFiltered,
  });

  // Memoize and deduplicate the flat data to prevent duplicate rows
  const flatData = useMemo(() => {
    if (!data?.pages) {
      return [];
    }

    const allRows = data.pages.flatMap((page: any) =>
      extractDataFromResponse(page)
    );

    const uniqueRows = new Map();
    allRows.forEach((row: any, index: number) => {
      try {
        const id = getRowId(row, index);
        if (!uniqueRows.has(id)) {
          uniqueRows.set(id, row);
        }
      } catch (err) {
        const fallbackId = `row-${index}`;
        uniqueRows.set(fallbackId, row);
      }
    });

    let finalData = Array.from(uniqueRows.values());

    // Add total row if enabled and we have data
    if (enableTotalRow && totalRowCalculator && finalData.length > 0) {
      const totalRow = totalRowCalculator(finalData);
      finalData = [...finalData, totalRow];
    }

    return finalData;
  }, [data, getRowId, enableTotalRow, totalRowCalculator]);

  // Custom scroll handler that only triggers for main table content
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { scrollTop, clientHeight, scrollHeight } = target;

    if (
      scrollTop + clientHeight >= scrollHeight - 150 &&
      hasNextPage &&
      !isFetching
    ) {
      fetchNextPage();
    }
  };

  // Process columns with responsive font sizes and styling
  const processedColumns = columns.map((col) => {
    const existingHeadProps =
      typeof col.muiTableHeadCellProps === "function"
        ? {}
        : col.muiTableHeadCellProps || {};
    const existingBodyProps =
      typeof col.muiTableBodyCellProps === "function"
        ? {}
        : col.muiTableBodyCellProps || {};

    return {
      ...col,
      muiTableHeadCellProps: {
        ...existingHeadProps,
        sx: {
          backgroundColor: "#f3f4f6",
          fontWeight: 600,
          color: "#374151",
          borderBottom: "1px solid #e5e7eb",
          ...existingHeadProps.sx,
          fontFamily: "Poppins, sans-serif !important",
          fontSize: {
            xs: "0.65rem",
            sm: "0.75rem",
            md: "0.8rem",
            lg: "0.85rem",
            xl: "0.9rem",
          },
          padding: "12px 8px",
        },
      },
      muiTableBodyCellProps: {
        ...existingBodyProps,
        sx: {
          borderBottom: "1px solid #f3f4f6",
          ...existingBodyProps.sx,
          fontFamily: "Poppins, sans-serif !important",
          fontSize: {
            xs: "0.65rem",
            sm: "0.75rem",
            md: "0.8rem",
            lg: "0.85rem",
            xl: "0.9rem",
          },
          padding: "10px 8px",
        },
      },
    };
  });

  const table = useMaterialReactTable({
    columns: processedColumns,
    data: flatData,
    enableExpanding: !!getSubRows,
    getSubRows: getSubRows,
    renderDetailPanel,
    enablePagination: false,
    enableGlobalFilterModes: true,
    manualSorting: false,
    enableSorting: true,
    enableRowVirtualization: false,
    enableStickyHeader: true,
    enableRowSelection: enableRowSelection,
    enableSelectAll:
      typeof enableRowSelection === "boolean" ? enableRowSelection : true,
    onRowSelectionChange: onRowSelectionChange,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    state: {
      rowSelection: initialState?.rowSelection || {},
      ...(initialState || {}),
    },
    initialState: {
      density: "compact",
      showGlobalFilter: false,
    },
    getRowId: getRowId,
    muiTableContainerProps: {
      sx: {
        height: {
          xs: tableHeight || "45vh",
          sm: tableHeight || "50vh",
          md: tableHeight || "55vh",
          lg: tableHeight || "60vh",
          xl: tableHeight || "65vh",
        },
        maxHeight: tableHeight || "60vh",
        overflow: "auto",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "&:has(.Mui-expanded)": {
          scrollBehavior: "auto",
        },
        // Custom scrollbar styling
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      },
      onScroll: handleScroll,
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        boxShadow: "none",
        border: "none",
      },
    },
    muiTableProps: {
      sx: {
        tableLayout: "fixed",
      },
    },
    muiTableHeadRowProps: {
      sx: {
        backgroundColor: "#f3f4f6",
        "&:hover": {
          backgroundColor: "#f3f4f6",
        },
      },
    },
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "#f9fafb !important",
        },
        cursor: "default",
        transition: "background-color 0.2s",
      },
    }),
    muiTableBodyProps: {
      sx: {
        opacity: isFetching ? 0.5 : 1,
        transition: "opacity 0.2s",
        "& .MuiTableRow-root[data-expanded='true']": {
          backgroundColor: "rgba(0, 0, 0, 0.02)",
        },
      },
    },
    muiTopToolbarProps: {
      sx: {
        display: "none",
      },
    },
    muiBottomToolbarProps: {
      sx: {
        minHeight: "50px",
        backgroundColor: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
        padding: "8px 16px",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        verticalAlign: "top",
      },
    },
    ...tableProps,
  });

  if (error) {
    return (
      <Box
        sx={{
          padding: "40px 20px",
          textAlign: "center",
          border: "1px solid #fee2e2",
          borderRadius: "8px",
          backgroundColor: "#fef2f2",
        }}
      >
        <Typography variant="h6" sx={{ color: "#dc2626", marginBottom: 1 }}>
          Error loading data
        </Typography>
        <Typography variant="body2" sx={{ color: "#991b1b" }}>
          {error.message}
        </Typography>
      </Box>
    );
  }

  // Expose table instance to parent via ref
  useImperativeHandle(tableRef, () => table, [table]);

  return (
    <Box sx={{ position: "relative" }}>
      <MaterialReactTable table={table} />
      {isFetching && (
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "8px 16px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 1000,
          }}
        >
          <CircularProgress size={16} />
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "#374151" }}
          >
            Loading more data...
          </Typography>
        </Box>
      )}
    </Box>
  );
};
