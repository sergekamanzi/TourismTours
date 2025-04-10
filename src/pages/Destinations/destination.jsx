import React from 'react';
import './destination.css';
import { FaMountain, FaTree, FaWater } from 'react-icons/fa'; // Importing icons from react-icons

const Destination = () => {
  return (
    <div>
      {/* Existing Destination Section */}
      <section className="destination-body">
        <div className="destination-header">
          <h1>Top <span>Destinations</span></h1>
          <p>Choose your favorite destination to explore Uganda with us</p>
        </div>
        <div className="destination-grid">
          <div className="destination-item">
            <img src="/city.jpg" alt="Santorini, Greece" />
            <div className="destination-info">
              <span className="location">cities</span>
            </div>
          </div>
          <div className="destination-item">
            <img src="/beach.jpg" alt="Rome, Italy" />
            <div className="destination-info">
              <span className="location">beaches</span>
            </div>
          </div>
          <div className="destination-item">
            <img src="/river.jpg" alt="Mount Fuji, Japan" />
            <div className="destination-info">
              <span className="location">rivers</span>
            </div>
          </div>
          <div className="destination-item">
            <img src="/park.webp" alt="Dubai, UAE" />
            <div className="destination-info">
              <span className="location">parks</span>
            </div>
          </div>
          <div className="destination-item">
            <img src="/lake.jpg" alt="Moscow, Russia" />
            <div className="destination-info">
              <span className="location">lakes</span>
            </div>
          </div>
          <div className="destination-item">
            <img src="/zoo.jpg" alt="Sydney, Australia" />
            <div className="destination-info">
              <span className="location">zoos</span>
            </div>
          </div>
        </div>
      </section>

      {/* New Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-text">
            <h3>Explore Uganda</h3>
            <p>Discover the beauty of Uganda with its diverse landscapes and attractions.</p>
            <div className="map-icons">
              <div className="icon-item">
                <FaMountain className="icon" />
                <span>Mountains</span>
              </div>
              <div className="icon-item">
                <FaTree className="icon" />
                <span>Forests</span>
              </div>
              <div className="icon-item">
                <FaWater className="icon" />
                <span>Rivers</span>
              </div>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599928.645567566!2d31.128094899999998!3d1.3733333000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a6e4a1e5c7e7%3A0x3e2c2e2e2e2e2e2e!2sUganda!5e0!3m2!1sen!2sus!4v1630000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map of Uganda"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;