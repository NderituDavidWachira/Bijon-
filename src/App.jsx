import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FaInstagram, FaWhatsapp, FaBars, FaTimes, FaMapMarkerAlt, 
  FaPhoneAlt, FaEnvelope, FaTiktok 
} from 'react-icons/fa';

import './App.css';
import logoImage from './assets/Images/Bijon Logo.jpg';

// IMPORT PAGES
import Home from './Home';      
import About from './About';    
import Services from './Services';       
import ServiceDetail from './ServiceDetail'; 
import Contact from './Contact'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="top-left">
          <span><FaPhoneAlt /> +254 722 210279</span>
          <span><FaEnvelope /> info@bijonbrandafrica.com</span>
        </div>
        <div className="top-right"></div>
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
             BIJON BRAND AFRICA
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            About Bijon
          </Link>

          {/* UPDATED LINK TO /services */}
          <Link 
            to="/services" 
            className={isActive('/services') ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Services
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

const Footer = () => {
  const socialContainerStyle = { display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '15px' };
  const socialLinkStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#333', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '18px' };
  const handleLinkClick = () => { window.scrollTo(0, 0); };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">BIJON BRAND AFRICA</div>
          <p className="footer-desc">
            We are a responsive company constituted as a quality center of creative and innovative designs, quality printing, branding and general supplies.
          </p>
          <div className="social-icons" style={socialContainerStyle}>
            <a href="https://www.instagram.com/bijonbrandafrica?igsh=NTVodGI3cHp3emI4" target="_blank" rel="noreferrer" style={socialLinkStyle} title="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@bijonbrandafrica.ltd?_r=1&_t=ZM-92KTlwJuzi0" target="_blank" rel="noreferrer" style={socialLinkStyle} title="TikTok"><FaTiktok /></a>
            <a href="https://wa.me/254722210279" target="_blank" rel="noreferrer" style={socialLinkStyle} title="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Vision & Mission</h4>
          <div className="footer-block">
            <strong>Vision:</strong><p>To be a globally recognized branding and printing company.</p>
          </div>
          <div className="footer-block">
            <strong>Mission:</strong><p>To satisfy our clients’ branding needs through creative, innovative and quality ideas.</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          {/* UPDATED LINKS TO SPECIFIC SERVICE PAGES */}
          <ul className="footer-links">
            <li className="update"><Link to="/services/apparel-uniforms" onClick={handleLinkClick}>Apparel & Uniforms</Link></li>
            <li className="update"><Link to="/services/signage-fabrication" onClick={handleLinkClick}>Signage & Fabrication</Link></li>
            <li className="update"><Link to="/services/corporate-branding" onClick={handleLinkClick}>Corporate Branding</Link></li>
            <li className="update"><Link to="/services/digital-printing" onClick={handleLinkClick}>Digital & Offset Print</Link></li>
            <li className="update"><Link to="/services/print-technology" onClick={handleLinkClick}>Print Technology</Link></li>
            <li className="update"><Link to="/services/graphic-design" onClick={handleLinkClick}>Graphic Design services</Link></li>
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
        <p>
          Design By: <a 
            href="http://www.ryantech.co.ke/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
          >
            Ryantech Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* LANDING PAGE */}
          <Route path="/" element={<Home />} />
          
          {/* ABOUT PAGE */}
          <Route path="/about" element={<About />} />
          
          {/* SERVICES MAIN GRID PAGE */}
          <Route path="/services" element={<Services />} />
          
          {/* DYNAMIC SERVICE DETAIL PAGE (e.g., /services/apparel-uniforms) */}
          <Route path="/services/:slug" element={<ServiceDetail />} />
          
          {/* CONTACT PAGE */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;