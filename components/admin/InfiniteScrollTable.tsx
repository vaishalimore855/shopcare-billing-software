import React, { useMemo, useImperativeHandle } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { CircularProgress, Typography } from "@mui/material";
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

    initialPageParam: 0, // ✅ REQUIRED in React Query v5

    getNextPageParam: (lastPage: any, pages: any[]) => {
      const pageData = extractDataFromResponse(lastPage);
      const hasMore =
        lastPage?.hasMore !== false && pageData.length === pageSize;
      return hasMore ? pages.length : undefined;
    },

    enabled: !!fetchID && isFiltered,
  });

  //  UseInfiniteQueryResult<any, Error> = useInfiniteQuery({
  //   queryKey: ["tableData", fetchID],
  //   queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
  //     fetchFunction({ pageParam: Number(pageParam), pageSize }),
  //   getNextPageParam: (lastPage: any, pages: any[]) => {
  //     const pageData = extractDataFromResponse(lastPage);
  //     const hasMore =
  //       lastPage?.hasMore !== false && pageData.length === pageSize;
  //     return hasMore ? pages.length : undefined;
  //   },
  //   enabled: !!fetchID && isFiltered,
  //   // initialPageParam: 0,
  // });

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
          ...existingHeadProps.sx,

          fontFamily: "Poppins, sans-serif !important",
          fontSize: {
            xs: "0.55rem", // mobile
            sm: "0.65rem",
            md: "0.75rem",
            lg: "0.75rem",
            xl: "0.95rem", // desktop
          },
        },
      },
      muiTableBodyCellProps: {
        ...existingBodyProps,
        sx: {
          ...existingBodyProps.sx,

          fontFamily: "Poppins, sans-serif !important",
          fontSize: {
            xs: "0.55rem", // mobile
            sm: "0.65rem",
            md: "0.75rem",
            lg: "0.75rem",
            xl: "0.95rem", // desktop
          },
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
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
    manualSorting: true,
    enableRowVirtualization: false,
    enableStickyHeader: true,
    enableRowSelection: enableRowSelection,
    enableSelectAll:
      typeof enableRowSelection === "boolean" ? enableRowSelection : true,
    onRowSelectionChange: onRowSelectionChange,
    state: {
      rowSelection: initialState?.rowSelection || {},
      ...(initialState || {}),
    },
    initialState: { density: "compact" },
    getRowId: getRowId,
    muiTableContainerProps: {
      sx: {
        height: {
          xs: tableHeight || "45vh",
          sm: tableHeight || "45vh",
          md: tableHeight || "50vh",
          lg: tableHeight || "55vh",
          xl: tableHeight || "65vh",
        },
        overflow: "auto",
        "&:has(.Mui-expanded)": {
          scrollBehavior: "auto",
        },
      },
      onScroll: handleScroll,
    },
    muiTableBodyProps: {
      sx: {
        opacity: isFetching ? 0.5 : 1,
        transition: "opacity 0.2s",
        "& .MuiTableRow-root[data-expanded='true']": {
          backgroundColor: "rgba(0, 0, 0, 0.02)",
        },
      },
    },
    ...tableProps,
  });

  if (error) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
        <Typography variant="h6">Error loading data</Typography>
        <Typography variant="body2">{error.message}</Typography>
      </div>
    );
  }

  // Expose table instance to parent via ref
  useImperativeHandle(tableRef, () => table, [table]);

  return (
    <>
      <MaterialReactTable table={table} />
      {isFetching && (
        <div
          style={{
            position: "absolute",
            bottom: 70,
            right: 37,
            width: "100%",
            textAlign: "center",
            padding: "8px 0",
            fontWeight: "bold",
            zIndex: 1000,
          }}
        >
          Loading more data... <CircularProgress size={17} disableShrink />
        </div>
      )}
    </>
  );
};
