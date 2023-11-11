import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPcCart: [],
};
export const myPcCart = createSlice({
  name: "myPcCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.myPcCart.push(action.payload);
    },
  },
});

export const { addProduct } = myPcCart.actions;
export default myPcCart.reducer;
