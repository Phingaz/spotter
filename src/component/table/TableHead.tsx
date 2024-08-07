import React from "react";
import { TData } from "../../types";
import { Box, TableHead, TableSortLabel } from "@mui/material";
import { headCells } from "../../constants/tableData";
import { visuallyHidden } from "@mui/utils";
import TableCell from "./TableCell";
import { TableCtx } from "../../context/Table";

const TableHeadComponent = () => {
  const { order, orderBy, handleRequestSort } =
    React.useContext(TableCtx).tableSort;

  const createSortHandler =
    (property: keyof TData) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableHead>
      <tr className="bg-gray-100">
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.value}
            className="whitespace-nowrap"
            sortDirection={orderBy === headCell.value ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.value}
              direction={orderBy === headCell.value ? order : "asc"}
              onClick={createSortHandler(headCell.value as keyof TData)}
            >
              <span className="text-gray-600 min-w-fit text-[sm] font-[500]">
                {headCell.label}
              </span>
              {orderBy === headCell.value ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </tr>
    </TableHead>
  );
};

export default TableHeadComponent;
