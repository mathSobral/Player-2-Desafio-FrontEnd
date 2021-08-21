import { ThunkAction } from "redux-thunk";
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
  Action,
  SignInData,
  User,
  AuthState,
  CLEAR_SIGN_IN_FAIL_MESSAGE,
} from "./authTypes";

export const signInRequest = (): Action => {
  return { type: SIGN_IN_REQUEST };
};

export const signInSuccess = (user: User): Action => {
  return { type: SIGN_IN_SUCCESS, payload: user };
};

export const signInFail = (errorMessage: string): Action => {
  return { type: SIGN_IN_FAIL, payload: errorMessage };
};

export const clearMessage = (): Action => {
  return { type: CLEAR_SIGN_IN_FAIL_MESSAGE };
};

export const signIn =
  ({
    email,
    password,
  }: SignInData): ThunkAction<void, AuthState, null, Action> =>
  (dispatch) => {
    dispatch(signInRequest());

    setTimeout(() => {
      const user: User = {
        email,
        name: "Teste",
        token: "Token recebido da api",
      };
      if (password !== "12345678") dispatch(signInSuccess(user));
      else dispatch(signInFail("Senha ou usuário informados incorretamente"));
    }, 1000);
  };

export const signOut = (): Action => {
  return { type: SIGN_OUT };
};
