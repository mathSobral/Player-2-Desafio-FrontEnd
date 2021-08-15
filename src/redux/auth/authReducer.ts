import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
  CLEAR_SIGN_IN_FAIL_MESSAGE,
  Action,
  User,
  AuthState,
} from "./authTypes";

const userKey = "@player2/user";

/**
 * Verifica se há algum usuario salvo na local storage ao renderizar a aplicação
 */
const storagedUser = JSON.parse(
  localStorage.getItem(userKey) as string
) as User;

const initialState: AuthState = {
  loading: false,
  user: storagedUser,
  autenticated: !!storagedUser,
  errorMessage: undefined,
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
        errorMessage: undefined,
      };
    case SIGN_IN_SUCCESS:
      // Salva os dados do usuario incluindo seu token na localstorage
      localStorage.setItem(userKey, JSON.stringify(action.payload as User));
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
        errorMessage: action.payload as string,
      };
    case CLEAR_SIGN_IN_FAIL_MESSAGE:
      return { ...state, errorMessage: undefined };
    case SIGN_OUT:
      // Remove os dados do usuario da local storage
      localStorage.removeItem(userKey);
      return {
        ...state,
        autenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
};
