export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL ";
export const SIGN_OUT = "SIGN_OUT ";

export interface User {
  email: string;
  name: string;
  token?: string;
}

export type Action = {
  type: string;
  payload?: string | User;
};

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthState {
  loading?: boolean;
  user?: User | undefined;
  autenticated: boolean;
}
