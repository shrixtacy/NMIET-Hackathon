import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const Contact = () => {
  const coordinators = [
    {
      name: 'Shriyansh Dash',
      role: 'Head Co-ordinator',
      phone: '8260542544',
      email: 'shriyansh.bytix@gmail.com'
    },
    {
      name: 'Om Prakash Nahak',
      role: 'Head Co-ordinator',
      phone: '9692402032',
      email: 'omprakash.bytix@gmail.com'
    },
    {
      name: 'Aman Singh',
      role: 'Head Co-ordinator',
      phone: '8521736139',
      email: 'aaman.bytix@gmail.com'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="flag-overlay"></div>
      <div className="container">
        <h2 className="military-heading section-title text-center">
          Contact <span className="green-text">Mission Control</span>
        </h2>
        
        <div className="coordinators-grid">
          {coordinators.map((coordinator, index) => (
            <div key={index} className="coordinator-card fade-in-up">
              <div className="coordinator-header">
                <User className="coordinator-icon army-text" size={32} />
                <div className="coordinator-info">
                  <h3 className="coordinator-name">{coordinator.name}</h3>
                  <p className="coordinator-role">{coordinator.role}</p>
                </div>
              </div>
              
              <div className="coordinator-contacts">
                <div className="contact-item">
                  <Phone className="contact-icon army-text" size={18} />
                  <a href={`tel:+91${coordinator.phone}`} className="contact-link">
                    +91 {coordinator.phone}
                  </a>
                </div>
                
                <div className="contact-item">
                  <Mail className="contact-icon army-text" size={18} />
                  <a href={`mailto:${coordinator.email}`} className="contact-link">
                    {coordinator.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="location-map-section">
          <div className="location-info-box">
            <div className="location-header">
              <MapPin className="location-icon army-text" size={32} />
              <div className="location-details">
                <h3 className="location-title">Event Location</h3>
                <p className="location-venue">NM Institute of Engineering and Technology</p>
                <div className="location-address">
                  <p>Sijua, Patrapada, Bhubaneswar</p>
                  <p>Odisha 751019, India</p>
                </div>
                <div className="event-date">
                  <h4>Hackathon Date</h4>
                  <p className="date-info">September 19th & 20th, 2025</p>
                  <p className="time-info">24hrs Hackathon</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-container fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5234567890123!2d85.8234567890!3d20.2345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5559fdd%3A0x70b8b1f0b1f0b1f0!2sNM%20Institute%20of%20Engineering%20and%20Technology%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NM Institute of Engineering and Technology Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;