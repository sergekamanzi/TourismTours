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
          <button
          className="hero-button"
          onClick={() => window.open("https://wa.me/256769999773", "_blank")}
        >
          Click here to book
        </button>

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
            <h3>Wildlife Safaris</h3>
            <p>
            Discover Uganda’s Natural Treasures
            Journey through the savannahs
            </p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaPenNib />
            </div>
            <h3>Cultural Experiences</h3>
            <p>
            Dive into Uganda’s Rich Heritage
            Explore vibrant tribes, traditional dances.
            </p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaStar />
            </div>
            <h3>Adventure & Nature</h3>
            <p>
            Unleash Your Wild Side
            From hiking the Rwenzori Mountains to white-water.
            </p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon">
              <FaBookmark />
            </div>
            <h3>Eco-Tourism & Community</h3>
            <p>
            Travel with Purpose
            Support local communities and sustainable travel.
            </p>
          </div>
        </div>
      </section>

      {/* === Explore Section === */}
      <section className="explore-section">
        <div className="explore-header">
          <h2 className="explore-subtitle">Modern & Beautiful</h2>
          <h1 className="explore-title">Special Places In Uganda</h1>
          <p className="explore-description">
            one of the most places to visit in Uganda, there are many places to visit.
          </p>
        </div>
        <div className="explore-container">
          <div className="explore-card">
            <img
              src="/explore-wild.jpg"
              alt="Fiji Islands"
              className="explore-image"
            />
            <div className="explore-card-content">
              <h3 className="explore-card-title">Ugandan wild animals</h3>
              <p className="explore-card-subtitle">Parks,Zoos</p>
            </div>
          </div>
          <div className="explore-card">
            <img
              src="/explore-river.jpg"
              alt="Taj Mahal"
              className="explore-image"
            />
            <div className="explore-card-content">
              <h3 className="explore-card-title">Ugandan Rivers</h3>
              <p className="explore-card-subtitle">Rivers,Lakes</p>
            </div>
          </div>
          <div className="explore-card">
            <img
              src="/explore-beach.jpg"
              alt="Beach in Thailand"
              className="explore-image"
            />
            <div className="explore-card-content">
              <h3 className="explore-card-title">Summer Vibes</h3>
              <p className="explore-card-subtitle">Beach</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Video Section === */}
        <section className="video-section">
          <div className="video-container">
            <video
              className="video-player"
              autoPlay
              loop
              muted
              playsInline
              poster="/video-poster.jpg" // Fallback image if video fails to load
            >
              <source src="/uganda.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <h1 className="video-title">Enjoy EugeniusTours</h1>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;