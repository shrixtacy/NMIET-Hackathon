'use client';

import React, { useState, useEffect } from 'react';
import { Eye, Radio, AlertTriangle, UserCheck } from 'lucide-react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="about" className="about-section section-padding">
      {!isMobile && (
        <div className="video-background">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="background-video"
            preload="none"
          >
            <source src="/trt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      )}
      <div className="container">
        <div className="about-content-centered">
          {/* About Section */}
          <h2 className="military-heading section-title text-center">
            About The <span className="green-text">Hackathon</span>
          </h2>
          
          <div className="about-text-box">
            <p className="about-main-text">
              Design a <span className="green-text">scalable, secure and intelligent digital ecosystem</span> that can assist the Indian Armed Forces in real-time surveillance, secure communication, threat detection and soldier support in high-risk zones.
            </p>
            <p className="about-participation">
              Build <span className="green-text">AI-powered solutions</span> that enhance military operations, protect our borders and ensure the safety of our Armed Forces in critical missions.
            </p>
          </div>

          {/* Build Anything Section */}
          <div className="about-text-box">
            <p className="about-main-text text-center">
              <strong className="green-text" style={{fontSize: '1.2em', textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'}}>
                🚀 Build Anything That Makes an Impact! 🚀
              </strong>
              <br />
              <span style={{fontSize: '1.1em'}}>
                Whether it's <span className="green-text" style={{fontWeight: 'bold', textShadow: '0 0 8px rgba(0, 255, 0, 0.4)'}}>Software, Hardware, IoT or SaaS</span> — create innovative solutions that can strengthen and support our <span className="green-text" style={{fontWeight: 'bold'}}>Indian system</span>.
              </span>
            </p>
          </div>

          {/* Why We Chose This Topic Section */}
          <h3 className="military-heading section-subtitle text-center">
            Why We Chose <span className="green-text">This Topic</span>
          </h3>
          
          <div className="why-text-box">
            <p className="why-description">
              India's national security is at a crucial point with rising tensions from neighboring countries and increasing threats from cross-border infiltration, terrorism and cyber warfare.
            </p>
            <p className="why-need">
              Our Armed Forces need next-generation technology that not only reacts to threats but anticipates them. This hackathon aims to build solutions that strengthen our nation's defense capabilities.
            </p>
          </div>

          {/* Key Focus Areas */}
          <h4 className="focus-title text-center">Key Focus Areas</h4>
          <div className="focus-grid-centered">
            <div className="focus-item-card">
              <Eye className="focus-icon" size={32} />
              <span className="focus-label">Real-time</span>
              <span className="focus-label">Surveillance</span>
            </div>
            <div className="focus-item-card">
              <Radio className="focus-icon" size={32} />
              <span className="focus-label">Secure</span>
              <span className="focus-label">Communication</span>
            </div>
            <div className="focus-item-card">
              <AlertTriangle className="focus-icon" size={32} />
              <span className="focus-label">Threat Detection</span>
            </div>
            <div className="focus-item-card">
              <UserCheck className="focus-icon" size={32} />
              <span className="focus-label">Soldier Support</span>
            </div>
          </div>

          {/* More Info Button */}
          <div className="about-cta text-center">
            <a href="/details" className="more-info-btn">
              <span>More Info</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
