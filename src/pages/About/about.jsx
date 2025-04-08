import React, { useState } from 'react';
import './about.css';

const About = () => {
  // State to manage the current index of the visible testimonials
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of testimonials
  const testimonials = [
    {
      text: "I have had a great experience using this service. The team is professional and reliable, and they made my trip to Uganda a memorable one. I highly recommend them!",
      name: "Cyiza Christian",
      profession: "businessman",
      alt: "Client 1",
    },
    {
      text: "Eugeniustours has been a game-changer for my travel plans. Their personalized recommendations and expert guidance have made my trip a dream come true. I can't recommend them enough!",
      name: "sarah jane",
      profession: "project manager",
      alt: "Client 2",
    },
    {
      text: "this company had me blown away by their exceptional service. They went above and beyond to ensure my trip to Uganda was a success.",
      name: "paul mark",
      profession: "Engineer",
      alt: "Client 3",
    },
    {
      text: "I had a great experience using this service. The team is professional and reliable, and they made my trip to Uganda a memorable one. I highly recommend them!",
      name: "marvin mogore",
      profession: "Designer",
      alt: "Client 4",
    },
  ];

  // Number of testimonials to show at a time
  const testimonialsPerPage = 2;

  // Handle navigation
  const handleNext = () => {
    if (currentIndex < testimonials.length - testimonialsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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

          <button className="explore-btn">Click to call</button>
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

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <button
            className="nav-arrow left-arrow"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ❮
          </button>
          <div className="testimonial-slider">
            <div
              className="testimonial-wrapper"
              style={{
                transform: `translateX(-${currentIndex * (100 / testimonialsPerPage)}%)`,
                transition: 'transform 0.5s ease',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="client-info">
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-profession">{testimonial.profession}</p>
                    </div>
                  </div>
                  <span className="quote-icon">“</span>
                </div>
              ))}
            </div>
          </div>
          <button
            className="nav-arrow right-arrow"
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - testimonialsPerPage}
          >
            ❯
          </button>
        </div>
      </section>
    </>
  );
};

export default About;