'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="flag-overlay"></div>
      <div className="container">
        <h2 className="military-heading section-title text-center">
          Contact <span className="green-text">Mission Control</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item fade-in-up">
              <Mail className="info-icon army-text" />
              <div>
                <h3>Email</h3>
                <p>hackathon@nmiet.ac.in</p>
              </div>
            </div>
            
            <div className="info-item fade-in-up">
              <Phone className="info-icon army-text" />
              <div>
                <h3>Phone</h3>
                <p>+91 9876543210</p>
              </div>
            </div>
            
            <div className="info-item fade-in-up">
              <MapPin className="info-icon army-text" />
              <div>
                <h3>Location</h3>
                <p>NMIET, Near AIIMS Bhubaneswar<br />Sijua, Patrapada, Odisha</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="army-button glow-effect">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
        
        <div className="map-container fade-in-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.6287845437343!2d85.77846631544274!3d20.25003471862952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0b9b0b9b0b%3A0x9b0b9b0b9b0b9b0b!2sNMIET%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NMIET Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;