import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TFilter } from "../../types";

export default function SelectComponent({
  id,
  label,
  arry,
  item,
  setItem,
}: {
  id: string;
  label: string;
  arry: TFilter[];
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          id={id}
          value={item}
          label={label}
          labelId={label}
          onChange={handleChange}
        >
          {arry.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
