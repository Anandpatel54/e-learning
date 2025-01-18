import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer";
import { authApi } from "@/features/api/authApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(authApi.middleware),
});
