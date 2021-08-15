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
} from "./authTypes";

export const signInRequest = (): Action => {
  return { type: SIGN_IN_REQUEST };
};

export const signInSuccess = (user: User): Action => {
  return { type: SIGN_IN_SUCCESS, payload: user };
};

export const signInFail = (): Action => {
  return { type: SIGN_IN_FAIL };
};

export const signIn =
  ({
    email,
    password,
  }: SignInData): ThunkAction<void, AuthState, null, Action> =>
  (dispatch) => {
    dispatch(signInRequest());

    setTimeout(() => {
      const user: User = { email, name: "Teste" };
      if (password === "12345678") dispatch(signInSuccess(user));
      else dispatch(signInFail());
    }, 3000);
  };

export const signOut = (): Action => {
  return { type: SIGN_OUT };
};
