import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};
export const myPcPopup = createSlice({
  name: "open",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.open = true;
    },
    closePopup: (state) => {
      state.open = false;
    },
  },
});

export const { openPopup, closePopup } = myPcPopup.actions;
export default myPcPopup.reducer;
