import React, { useState } from 'react';
import './destination.css';
import { FaMountain, FaTree, FaWater } from 'react-icons/fa';

const Destination = () => {
  // State for destinations data
  const [destinations] = useState([
    { id: 1, image: '/city.jpg', location: 'cities', alt: 'Santorini, Greece' },
    { id: 2, image: '/beach.jpg', location: 'beaches', alt: 'Rome, Italy' },
    { id: 3, image: '/river.jpg', location: 'rivers', alt: 'Mount Fuji, Japan' },
    { id: 4, image: '/park.webp', location: 'parks', alt: 'Dubai, UAE' },
    { id: 5, image: '/lake.jpg', location: 'lakes', alt: 'Moscow, Russia' },
    { id: 6, image: '/zoo.jpg', location: 'zoos', alt: 'Sydney, Australia' },
  ]);

  // Map features data
  const mapFeatures = [
    { icon: <FaMountain className="icon" />, text: 'Mountains' },
    { icon: <FaTree className="icon" />, text: 'Forests' },
    { icon: <FaWater className="icon" />, text: 'Rivers' },
  ];

  // Map configuration
  const mapConfig = {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599928.645567566!2d31.128094899999998!3d1.3733333000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a6e4a1e5c7e7%3A0x3e2c2e2e2e2e2e2e!2sUganda!5e0!3m2!1sen!2sus!4v1630000000000",
    width: "100%",
    height: "300",
    title: "Map of Uganda"
  };

  return (
    <div>
      {/* Destination Section */}
      <section className="destination-body">
        <div className="destination-header">
          <h1>Top <span>Destinations</span></h1>
          <p>Choose your favorite destination to explore Uganda with us</p>
        </div>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-item">
              <img 
                src={destination.image} 
                alt={destination.alt} 
                loading="lazy"
              />
              <div className="destination-info">
                <span className="location">{destination.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-text">
            <h3>Explore Uganda</h3>
            <p>Discover the beauty of Uganda with its diverse landscapes and attractions.</p>
            <div className="map-icons">
              {mapFeatures.map((feature, index) => (
                <div key={index} className="icon-item">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-embed">
            <iframe
              src={mapConfig.src}
              width={mapConfig.width}
              height={mapConfig.height}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={mapConfig.title}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;