export type TOrder = "asc" | "desc";

export type TRowToShow = {
  label: string;
  value: keyof TData;
};

export type TFilter = {
  label: string;
  value: string;
};

export type TData = {
  created_dt: string | null;
  data_source_modified_dt: string | null;
  entity_type: string | null;
  operating_status: string | null;
  legal_name: string | null;
  dba_name: string | null;
  physical_address: string | null;
  p_street: string | null;
  p_city: string | null;
  p_state: string | null;
  p_zip_code: number | null | string;
  phone: string | null;
  mailing_address: string | null;
  m_street: string | null;
  m_city: string | null;
  m_state: string | null;
  m_zip_code: number | null | string;
  usdot_number: number | null;
  mc_mx_ff_number: string | null;
  power_units: number | null;
  mcs_150_form_date: string | null;
  out_of_service_date: string | null;
  state_carrier_id_number: string | null;
  duns_number: string | null;
  drivers: number | null;
  mcs_150_mileage_year: string | null;
  id: number | null;
  credit_score: number | string | null;
  record_status: string | null;
};
