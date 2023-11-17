import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import myPcCartReducer from "../Slices/myPcCartSlice";
import authSlice from "./auth-slice";
import wishListProducts from "../Slices/wishListProducts";
import { myPcDataReducer } from "../Slices/myPcDataSlice"; // Assuming this is the correct import

const myPcDataPersistConfig = {
  key: "root",
  storage,
};
const myPcCartPersistConfig = {
  key: "myPcCart",
  storage,
};
const persistedMyPcDataReducer = persistReducer(
  myPcDataPersistConfig,
  myPcDataReducer
);
const persistedMyPcCartReducer = persistReducer(
  myPcCartPersistConfig,
  myPcCartReducer
);

const store = configureStore({
  reducer: {
    auth: authSlice,
    myPcData: persistedMyPcDataReducer,
    myPcCart: persistedMyPcCartReducer,
    wishListProducts: wishListProducts,
  },
});

export const persistor = persistStore(store);
export default store;
