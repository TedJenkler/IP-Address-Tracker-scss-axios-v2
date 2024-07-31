import Search from "./components/Search";
import Map from "./components/Map";

function App() {

  return (
    <div className="app">
      <div>
        <h1>IP Address Tracker</h1>
        <Search />
      </div>
      <Map />
    </div>
  )
}

export default App
