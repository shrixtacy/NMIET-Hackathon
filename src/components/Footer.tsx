import React from 'react';
import { Heart, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <h3 className="military-heading">
                NMIET <span className="green-text">Hackathon 2025</span>
              </h3>
              <p>Innovating for Defence. Building for Bharat.</p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <a href="#about">About</a>
                <a href="#timeline">Timeline</a>
                <a href="https://forms.gle/k9WmRjaxUubhgcPH9" target="_blank" rel="noopener noreferrer">Register</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="link-group">
                <h4>Resources</h4>
                <a href="/details">Rules & Guidelines</a>
                <a href="/mission">Mission Brief</a>
                <a href="/team">Our Team</a>
              </div>

              <div className="link-group">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://twitter.com/nmiet_official" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.instagram.com/nm.edcell?igsh=MXc2Nmg1YWxwd3B6YQ==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.instagram.com/nm.edcell?igsh=MXc2Nmg1YWxwd3B6YQ==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/nm.edcell?igsh=MXc2Nmg1YWxwd3B6YQ==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider">
              <div className="saffron-line"></div>
              <div className="army-line"></div>
            </div>

            <div className="footer-credits">
              <p>
                Made with <Heart size={16} className="green-text" /> by NMIET’s Tech Club
              </p>
              <p>© 2025 NMIET’s Tech Club. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;