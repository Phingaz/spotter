/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { TData } from "../types";
import { dataMock } from "../constants/data";

const useSearchAndFilter = () => {
  const [data] = React.useState<TData[]>(dataMock);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState<TData[]>(dataMock);

  const [searchQuery, setSearchQuery] = React.useState("");

  const [entityType, setEntityType] = React.useState("all");
  const [operatingStatus, setOperatingStatus] = React.useState("all");
  const [recordStatus, setRecordStatus] = React.useState("all");
  const [years, setYears] = React.useState("all");
  const [months, setMonths] = React.useState("all");

  const applySearchAndFilter = () => {
    let tempData = data;

    // Apply search
    if (searchQuery) {
      tempData = tempData.filter((item) => {
        const values = Object.values(item).join(" ").toLowerCase();
        return values.includes(searchQuery.toLowerCase());
      });
    }

    // Apply filters
    if (entityType !== "all") {
      tempData = tempData.filter(
        (item) => item.entity_type?.toLowerCase() === entityType.toLowerCase()
      );
    }

    if (operatingStatus !== "all") {
      tempData = tempData.filter(
        (item) =>
          item.operating_status?.toLowerCase() === operatingStatus.toLowerCase()
      );
    }

    if (recordStatus !== "all") {
      tempData = tempData.filter(
        (item) =>
          item.record_status?.toLowerCase() === recordStatus.toLowerCase()
      );
    }

    if (months !== "all") {
      tempData = tempData.filter(
        (item) =>
          item.created_dt &&
          (new Date(item.created_dt).getMonth() + 1).toString() === months
      );
    }

    if (years !== "all") {
      tempData = tempData.filter(
        (item) =>
          item.created_dt &&
          new Date(item.created_dt).getFullYear().toString() === years
      );
    }

    setFilteredData(tempData);
    setOpenFilter(false);
  };

  const clearSearchAndFilter = () => {
    setSearchQuery("");
    setEntityType("all");
    setOperatingStatus("all");
    setRecordStatus("all");
    setYears("all");
    setMonths("all");
    setFilteredData(data);
  };

  return {
    openFilter,
    setOpenFilter,
    openSearch,
    setOpenSearch,
    months,
    setMonths,
    years,
    setYears,
    filteredData,
    searchQuery,
    setSearchQuery,
    entityType,
    setEntityType,
    operatingStatus,
    setOperatingStatus,
    recordStatus,
    setRecordStatus,
    applySearchAndFilter,
    clearSearchAndFilter,
  };
};

export default useSearchAndFilter;
