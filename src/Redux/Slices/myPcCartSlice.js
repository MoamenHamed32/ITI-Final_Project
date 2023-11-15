import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPcCart: [],
};
export const myPcCart = createSlice({
  name: "myPcCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      let dublicated = state.myPcCart.find(
        (product) => product.id == action.payload.id
      );

      if (!dublicated) {
        state.myPcCart.push(action.payload);
      } else {
        state.myPcCart.map((product) => {
          if (product.id === action.payload.id) {
            product.productQty.current++;
            product.totalPrice.current =
              product.priceAfterDisc * product.productQty.current;
          }
        });
      }
    },
  },
});

export const { addProduct } = myPcCart.actions;
export default myPcCart.reducer;
