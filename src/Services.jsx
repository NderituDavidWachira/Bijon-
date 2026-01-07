// src/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { servicesData } from './data/servicesData'; 
import './Service.css'; 

const Services = () => {
  return (
    <div className="services-page-wrapper">
      
      {/* HEADER SECTION WITH VIDEO */}
      <div className="svc-header">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="svc-video-bg"
        >
          <source src="/hero.video.mp4" type="video/mp4" />
        </video>

        <div className="svc-overlay"></div>

        <div className="svc-header-content">
          <h1>Welcome to Excellence</h1>
          <p>We are a responsive company constituted as a quality center of creative and innovative designs, quality printing, branding and general supplies.</p>
        </div>
      </div>

      {/* WHITE CARDS GRID */}
      <div className="svc-content-container">
        <div className="svc-grid">
          
          {servicesData.map((service) => (
            <div className="svc-card" key={service.id}>
              
              {/* Circular Icon */}
              <div className="svc-icon-wrapper">
                {service.icon}
              </div>

              <h3>{service.category}</h3>
              
              <p className="svc-desc">{service.description}</p>
              
              <Link to={`/services/${service.id}`}>
                <button className="svc-btn-explore">
                  View Solutions <FaArrowRight />
                </button>
              </Link>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;