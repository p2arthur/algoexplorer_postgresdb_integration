import React from "react";
import { useGetAssetQuery, usePostAssetMutation } from "../store";

function AssetsList({ asset }) {

const [addAsset, result] = usePostAssetMutation();

const handleAddAsset = () =>{
  addAsset(asset)
}

  return (
    <div>
      {asset.params.name}
      <button onClick={handleAddAsset}> Add to db</button>
    </div>
  );
}

export default AssetsList;
