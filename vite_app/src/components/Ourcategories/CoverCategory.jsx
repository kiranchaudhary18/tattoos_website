import React, { useEffect, useState } from "react";
import "./cover.css";
import "../Home.css";
import { Link } from "react-router-dom";

const CoverUpTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from API
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
        console.error("Error fetching tattoo images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTattoos();
  }, []);

  return (
    <div className="cover-up-tattoo">
      {/* Hero Section */}
      {/* <section className="co-section">
        <div className="co-content">
          <h2>COVER-UP TATTOOS</h2>
          <p className="p2">
            Cover tattoos turn old memories into new masterpieces, blending creativity with fresh ink. 
            They transform past regrets into art that tells a new story.
          </p>
          <p className="p2">
            Our experienced artists specialize in creating stunning cover-up designs that not only hide 
            unwanted tattoos but also add a new layer of art to your skin. Whether you want to cover a 
            small mistake or a large piece, we can help you achieve the perfect cover-up.
          </p>
        </div>
      </section> */}

      <section className="co-section">
        <div className="co-content">
          <h2>COVER-UP TATTOOS</h2>
          <p className='p2'>
       Cover tattoos turn old memories into new masterpieces, blending creativity with fresh ink. 
            They transform past regrets into art that tells a new story.
          </p>
          <p className='p2'>
           Our experienced artists specialize in creating stunning cover-up designs that not only hide 
            unwanted tattoos but also add a new layer of art to your skin. Whether you want to cover a 
            small mistake or a large piece, we can help you achieve the perfect cover-up.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="co-gallery-section">
        <h2>OUR COVER-UP TATTOOS</h2>
        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="st-tattoo-grid">
            {tattoos.length > 0 ? (
              tattoos.map((tattoo) => (
                <div key={tattoo._id} className="st-tattoo-card">
                  <img
                    src={tattoo.imageurl}
                    alt={`Cover-up tattoo ${tattoo._id}`}
                    className="st-tattoo-image"
                  />
                  <div className="st-tattoo-overlay">
                    <img
                      className="st-stippling-hover"
                      src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740117582/logo_white_text_no_bg_change_fyg7cz.png"
                      alt="Logo"
                    />
                    <span className="st-text-stippling">Eric</span>
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

export default CoverUpTattoo;
