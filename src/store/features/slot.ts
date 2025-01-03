import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface SlotState {
  coins: number;
  beta: number;
  life: number;
}
const initialState: SlotState = {
  coins: 5000,
  beta: 100,
  life: 3,
};

export const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    addCoins: (state, action: PayloadAction<number>) => {
      state.coins += action.payload;
    },
    removeCoins: (state, action: PayloadAction<number>) => {
      state.coins = state.coins >= 100 ? state.coins - action.payload : 0;
    },
    incrementBeta: (state, action: PayloadAction<number>) => {
      state.beta =
        action.payload + state.beta <= state.coins
          ? state.beta + action.payload
          : state.beta;
    },
    decrementBeta: (state, action: PayloadAction<number>) => {
      state.beta = state.beta >= 200 ? state.beta - action.payload : 100;
    },
    updateLife: (state, action: PayloadAction<number>) => {
      state.life = action.payload;
    },
    resetLife: (state) => {
      state.life = 3;
    },
  },
});

export const {
  addCoins,
  removeCoins,
  incrementBeta,
  decrementBeta,
  updateLife,
  resetLife,
} = slotSlice.actions;

export const selectCoins = (state: RootState) => state.slot.coins;
export const selectBeta = (state: RootState) => state.slot.beta;
export const selectLife = (state: RootState) => state.slot.life;

export default slotSlice.reducer;
