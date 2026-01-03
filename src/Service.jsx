import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, FaArrowRight, FaArrowLeft, 
  FaPaintBrush, FaTshirt, FaPrint, FaTools, FaBuilding, FaLayerGroup,
  FaInstagram, FaTiktok, FaFacebookF 
} from 'react-icons/fa';
import './Service.css'; 

// --- UPDATED DATA SECTION ---
const servicesData = [
  {
    id: 1,
    category: "Apparel & Uniforms",
    description: "High-quality custom uniforms, branded staff wear, and promotional clothing to unite your team.",
    icon: <FaTshirt />, 
    items: [
      { 
        name: "Customization", 
        desc: "Tailored branding on apparel.", 
        images: ["/images/appll.jpg", "/images/eco.jpg"] 
      },
      { 
        name: "Staff Uniforms", 
        desc: "Professional uniforms for staff.", 
        images: ["/images/appeal.jpg", "/images/uni.jpg","/images/uniform.jpg"] 
      },
      { 
        name: "Promotional Wear", 
        desc: "T-shirts and caps for events.", 
        images: ["/images/cap.jpeg", "/images/appl.jpeg"] 
      },
      { 
        name: "Protective Gear", 
        desc: "Branded safety vests & helmets.", 
        images: ["/images/Protective1.jpeg", "/images/protective.jpg"] 
      },
      { 
        name: "Sports Kits", 
        desc: "Full sports team jerseys.", 
        images: ["/images/sport.jpg", "/images/sport.jpg"] 
      }
    ]
  },
  {
    id: 2,
    category: "Signage & Fabrication",
    description: "Make a bold statement with 3D signs, lightboxes, and custom fabrication for your business.",
    icon: <FaTools />,
    items: [
      { name: "3D Signs", desc: "Illuminated 3D channel letters.", images: ["/images/shop-front-signage.jpeg", "/images/3d.jpg"] },
      { name: "Light Boxes", desc: "Eye-catching displays.", images: ["/images/light.jpeg", "/images/light.jpeg"] },
      { name: "Office Signage", desc: "Door & reception signs.", images: ["/images/off.jpeg", "/images/off.jpeg"] },
      { name: "Roadside Billboards", desc: "Large format structures.", images: ["/images/rd.jpeg", "/images/rd.jpeg"] },
      { name: "Directional Signs", desc: "Wayfinding guides.", images: ["/images/direction.jpeg", "/images/direction.jpeg"] }
    ]
  },
  {
    id: 3,
    category: "Corporate Branding",
    description: "Comprehensive branding solutions including office wall branding, vehicle wraps, and merchandise.",
    icon: <FaBuilding />,
    items: [
      { name: "Office Branding", desc: "Wall wraps & frosted glass.", images: ["/images/office.jpeg", "/images/office.jpeg"] },
      { name: "Vehicle Branding", desc: "Full or partial vehicle wraps.", images: ["/images/vehicle.jpeg", "/images/vecle.jpg"] },
      { name: "Staff ID Branding", desc: "Custom lanyards & IDs.", images: ["/images/Staff Id.jpg", "/images/Staff Id.jpg"] },
      { name: "Window Graphics", desc: "Vinyl stickers for shop fronts.", images: ["/images/window.jpeg", "/images/window.jpeg"] },
      { name: "Merchandise", desc: "Branded pens & bottles.", images: ["/images/pen.jpg", "/images/pen.jpg"] }
    ]
  },
  {
    id: 4,
    category: "Digital & Offset Printing",
    description: "Premium printing for business cards, brochures, eulogies, and marketing materials.",
    icon: <FaPrint />,
    items: [
      { name: "Eulogies", desc: "Funeral programs designed with care.", images: ["/images/shop--signage.jpeg", "/images/shop--signage.jpeg"] },
      { name: "Business Cards", desc: "Matte, gloss, or textured cards.", images: ["/images/Business.jpg", "/images/businesss.jpg"] },
      { name: "Wedding Cards", desc: "Custom invitation cards.", images: ["/images/wedding.jpeg", "/images/wedding.jpg"] },
      { name: "Flyers & Brochures", desc: "Vibrant marketing materials.", images: ["/images/shop-frontage.jpeg", "/images/shop-frontage.jpeg"] },
      { name: "Receipt Books", desc: "NCR books for records.", images: ["/images/-front-signage.jpeg", "/images/-front-signage.jpeg"] }
    ]
  },
  {
    id: 5,
    category: "Print Technology",
    description: "Advanced printing solutions using UV, Sublimation, and Large Format technologies.",
    icon: <FaLayerGroup />,
    items: [
      { name: "UV Printing", desc: "Print on pens, metal, plastic.", images: ["/images/UV.jpeg", "/images/uvv.jpg"] },
      { name: "Direct to Film (DTF)", desc: "Heat transfer prints for fabrics.", images: ["/images/larges.jpeg", "/images/larges.jpeg"] },
      { name: "Large Format", desc: "Banners & stickers.", images: ["/images/large.jpeg", "/images/large.jpeg"] },
      { name: "Laser Engraving", desc: "Etching on metal & wood.", images: ["/images/shop-front-signage.jpeg", "/images/shop-front-signage.jpeg"] },
      { name: "Sublimation", desc: "Mugs, plates & polyester.", images: ["/images/Sublimation.jpeg", "/images/friend.jpg"] },
      { name: "Promotional Items", desc: "Event giveaways.", images: ["/images/give.jpeg", "/images/away.jpg"] }
    ]
  },
  {
    id: 6,
    category: "Graphic Design",
    description: "Creative visual identities, logo design, and artwork creation that brings your brand to life.",
    icon: <FaPaintBrush />,
    items: [
      { name: "Logo Design", desc: "Unique logos for your brand.", images: ["/images/lg.png", "/images/lg.png"] },
      { name: "Brand Identity", desc: "Fonts, colors & guidelines.", images: ["/images/brand.jpeg", "/images/brand.jpeg"] },
      { name: "Marketing Services", desc: "Posters & social media banners.", images: ["/images/poster.jpg", "/images/poster.jpg"] },
    ]
  }
];

