import React, { useEffect, useState } from 'react';
import '../../styles.css'; // Import the CSS file
import cuisinesData from '../../api/cuisines.json';

function CuisinesPage() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    // Fetch the cuisines data from cuisinesData.json
    fetch('../../api/cuisines.json')
      .then((response) => response.json())
      .then((data) => setCuisines(data))
      .catch((error) => console.error('Error fetching cuisines data:', error));
  }, []);

  return (
    <div className="cuisines-page">
      <div className="container">
        <ul id="cuisine-container" >
          {cuisinesData.map((cuisine) => (
            <li key={cuisine.id}>
              <h3 className="cuisine-name">{cuisine.name}</h3>
              <img src={require(`../../images/cuisines/${cuisine.image}`)} style={{ width: '400px', height: '400px' }} alt={cuisine.name} />
              <p>{cuisine.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CuisinesPage;

