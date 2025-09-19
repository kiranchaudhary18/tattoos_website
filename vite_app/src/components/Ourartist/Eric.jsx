import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Star } from 'lucide-react';
import './parth.css';

const ArtistProfile = () => {
  const portfolioImages = [
    'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1040174/pexels-photo-1040174.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const specialties = [
    'Realistic Portraits',
    'Traditional Style',
    'Black & Gray',
    'Geometric Designs',
    'Custom Artwork',
    'Cover-ups'
  ];

  const achievements = [
    { title: 'Best Tattoo Artist 2023', description: 'City Art Awards' },
    { title: 'Featured Artist', description: 'Tattoo Magazine' },
    { title: 'International Recognition', description: 'Global Tattoo Convention' }
  ];

  return (
    <div className="artist-profile">
      {/* Hero Section - Black Background */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="artist-image-container">
            <img 
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815718/th_id_OIP_12_nlojdd.png" 
              alt="Alex Rodriguez - Tattoo Artist" 
              className="artist-image"
            />
            <div className="image-overlay">
              <div className="social-links">
                <Instagram className="social-icon" />
                <Facebook className="social-icon" />
              </div>
            </div>
          </div>
          <div className="artist-info">
            <h1 className="artist-name">Eric D`suza</h1>
            <p className="artist-title">Professional Tattoo Artist</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon filled" />
              ))}
              <span className="rating-text">4.9 (150+ reviews)</span>
            </div>
            <p className="artist-bio">
              With over 8 years of experience in the tattoo industry, I specialize in creating 
              unique, high-quality artwork that tells your story. From intricate black and gray 
              pieces to bold traditional designs, I'm passionate about bringing your vision to life.
            </p>
            <div className="quick-stats">
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Tattoos Done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - White Background */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                My journey into tattooing began 8 years ago when I discovered my passion for 
                combining art with storytelling. Each tattoo I create is more than just ink on skin - 
                it's a personal narrative, a memory, or a dream brought to life.
              </p>
              <p>
                I believe in taking the time to understand each client's vision and working 
                collaboratively to create something truly unique. My attention to detail and 
                commitment to excellence has earned me recognition in the tattoo community.
              </p>
            </div>
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>ttaoodreamers@studio.com</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>123 Art Street, Creative District</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section - Black Background */}
      <section className="specialties-section">
        <h2 className="section-title">Specialties</h2>
        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <h3>{specialty}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section - White Background */}
      <section className="portfolio-section">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioImages.map((image, index) => (
            <div key={index} className="portfolio-item">
              <img src={image} alt={`Tattoo work ${index + 1}`} />
              <div className="portfolio-overlay">
                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section - Black Background */}
      <section className="achievements-section">
        <h2 className="section-title">Achievements & Recognition</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
