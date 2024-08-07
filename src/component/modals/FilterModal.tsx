import { FilterList } from "@mui/icons-material";
import { Box } from "@mui/material";
import ModalComponent from "./Modal";
import SelectComponent from "../utils/Select";
import {
  entity_type,
  monthsArr,
  operating_status,
  record_status,
  yearsArr,
} from "../../constants/filterOptions";
import { TableCtx } from "../../context/Table";
import React from "react";

const FilterModal = () => {
  const {
    openFilter,
    setOpenFilter,
    entityType,
    months,
    years,
    setMonths,
    setYears,
    applySearchAndFilter,
    clearSearchAndFilter,
    operatingStatus,
    recordStatus,
    setEntityType,
    setOperatingStatus,
    setRecordStatus,
  } = React.useContext(TableCtx).tableSearchAndFilter;

  return (
    <ModalComponent
      open={openFilter}
      setOpen={setOpenFilter}
      className="h-full"
      trigger={
        <button
          onClick={() => setOpenFilter((p) => !p)}
          className="cursor-pointer text-gray-500 border rounded-lg h-full grid place-content-center px-2 hover:bg-gray-100 transition outline-0"
        >
          <FilterList className="cursor-pointer text-gray-500" />
        </button>
      }
    >
      <Box className="bg-white p-8 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[min(500px,90vw)] min-h-[min(300px,90svh)] outline-0">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-[500] text-gray-600">Filters</h3>
            <button
              className="text-gray-500 text-sm px-2 py-1 font-[500] bg-gray-100 hover:bg-gray-200 transition rounded-lg"
              onClick={clearSearchAndFilter}
            >
              Clear All
            </button>
          </div>
          <SelectComponent
            item={entityType}
            id="entity_type"
            label="Entity Type"
            arry={entity_type}
            setItem={setEntityType}
          />
          <SelectComponent
            item={operatingStatus}
            id="operating_status"
            label="Operating Status"
            arry={operating_status}
            setItem={setOperatingStatus}
          />
          <SelectComponent
            item={recordStatus}
            id="record_status"
            label="Record Status"
            arry={record_status}
            setItem={setRecordStatus}
          />
          <SelectComponent
            item={months}
            id="month"
            label="Month Created"
            arry={monthsArr}
            setItem={setMonths}
          />
          <SelectComponent
            item={years}
            id="year"
            label="Year Created"
            arry={yearsArr}
            setItem={setYears}
          />
          <button
            onClick={applySearchAndFilter}
            className="text-gray-500 py-4 font-[500] bg-gray-100 hover:bg-gray-200 transition rounded-md"
          >
            Apply
          </button>
        </div>
      </Box>
    </ModalComponent>
  );
};

export default FilterModal;
