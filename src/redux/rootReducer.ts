import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { banksReducer } from "./banks/banksReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  banks: banksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