// --- COMPONENT: Image Carousel ---
const ImageCarousel = ({ images, placeholder }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Only set interval if we have more than one image
    if (images.length > 1) {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
      return () => clearInterval(timer);
    }
  }, [images.length]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode='popLayout'>
        <motion.img
          key={index}
          src={images[index]}
          alt="Service item"
          onError={(e) => {e.target.src = placeholder}}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};


const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  // --- HANDLE FOOTER LINK CLICKS ---
  useEffect(() => {
    if (location.state && location.state.categoryId) {
      const targetService = servicesData.find(s => s.id === location.state.categoryId);
      if (targetService) {
        setSelectedCategory(targetService);
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  // --- TAWK.TO SCRIPT INJECTION ---
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

  // --- HANDLE TAWK CHAT OPEN ---
  const handleTawkChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); 
    } else {
      console.warn("Tawk.to chat is still loading...");
    }
  };

  const handleWhatsApp = (item) => {
    const phoneNumber = "+254722210279"; 
    const message = `Hello Bijon Brand Africa, I would like to enquire about ${item}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const placeholderImg = "https://placehold.co/600x400?text=Image";

  return (
    <div className="services-page-wrapper" style={{ position: 'relative' }}>
      
      {/* --- FLOATING SOCIAL MEDIA BAR --- */}
      <div className="floating-social-bar">
        
        {/* WhatsApp */}
        <motion.a 
          href="https://wa.me/254722210279" 
          target="_blank" 
          rel="noreferrer"
          className="floating-icon icon-whatsapp"
          whileHover={{ scale: 1.2 }}
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>

        {/* Facebook */}
        <motion.a 
          href="https://www.facebook.com/bijonbrandafrica" 
          target="_blank" 
          rel="noreferrer"
          className="floating-icon icon-facebook"
          whileHover={{ scale: 1.2 }}
          title="Follow on Facebook"
        >
          <FaFacebookF />
        </motion.a>

        {/* Instagram */}
        <motion.a 
          href="https://www.instagram.com/bijonbrandafrica?igsh=NTVodGI3cHp3emI4" 
          target="_blank" 
          rel="noreferrer"
          className="floating-icon icon-instagram"
          whileHover={{ scale: 1.2 }}
          title="Follow on Instagram"
        >
          <FaInstagram />
        </motion.a>

        {/* TikTok */}
        <motion.a 
          href="https://www.tiktok.com/@bijonbrandafrica.ltd?_r=1&_t=ZM-92KTlwJuzi0" 
          target="_blank" 
          rel="noreferrer"
          className="floating-icon icon-tiktok"
          whileHover={{ scale: 1.2 }}
          title="Watch on TikTok"
        >
          <FaTiktok />
        </motion.a>

      </div>
      {/* ------------------------------- */}

      {/* HEADER SECTION - HERO VIDEO */}
      <div className="svc-header">
        <video 
          className="svc-video-bg"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ objectFit: 'cover' }}
        >
          {/* Ensure 'hero.video.mp4' is in your public folder */}
          <source src="/hero.video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="svc-overlay"></div>
        <div className="svc-header-content">
          <motion.h1
            key={selectedCategory ? selectedCategory.category : "title-default"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {selectedCategory ? selectedCategory.category : "Welcome to Excellence"}
          </motion.h1>

          <motion.p
            key={selectedCategory ? selectedCategory.description : "desc-default"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {selectedCategory
              ? selectedCategory.description 
              : "We are a responsive company constituted as a quality center of creative and innovative designs, quality printing, branding and general supplies."
            }
          </motion.p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="svc-content-container">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div 
              className="svc-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              key="grid"
            >
              {servicesData.map((service) => (
                <motion.div 
                  className="svc-card"
                  key={service.id}
                  whileHover={{ y: -10 }}
                >
                  <div className="svc-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.category}</h3>
                  <p>{service.description}</p>
                  <button 
                    className="svc-btn-explore"
                    onClick={() => setSelectedCategory(service)}
                  >
                    View Solutions <FaArrowRight />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="svc-detail-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              key="detail"
            >
              <button 
                className="svc-btn-back"
                onClick={() => setSelectedCategory(null)}
              >
                <FaArrowLeft /> Back to Services
              </button>

              <div className="svc-sub-grid">
                {selectedCategory.items.map((item, index) => (
                  <motion.div 
                    className="svc-sub-card" 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="svc-item-img-container">
                      <ImageCarousel 
                        images={item.images} 
                        placeholder={placeholderImg} 
                      />
                    </div>
                    
                    <div className="svc-card-body">
                      <h4>{item.name}</h4>
                      <p className="svc-item-desc">{item.desc}</p>
                      <button 
                        className="svc-btn-whatsapp"
                        onClick={() => handleWhatsApp(item.name)}
                      >
                        <FaWhatsapp size={20}/> Order on WhatsApp
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;