import React from 'react';
import { Brain, Eye, Shield, Zap } from 'lucide-react';

const Theme = () => {
  const themeCards = [
    {
      icon: Brain,
      title: "AI for Military Strategy",
      description: "Develop predictive battle simulations and strategic decision-making AI systems",
      color: "green"
    },
    {
      icon: Eye,
      title: "Surveillance & Reconnaissance",
      description: "Create drone-based intelligence and real-time battlefield monitoring systems",
      color: "army"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Warfare",
      description: "Build robust AI solutions to protect defence networks and critical infrastructure",
      color: "green"
    },
    {
      icon: Zap,
      title: "Disaster Response AI",
      description: "Design civil-military collaboration tools for emergency rescue and relief operations",
      color: "army"
    }
  ];

  return (
    <section className="theme-section section-padding">
      <div className="theme-background"></div>
      <div className="container">
        <div className="theme-header text-center">
          <h2 className="military-heading section-title">
            Defence & Military Innovation<br />
            <span className="green-text">Through AI</span>
          </h2>
          <div className="radar-scan-line"></div>
        </div>
        
        <div className="theme-grid">
          {themeCards.map((card, index) => (
            <div key={index} className="theme-card fade-in-up glow-effect">
              <div className={`card-icon ${card.color}-text`}>
                <card.icon size={48} />
              </div>
              <h3 className="card-title military-heading">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme;