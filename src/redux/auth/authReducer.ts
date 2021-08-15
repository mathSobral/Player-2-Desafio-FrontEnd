import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
  Action,
  User,
  AuthState,
} from "./authTypes";

const initialState: AuthState = {
  loading: false,
  user: undefined,
  autenticated: false,
};

export const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        autenticated: false,
        user: undefined,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload as User,
        autenticated: true,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        autenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
};
