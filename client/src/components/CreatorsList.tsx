import React from "react";
import { useGetCreatorsQuery } from "../store";
import CreatorItem from "./CreatorsItem";
import Button from "./Button";
import { Creator } from "../store/apis/AssetApi";

function UsersList() {
    const { data, error, isLoading } = useGetCreatorsQuery();

    let content: JSX.Element;

    if (isLoading) content = <div>Loading Creators...</div>;
    else if (error) content = <div>Error fetching creators</div>;
    else
        content = data.map((creator: Creator) => <CreatorItem creator={creator} />);

    return (
        <div className="p-5 flex flex-col gap-5 bg-blue-700 text-white w-full h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Creators</h2>
                <form action="">
                    <input type="text" className="border-2 p-2 mr-3 rounded" placeholder="Asset id" />
                    <Button>Add asset</Button>
                </form>
            </div>
            <div className="flex flex-col gap-3">{content}</div>
        </div >
    );
}

export default UsersList;
