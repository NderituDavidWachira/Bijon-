import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
//import { Helmet } from 'react-helmet-async';
import { 
  FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF,
  FaTshirt, FaTools, FaBuilding, FaPrint, FaLayerGroup, FaPaintBrush, FaCheck, FaPlay, FaPause
} from 'react-icons/fa';

const heroSlides = [
  {
    id: 1,
    image: "/images/slide1.jp", 
    badge: "CORPORATE EVENT BRANDING",
    title: "BRANDING THAT COMMANDS ATTENTION",
    subtitle: "Trusted by premier institutions to deliver flawless on-site branding and large-format visibility where it matters most."
  },
  {
    id: 2,
    image: "/images/slide2.jpeg", 
    badge: "STOREFRONT BRANDING",
    title: "CAPTURE EVERY CUSTOMER",
    subtitle: "Transform your shop entrance with professional, eye-catching signage designed to drive foot traffic and build brand trust."
  },
  {
    id: 3,
    image: "/images/slide3.jpeg",
    badge: "LARGE FORMAT DISPLAYS",
    title: "BRANDING GLOBAL ICONS",
    subtitle: "We deliver international-standard branding solutions specifically engineered for high-profile corporate events and sponsorship visibility."
  }
];

const servicesData = [
  {
    id: 1, category: "Apparel & Uniforms", slug: "apparel-uniforms",
    icon: <FaTshirt />, image: "/images/appeal.jpg", 
    features: ["Custom Branding", "Staff Uniforms", "Protective Gear"]
  },
  {
    id: 2, category: "Signage & Fabrication", slug: "signage-fabrication",
    icon: <FaTools />, image: "/images/signage.jpg",
    features: ["3D Illuminated Signs", "Light Boxes", "Roadside Billboards"]
  },
  {
    id: 3, category: "Promotional items & Corporate Branding", slug: "corporate-branding",
    icon: <FaBuilding />, image: "/images/corp.jpg",
    features: ["Office Wall Wraps", "Vehicle Branding", "Merchandise"]
  },
  {
    id: 4, category: "Digital & Offset Printing", slug: "digital-printing",
    icon: <FaPrint />, image: "/images/businesss.jpg",
    features: ["Business Cards", "Brochures & Flyers", "Wedding Cards"]
  },
  {
    id: 5, category: "Print Technology", slug: "print-technology",
    icon: <FaLayerGroup />, image: "/images/UV.jpeg",
    features: ["UV Printing", "DTF Fabric Print", "Laser Engraving"]
  },
  {
    id: 6, category: "Graphic Design", slug: "graphic-design",
    icon: <FaPaintBrush />, image: "/images/poster.jpg",
    features: ["Logo Design", "Brand Identity", "Social Media Art"]
  }
];


const portfolioData = [
  { id: 1, title: "3D Signage Installation", category: "Fabrication" },
  { id: 2, title: "Vehicle Fleet Branding", category: "Branding" },
  { id: 3, title: "Bulk T-Shirt Printing", category: "Apparel" },
];


