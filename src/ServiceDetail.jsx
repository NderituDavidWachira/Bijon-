import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { servicesData } from './data/servicesData';
import './Service.css'; 

// --- CAROUSEL COMPONENT ---
const ImageCarousel = ({ images, placeholder }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
      return () => clearInterval(timer);
    }
  }, [images]);

  const currentImage = images && images.length > 0 ? images[index] : placeholder;

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode='popLayout'>
        <motion.img
          key={index}
          src={currentImage}
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

const ServiceDetail = () => {
  // Handles both :slug and :id to prevent "Service not found" errors
  const { slug, id } = useParams(); 
  const routeId = slug || id; 

  const [service, setService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (routeId) {
      const foundService = servicesData.find(item => item.id === routeId);
      setService(foundService);
    }
  }, [routeId]);

  const handleWhatsApp = (item) => {
    const phoneNumber = "254722210279"; 
    const message = `Hello Bijon Brand Africa, I would like to enquire about ${item} from the ${service?.category} section.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const placeholderImg = "https://placehold.co/600x400?text=Image";

  if (!service) {
    return (
      <div className="services-page-wrapper" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'60vh'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Service not found</h2>
        <Link to="/services">
            <button className="svc-btn-back">
             <FaArrowLeft /> Return to Services
            </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="services-page-wrapper">
      
      <div className="svc-header" style={{ height: '15vh', minHeight: '250px' }}>
         
         {/* 1. Video Background */}
         <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="svc-video-bg"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src="/hero.video.mp4" type="video/mp4" />
        </video>

         {/* 2. Dark Overlay */}
         <div className="svc-overlay"></div>

         {/* 3. Header Content */}
         <div className="svc-header-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {service.category}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {service.description}
            </motion.p>
         </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="svc-content-container">
        <motion.div 
          className="svc-detail-view"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Link to="/services">
            <button className="svc-btn-back">
              <FaArrowLeft /> Back to Services
            </button>
          </Link>

          {/* Sub Items Grid */}
          <div className="svc-sub-grid">
            {service.items.map((item, index) => (
              <motion.div 
                className="svc-sub-card" 
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
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
      </div>
    </div>
  );
};

export default ServiceDetail;