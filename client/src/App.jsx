import React from "react";
import { useGetAssetQuery } from "./store";
import AssetsList from "./components/AssetsList";
import UsersList from "./components/CreatorsList";

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-black text-white p-3">NFT Viewer</div>
      <section className="flex h-full">
        <ul className="w-52 bg-blue-800 text-white flex flex-col items-center gap-5 py-10">
          <li className="bg-blue-900 w-full text-center py-3 cursor-pointer hover:bg-sky-700">
            item1
          </li>
          <li className="bg-blue-900 w-full text-center py-3 cursor-pointer hover:bg-sky-700">
            item2
          </li>
          <li className="bg-blue-900 w-full text-center py-3 cursor-pointer hover:bg-sky-700">
            item3
          </li>
          <li className="bg-blue-900 w-full text-center py-3 cursor-pointer hover:bg-sky-700">
            item4
          </li>
        </ul>

        <UsersList />
      </section>
    </div>
  );
}

export default App;
