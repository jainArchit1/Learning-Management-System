import authAPi from "@/features/api/authApi";
import authReducer from "@/features/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  [authAPi.reducerPath]: authAPi.reducer,
  auth: authReducer,
});

export default rootReducer;
