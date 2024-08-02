import useLocation from "./hooks/useLocation";
import Search from "./components/Search";
import Map from "./components/Map";
import DisplayData from "./components/DisplayData";

function App() {
  const { ipData, error, loading } = useLocation();

  return (
    <div className="app">
      <div>
        <h1>IP Address Tracker</h1>
        <Search />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <DisplayData data={ipData} />
        )}
      </div>
      <Map data={ipData} />
    </div>
  );
}

export default App;
