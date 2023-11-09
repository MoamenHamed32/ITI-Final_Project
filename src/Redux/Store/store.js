import { configureStore } from "@reduxjs/toolkit";
import myPcPopupReducer from "../Slices/myPcPopupSlice";
import myPcDataReducer from "../Slices/myPcDataSlice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    open: myPcPopupReducer,
    myPcData: myPcDataReducer,
  },
});

export default store;
