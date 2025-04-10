// blog.jsx
import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>The Pearl of Africa</h1>
          <p>
            Journey through Uganda’s majestic landscapes, rich heritage, and vibrant culture — where ancient kingdoms meet modern aspirations.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="image-gallery">
            <img
              src="/blog1.jpg"
              alt="Giraffes in Savanna"
              className="gallery-image"
            />
          </div>
          <div className="text-content">
            <h2>The Rise of Uganda</h2>
            <p>
              Uganda’s narrative is woven through the tapestry of ancient kingdoms, most prominently the Buganda Kingdom, which bestowed its name upon the nation. This rich cultural heritage laid the foundation for a country that would emerge as a symbol of resilience and progress.
            </p>
            <p>
              In 1962, Uganda stepped into independence, embarking on a transformative journey that would see it rise from colonial rule to become a sovereign nation. Winston Churchill’s description of Uganda as “The Pearl of Africa” proved prophetic, as the country’s natural splendor and resources continued to captivate the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
