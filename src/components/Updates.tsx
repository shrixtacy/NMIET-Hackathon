import React from 'react';
import { Bell, Users2, BookOpen } from 'lucide-react';

const Updates = () => {
  const updates = [
    { icon: Bell, text: "Registration Now Open", status: "active" },
    { icon: Users2, text: "Mentors Announced Soon", status: "upcoming" },
    { icon: BookOpen, text: "Rules & Guidelines Updated", status: "new" }
  ];

  return (
    <section className="updates-section section-padding">
      <div className="ticker-background"></div>
      <div className="container">
        <h2 className="military-heading section-title text-center">
          Latest <span className="green-text">Updates</span>
        </h2>
        
        <div className="ticker-container">
          <div className="ticker-content">
            {updates.concat(updates).map((update, index) => (
              <div key={index} className="ticker-item">
                <update.icon size={20} className="ticker-icon army-text" />
                <span className="ticker-text">{update.text}</span>
                <span className={`status-badge ${update.status}`}>
                  {update.status === 'active' && '🟢'}
                  {update.status === 'upcoming' && '🟡'}
                  {update.status === 'new' && '🆕'}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="updates-cards">
          {updates.map((update, index) => (
            <div key={index} className="update-card fade-in-up">
              <div className="card-header">
                <update.icon size={24} className="army-text" />
                <span className={`status-indicator ${update.status}`}></span>
              </div>
              <h3 className="military-heading">{update.text}</h3>
              <div className={`card-border ${update.status === 'active' ? 'saffron' : 'army'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;