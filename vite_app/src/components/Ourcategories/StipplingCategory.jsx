import React, { useState, useEffect } from 'react';
import './stippling.css';
import '../Home.css';
import { Link } from "react-router-dom";

const StipplingTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tattoos from API
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchTattoos = async () => {
      try {
        const response = await fetch('https://tattoos-website-r5za.onrender.com/api/stippling');
        if (!response.ok) {
          throw new Error('Failed to fetch tattoos');
        }
        const data = await response.json();
        setTattoos(data);
      } catch (error) {
        console.error('Error fetching tattoos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTattoos();
  }, []);

  return (
    <div className="stippling-tattoo">
      <section className="st-section">
        <div className="st-content">
          <h2>STIPPLING TATTOOS</h2>
          <p className='p2'>
            "Stippling tattoos bring art to life with thousands of tiny dots,
            creating depth and detail like a masterpiece on skin. Each dot forms a story,
            blending shadows and light into a timeless design."
          </p>
          <p className='p2'>
            Our skilled artists specialize in creating intricate and detailed stippling
            designs that bring your vision to life. From geometric patterns to realistic portraits,
            we can help you achieve the perfect stippling tattoo.
          </p>
        </div>
      </section>

      <section className="st-gallery-section">
        <h2>OUR STIPPLING TATTOOS</h2>

        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="st-tattoo-grid">
            {tattoos.length > 0 ? (
              tattoos.map((tattoo) => (
                <div key={tattoo._id} className="st-tattoo-card">
                  <img src={tattoo.imageurl} className="st-tattoo-image" />
                  <div className="st-tattoo-overlay">
                    <img
                      className="st-stippling-hover"
                      src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740117582/logo_white_text_no_bg_change_fyg7cz.png"
                      alt="Logo"
                    />
                    <span className="st-text-stippling">POUFA</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No tattoos found.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default StipplingTattoo;
