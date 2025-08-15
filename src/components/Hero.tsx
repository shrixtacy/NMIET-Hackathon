'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import FaultyTerminal from './FaultyTerminal';

const Hero = () => {
  return (
    <section className="hero-section relative">
      {/* FaultyTerminal Background - Handles mobile detection internally */}
      <div className="absolute inset-0 z-10 w-full h-full interactive-terminal" style={{ pointerEvents: 'auto' }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#6B8E23"
          mouseReact={true}
          mouseStrength={2.0}
          pageLoadAnimation={true}
          brightness={1.8}
          className="w-full h-full opacity-30"
          style={{ cursor: 'crosshair', pointerEvents: 'auto' }}
        />
      </div>

      {/* Content overlay - Allow pointer events to pass through */}
      <div className="container relative z-20" style={{ pointerEvents: 'none' }}>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge fade-in-up">
              Free Registration – Open to All Colleges & Universities
            </div>

            <div className="nextech-title fade-in-up">
              NEXTECH 1.0
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
            </div>

            <div className="hero-actions fade-in-up" style={{ pointerEvents: 'auto' }}>
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

      <div className="hero-scroll-indicator relative z-30 pointer-events-auto">
        <ChevronDown size={24} className="bounce" />
      </div>
    </section>
  );
};

export default Hero;