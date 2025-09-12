'use client';

import React from 'react';
import { Calendar, Users } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <div className="announcement-item">
          <Calendar size={16} />
          <span>Registrations are Officially Closed!</span>
        </div>
        <div className="announcement-separator">•</div>
        <div className="announcement-item">
          <Users size={16} />
          <span>Shortlist will be out on 15th Sept</span>
        </div>
        <div className="announcement-separator">•</div>
        <div className="announcement-item">
          <Calendar size={16} />
          <span>Registrations are Officially Closed!</span>
        </div>
        <div className="announcement-separator">•</div>
        <div className="announcement-item">
          <Users size={16} />
          <span>Shortlist will be out on 15th Sept</span>
        </div>
        <div className="announcement-separator">•</div>
        <div className="announcement-item">
          <Calendar size={16} />
          <span>Registrations are Officially Closed!</span>
        </div>
        <div className="announcement-separator">•</div>
        <div className="announcement-item">
          <Users size={16} />
          <span>Shortlist will be out on 15th Sept</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
