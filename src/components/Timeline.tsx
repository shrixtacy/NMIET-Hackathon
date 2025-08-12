import React from 'react';
import { Calendar, FileText, MapPin, Trophy } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      icon: FileText,
      title: "Stage 1: Online Shortlisting",
      description: "Submit your pitch deck and team details",
      date: "Jan 15 - Feb 15, 2025",
      status: "active"
    },
    {
      icon: MapPin,
      title: "Shortlisting Results",
      description: "Selected teams announced via email and website",
      date: "Feb 20, 2025",
      status: "upcoming"
    },
    {
      icon: Calendar,
      title: "Stage 2: In-Person Hackathon",
      description: "48-hour intensive hackathon at NMIET campus",
      date: "Mar 1-3, 2025",
      status: "upcoming"
    },
    {
      icon: Trophy,
      title: "Winner Announcement",
      description: "Awards ceremony and recognition",
      date: "Mar 3, 2025",
      status: "upcoming"
    }
  ];

  return (
    <section className="timeline-section section-padding">
      <div className="container">
        <h2 className="military-heading section-title text-center">
          Mission <span className="green-text">Timeline</span>
        </h2>
        
        <div className="timeline-container">
          <div className="timeline-line">
            <div className="laser-line"></div>
          </div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-item fade-in-up ${event.status}`}>
              <div className="timeline-marker">
                <div className="marker-glow"></div>
                <event.icon size={24} />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title military-heading">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
                <span className="timeline-date green-text">{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;