import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '/logo.png'; // Update this path to your actual logo location

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-container">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
          <p>
           you can get in touch with us on the following social medias, and we will get back to you as soon as possible
          </p>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="links">
          <h4>Our SERVICES</h4>
          <ul>
            <li>Tour guide</li>
            <li>safe journey</li>
            <li>Reliance</li>
            <li>Best Guides</li>
          </ul>
        </div>

        <div className="links">
          <h4>Our LINKS</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p><FaMapMarkerAlt /> Kampala, Uganda</p>
          <p><FaPhoneAlt />+256769999773</p>
          <p><FaEnvelope />eugeniustours7@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © <span>2025</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;