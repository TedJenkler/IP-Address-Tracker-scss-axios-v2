import useLocation from "./hooks/useLocation";
import Search from "./components/Search";
import Map from "./components/Map";
import DisplayData from "./components/DisplayData";
import data from "../data.json"

function App() {
  const { ipData, error, loading } = useLocation();

  return (
    <div className="app">
      <div>
        <h1>IP Address Tracker</h1>
        <Search />
        <DisplayData data={data} />
      </div>
      <Map data={data} />
    </div>
  );
}

export default App;
