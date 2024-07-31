import Search from "./components/Search";
import Map from "./components/Map";
import DisplayData from "./components/DisplayData";

function App() {

  return (
    <div className="app">
      <div>
        <h1>IP Address Tracker</h1>
        <Search />
        <DisplayData />
      </div>
      <Map />
    </div>
  )
}

export default App
