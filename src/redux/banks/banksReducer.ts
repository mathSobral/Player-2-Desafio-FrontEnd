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
  BanksState,
} from "./banksTypes";

const initialState: BanksState = {
  bank: undefined,
  banks: undefined,
  errorMessage: undefined,
  filters: undefined,
  loading: false,
};

export const banksReducer = (
  state: BanksState = initialState,
  action: Action
): BanksState => {
  switch (action.type) {
    case FETCH_BANKS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        banks: undefined,
        errorMessage: undefined,
      };
    case FETCH_BANKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        banks: action.payload as Bank[],
      };
    case FETCH_BANKS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload as string,
      };
    case FETCH_BANK_REQUEST:
      return {
        ...state,
        loading: true,
        bank: undefined,
        errorMessage: undefined,
      };
    case FETCH_BANK_SUCCESS:
      return {
        ...state,
        loading: false,
        bank: action.payload as Bank,
      };
    case FETCH_BANK_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload as string,
      };
    case SET_BANKS_FILTERS:
      return {
        ...state,
        filters: action.payload as Filters,
      };
    case CLEAR_BANKS_FILTERS:
      return {
        ...state,
        filters: undefined,
      };
    default:
      return state;
  }
};
