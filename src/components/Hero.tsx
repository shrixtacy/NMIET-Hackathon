import React from 'react';
import { ChevronDown } from 'lucide-react';
import FaultyTerminal from './Backgrounds/FaultyTerminal/FaultyTerminal';

const Hero = () => {
  return (
    <section className="hero-section relative">
      {/* Faulty Terminal Background */}
      <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
        <FaultyTerminal
          className="opacity-60"
          brightness={0.6}
          tint="#00ff41"
          scale={1.2}
          gridMul={[3, 2]}
          digitSize={1.8}
          scanlineIntensity={0.4}
          glitchAmount={1.2}
          flickerAmount={0.8}
          noiseAmp={0.8}
          curvature={0.1}
          pageLoadAnimation={true}
          mouseReact={false}
        />
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 pointer-events-none">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge fade-in-up">
              <span className="green-text">🇮🇳</span> Free Registration – Open to All Colleges & Universities
            </div>

            <h1 className="hero-title military-heading fade-in-up">
              NMIET Inter-College <span className="green-text">AI Hackathon 2025</span>
            </h1>

            <p className="hero-subtitle fade-in-up">
              <span className="green-text">Innovating for Defence.</span> Building for Bharat.
            </p>

            <div className="hero-details fade-in-up">
              <div className="detail-item">
                <span className="army-text">📍 Location:</span>NMIET Campus, near AIIMS, Sijua, Patrapada, Bhubaneswar, Odisha 751019
              </div>
              <div className="detail-item">
                <span className="army-text">🎯 Format:</span> Stage 1: Online Shortlisting | Stage 2: In-Person Hackathon
              </div>
            </div>

            <div className="hero-actions fade-in-up pointer-events-auto">
              <a href="https://forms.gle/k9WmRjaxUubhgcPH9" target="_blank" rel="noopener noreferrer" className="army-button glow-effect">
                Register Now
              </a>
              <a href="#about" className="learn-more-btn">
                Learn More <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator relative z-10 pointer-events-auto">
        <ChevronDown size={24} className="bounce" />
      </div>
    </section>
  );
};

export default Hero;