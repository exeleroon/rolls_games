import { configureStore } from "@reduxjs/toolkit";
import slotSlice from "./features/slot";
import settingSlice from "./features/setting";
import { bannerApi } from "./api/banerApi";

export const store = configureStore({
  reducer: {
    slot: slotSlice,
    setting: settingSlice,
    [bannerApi.reducerPath]: bannerApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(bannerApi.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
