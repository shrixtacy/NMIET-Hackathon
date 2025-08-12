import React from 'react';
import { Users, FileText, Mail, CheckCircle } from 'lucide-react';

const Registration = () => {
  const steps = [
    {
      icon: Users,
      title: "Team Formation",
      description: "Form a team of 2-5 members from any college/university"
    },
    {
      icon: FileText,
      title: "Online Form Submission",
      description: "Submit team details and optional pitch deck"
    },
    {
      icon: Mail,
      title: "Confirmation Email",
      description: "Receive registration ID and next steps"
    },
    {
      icon: CheckCircle,
      title: "Shortlisting Announcement",
      description: "Check results on website and via email"
    }
  ];

  return (
    <section id="registration" className="registration-section section-padding">
      <div className="spotlight-effect"></div>
      <div className="container">
        <div className="registration-content">
          <div className="registration-header text-center">
            <h2 className="military-heading section-title">
              Registration <span className="green-text">Process</span>
            </h2>
            <div className="free-badge">
              <span className="green-text">🎯 FREE FOR ALL</span> — No Registration Fee
            </div>
          </div>
          
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card fade-in-up glow-effect">
                <div className="step-number army-text">{String(index + 1).padStart(2, '0')}</div>
                <div className="step-icon green-text">
                  <step.icon size={32} />
                </div>
                <h3 className="step-title military-heading">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="registration-cta text-center">
            <a href="https://forms.gle/k9WmRjaxUubhgcPH9" target="_blank" rel="noopener noreferrer" className="army-button glow-effect">
              Register Now
            </a>
            <p className="registration-note">
              Registration opens <span className="green-text">January 15, 2025</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;