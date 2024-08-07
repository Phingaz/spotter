import { TableBody } from "@mui/material";
import { headCells } from "../../constants/tableData";
import { cleanDate } from "../../util";
import TableCell from "./TableCell";
import { TableCtx } from "../../context/Table";
import React from "react";

const TableBodyComponent = () => {
  const { sortedData } = React.useContext(TableCtx).tableSort;
  return (
    <TableBody>
      {sortedData.length >= 1 ? (
        sortedData.map((row, i) => {
          return (
            <tr
              key={i}
              className="border-b transition-colors hover:bg-gray-100/50"
            >
              {headCells.map((header) => {
                const headerValue = header.value;

                if (headerValue === "created_dt") {
                  return (
                    <TableCell key={header.value} className="whitespace-nowrap">
                      {cleanDate((row as never)[headerValue])}
                    </TableCell>
                  );
                }

                if (headerValue === "data_source_modified_dt") {
                  return (
                    <TableCell key={header.value} className="whitespace-nowrap">
                      {cleanDate((row as never)[headerValue])}
                    </TableCell>
                  );
                }

                return (
                  <TableCell key={header.value}>{row[headerValue]}</TableCell>
                );
              })}
            </tr>
          );
        })
      ) : (
        <tr className="h-[60px] text-gray-500 text-sm">
          <td colSpan={headCells.length} className="text-center">
            No data available
          </td>
        </tr>
      )}
    </TableBody>
  );
};

export default TableBodyComponent;