const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <div className="slider-wrapper">
      <div className="hero-image-container">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} 
          >
            <img 
                src={currentSlide.image} 
                alt={currentSlide.title}
                className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
              <motion.span className="hero-badge" 
                initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                {currentSlide.badge}
              </motion.span>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
                {currentSlide.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
              {currentSlide.subtitle}
              </motion.p>
              
              <motion.div className="hero-buttons" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
                <Link to="/services"><button className="btn-primary">Our Services</button></Link>
                <a href="https://wa.me/254722210279" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                    <button className="btn-secondary">Talk to an Expert</button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="dots-container">
        {heroSlides.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-text">
          <span className="welcome-subtitle">Your Brand, Your Image</span>
          <h2>Welcome to Bijon Brand Africa</h2>
          <div className="divider"></div>
          <p>
            We are a premier creative agency dedicated to elevating your business identity. 
            At Bijon Brand Africa, we believe that your brand is your promise to your customer. 
            We combine innovation, quality printing, and strategic design to ensure that promise is kept.
          </p>
          
          <a 
            href="/about" 
            rel="noopener noreferrer" 
          >
            <button className="welcome-btn">View Full Profile</button>
          </a>

        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {

  const timerRef = useRef(null);

  
  const handlePressStart = (slug) => {
    timerRef.current = setTimeout(() => {
   
      const linkToCopy = `${window.location.origin}/services/${slug}`;
      
      navigator.clipboard.writeText(linkToCopy)
        .then(() => {
          alert(`Link copied to clipboard: ${linkToCopy}`);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }, 800);
  };

  const handlePressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="home-services-section">
      <div className="section-header">
        <h2>Core Services</h2>
        <p>Explore our wide range of branding and printing solutions. <br/></p>
      </div>
      <div className="cards-grid">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className="service-card" 
            style={{ 
                backgroundImage: `url(${service.image})`,
                touchAction: 'manipulation',
                userSelect: 'none'
            }}
            onMouseDown={() => handlePressStart(service.slug)}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={() => handlePressStart(service.slug)}
            onTouchEnd={handlePressEnd}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="card-overlay">
              <div className="card-content">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.category}</h3>
                <ul className="card-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}><FaCheck className="check-icon"/> {feature}</li>
                  ))}
                </ul>
                <Link to={`/services/${service.slug}`} className="card-btn-link">
                  <button className="card-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="portfolio-card" onClick={togglePlay}>
      <video 
        ref={videoRef}
        loop 
        muted 
        playsInline 
        className="portfolio-video-bg"
      >
        <source src="/hero.video.mp4" type="video/mp4" />
      </video>

      <div className={`portfolio-overlay ${isPlaying ? 'playing' : ''}`}>
        <div className="play-button">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        {!isPlaying && (
          <div className="portfolio-info">
            <span className="p-cat">{item.category}</span>
            <h4>{item.title}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

// --- COMPONENT: PORTFOLIO VIDEO SECTION ---
const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header" style={{color: '#fff'}}>
          <h2 style={{color: '#fff'}}>Our Portfolio</h2>
          <p style={{color: '#aaa'}}>See our team in action delivering quality results.</p>
        </div>

        <div className="portfolio-grid">
          {portfolioData.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '40px'}}>
             <a 
                href="/profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{textDecoration: 'none'}}
             >
                <button className="view-all-btn">View Full Portfolio</button>
             </a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {

  useEffect(() => {
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6948e412f2afee197cc99aa5/1jd2blq8g'; 
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin','*');
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      
      {/* --- SEO TAGS ADDED HERE --- */}
      <Helmet>
        <title>Bijon Brand Africa | Top Branding Company in Kenya</title>
        <meta name="description" content="Bijon Brand Africa is a leading branding company in Kenya specializing in logo design, corporate identity, vehicle branding, and digital printing services in Nairobi." />
        <link rel="canonical" href="https://bijonbrandafrica.com/" />
      </Helmet>

      {/* CSS STYLES */}
      <style>{`
        /* --- GLOBAL & HERO --- */
        .slider-wrapper { width: 100%; position: relative; background-color: #000; }
        .hero-image-container { position: relative; height: 80vh; width: 100%; overflow: hidden; background-color: #000; }
        .hero-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; z-index: 1; }
        .hero-bg-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.65); z-index: 2; }
        .hero-content { position: relative; z-index: 3; text-align: left; color: #fff; width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 40px; display: flex; flex-direction: column; align-items: flex-start; }
        .hero-badge { background-color: #fca311; color: #000; font-size: 0.8rem; font-weight: 700; padding: 8px 16px; border-radius: 4px; margin-bottom: 20px; text-transform: uppercase; font-family: 'Montserrat', sans-serif; letter-spacing: 1px; }
        .hero-content h1 { font-size: 3rem; font-weight: 800; line-height: 1.2; margin-bottom: 15px; text-transform: uppercase; font-family: 'Montserrat', sans-serif; max-width: 800px; }
        .hero-content p { font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; font-weight: 400; color: #ddd; max-width: 600px; }
        .hero-buttons { display: flex; gap: 15px; }
        .btn-primary { background-color: #fca311; color: #000; border: none; padding: 12px 30px; border-radius: 4px; font-weight: 700; cursor: pointer; text-transform: uppercase; font-size: 0.85rem; transition: all 0.3s ease; }
        .btn-primary:hover { background-color: #fff; }
        .btn-secondary { background: transparent; border: 2px solid #fff; color: #fff; padding: 10px 30px; border-radius: 4px; font-weight: 700; cursor: pointer; text-transform: uppercase; font-size: 0.85rem; transition: all 0.3s ease; }
        .btn-secondary:hover { background: #fff; color: #000; }
        .dots-container { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 10; display: flex; gap: 8px; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.3s ease; }
        .dot.active { background: #fca311; transform: scale(1.2); }

        /* --- WELCOME --- */
        .welcome-section { background-color: #1a1a1a; color: #fff; padding: 80px 20px; text-align: center; }
        .welcome-container { max-width: 900px; margin: 0 auto; }
        .welcome-subtitle { color: #fca311; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; }
        .welcome-text h2 { font-size: 2.5rem; margin: 15px 0; font-weight: 800; font-family: 'Montserrat', sans-serif; }
        .divider { height: 4px; width: 60px; background-color: #fca311; margin: 0 auto 25px auto; }
        .welcome-text p { color: #ccc; line-height: 1.8; font-size: 1.05rem; margin-bottom: 30px; }
        .welcome-btn { background: transparent; border: 1px solid #fca311; color: #fca311; padding: 12px 25px; font-size: 0.9rem; cursor: pointer; text-transform: uppercase; transition: 0.3s; }
        .welcome-btn:hover { background: #fca311; color: #000; }

        /* --- SERVICES --- */
        .home-services-section { max-width: 1200px; margin: 80px auto; padding: 0 20px; }
        .section-header { text-align: center; margin-bottom: 50px; }
        .section-header h2 { font-size: 2.2rem; font-weight: 800; color: #333; margin-bottom: 10px; font-family: 'Montserrat', sans-serif; text-transform: uppercase; }
        .section-header p { color: #666; max-width: 600px; margin: 0 auto; font-size: 1rem; }
        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .service-card { position: relative; height: 420px; border-radius: 8px; background-size: cover; background-position: center; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
        .service-card:hover { transform: translateY(-5px); }
        .card-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.65); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; color: #fff; transition: background-color 0.3s ease; }
        .service-card:hover .card-overlay { background-color: rgba(0, 0, 0, 0.8); }
        .card-content { width: 100%; }
        .card-icon { font-size: 2.2rem; color: #fca311; margin-bottom: 15px; }
        .card-content h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 10px; font-family: 'Montserrat', sans-serif; }
        .card-features { list-style: none; padding: 0; margin: 15px 0 25px 0; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px; }
        .card-features li { font-size: 0.9rem; margin-bottom: 8px; display: flex; align-items: center; gap: 10px; color: #eee; }
        .check-icon { color: #fca311; font-size: 0.8rem; }
        .card-btn-link { text-decoration: none; width: 100%; display: block; }
        .card-btn { width: 100%; background-color: transparent; border: 2px solid #fca311; color: #fff; font-weight: 700; padding: 12px; border-radius: 4px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; font-family: 'Montserrat', sans-serif; font-size: 0.85rem; }
        .card-btn:hover { background-color: #fca311; color: #000; }

        /* --- PORTFOLIO --- */
        .portfolio-section { background-color: #111; padding: 80px 20px; }
        .portfolio-container { max-width: 1200px; margin: 0 auto; }
        .portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-top: 40px; }
        .portfolio-card { height: 300px; border-radius: 8px; position: relative; overflow: hidden; cursor: pointer; border: 1px solid #333; }
        .portfolio-video-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        
        .portfolio-overlay { position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.4); display: flex; flex-direction: column; justify-content: center; align-items: center; transition: 0.3s; z-index: 2; }
        .portfolio-card:hover .portfolio-overlay { background: rgba(0,0,0,0.6); }
        
        .portfolio-overlay.playing { background: rgba(0,0,0,0); }
        .portfolio-overlay.playing .play-button { opacity: 0; }
        .portfolio-overlay.playing:hover .play-button { opacity: 1; }
        
        .play-button { width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,0.2); border: 2px solid #fff; display: flex; justify-content: center; align-items: center; color: #fff; font-size: 1.2rem; margin-bottom: 20px; transition: 0.3s; }
        .portfolio-card:hover .play-button { background: #fca311; border-color: #fca311; transform: scale(1.1); }
        .portfolio-info { position: absolute; bottom: 20px; left: 20px; text-align: left; }
        .p-cat { color: #fca311; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; }
        .portfolio-info h4 { color: #fff; font-size: 1.2rem; margin-top: 5px; }
        .view-all-btn { background: #333; color: #fff; border: 1px solid #555; padding: 12px 30px; text-transform: uppercase; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .view-all-btn:hover { background: #fca311; color: #000; border-color: #fca311; }

        /* FLOATING SOCIAL */
        .floating-social-bar { position: fixed; right: 20px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 15px; z-index: 100; }
        .floating-icon { display: flex; align-items: center; justify-content: center; width: 45px; height: 45px; border-radius: 50%; color: white; font-size: 1.2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: all 0.3s ease; }
        .icon-whatsapp { background-color: #25D366; }
        .icon-facebook { background-color: #1877F2; }
        .icon-instagram { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); }
        .icon-tiktok { background-color: #000000; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .cards-grid, .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-content h1 { font-size: 2.2rem; }
        }
        @media (max-width: 768px) {
          .cards-grid, .portfolio-grid { grid-template-columns: 1fr; }
          .hero-overlay { background: rgba(40, 40, 40, 0.75); }
          .hero-image-container { height: 70vh; }
          .hero-content h1 { font-size: 1.6rem; margin-bottom: 10px; }
          .hero-content p { font-size: 0.9rem; margin-bottom: 20px; }
          .hero-badge { font-size: 0.7rem; padding: 6px 12px; margin-bottom: 15px; }
          .hero-content { padding: 0 20px; }
          .floating-social-bar { display: none; }
          .welcome-text h2 { font-size: 1.8rem; }
          .btn-primary, .btn-secondary { padding: 10px 20px; font-size: 0.75rem; }
        }
      `}</style>

      {/* Floating Social Bar */}
      <div className="floating-social-bar">
        <motion.a href="https://wa.me/254722210279" target="_blank" rel="noreferrer" className="floating-icon icon-whatsapp" whileHover={{ scale: 1.2 }}><FaWhatsapp /></motion.a>
        <motion.a href="https://www.facebook.com/bijonbrandafrica" target="_blank" rel="noreferrer" className="floating-icon icon-facebook" whileHover={{ scale: 1.2 }}><FaFacebookF /></motion.a>
        <motion.a href="https://www.instagram.com/bijonbrandafrica?igsh=NTVodGI3cHp3emI4" target="_blank" rel="noreferrer" className="floating-icon icon-instagram" whileHover={{ scale: 1.2 }}><FaInstagram /></motion.a>
        <motion.a href="https://www.tiktok.com/@bijonbrandafrica.ltd?_r=1&_t=ZM-92KTlwJuzi0" target="_blank" rel="noreferrer" className="floating-icon icon-tiktok" whileHover={{ scale: 1.2 }}><FaTiktok /></motion.a>
      </div>

      <HeroSlider />
      <WelcomeSection />
      <ServicesSection />
      <PortfolioSection />
    </div>
  );
};

export default Home;