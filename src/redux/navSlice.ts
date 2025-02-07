import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavState = {
  isNavVisible: boolean;
};

const initialState: NavState = {
  isNavVisible: false,
};

const navSlices = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNavVisible: (state, action: PayloadAction<boolean>) => {
      state.isNavVisible = action.payload;
    },
  },
});

export const { toggleNavVisible } = navSlices.actions;
export default navSlices.reducer;
