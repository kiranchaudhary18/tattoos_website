import React, { useState, useEffect } from "react";
import "./religious.css";
import "../Home.css";
import { Link } from "react-router-dom";

const ReligiousTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tattoos from API
  useEffect(() => { 
    window.scrollTo(0, 0);
    const fetchTattoos = async () => {
      try {
        const response = await fetch("https://tattoos-website-r5za.onrender.com/api/stippling");
        if (!response.ok) {
          throw new Error("Failed to fetch tattoos");
        }
        const data = await response.json();
        setTattoos(data);
      } catch (error) {
        console.error("Error fetching tattoos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTattoos();
  }, []);

  return (
    <div className="religious-tattoo">
      {/* Hero Section */}
      {/* <section className="re-section">
        <div className="re-content">
          <h2>RELIGIOUS TATTOOS</h2>
          <p className="p2">
            "Religious tattoos symbolize faith and devotion, marking a spiritual
            journey on the skin. Each design holds deep meaning, reflecting belief and inner strength."
          </p>
          <p className="p2-1">
            Our artists specialize in creating sacred and symbolic tattoos that reflect your beliefs.
            From crosses and rosaries to mandalas and om symbols, we can help you find the perfect
            religious tattoo to honor your spirituality.
          </p>
        </div>
      </section> */}

       <section className="re-section">
        <div className="re-content">
          <h2>RELIGIOUS TATTOOS</h2>
          <p className='p2'>
        "Religious tattoos symbolize faith and devotion, marking a spiritual
            journey on the skin. Each design holds deep meaning, reflecting belief and inner strength."
          </p>
          <p className='p2'>
          Our artists specialize in creating sacred and symbolic tattoos that reflect your beliefs.
            From crosses and rosaries to mandalas and om symbols, we can help you find the perfect
            religious tattoo to honor your spirituality.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="re-gallery-section">
        <h2>OUR RELIGIOUS TATTOOS</h2>

        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="st-tattoo-grid">
            {tattoos.length > 0 ? (
              tattoos.map((tattoo) => (
                <div key={tattoo._id} className="st-tattoo-card">
                  <img
                    src={tattoo.imageurl}
                    alt={`Religious tattoo ${tattoo._id}`}
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

export default ReligiousTattoo;
