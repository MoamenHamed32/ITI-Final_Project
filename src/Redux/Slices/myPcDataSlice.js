import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPcData: {
    monitor: "",
    mouse: "",
    keyboard: "",
    speaker: "",
    caseHardWare: {
      case: "",
      ramOne: "",
      ramTwo: "",
      ramThree: "",
      ramFour: "",
      gpu: "",
      powerSupply: "",
      motherboard: "",
      cpu: "",
      hardDesk: "",
      secondaryHardDesk: "",
      fan: "",
    },
  },
};
export const myPcData = createSlice({
  name: "myPcData",
  initialState,
  reducers: {
    addToPc: (state, action) => {
      const { catigory, productTitle } = action.payload;
      state.myPcData[catigory] = productTitle;
    },
    addToPcCase: (state, action) => {
      const { catigory, productTitle } = action.payload;
      state.myPcData.caseHardWare[catigory] = productTitle;
    },
    removeFromPc: (state, action) => {
      const category = action.payload;
      state.myPcData[category] = "";
    },
    removeFromPcCase: (state, action) => {
      const category = action.payload;
      state.myPcData.caseHardWare[category] = "";
    },
  },
});

export const { addToPc, addToPcCase, removeFromPc, removeFromPcCase } =
  myPcData.actions;
export default myPcData.reducer;
