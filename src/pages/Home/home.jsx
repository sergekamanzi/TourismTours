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
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <div className="hero-underline"></div>
          <button className="hero-button">Click here to call</button>
        </div>
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </section>

      {/* === Pillar Section === */}
      <section className="pillar-section">
        <div className="pillar-container">
          <div className="pillar-box">
            <div className="pillar-icon">
              <FaGem />
            </div>
            <h3>Color it all</h3>
            <p>Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam fermentum tinc idunt.</p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaPenNib />
            </div>
            <h3>Branding projects</h3>
            <p>Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam fermentum tinc idunt.</p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaStar />
            </div>
            <h3>Promotion & event</h3>
            <p>Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam fermentum tinc idunt.</p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaBookmark />
            </div>
            <h3>Advertising</h3>
            <p>Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam fermentum tinc idunt.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
