import React from 'react';
import { Calendar, FileText, MapPin, Trophy } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      icon: FileText,
      title: "Stage 1: Online Shortlisting",
      description: "Submit your pitch deck and team details",
      date: "Aug 15 - Sept 10, 2025",
      status: "active"
    },
    {
      icon: MapPin,
      title: "Shortlisting Results",
      description: "Selected teams announced via email and website",
      date: "Sept 15, 2025",
      status: "upcoming"
    },
    {
      icon: Calendar,
      title: "Stage 2: In-Person Hackathon",
      description: "24-hour intensive hackathon at NMIET campus",
      date: "Sept 19-20, 2025",
      status: "upcoming"
    },
    {
      icon: Trophy,
      title: "Winner Announcement",
      description: "Awards ceremony and recognition",
      date: "Sept 20, 2025",
      status: "upcoming"
    }
  ];

  return (
    <section className="timeline-section section-padding">
      <div className="container">
        <h2 className="military-heading section-title text-center">
          Mission <span className="green-text">Timeline</span>
        </h2>

        <div className="timeline-simple">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-box fade-in-up ${event.status}`}>
              <div className="timeline-box-icon">
                <event.icon size={24} />
              </div>
              <div className="timeline-box-content">
                <h3 className="timeline-box-title military-heading">{event.title}</h3>
                <p className="timeline-box-description">{event.description}</p>
                <span className="timeline-box-date green-text">{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;