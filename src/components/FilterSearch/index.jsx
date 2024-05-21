import React, { useState } from 'react';

const FilterSearch = ({ onFilterChange }) => {
  // Ініціалізуємо стани для рейтингів та зручностей
  const [rating, setRating] = useState([]);
  const [amenities, setAmenities] = useState([]);

  // Обробник зміни рейтингу
  const handleRatingChange = (selectedRating) => {
    const newRatings = rating.includes(selectedRating)
      ? rating.filter(r => r !== selectedRating) // Видаляємо рейтинг, якщо він вже вибраний
      : [...rating, selectedRating]; // Додаємо рейтинг, якщо він ще не вибраний
    setRating(newRatings); // Оновлюємо стан рейтингів
    onFilterChange(newRatings, amenities); // Викликаємо функцію з пропсів з новими значеннями
  };

  // Обробник зміни зручностей
  const handleAmenityChange = (selectedAmenity) => {
    const newAmenities = amenities.includes(selectedAmenity)
      ? amenities.filter(a => a !== selectedAmenity) // Видаляємо зручність, якщо вона вже вибрана
      : [...amenities, selectedAmenity]; // Додаємо зручність, якщо вона ще не вибрана
    setAmenities(newAmenities); // Оновлюємо стан зручностей
    onFilterChange(rating, newAmenities); // Викликаємо функцію з пропсів з новими значеннями
  };

  return (
    <div>
      <h3>Hotel Rating</h3>
      {[1, 2, 3, 4, 5].map(r => (
        <button key={r} onClick={() => handleRatingChange(r)}>
          {r} Star
        </button>
      ))}

      <h3>Popular Filters</h3>
      {['Free cancellation', 'WiFi', 'Parking', 'Pool', 'Spa', 'Breakfast included'].map(amenity => (
        <div key={amenity}>
          <input
            type="checkbox"
            id={amenity}
            onChange={() => handleAmenityChange(amenity)}
          />
          <label htmlFor={amenity}>{amenity}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
