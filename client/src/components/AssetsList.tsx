import React from "react";
import { useGetAssetQuery, usePostAssetMutation } from "../store";
import Button from "./Button";

function AssetsList({ asset }) {
  const { data, error, isLoading } = useGetAssetQuery("584074936");
  const [addAsset, result] = usePostAssetMutation();

  const handleAddAsset = () => {
    addAsset(asset)
  }

  return (
    <div>
      {asset.params.name}
      <Button className="p-10">Add asset</Button>
    </div>
  );
}

export default AssetsList;
