
import React, { useEffect } from 'react';
import cuisinesData from '../../api/cuisinesMap.json';

function MapPage() {
  useEffect(() => {
    // Load the Google Maps JavaScript API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2KSvaiHuJGfVQZykfNFNfpXfLauMRraU&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.7223, lng: -9.1393 }, // Lisbon coordinates
        zoom: 12
      });

      // Add markers to the map
      cuisinesData.forEach((restaurant) => {
        const marker = new window.google.maps.Marker({
          position: restaurant.location,
          map: map,
          title: restaurant.name
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: `<h3>${restaurant.name}</h3><p>${restaurant.description}</p>`
        });

        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });
      });
    };
  }, []);

  return <div id="map" style={{ height: '700px' }}></div>;
}

export default MapPage;