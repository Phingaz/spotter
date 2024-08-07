import { getTableHeaders } from "../util";
import { TRowToShow } from "../types";
import { dataMock } from "./data";

export const rowsToShow: TRowToShow[] = [
  { label: "Legal Name", value: "legal_name" },
  { label: "DBA name", value: "dba_name" },
  { label: "Physical address", value: "physical_address" },
  { label: "Phone", value: "phone" },
  { label: "Entity", value: "entity_type" },
  { label: "Operating Status", value: "operating_status" },
  { label: "DOT", value: "usdot_number" },
  { label: "MC/MX/FF", value: "mc_mx_ff_number" },
  { label: "Power units", value: "power_units" },
  { label: "Out of service date", value: "out_of_service_date" },
  { label: "Created_DT", value: "created_dt" },
  { label: "Modified_DT", value: "data_source_modified_dt" },
];

export const headCells = getTableHeaders(dataMock[0] as unknown as TRowToShow);
