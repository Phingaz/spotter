import React from "react";
import { TData, TOrder } from "../types";
import { getComparator, stableSort } from "../util";

const useSort = (data: TData[]) => {
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState<TOrder>("asc");
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [orderBy, setOrderBy] = React.useState<keyof TData>("legal_name");

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof TData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = React.useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy as never)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [data, order, orderBy, page, rowsPerPage]
  );

  return {
    page,
    order,
    orderBy,
    rowsPerPage,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
    sortedData,
  };
};

export default useSort;
