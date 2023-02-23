import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { algoExplorerApi } from "./apis/AssetApi";
import { pgApi } from "./apis/AssetApi";

export const store = configureStore({
  reducer: {
    [algoExplorerApi.reducerPath]: algoExplorerApi.reducer,
    [pgApi.reducerPath]: pgApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      algoExplorerApi.middleware,
      pgApi.middleware
    );
  },
});

setupListeners(store.dispatch);
export {
  useGetAssetQuery,
  usePostAssetMutation,
  useGetCreatorsQuery,
} from "./apis/AssetApi";
