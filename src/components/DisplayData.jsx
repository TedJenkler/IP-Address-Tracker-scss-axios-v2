import React from 'react';

function DisplayData({ data }) {
  const { ip, location, isp } = data;
  const { city, country, postalCode, timezone } = location;

  return (
    <section className='data'>
      <label>IP Address</label>
      <p>{ip}</p>
      <label>Location</label>
      <p>{city}, {country} {postalCode}</p>
      <label>Timezone</label>
      <p>{timezone}</p>
      <label>ISP</label>
      <p>{isp}</p>
    </section>
  );
}

export default DisplayData;