import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "./features/drinks/drinksSlice";

export const store = configureStore({
  reducer: {
    drinks: drinksReducer,
  },
});
