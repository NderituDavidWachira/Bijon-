import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css'; 

const Contact = () => {
  return (
    <motion.div 
      className={styles.contactPage}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>Reach out to our team for inquiries, support, or collaborations.</p>
      </div>

      {/* Contact cards */}
      <div className={styles.contactCards}>
        <div className={styles.contactCard}>
          <div className={styles.iconCircle}><FaMapMarkerAlt /></div>
          <h3>Visit Us</h3>
          <p>Jethwa Mansion Building,<br/> Kilome Road off Kirinyaga Road,<br/> Nairobi, Kenya</p>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconCircle}><FaPhoneAlt /></div>
          <h3>Call Us</h3>
          <p>+254 722 210279</p>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconCircle}><FaEnvelope /></div>
          <h3>Email Us</h3>
          <p>info@bijonbrandafrica.com</p>
        </div>
      </div>

      {/* Map */}
      <div className={styles.mapContainer}>
        <iframe 
          title="Jethwa Mansion Location"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
    
          src="https://maps.google.com/maps?q=Jethwa%20Mansion%20Building%2C%20Kilome%20Road%20off%20Kirinyaga%20Road%2C%20Nairobi%2C%20Kenya&t=&z=16&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;