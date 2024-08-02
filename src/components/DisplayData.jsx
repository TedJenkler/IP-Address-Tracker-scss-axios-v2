import React from 'react';

function DisplayData({ data }) {
  const { ip, location, isp } = data;
  const { city, country, postalCode, timezone } = location;

  return (
    <section className='data'>
      <div>
        <label>IP Address</label>
        <p>{ip}</p>
      </div>
      <div>
        <label>Location</label>
        <p>{city}, {country} {postalCode}</p>
      </div>
      <div>
        <label>Timezone</label>
        <p>{timezone}</p>
      </div>
      <div>
        <label>ISP</label>
        <p>{isp}</p>
      </div>
    </section>
  );
}

export default DisplayData;