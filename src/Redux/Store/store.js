import { configureStore } from "@reduxjs/toolkit";
import myPcDataReducer from "../Slices/myPcDataSlice";
import myPcCartReducer from "../Slices/myPcCartSlice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    myPcData: myPcDataReducer,
    myPcCart: myPcCartReducer,
  },
});

export default store;
