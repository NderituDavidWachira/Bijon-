import React, { useState } from 'react';
// Ensure these are installed in your package.json: react-router-dom, react-icons
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FaInstagram, FaWhatsapp, FaBars, FaTimes, FaMapMarkerAlt, 
  FaPhoneAlt, FaEnvelope, FaTiktok 
} from 'react-icons/fa';

import './App.css';

// Ensure your image path is correct relative to this file
import logoImage from './assets/Images/Bijon Logo.jpg'; 

// Import your page components
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
      <div className="navbar-main" style={{ padding: '0px 20px', height: '80px', display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Link to="/" onClick={() => setIsOpen(false)} style={{textDecoration:'none', display:'flex', alignItems:'center', height: '100%'}}>
            <img 
              src={logoImage} 
              alt="Bijon Brand Logo" 
              className="logo-img" 
              style={{ marginRight: '15px', height: '70px', width: 'auto' }} 
            />
            
            {/* --- HEADER TEXT CONTAINER --- */}
            {/* 1. We set width to 'max-content' so the container shrinks to fit the widest item (the Email). */}
            {/* 2. We use flex column to stack the rows. */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'max-content' }}>
                
                {/* ROW 1: BiJON */}
                {/* 'justify-content: space-between' forces the letters to touch the Left and Right edges exactly. */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    width: '100%', 
                    fontSize: '36px', 
                    fontWeight: '900', 
                    lineHeight: '0.8', 
                    color: '#fff', 
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                }}>
                    <span>B</span>
                    <span>i</span>
                    <span>J</span>
                    <span>O</span>
                    <span>N</span>
                </div>
                
                {/* ROW 2: BRAND AFRICA LTD */}
                {/* Spaced by word to fill the width */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    width: '100%',
                    fontSize: '11px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase',
                    color: '#fff',
                    lineHeight: '1',
                    marginBottom: '6px',
                    whiteSpace: 'nowrap'
                }}>
                    <span>BRAND</span>
                    <span>AFRICA</span>
                    <span>LTD.</span>
                </div>

                {/* ROW 3: Phone Number */}
                {/* To make the phone number end at the exact same point as the email, 
                    we treat it as a flex row and space the segments out slightly. */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    width: '100%',
                    fontSize: '10px', 
                    color: '#fff', 
                    fontWeight: '500',
                    lineHeight: '1.2',
                    marginBottom: '2px'
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaPhoneAlt size={9} /> +254
                    </span>
                    <span>722</span>
                    <span>210</span>
                    <span>279</span>
                </div>

                {/* ROW 4: Email */}
                {/* This is the "Anchor". It sets the natural width of the container. 
                    Everything else stretches to match this line. */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    width: '100%',
                    fontSize: '10px', 
                    color: '#fff', 
                    fontWeight: '500',
                    lineHeight: '1.2'
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
                        <FaEnvelope size={9} /> info@bijonbrandafrica.com
                    </span>
                </div>

            </div>

          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`} style={{ marginLeft: 'auto' }}>
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
          <p><FaPhoneAlt /> +254 722 210 279</p>
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;