import React from 'react';
import { FaEye, FaPencilRuler, FaDesktop, FaChartLine } from 'react-icons/fa';

import slide1 from './assets/Images/back.jpeg'; 
import bjImage from './assets/Images/bj.jpg';


import client1 from './assets/Images/Clients/C1-01-2-1024x1024.jpg';
import client2 from './assets/Images/Clients/C2-01.jpg';
import client3 from './assets/Images/Clients/C3-01.jpg';
import client4 from './assets/Images/Clients/C4-01.jpg';
import client5 from './assets/Images/Clients/C5-01.jpg';
import client6 from './assets/Images/Clients/C6-01.jpg';
import client7 from './assets/Images/Clients/C7-01.jpg';
import client8 from './assets/Images/Clients/C8-01.jpg';
import client9 from './assets/Images/Clients/C9-01.jpg';
import client10 from './assets/Images/Clients/C10-01.jpg';
import client11 from './assets/Images/Clients/C11-01.jpg';
import client12 from './assets/Images/Clients/C12-01.jpg';
import client13 from './assets/Images/Clients/C13-01.jpg';
import client14 from './assets/Images/Clients/C14-01.jpg';
import client15 from './assets/Images/Clients/C15-01.jpg';

const partners = [
  { id: 15, logo: client15, name: "Cigna" },
  { id: 13, logo: client13, name: "ArcSkills" },
  { id: 11, logo: client11, name: "Toyota" },
  { id: 10, logo: client10, name: "Women of Valor" },
  { id: 4, logo: client4, name: "IFAW" },
  { id: 5, logo: client5, name: "Kenya Rugby" },
  { id: 1, logo: client1, name: "Wildlife" },
  { id: 2, logo: client2, name: "Impala" },
  { id: 3, logo: client3, name: "Elephant Coalition" },
  { id: 6, logo: client6, name: "Conservation Alliance" },
  { id: 8, logo: client8, name: "Consolata" },
  { id: 9, logo: client9, name: "School" },
  { id: 7, logo: client7, name: "Partner 7" },
  { id: 12, logo: client12, name: "Partner 12" },
  { id: 14, logo: client14, name: "Federation" },
];

const About = () => {
  return (
    <div className="about-container">
      
      <style>{`
       
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero-static {
          position: relative;
          min-height: 80vh;
          background-size: cover;
          background-position: center;
          background-attachment: fixed; 
          display: flex;
          align-items: center;
          color: #fff;
          padding: 60px 0;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(30, 30, 30, 0.95); 
          z-index: 1;
        }

        .hero-split-layout {
          position: relative;
          z-index: 2; 
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
        }

        .hero-text-left { flex: 1; }
        .hero-image-right { flex: 1; display: flex; justify-content: flex-end; }
        
        .hero-image-right img {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 5px solid rgba(255,255,255,0.1);
        }

        .hero-tagline { color: #fca311; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; display: block; margin-bottom: 10px; }
        .hero-text-left h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 20px; font-family: 'Montserrat', sans-serif; }
        .hero-text-left p { font-size: 1.1rem; line-height: 1.6; color: #ddd; margin-bottom: 30px; }

        .btn-white {
          background-color: #fff; color: #000; padding: 12px 30px; border-radius: 4px; font-weight: 700;
          text-transform: uppercase; transition: 0.3s;
        }
        .btn-white:hover { background-color: #fca311; color: #000; }

        .section-intro { padding: 80px 0; background-color: #fff; }
        .section-title-center { text-align: center; font-size: 2.2rem; margin-bottom: 50px; font-weight: 800; color: #333; }
        
        .features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
        .feature-item { display: flex; gap: 20px; align-items: flex-start; }
        .feature-icon { font-size: 2.5rem; color: #fca311; min-width: 50px; }
        .feature-text h3 { font-size: 1.3rem; margin-bottom: 10px; color: #222; }
        .feature-text p { color: #666; line-height: 1.6; }

        .partners-section { padding: 60px 0; background-color: #f9f9f9; border-top: 1px solid #eee; }
        .section-header-center { text-align: center; margin-bottom: 40px; }
        .section-tag { background: #fca311; color: #000; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; }
        
        .partners-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; align-items: center; }
        .partner-card img { width: 100%; filter: grayscale(100%); opacity: 0.6; transition: 0.3s; }
        .partner-card img:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.05); }

        @media (max-width: 992px) {
          .hero-split-layout { flex-direction: column; text-align: center; }
          .hero-image-right { justify-content: center; margin-top: 30px; }
          .hero-text-left h1 { font-size: 2.5rem; }
          .features-grid { grid-template-columns: 1fr; }
          .partners-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 500px) {
          .partners-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section className="hero-static" style={{ backgroundImage: `url(${slide1})` }}>
       
        <div className="hero-overlay"></div>
        
        <div className="container hero-split-layout">
           
           <div className="hero-text-left">
              <span className="hero-tagline">Welcome to Bijon</span>
              <h1>About Us</h1>
              <p>Experience excellence firsthand. Try our services today and discover why businesses and individuals alike trust us for unmatched quality, consistent reliability, and exceptional results.</p>
              
              <a 
                href="/profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-white"
              >
                View our profile
              </a>
           </div>

           <div className="hero-image-right">
              <img src={bjImage} alt="Bijon Brand" />
           </div>

        </div>
      </section>
      <section className="section-intro">
        <div className="container">
          <div className="intro-header">
              <h2 className="section-title-center">Why Choose Us</h2>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"><FaEye /></div>
              <div className="feature-text">
                <h3>Quality Center</h3>
                <p>We are a responsive company constituted as a quality center of creative and innovative designs, quality printing, branding and general supplies.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaPencilRuler /></div>
              <div className="feature-text">
                <h3>Branding Solutions.</h3>
                <p>We seek to partner with our clients to enable them to meet their branding needs and grow their businesses by offering them consumer centric solutions.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaDesktop /></div>
              <div className="feature-text">
                <h3>Best Technology</h3>
                <p>We strive to become the most dependable, creative and innovative brandhouse in Kenya and beyond. We have invested in the best technology.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaChartLine /></div>
              <div className="feature-text">
                <h3>Substantial Experience</h3>
                <p>In addition, we have a highly skilled technical team with substantial experience in the design, print and branding industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Trusted Partners</span>
          </div>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;