import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import ModalComponent from "./Modal";
import { TableCtx } from "../../context/Table";
import React from "react";

const SearchModal = () => {
  const { tableSearchAndFilter, openModal, setOpenModal } =
    React.useContext(TableCtx);
  const { searchQuery, setSearchQuery, applySearchAndFilter } =
    tableSearchAndFilter;

  return (
    <ModalComponent
      open={openModal}
      setOpen={setOpenModal}
      className="h-full"
      trigger={
        <button
          onClick={() => setOpenModal((p) => !p)}
          className="cursor-pointer text-gray-500 border rounded-lg h-full grid place-content-center px-2 hover:bg-gray-100 transition outline-0"
        >
          <Search />
        </button>
      }
    >
      <Box className="bg-white p-3 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpenModal(false);
          }}
          className="flex flex-col gap-2 p-4"
        >
          <label htmlFor="search" className="text-xl text-gray-500 font-[500]">
            Search
          </label>
          <input
            autoFocus
            id="search"
            name="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Start typing to search..."
            className={`h-full outline-none w-[400px] border px-3 py-3 rounded-lg border-gray-300 text-sm mb-5`}
          />
          <button
            type="submit"
            onClick={() => applySearchAndFilter()}
            className="text-gray-500 py-2 font-[500] bg-gray-100 hover:bg-gray-200 transition rounded-md"
          >
            Apply
          </button>
        </form>
      </Box>
    </ModalComponent>
  );
};

export default SearchModal;
