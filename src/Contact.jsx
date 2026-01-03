import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css'; // use module

const Contact = () => {
  return (
    <motion.div 
      className={styles.contactPage}  // scoped class
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
          <p>+254 110 097 845</p>
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
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.870847424419!2d36.8219467153359!3d-1.292065399101014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a4f9e7d9df%3A0xa0d75a5f154ab0!2sJethwa%20Mansion%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1702888888888!5m2!1sen!2sus" 
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
