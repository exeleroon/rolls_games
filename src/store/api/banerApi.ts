import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface IBannerRes {
  action: string;
  source: string;
}
export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://on.kabushinoko.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
    },
  }),
  endpoints: (builder) => ({
    getBanner: builder.query<IBannerRes, void>({
      query: () => "interstitial",
    }),
  }),
});
export const { useGetBannerQuery } = bannerApi;
