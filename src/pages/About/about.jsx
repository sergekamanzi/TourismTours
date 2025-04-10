import React from 'react';
import './about.css';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles

// Testimonial Component
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Cyiza Christian",
      location: "Traveler from Rwanda",
      stars: 5,
      review:
        "I had a great time in Uganda with Eugenius Tours and I will definitely recommend it to my friends and family to visit Uganda.",
    },
    {
      name: "Mark Cousins",
      location: "Traveler from England",
      stars: 5,
      review:
        "I came from Europe when I heard about Eugennius Tours and I really had fun exploring more places in Uganda.",
    },
    {
      name: "Francois Kamanga",
      location: "Traveler from Cote d'Ivoire",
      stars: 5,
      review:
        "Eugenius Tours made me fall in love with Uganda, and it was really amazing exploring more places.",
    },
    {
      name: "Alejandro David",
      location: "Traveler from Spain",
      stars: 5,
      review:
        "Uganda was great to explore, thanks to Eugenius Tours who helped me discover more places.",
    },
    {
      name: "Faraji Catherine",
      location: "Traveler from Tanzania",
      stars: 5,
      review:
        "I saw many things in Uganda I never thought I could see, and thanks to Eugenius Tours, I was able to explore even more.",
    },
    {
      name: "Emma Sofia",
      location: "Traveler from Belgium",
      stars: 5,
      review:
        "Africa has so much nature, and Eugenius Tours made me fall in love with Uganda. It was truly amazing exploring more places here.",
    },
  ];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our <span className="highlight">TRAVELLERS SAY</span></h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-location">{testimonial.location}</p>
            <div className="testimonial-stars">
              {[...Array(testimonial.stars)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-review">“ {testimonial.review} ”</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

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

      {/* Add Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default About;