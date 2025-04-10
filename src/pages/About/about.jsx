import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <section className="about-body">
        <div className="about-left">
          <h4 className="about-tag">ABOUT US</h4>
          <h1 className="about-heading">Welcome to <span className="highlight">EUGENIUSTOURS</span></h1>
          <p className="about-desc">
            eugeniustours is a tourism company that 
            provides various tour packages to various 
            destinations in Kenya. We offer a wide 
            range of services, including tour
            packages, hotel bookings, and other
            travel-related services.
          </p>

          <div className="stats-container">
            <div className="stat-card">
              <i className="fas fa-hotel stat-icon"></i>
              <h2>5234</h2>
              <p>Places</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-cogs stat-icon"></i>
              <h2>24/7</h2>
              <p>support</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-users stat-icon"></i>
              <h2>3034</h2>
              <p>Clients</p>
            </div>
          </div>

          <button
            className="explore-btn"
            onClick={() => window.open("https://wa.me/256769999773", "_blank")}
          >
            Click to call
          </button>
        </div>

        <div className="about-right">
          <div className="image-grid">
            <img src="/about1.jpg" alt="Hotel 1" />
            <img src="/about2.jpg" alt="Hotel 2" />
            <img src="/about3.jpg" alt="Hotel 3" />
            <img src="/about4.png" alt="Hotel 4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
