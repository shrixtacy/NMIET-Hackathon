import React from 'react';
import Image from 'next/image';
import { Users, Star, Heart, Code, Zap, Shield } from 'lucide-react';
import '../styles/team.css';

const Team: React.FC = () => {
  const coreTeam = [
    {
      name: "Shriyansh Das",
      role: "Event Mastermind",
      contribution: "The driving force behind every performance and guest session. From the first spotlight to the final applause, ensures every moment is perfectly timed, flawlessly executed, and unforgettable.",
      skills: ["Event Flow Architect", "Performance Maestro"],
      image: null
    },
    {
      name: "Om prakash Nahak",
      role: "Tech Maestro",
      contribution: "The go-to problem solver for every digital glitch. From backstage coordination to real-time tech fixes, ensures every team runs smoothly and no technical hiccup stands in the way of the event’s success.",
      skills: ["Tech Genius", "Support Wizard"],
      image: "/images/team/om-prakash-nahak.jpg"
    },
    {
      name: "Aman Singh",
      role: "Hospitality Hero",
      contribution: "The warm welcome behind every plate and cup. From curated menus to flawless service, ensures guests are treated with care, comfort, and a touch of elegance throughout the event.",
      skills: ["Guest Care Expert", "Food & Beverage Pro"],
      image: "/images/team/aman-singh.jpg"
    }
  ];

  const volunteers = [
    "Dhabala", "Dinesh Prusty", "Gulu", "Rajat", "Soumya Sahoo", "Swapnageet","Ananga", "Biswajit", "Dharma", "Jajati", "Prabhu Data", "Priyab Rata", "Subhransu Nayak", "Sudipta", "Tanmay", "Tanmay sahoo", "subham","Shakti Lenka", "Armaan Toppo","Om prakash Behera","Barharat", "Lingraj", "Litini", "Shayan", "Somanath", "Tulubati", "Ritam", "Aditya", "Achyuta", "Amitav", "Arman", "Asharim Khara", "Biswajit", "Gargota Panda", "Ipsita Khara", "Ritwik", "Sonalika Rout", "Swastika Behera"
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
                <div className="member-info">
                  <div className="member-photo-container">
                    {member.image ? (
                      <div className="member-photo">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={120}
                          height={120}
                          className="member-photo-img"
                        />
                      </div>
                    ) : (
                      <div className="member-avatar">
                        <Shield size={32} />
                        <span className="member-initials">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
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


      </div>
    </section>
  );
};

export default Team;