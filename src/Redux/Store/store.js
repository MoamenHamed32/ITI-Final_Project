import { configureStore } from "@reduxjs/toolkit";
import myPcPopupReducer from "../myPcPopupSlice";

const store = configureStore({
  reducer: {
    open: myPcPopupReducer,
  },
});

export default store;
