import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface BalanceState {
  coins: number;
  beta: number;
}
const initialState: BalanceState = {
  coins: 5000,
  beta: 100,
};

export const balanceSlice = createSlice({
  name: "balance",
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
  },
});

export const { addCoins, removeCoins, incrementBeta, decrementBeta } =
  balanceSlice.actions;

export const selectCoins = (state: RootState) => state.balance.coins;
export const selectBeta = (state: RootState) => state.balance.beta;

export default balanceSlice.reducer;
