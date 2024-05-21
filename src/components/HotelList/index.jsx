import React from 'react';

const HotelList = ({ hotels }) => {
  return (
    <div>
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.rating} Stars</p>
          <p>{hotel.amenities.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default HotelList;








