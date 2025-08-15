import React from 'react';
import { Eye, Radio, AlertTriangle, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="background-video"
        >
          <source src="/trt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <div className="about-content-new">
          {/* About Section */}
          <div className="about-main">
            <h2 className="military-heading section-title text-center">
              About The <span className="green-text">Hackathon</span>
            </h2>
            <div className="about-description-box">
              <p className="about-main-text">
                Design a <span className="green-text">scalable, secure and intelligent digital ecosystem</span> that can assist the Indian Armed Forces in real-time surveillance, secure communication, threat detection and soldier support in high-risk zones.
              </p>
              <p className="about-participation">
                Build <span className="green-text">AI-powered solutions</span> that enhance military operations, protect our borders and ensure the safety of our Armed Forces in critical missions.
              </p>
            </div>
          </div>

          {/* Why We Chose This Topic Section */}
          <div className="why-chosen-main">
            <h3 className="military-heading section-subtitle text-center">
              Why We Chose <span className="green-text">This Topic</span>
            </h3>
            <div className="why-content-box">
              <p className="why-description">
                India's national security is at a crucial point with rising tensions from neighboring countries and increasing threats from cross-border infiltration, terrorism and cyber warfare.
              </p>
              <p className="why-need">
                Our Armed Forces need next-generation technology that not only reacts to threats but anticipates them. This hackathon aims to build solutions that strengthen our nation's defense capabilities.
              </p>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="focus-areas">
            <h4 className="focus-title">Key Focus Areas</h4>
            <div className="focus-grid">
              <div className="focus-item">
                <Eye className="focus-icon" />
                <span>Real-time Surveillance</span>
              </div>
              <div className="focus-item">
                <Radio className="focus-icon" />
                <span>Secure Communication</span>
              </div>
              <div className="focus-item">
                <AlertTriangle className="focus-icon" />
                <span>Threat Detection</span>
              </div>
              <div className="focus-item">
                <UserCheck className="focus-icon" />
                <span>Soldier Support</span>
              </div>
            </div>
          </div>

          {/* More Info Button */}
          <div className="about-cta">
            <a href="/mission" className="more-info-btn">
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