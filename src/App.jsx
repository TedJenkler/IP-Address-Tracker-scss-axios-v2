import React, { useState, useEffect } from 'react';
import useLocation from './hooks/useLocation';
import useSearch from './hooks/useSearch';
import Search from './components/Search';
import Map from './components/Map';
import DisplayData from './components/DisplayData';

function App() {
  const { ipData: initialIpData, error: initialError, loading: initialLoading } = useLocation();
  const [ip, setIp] = useState('');
  const { ipData: searchIpData, error: searchError, loading: searchLoading } = useSearch({ ip });
  
  const [data, setData] = useState(initialIpData);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(initialLoading);

  useEffect(() => {
    if (ip) {
      setData(searchIpData);
      setError(searchError);
      setLoading(searchLoading);
    } else {
      setData(initialIpData);
      setError(initialError);
      setLoading(initialLoading);
    }
  }, [ip, initialIpData, initialError, initialLoading, searchIpData, searchError, searchLoading]);

  const handleSearch = (newIp) => {
    setIp(newIp);
  };

  return (
    <div className="app">
      <div className="info">
        <h1>IP Address Tracker</h1>
        <Search onSearch={handleSearch} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <DisplayData data={data} />
        )}
      </div>
      {loading ? null : <Map data={data} />}
    </div>
  );
}

export default App;