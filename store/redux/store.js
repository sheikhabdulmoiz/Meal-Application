import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./fovorites";

export const store = configureStore({
  reducer: {
    favoritesMeal: favoritesReducer,
  },
});