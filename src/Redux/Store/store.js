import { configureStore } from "@reduxjs/toolkit";
import myPcPopupReducer from "../Slices/myPcPopupSlice";
import myPcDataReducer from "../Slices/myPcDataSlice";

const store = configureStore({
  reducer: {
    open: myPcPopupReducer,
    myPcData: myPcDataReducer,
  },
});

export default store;
