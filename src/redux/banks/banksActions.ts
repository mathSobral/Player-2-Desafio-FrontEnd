import { ThunkAction } from "redux-thunk";
import { api } from "../../services/api";
import {
  FETCH_BANKS_LIST_REQUEST,
  FETCH_BANKS_LIST_SUCCESS,
  FETCH_BANKS_LIST_FAIL,
  FETCH_BANK_REQUEST,
  FETCH_BANK_SUCCESS,
  FETCH_BANK_FAIL,
  SET_BANKS_FILTERS,
  CLEAR_BANKS_FILTERS,
  Action,
  Bank,
  Filters,
  FetchBankProps,
  BanksState,
} from "./banksTypes";

export const fetchBanksListRequest = (): Action => {
  return { type: FETCH_BANKS_LIST_REQUEST };
};

export const fetchBanksListSuccess = (banks: Bank[]): Action => {
  return { type: FETCH_BANKS_LIST_SUCCESS, payload: banks };
};

export const fetchBanksListFail = (errorMessage: string): Action => {
  return { type: FETCH_BANKS_LIST_FAIL, payload: errorMessage };
};

export const fetchBankRequest = (): Action => {
  return { type: FETCH_BANK_REQUEST };
};

export const fetchBankSuccess = (bank: Bank): Action => {
  return { type: FETCH_BANK_SUCCESS, payload: bank };
};

export const fetchBankFail = (errorMessage: string): Action => {
  return { type: FETCH_BANK_FAIL, payload: errorMessage };
};

export const setBanksFilter = (filters: Filters): Action => {
  return { type: SET_BANKS_FILTERS, payload: filters };
};

export const clearBanksFilter = (): Action => {
  return { type: CLEAR_BANKS_FILTERS };
};

export const fetchBanks =
  (): ThunkAction<void, BanksState, null, Action> => (dispatch) => {
    dispatch(fetchBanksListRequest());
    api
      .get("banks/v1")
      .then((response) => {
        const banks = response.data as Bank[];
        dispatch(fetchBanksListSuccess(banks));
      })
      .catch((error) => {
        const { message } = error;
        dispatch(fetchBanksListFail(message));
      });
  };

export const fetchBank =
  ({ code }: FetchBankProps): ThunkAction<void, BanksState, null, Action> =>
  (dispatch) => {
    dispatch(fetchBankRequest());
    api
      .get(`banks/v1/${code}`)
      .then((response) => {
        const bank = response.data as Bank;
        dispatch(fetchBankSuccess(bank));
      })
      .catch((error) => {
        const { message } = error;
        dispatch(fetchBankFail(message));
      });
  };
