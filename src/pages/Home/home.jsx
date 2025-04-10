import React, { useState, useEffect } from 'react';
import './home.css';
import { FaGem, FaPenNib, FaStar, FaBookmark } from 'react-icons/fa';

const Home = () => {
  // Slide data
  const slidesData = [
    { image: '/hero1.jpg', title: 'Eugenius Tours', id: 1 },
    { image: '/hero2.jpg', title: 'Enjoy Our Tour', id: 2 },
  ];

  // Pillar data
  const pillars = [
    { icon: <FaGem />, title: 'Wildlife Safaris', text: 'Discover Uganda’s Natural Treasures Journey through the savannahs', id: 1 },
    { icon: <FaPenNib />, title: 'Cultural Experiences', text: 'Dive into Uganda’s Rich Heritage Explore vibrant tribes, traditional dances.', id: 2 },
    { icon: <FaStar />, title: 'Adventure & Nature', text: 'Unleash Your Wild Side From hiking the Rwenzori Mountains to white-water.', id: 3 },
    { icon: <FaBookmark />, title: 'Eco-Tourism & Community', text: 'Travel with Purpose Support local communities and sustainable travel.', id: 4 },
  ];

  // Explore data
  const exploreItems = [
    { image: '/explore-wild.jpg', title: 'Ugandan wild animals', subtitle: 'Parks,Zoos', alt: 'Fiji Islands', id: 1 },
    { image: '/explore-river.jpg', title: 'Ugandan Rivers', subtitle: 'Rivers,Lakes', alt: 'Taj Mahal', id: 2 },
    { image: '/explore-beach.jpg', title: 'Summer Vibes', subtitle: 'Beach', alt: 'Beach in Thailand', id: 3 },
  ];

  // Video config
  const videoConfig = {
    src: '/uganda.mp4',
    poster: '/video-poster.jpg',
    title: 'Enjoy EugeniusTours'
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  const handleBooking = () => window.open("https://wa.me/256769999773", "_blank");

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${slidesData[currentSlide].image})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">{slidesData[currentSlide].title}</h1>
          <div className="hero-underline"></div>
          <button className="hero-button" onClick={handleBooking}>
            Click here to book
          </button>
        </div>
        <button className="arrow left" onClick={prevSlide}>❮</button>
        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>

      {/* Pillar Section */}
      <section className="pillar-section">
        <div className="pillar-container">
          {pillars.map(pillar => (
            <div key={pillar.id} className="pillar-box">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore-section">
        <div className="explore-header">
          <h2 className="explore-subtitle">Modern & Beautiful</h2>
          <h1 className="explore-title">Special Places In Uganda</h1>
          <p className="explore-description">
            one of the most places to visit in Uganda, there are many places to visit.
          </p>
        </div>
        <div className="explore-container">
          {exploreItems.map(item => (
            <div key={item.id} className="explore-card">
              <img
                src={item.image}
                alt={item.alt}
                className="explore-image"
                loading="lazy"
              />
              <div className="explore-card-content">
                <h3 className="explore-card-title">{item.title}</h3>
                <p className="explore-card-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video
            className="video-player"
            autoPlay
            loop
            muted
            playsInline
            poster={videoConfig.poster}
          >
            <source src={videoConfig.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h1 className="video-title">{videoConfig.title}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;