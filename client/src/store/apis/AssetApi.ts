import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Asset {
    id: number;
    asset_id: string;
    name: string;
    unit_name: string;
    decimals: number;
    created_at: string;
    updated_at: string;
}

interface AssetResponse {
    assets: Asset[];
}


export const pgApi = createApi({
    reducerPath: 'algoExplorerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    endpoints(builder) {
        return {
            getAsset: builder.query<AssetResponse, string>({
                query: (assetId: String) => { return { url: `/assets` } },
            }),

            postAsset: builder.mutation({
                query: (asset) => {
                    return {
                        url: '/assets',
                        body: { assetCreator: asset.params.creator, assetName: asset.params.name, unitName: asset.params["unit-name"], assetUrl: asset.params.url },
                        method: "POST"
                    }
                }
            })
        };
    },
});

export const algoExplorerApi = createApi({
    reducerPath: 'algoExplorerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://node.algoexplorerapi.io/',
    }),
    endpoints(builder) {
        return {
            getAsset: builder.query<AssetResponse, string>({
                query: (assetId: String) => { return { url: `v2/assets/${assetId}` } },
            }),
        };
    },
});

export const { useGetAssetQuery } = algoExplorerApi;
export const { usePostAssetMutation } = pgApi;