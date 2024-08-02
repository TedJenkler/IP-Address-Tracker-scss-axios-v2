import React, { useState } from 'react';
import arrow from '../assets/arrow.png';

function Search({ onSearch }) {
  const [ip, setIp] = useState('');

  const handleSearch = () => {
    if (ip.trim()) {
      onSearch(ip.trim());
    } else {
    }
  };

  return (
    <div className='search'>
      <input
        type="text"
        onChange={(e) => setIp(e.target.value)}
        value={ip}
        placeholder="Enter IP address"
      />
      <button onClick={handleSearch}>
        <img src={arrow} alt='search' />
      </button>
    </div>
  );
}

export default Search;