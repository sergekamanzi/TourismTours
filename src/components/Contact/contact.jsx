import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-container">
        <div className="brand">
          <h2>TRAVEL<span className="highlight">ER</span></h2>
          <p>
            Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore
            rebum lorem ipsum dolor. No sed vero lorem dolor dolor
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
          <h4>OUR SERVICES</h4>
          <ul>
            <li>About</li>
            <li>Destination</li>
            <li>Services</li>
            <li>Packages</li>
            <li>Guides</li>
            <li>Testimonial</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="links">
          <h4>USEFULL LINKS</h4>
          <ul>
            <li>About</li>
            <li>Destination</li>
            <li>Services</li>
            <li>Packages</li>
            <li>Guides</li>
            <li>Testimonial</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p><FaMapMarkerAlt /> 123 Street, New York, USA</p>
          <p><FaPhoneAlt /> +012 345 67890</p>
          <p><FaEnvelope /> mail@domain.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © <span>Domain</span>. All Rights Reserved.</p>
        <p>Designed by <span>HTML Codex</span></p>
      </div>
    </footer>
  );
};

export default Contact;
