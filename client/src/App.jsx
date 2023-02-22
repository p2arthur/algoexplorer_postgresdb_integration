import { useGetAssetQuery } from "./store";
import AssetsList from "./components/AssetsList";

function App() {
  const { data, error, isLoading } = useGetAssetQuery("584074936");

  if (isLoading) return <div>Loading data</div>;

  if ((!isLoading, !error)) {
    console.log(data);
    return <AssetsList asset={data} />;
  }
}

export default App;
