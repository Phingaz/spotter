import { TFilter } from "../types";

export const entity_type: TFilter[] = [
  { label: "All", value: "all" },
  { label: "Carrier", value: "carrier" },
  { label: "Broker", value: "broker" },
  { label: "Shipper", value: "shipper" },
  { label: "Freight", value: "freight" },
];

export const operating_status: TFilter[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Authorized", value: "authorized" },
  { label: "Not Authorized", value: "not authorized" },
  { label: "Out of Service", value: "out-of-service" },
];

export const record_status: TFilter[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export const yearsArr: TFilter[] = [
  { label: "All", value: "all" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
];

export const monthsArr: TFilter[] = [
  { label: "All", value: "all" },
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
