import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './styles.css';
import portugalFlagImage from './images/illustration-portugal-flag_53876-18170.jpg.avif';
import TopRestaurantsPage from './components/TopRestaurants/TopRestaurantsPage';
import HomePage from './components/HomePage';
import CuisinesPage from './components/cuisines/CuisinesPage';
import MapPage from './components/map/MapPage';

function App() {
  return (
    <Router>
      <div>
        <header>
          <img src={portugalFlagImage} alt="Portugal Flag" />
          <h1>Lisbon Restaurant Recommendations</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/TopRestaurants">Top Restaurants</Link>
            <Link to="/cuisines">Cuisines</Link>
            <Link to="/map">Map</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/TopRestaurants" exact element={<TopRestaurantsPage />} />
          <Route path="/cuisines" exact element={<CuisinesPage />} />
          <Route path="/map" exact element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;