import React from "react";
import useSort from "../hooks/useSort";
import useSearchAndFilter from "../hooks/useSearchAndFilter";

export type TTableCtx = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  tableSearchAndFilter: ReturnType<typeof useSearchAndFilter>;
  tableSort: ReturnType<typeof useSort>;
};

export const TableCtx: React.Context<TTableCtx> =
  React.createContext<TTableCtx>({
    openModal: false,
    setOpenModal: () => {},
    tableSearchAndFilter: {} as ReturnType<typeof useSearchAndFilter>,
    tableSort: {} as ReturnType<typeof useSort>,
  });

const TableCtxProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const tableSearchAndFilter = useSearchAndFilter();
  const tableSort = useSort(tableSearchAndFilter.filteredData);

  const contextValue = {
    openModal,
    setOpenModal,
    tableSearchAndFilter,
    tableSort,
  };

  return <TableCtx.Provider value={contextValue}>{children}</TableCtx.Provider>;
};

export default TableCtxProvider;
