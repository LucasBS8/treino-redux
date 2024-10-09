import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    buttonX: "X",
    buttonY: "Y",
  },
  reducers: {
    toggleButtonX: (state) => {
      state.buttonX = state.buttonX === "X" ? "Trocado por Y" : "X";
    },
    toggleButtonY: (state) => {
      state.buttonY = state.buttonY === "Y" ? "Trocado por X" : "Y";
    },
  },
});

export const { toggleButtonX, toggleButtonY } = counterSlice.actions;

export const selectButtonX = (state: any ) => state.counter.buttonX;
export const selectButtonY = (state: any) => state.counter.buttonY;

export default counterSlice.reducer;