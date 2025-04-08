import React, { useState, useEffect } from 'react';
import './home.css';
import { FaGem, FaPenNib, FaStar, FaBookmark } from 'react-icons/fa';

const slides = [
  {
    image: '/hero1.jpg',
    title: 'Eugenius Tours',
  },
  {
    image: '/hero2.jpg',
    title: 'Enjoy Our Tour',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* === Hero Section === */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <div className="hero-underline"></div>
          <button className="hero-button">Click here to call</button>
        </div>
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* === Pillar Section === */}
      <section className="pillar-section">
        <div className="pillar-container">
          <div className="pillar-box">
            <div className="pillar-icon">
              <FaGem />
            </div>
            <h3>Color it all</h3>
            <p>
              Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
              Etiam fermentum tinc idunt.
            </p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaPenNib />
            </div>
            <h3>Branding projects</h3>
            <p>
              Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
              Etiam fermentum tinc idunt.
            </p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaStar />
            </div>
            <h3>Promotion & event</h3>
            <p>
              Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
              Etiam fermentum tinc idunt.
            </p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaBookmark />
            </div>
            <h3>Advertising</h3>
            <p>
              Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
              Etiam fermentum tinc idunt.
            </p>
          </div>
        </div>
      </section>

      {/* === Explore Section === */}
      <section className="explore-section">
        <div className="explore-header">
          <h2 className="explore-subtitle">Modern & Beautiful</h2>
          <h1 className="explore-title">Special Offers & Discounts</h1>
          <p className="explore-description">
            Lorem ipsum dolor sit amet, ad mea porro integre, feugiat
            efficientur vis eu, te sit illum dolorum. Fugit scriptorem mea at.
            Ad eros invenire incorrupte nam, vim in mazim.
          </p>
        </div>
        <div className="explore-container">
          <div className="explore-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
              alt="Fiji Islands"
              className="explore-image"
            />
            <div className="explore-card-content">
              <h3 className="explore-card-title">Fiji Islands Vacation</h3>
              <p className="explore-card-subtitle">Fiji Island</p>
            </div>
          </div>
          <div className="explore-card">
            <img
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
              alt="Taj Mahal"
              className="explore-image"
            />
            <div className="explore-card-content">
              <h3 className="explore-card-title">Taj Mahal Agra</h3>
              <p className="explore-card-subtitle">India</p>
            </div>
          </div>
          <div className="explore-card">
            <img
              src="https://images.unsplash.com/photo-1534239143101-1b1c627395c5?q=80&w=1974&auto=format&fit=crop"
              alt="Beach in Thailand"
              className="explore-image"
            />
            <div className="explore-card-content">
              <h3 className="explore-card-title">Beach in February</h3>
              <p className="explore-card-subtitle">Thailand</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;