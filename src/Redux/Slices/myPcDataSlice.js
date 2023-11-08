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
      vga: "",
      powerSupply: "",
      board: "",
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
  },
});

export const { addToPc } = myPcData.actions;
export default myPcData.reducer;
