import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableBodyComponent from "./TableBody";
import SearchModal from "../modals/SearchModal";
import FilterModal from "../modals/FilterModal";
import ActiveFilter from "../utils/ActiveFilter";
import TableHeadComponent from "./TableHead";
import React from "react";
import { TableCtx } from "../../context/Table";

export default function TableComponent() {
  const { tableSort, tableSearchAndFilter } = React.useContext(TableCtx);

  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    tableSort;
  const { searchQuery, entityType, operatingStatus, recordStatus,filteredData } =
    tableSearchAndFilter;

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex h-[40px] mb-6 justify-end items-center gap-4 mt-2">
        {searchQuery.length >= 1 && <ActiveFilter text={searchQuery} />}
        {entityType !== "all" && <ActiveFilter text={entityType} />}
        {operatingStatus !== "all" && <ActiveFilter text={operatingStatus} />}
        {recordStatus !== "all" && <ActiveFilter text={recordStatus} />}

        <SearchModal />
        <FilterModal />
      </div>
      <TableContainer>
        <Table>
          <TableHeadComponent />
          <TableBodyComponent />
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
