import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaArrowRight, 
  FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
  FaTiktok, FaEye, FaPencilRuler, FaDesktop, FaChartLine
} from 'react-icons/fa';

import Services from './Service';
import Contact from './Contact';
import './App.css';

// --- IMAGES ---
import slide1 from './assets/Images/back.jpeg'; 
import logoImage from './assets/Images/Bijon Logo.jpg';
import bjImage from './assets/Images/bj.jpg';

// --- CLIENT PARTNER LOGOS ---
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="top-left">
          <span><FaPhoneAlt /> +254 722 210279</span>
          <span><FaEnvelope /> info@bijonbrandafrica.com</span>
        </div>
        {/* REMOVED SOCIAL ICONS FROM HEADER AS REQUESTED */}
        <div className="top-right">
        </div>
      </div>

      <div className="navbar-main">
        <div className="logo">
          <Link to="/" onClick={() => setIsOpen(false)} style={{textDecoration:'none', color:'inherit', display:'flex', alignItems:'center'}}>
            <img 
              src={logoImage} 
              alt="Bijon Brand Logo" 
              className="logo-img" 
              style={{ marginRight: '10px' }}
            />
             BIJON BRAND AFRICA<span className="dot">.</span>
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' || location.pathname === '/services' ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/home" 
            className={location.pathname === '/home' ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            About Bijon
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

// --- UPDATED FOOTER SECTION ---
const Footer = () => {
  // Styles for responsive social links
  const socialContainerStyle = {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '15px'
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '18px'
  };

  // Helper function to scroll to top when clicking a footer link
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">BIJON BRAND AFRICA</div>
          <p className="footer-desc">
            We are a responsive company constituted as a quality center of creative and innovative designs, quality printing, branding and general supplies.
          </p>
          
          <div className="social-icons" style={socialContainerStyle}>
            <a 
              href="https://www.instagram.com/bijonbrandafrica?igsh=NTVodGI3cHp3emI4" 
              target="_blank" 
              rel="noreferrer" 
              style={socialLinkStyle}
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.tiktok.com/@bijonbrandafrica.ltd?_r=1&_t=ZM-92KTlwJuzi0" 
              target="_blank" 
              rel="noreferrer" 
              style={socialLinkStyle}
              title="TikTok"
            >
              <FaTiktok />
            </a>
            <a 
              href="https://wa.me/254722210279" 
              target="_blank" 
              rel="noreferrer" 
              style={socialLinkStyle}
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>

        <div className="footer-col">
          <h4>Vision & Mission</h4>
          <div className="footer-block">
            <strong>Vision:</strong>
            <p>To be a globally recognized branding and printing company.</p>
          </div>
          <div className="footer-block">
            <strong>Mission:</strong>
            <p>To satisfy our clients’  branding needs through creative, innovative and quality ideas.</p>
          </div>
        </div>

        {/* --- REPLACED CORE VALUES WITH QUICK LINKS --- */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {/* These links pass a 'state' object. Services.js must listen for this state. */}
            <li className="update">
              <Link to="/" state={{ categoryId: 1 }} onClick={handleLinkClick}>
                Apparel & Uniforms
              </Link>
            </li>
            <li className="update">
              <Link to="/" state={{ categoryId: 2 }} onClick={handleLinkClick}>
                Signage & Fabrication
              </Link>
            </li>
            <li className="update">
              <Link to="/" state={{ categoryId: 3 }} onClick={handleLinkClick}>
                Corporate Branding
              </Link>
            </li>
            <li className="update">
              <Link to="/" state={{ categoryId: 4 }} onClick={handleLinkClick}>
                Digital & Offset Print
              </Link>
            </li>
            <li className="update">
              <Link to="/" state={{ categoryId: 5 }} onClick={handleLinkClick}>
                Print Technology
              </Link>
            </li>
            <li className="update">
              <Link to="/" state={{ categoryId: 6 }} onClick={handleLinkClick}>
                Graphic Design services
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Locate Us</h4>
          <p><FaMapMarkerAlt /> Jethwa Mansion, Kilome Rd.</p>
          <p><FaEnvelope /> info@bijonbrandafrica.com</p>
          <p><FaPhoneAlt /> +254 722 210279</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 BIJON BRAND AFRICA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      {/* --- STATIC HERO SECTION --- */}
      <section className="hero-static" style={{ backgroundImage: `url(${slide1})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-split-layout">
            
           {/* LEFT SIDE: STATIC TEXT */}
           <div className="hero-text-left">
              <span className="hero-tagline">Welcome to Bijon</span>
              <h1>About Us</h1>
              <p>Experience excellence firsthand. Try our services today and discover why businesses and individuals alike trust us for unmatched quality, consistent reliability, and exceptional results.</p>
              
              {/* --- UPDATED BUTTON: View in new tab instead of download --- */}
              <a 
                href="/profile.pdf" 
                target="_blank"             /* Opens in new tab */
                rel="noopener noreferrer"   /* Security best practice for new tabs */
                className="btn-white"
                style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
              >
                View our profile
              </a>

           </div>

           {/* RIGHT SIDE: IMAGE */}
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;