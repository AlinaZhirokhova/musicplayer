import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";
import likeSlice from "./Slices/likeSlice";
import trackSlice from "./Slices/trackSlice";
import userReducer from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    like: likeSlice,
    filter: filterSlice,
    id: trackSlice
  },
});
