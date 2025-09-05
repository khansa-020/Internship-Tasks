import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formslice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
