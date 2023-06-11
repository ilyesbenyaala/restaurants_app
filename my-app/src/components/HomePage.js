import React from 'react';
import '../styles.css';
import portugalCuisisneImage from "../images/lisbon_cuisine.jpg";
import portugalFoodImage from "../images/food.jpg";
function HomePage() {
  return (
    <main>
      <div className="container">
        <h2>Welcome to Lisbon Restaurant Recommendations!</h2>
        <p>Discover the best dining experiences in Lisbon.</p>
        <p>
          Lisbon's cuisine is a reflection of its rich history and diverse cultural influences. From traditional Portuguese dishes to international flavors, the city offers a culinary journey that will delight your taste buds.
        </p>
        <p>
          Indulge in local specialties such as bacalhau (salted cod), grilled sardines, and caldo verde (kale soup). Don't forget to try pastéis de nata, the famous Portuguese custard tarts that are a must-try dessert.
        </p>
        <p>
          Explore the vibrant food markets, trendy restaurants, and cozy cafés scattered throughout Lisbon's charming neighborhoods. Whether you're a food lover, a fan of seafood, or simply seeking authentic culinary experiences, Lisbon has something to offer for everyone.
        </p>
        <p>On this website, you'll find:</p>
        <ul>
          <li>Top restaurant recommendations in Lisbon</li>
          <li>A variety of cuisines to suit every taste</li>
          <li>An interactive map to explore restaurant locations</li>
          <li>Price ranges to help you plan your budget</li>
        </ul>
        <p>Get ready to embark on a culinary adventure and discover the flavors of Lisbon!</p>
        <img src={portugalCuisisneImage} alt="Restaurant" style={{ width: '400px', height: '300px' }}/>
        <img src={portugalFoodImage} alt="Restaurant" style={{ width: '400px', height: '300px' }}/>
      </div>
      <footer>
        &copy; 2023 Lisbon Restaurant Recommendations
      </footer>
    </main>
  );
}

export default HomePage;
