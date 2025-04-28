import { configureStore } from "@reduxjs/toolkit";
import authAPi from "@/features/api/authApi";
import rootReducer from "./rootReducer";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPi.middleware),
});
// {
//   auth: authReducer, // Fix: `reducer`, not `reducers`
// },
