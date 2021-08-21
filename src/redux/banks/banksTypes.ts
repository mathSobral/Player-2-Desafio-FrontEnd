export const FETCH_BANKS_LIST_REQUEST = "FETCH_BANKS_LIST_REQUEST";
export const FETCH_BANKS_LIST_SUCCESS = "FETCH_BANKS_LIST_SUCCESS";
export const FETCH_BANKS_LIST_FAIL = "FETCH_BANKS_LIST_FAIL ";
export const FETCH_BANK_REQUEST = "FETCH_BANK_REQUEST";
export const FETCH_BANK_SUCCESS = "FETCH_BANK_SUCCESS";
export const FETCH_BANK_FAIL = "FETCH_BANK_FAIL ";
export const SET_BANKS_FILTERS = "SET_BANKS_FILTERS ";
export const CLEAR_BANKS_FILTERS = "CLEAR_BANKS_FILTERS ";
export const DELETE_BANK = "DELETE_BANK"

export interface Bank {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export interface Filters {
  fullName: string;
}

export type Action = {
  type: string;
  payload?: string | Bank | Bank[] | Filters;
};

export interface FetchBankProps {
  code: string;
}

export interface BanksState {
  loading?: boolean;
  banks?: Bank[] | undefined;
  bank?: Bank | undefined;
  errorMessage?: string;
  filters?: Filters;
}
