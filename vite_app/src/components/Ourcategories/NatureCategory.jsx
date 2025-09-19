import React, { useState, useEffect } from 'react';
import './nature.css';
import '../Home.css';
import { Link } from "react-router-dom";

const NatureTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://tattoos-website-r5za.onrender.com/api/stippling')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tattoos");
        }
        return response.json();
      })
      .then((data) => {
        setTattoos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tattoos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="nature-tattoo">
      {/* Hero Section */}
      {/* <section className="na-section">
        <div className="na-content">
          <h2>NATURE TATTOOS</h2>
          <p className="p2">
            Nature tattoos capture the beauty of the earth,
            from towering trees to flowing rivers. Each design connects the soul
            to the wild and free spirit of nature.
          </p>

          <p className="p2">
            Our artists specialize in creating intricate designs that bring the essence of nature to your skin.
            From delicate flowers to majestic trees, we can help you find the perfect nature tattoo
            to express your connection with the natural world.
          </p>
        </div>
      </section> */}


      <section className="re-section">
        <div className="re-content">
          <h2>NATURE TATTOOS</h2>
          <p className='p2'>
           Nature tattoos capture the beauty of the earth,
            from towering trees to flowing rivers. Each design connects the soul
            to the wild and free spirit of nature.
          </p>
          <p className='p2'>
         Our artists specialize in creating intricate designs that bring the essence of nature to your skin.
            From delicate flowers to majestic trees, we can help you find the perfect nature tattoo
            to express your connection with the natural world.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="na-gallery-section">
        <h2>OUR NATURE TATTOOS</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="st-tattoo-grid">
            {tattoos.length > 0 ? (
              tattoos.map((tattoo) => (
                <div key={tattoo._id} className="st-tattoo-card">
                  <img
                    src={tattoo.imageurl}
                    alt={`Nature tattoo design ${tattoo._id}`}
                    className="st-tattoo-image"
                  />
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

export default NatureTattoo;
