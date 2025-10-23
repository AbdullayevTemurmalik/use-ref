import { configureStore } from "@reduxjs/toolkit";
import yourReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    yourData: yourReducer,
  },
});
