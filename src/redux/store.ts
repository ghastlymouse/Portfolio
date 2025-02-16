import { configureStore } from "@reduxjs/toolkit";
import navSlices from "./navSlice";

const store = configureStore({
  reducer: {
    nav: navSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
