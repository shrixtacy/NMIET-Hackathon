import React from 'react';
import { Users, Star, Heart, Code, Zap, Shield } from 'lucide-react';

const Team: React.FC = () => {
  const coreTeam = [
    {
      name: "Alex Rodriguez",
      role: "Lead Organizer & Technical Director",
      contribution: "Architected the entire hackathon framework, designed the AI-focused challenge themes, and coordinated with defense industry experts to ensure real-world relevance.",
      image: "/api/placeholder/150/150",
      skills: ["Event Management", "AI Strategy", "Defense Tech"]
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager & Student Liaison",
      contribution: "Managed all logistics, venue coordination, and student outreach. Established partnerships with colleges and handled the registration process for 500+ participants.",
      image: "/api/placeholder/150/150",
      skills: ["Operations", "Student Relations", "Logistics"]
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Technical Advisor & Mentor Coordinator",
      contribution: "Provided technical guidance on defense applications, curated the judging panel with industry experts, and designed the evaluation criteria for maximum real-world impact.",
      image: "/api/placeholder/150/150",
      skills: ["Defense Systems", "AI Research", "Mentorship"]
    }
  ];

  const volunteers = [
    "Ankit Patel", "Sneha Reddy", "Vikram Singh", "Meera Joshi", "Rohit Gupta",
    "Kavya Nair", "Arjun Mehta", "Pooja Agarwal", "Siddharth Rao", "Nisha Verma",
    "Karan Malhotra", "Riya Bansal", "Harsh Pandey", "Divya Iyer", "Amit Saxena",
    "Shreya Kapoor", "Varun Tiwari", "Aditi Bhatt", "Nikhil Jain", "Sakshi Dubey"
  ];

  return (
    <section className="team-page section-padding">
      {/* Hero Section */}
      <div className="team-hero">
        <div className="container">
          <h1 className="military-heading section-title">
            Meet Our <span className="green-text">Mission Command</span>
          </h1>
          <p className="team-subtitle">The dedicated team behind DefenseHack 2025</p>
          <p className="hero-description">
            From strategic planning to flawless execution, our team ensures every participant gets the best hackathon experience
          </p>
        </div>
      </div>

      <div className="container">
        {/* Core Team Section */}
        <section className="core-team-section">
          <div className="section-header">
            <Star className="section-icon" />
            <h2 className="section-title">Core Team</h2>
            <p className="section-description">The strategic minds who made DefenseHack 2025 possible</p>
          </div>

          <div className="core-team-grid">
            {coreTeam.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <Shield size={24} />
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <h4 className="member-role">{member.role}</h4>
                  <p className="member-contribution">{member.contribution}</p>
                  <div className="member-skills">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteers Section */}
        <section className="volunteers-section">
          <div className="section-header">
            <Heart className="section-icon" />
            <h2 className="section-title">Our Amazing Volunteers</h2>
            <p className="section-description">
              The backbone of our event - dedicated students and professionals who made everything run smoothly
            </p>
          </div>

          <div className="volunteers-content">
            <div className="volunteer-stats">
              <div className="stat-item">
                <Users size={32} />
                <div className="stat-info">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Volunteers</span>
                </div>
              </div>
              <div className="stat-item">
                <Code size={32} />
                <div className="stat-info">
                  <span className="stat-number">48</span>
                  <span className="stat-label">Hours of Support</span>
                </div>
              </div>
              <div className="stat-item">
                <Zap size={32} />
                <div className="stat-info">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Participants Helped</span>
                </div>
              </div>
            </div>

            <div className="volunteers-grid">
              {volunteers.map((volunteer, index) => (
                <div key={index} className="volunteer-card">
                  <div className="volunteer-avatar">
                    {volunteer.split(' ').map(name => name[0]).join('')}
                  </div>
                  <span className="volunteer-name">{volunteer}</span>
                </div>
              ))}
            </div>

            <div className="volunteer-appreciation">
              <h3>Special Thanks</h3>
              <p>
                To all our volunteers who worked tirelessly behind the scenes - from registration desk management 
                to technical support, from catering coordination to security assistance. Your dedication made 
                DefenseHack 2025 a memorable experience for everyone involved.
              </p>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="team-values-section">
          <div className="section-header">
            <Shield className="section-icon" />
            <h2 className="section-title">Our Mission Values</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <Code size={32} />
              <h4>Innovation First</h4>
              <p>We believe in pushing boundaries and encouraging creative solutions to real-world problems</p>
            </div>
            <div className="value-card">
              <Users size={32} />
              <h4>Inclusive Community</h4>
              <p>Creating an environment where every participant feels welcome and supported</p>
            </div>
            <div className="value-card">
              <Zap size={32} />
              <h4>Excellence in Execution</h4>
              <p>Delivering a world-class hackathon experience through meticulous planning and execution</p>
            </div>
            <div className="value-card">
              <Heart size={32} />
              <h4>Student-Centric</h4>
              <p>Every decision we make prioritizes the learning and growth of our participants</p>
            </div>
          </div>
        </section>

        <div className="team-cta">
          <h3>Want to Join Our Team?</h3>
          <p>We're always looking for passionate individuals to help organize future events</p>
          <a href="#contact" className="army-button">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Team;