import React from 'react';
import topRestaurantsData from '../../api/restaurants.json';
import '../../styles.css';

function TopRestaurantsPage() {
  return (
    <div>
      <main>
        <div className="container">
          <h2>Top Restaurants in Lisbon</h2>
          <div className="centered-container">
            <ul id="restaurant-container">
              {topRestaurantsData.map((restaurant) => (
                <li key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <div className="centered-image">
                   <img src={require(`../../images/restaurants/${restaurant.image}`)} style={{ width: '400px', height: '400px' }} alt={restaurant.name} />
                </div>
                <p>Price Range: {restaurant.priceRange}</p>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Location: {restaurant.location}</p>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <footer>
        &copy; 2023 Lisbon Restaurant Recommendations
      </footer>
      </main>
    </div>
  );
}

export default TopRestaurantsPage;


