import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { algoExplorerApi } from "./apis/AssetApi";

export const store = configureStore({
  reducer: {
    [algoExplorerApi.reducerPath]: algoExplorerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(algoExplorerApi.middleware);
  },
});

setupListeners(store.dispatch);
export { useGetAssetQuery, usePostAssetMutation } from "./apis/AssetApi";
