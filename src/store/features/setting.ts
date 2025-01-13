import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface SettingState {
  isOnBoarding: boolean;
  soundVolume: number;
  VFXVolume: number;
}
const initialState: SettingState = {
  soundVolume: 1,
  VFXVolume: 3,
  isOnBoarding: false,
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeSoundVolume: (state, action: PayloadAction<number>) => {
      state.soundVolume = Number(`0.${action.payload}`);
    },
    changeFVXVolume: (state, action: PayloadAction<number>) => {
      state.VFXVolume = action.payload;
    },
    toggleOnBoarding: (state) => {
      state.isOnBoarding = !state.isOnBoarding;
    },
  },
});
export const { changeSoundVolume, changeFVXVolume, toggleOnBoarding } =
  settingSlice.actions;
export const selectSoundVolume = (state: RootState) =>
  state.setting.soundVolume;
export const selectVFXVolume = (state: RootState) => state.setting.VFXVolume;
export const selectIsOnBoarding = (state: RootState) =>
  state.setting.isOnBoarding;
export default settingSlice.reducer;
