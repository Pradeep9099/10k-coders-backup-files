import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/usersReducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: usersReducer,
  devTools: true,
  middleware: [thunk],
});