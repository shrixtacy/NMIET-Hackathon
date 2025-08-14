import React from 'react';
import { CheckCircle2, Presentation, MapPin, Clock, Shield, Cpu, Users, Sparkles, Layers, Video, Target, Award, BookOpen, AlertTriangle, Zap } from 'lucide-react';

const Details: React.FC = () => {
  return (
    <section className="details-page section-padding">
      {/* Hero Section */}
      <div className="details-hero">
        <div className="container">
          <h1 className="military-heading section-title">Guidelines & <span className="green-text">Information</span></h1>
          <p className="details-subtitle">Everything you need to know about DefenseHack 2025</p>
          <p className="hero-description">Complete guide for participation, rules and event information</p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <BookOpen size={20} />
              <span>Complete Guidelines</span>
            </div>
            <div className="highlight-item">
              <Clock size={20} />
              <span>24hrs Hackathon</span>
            </div>
            <div className="highlight-item">
              <Cpu size={20} />
              <span>AI-Powered</span>
            </div>
            <div className="highlight-item">
              <Zap size={20} />
              <span>VibeCoding Allowed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        {/* Registration Process */}
        <section className="registration-section">
          <div className="section-header">
            <Layers className="section-icon" />
            <h2 className="section-title">Registration Process</h2>
          </div>
          <div className="registration-content">
            <div className="registration-highlight">
              <Sparkles size={20} />
              <span>Free Registration - No Participation Fees</span>
            </div>
            <div className="registration-details">
              <div className="detail-card">
                <h4>Team Requirements</h4>
                <ul>
                  <li>Team Size: Minimum 2, Maximum 5 members</li>
                  <li>Cross-college teams allowed</li>
                  <li>All members must be current students</li>
                </ul>
              </div>
              <div className="detail-card">
                <h4>Required Information</h4>
                <ul>
                  <li>Team Name</li>
                  <li>College Name</li>
                  <li>Team Leader Details (Name, Branch, Year, Contact)</li>
                  <li>All Member Details (Name, Branch, Year)</li>
                  <li>10-slide Pitch Deck PDF</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="guidelines-section">
          <div className="section-header">
            <BookOpen className="section-icon" />
            <h2 className="section-title">Rules, Regulations & Guidelines</h2>
          </div>
          <div className="guidelines-content">
            <div className="guideline-category">
              <h4>General Rules</h4>
              <ul>
                <li>Teams must consist of 2-5 current college students</li>
                <li>All team members must be present during the hackathon</li>
                <li>Projects must be built during the hackathon period only</li>
                <li>Use of pre-existing code libraries and frameworks is allowed</li>
                <li>AI tools and VibeCoding are encouraged</li>
              </ul>
            </div>
            <div className="guideline-category">
              <h4>Technical Guidelines</h4>
              <ul>
                <li>Solutions must address the defense theme</li>
                <li>Code must be original work created during the event</li>
                <li>Open source tools and APIs are permitted</li>
                <li>Final submission must include working demo</li>
                <li>Source code must be submitted via provided platform</li>
              </ul>
            </div>
            <div className="guideline-category">
              <h4>Conduct & Ethics</h4>
              <ul>
                <li>Respect fellow participants and organizers</li>
                <li>No plagiarism or copying from existing solutions</li>
                <li>Maintain venue cleanliness and follow safety protocols</li>
                <li>Adhere to scheduled timelines and deadlines</li>
                <li>Report any issues to organizers immediately</li>
              </ul>
            </div>
            <div className="guideline-category">
              <h4>Disqualification Criteria</h4>
              <ul>
                <li>Violation of any rules or guidelines</li>
                <li>Inappropriate behavior or harassment</li>
                <li>Submission of pre-built solutions</li>
                <li>Missing mandatory presentations or deadlines</li>
                <li>Providing false information during registration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Shortlisting Criteria */}
        <section className="criteria-section">
          <div className="section-header">
            <CheckCircle2 className="section-icon" />
            <h2 className="section-title">Shortlisting Criteria</h2>
          </div>
          <div className="criteria-grid">
            <div className="criteria-card">
              <div className="criteria-score">25</div>
              <h4>Innovation & Creativity</h4>
              <p>Uniqueness of approach and creative problem-solving</p>
            </div>
            <div className="criteria-card">
              <div className="criteria-score">25</div>
              <h4>Technical Feasibility</h4>
              <p>Practicality and implementability of the solution</p>
            </div>
            <div className="criteria-card">
              <div className="criteria-score">25</div>
              <h4>Theme Relevance</h4>
              <p>Alignment with defense and armed forces requirements</p>
            </div>
            <div className="criteria-card">
              <div className="criteria-score">25</div>
              <h4>Real-world Impact</h4>
              <p>Potential for actual deployment and societal benefit</p>
            </div>
          </div>
          <div className="criteria-note">
            <strong>Total: 100 points (equally weighted)</strong>
          </div>
        </section>

        {/* Pitch Deck Guidelines */}
        <section className="pitch-section">
          <div className="section-header">
            <Presentation className="section-icon" />
            <h2 className="section-title">Pitch Deck Guidelines</h2>
          </div>
          <div className="pitch-content">
            <div className="pitch-requirement">
              <span className="pitch-number">10</span>
              <span>Maximum Slides</span>
            </div>
            <div className="pitch-structure">
              <h4>Required Slides:</h4>
              <div className="slide-list">
                <div className="slide-item">1. Problem Statement</div>
                <div className="slide-item">2. Proposed AI Solution</div>
                <div className="slide-item">3. Technical Architecture</div>
                <div className="slide-item">4. Expected Impact</div>
                <div className="slide-item">5. Scalability & Future Roadmap</div>
                <div className="slide-item">6-10. Supporting Details & Demo</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Evaluation Criteria */}
        <section className="detailed-criteria-section">
          <div className="section-header">
            <Award className="section-icon" />
            <h2 className="section-title">Final Evaluation Criteria</h2>
          </div>
          <div className="content-card">
            <div className="criteria-intro">
              <p style={{ fontSize: '16px', color: '#cccccc', marginBottom: '30px' }}>Solutions will be evaluated by a panel of defense experts, technology leaders and academic professionals based on the following criteria:</p>
            </div>

            <div className="criteria-breakdown">
              <div className="criteria-item">
                <div className="criteria-weight">25%</div>
                <div className="criteria-details">
                  <h4>Innovation & Creativity</h4>
                  <p>Uniqueness of approach, creative problem-solving and novel use of technology</p>
                  <ul>
                    <li>Original thinking and creative solutions</li>
                    <li>Novel application of existing technologies</li>
                    <li>Breakthrough innovations in defense technology</li>
                  </ul>
                </div>
              </div>

              <div className="criteria-item">
                <div className="criteria-weight">25%</div>
                <div className="criteria-details">
                  <h4>Technical Feasibility</h4>
                  <p>Practicality, implementability and technical soundness of the solution</p>
                  <ul>
                    <li>Technical architecture and design quality</li>
                    <li>Scalability and performance considerations</li>
                    <li>Implementation complexity and resource requirements</li>
                  </ul>
                </div>
              </div>

              <div className="criteria-item">
                <div className="criteria-weight">25%</div>
                <div className="criteria-details">
                  <h4>Defense Relevance</h4>
                  <p>Alignment with armed forces requirements and defense applications</p>
                  <ul>
                    <li>Understanding of defense challenges</li>
                    <li>Relevance to military operations</li>
                    <li>Potential for defense sector adoption</li>
                  </ul>
                </div>
              </div>

              <div className="criteria-item">
                <div className="criteria-weight">25%</div>
                <div className="criteria-details">
                  <h4>Real-world Impact</h4>
                  <p>Potential for actual deployment, societal benefit and long-term value</p>
                  <ul>
                    <li>Practical applicability and deployment potential</li>
                    <li>Societal and national security benefits</li>
                    <li>Sustainability and long-term viability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue & Logistics */}
        <section className="venue-section">
          <div className="section-header">
            <MapPin className="section-icon" />
            <h2 className="section-title">Venue & Logistics</h2>
          </div>
          <div className="venue-content">
            <div className="venue-info">
              <h3>NM Institute of Engineering & Technology</h3>
              <p>Bhubaneswar, Odisha</p>
            </div>
            <div className="logistics-grid">
              <div className="logistics-card">
                <h4>Provided</h4>
                <ul>
                  <li>High-speed Wi-Fi</li>
                  <li>Charging points per table</li>
                  <li>ID bands & welcome kits</li>
                  <li>Separate restrooms & rest areas</li>
                </ul>
              </div>
              <div className="logistics-card">
                <h4>Bring Your Own</h4>
                <ul>
                  <li>Laptop & charger</li>
                  <li>College ID card</li>
                  <li>Extension boards</li>
                  <li>Personal items & medications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Event Flow */}
        <section className="event-flow-section">
          <div className="section-header">
            <Clock className="section-icon" />
            <h2 className="section-title">Event Flow</h2>
          </div>

          <div className="mission-days">
            <div className="mission-day">
              <div className="day-header">
                <span className="day-badge">DAY 01</span>
                <h4 className="day-title">19th September 2025</h4>
              </div>

              <div className="operations-list">
                <div className="operation-item">
                  <span className="op-time">7:00 AM – 8:30 AM</span>
                  <span className="op-name">Arrival & Check-In</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">9:00 AM – 9:30 AM</span>
                  <span className="op-name">Registration Closes</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">10:00 AM – 10:45 AM</span>
                  <span className="op-name">Opening Briefing & Introductions</span>
                </div>
                <div className="operation-item critical">
                  <span className="op-time">11:00 AM</span>
                  <span className="op-name">Hackathon Officially Begins</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">1:30 PM – 2:30 PM</span>
                  <span className="op-name">Lunch Break</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">3:00 PM – 4:00 PM</span>
                  <span className="op-name">Interactive Session</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">7:00 PM – 8:00 PM</span>
                  <span className="op-name">Mid Evaluation</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">9:30 PM</span>
                  <span className="op-name">Dinner Break</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">10:30 PM</span>
                  <span className="op-name">Overnight Hacking Begins</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">12:00 AM – 6:00 AM</span>
                  <span className="op-name">Continuous Hacking</span>
                </div>
              </div>
            </div>

            <div className="mission-day">
              <div className="day-header">
                <span className="day-badge">DAY 02</span>
                <h4 className="day-title">20th September 2025</h4>
              </div>

              <div className="operations-list">
                <div className="operation-item">
                  <span className="op-time">7:00 AM – 8:00 AM</span>
                  <span className="op-name">Breakfast</span>
                </div>
                <div className="operation-item critical">
                  <span className="op-time">11:00 AM</span>
                  <span className="op-name">Submission Deadline (24hrs Complete)</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">10:00 AM – 1:00 PM</span>
                  <span className="op-name">Final Pitching & Judging</span>
                </div>
                <div className="operation-item">
                  <span className="op-time">1:30 PM – 2:30 PM</span>
                  <span className="op-name">Lunch Break</span>
                </div>
                <div className="operation-item critical">
                  <span className="op-time">3:30 PM – 4:30 PM</span>
                  <span className="op-name">Awards Ceremony</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Judging Notes */}
        <section className="judging-section">
          <div className="section-header">
            <Award className="section-icon" />
            <h2 className="section-title">Judging Notes</h2>
          </div>
          <div className="judging-content">
            <div className="judging-points">
              <div className="judging-item">
                <AlertTriangle size={20} />
                <span>No marks for pure coding complexity</span>
              </div>
              <div className="judging-item">
                <Zap size={20} />
                <span>AI & VibeCoding use is encouraged</span>
              </div>
              <div className="judging-item">
                <Target size={20} />
                <span>Focus on idea quality, feasibility and real-world impact</span>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes & Recognition */}
        <section className="prizes-section">
          <div className="section-header">
            <Award className="section-icon" />
            <h2 className="section-title">Prizes & Recognition</h2>
          </div>
          <div className="prizes-content">
            <div className="prize-info">
              <h4>Recognition & Rewards</h4>
              <p>Winners will receive certificates, recognition, and exciting prizes. Details will be announced during the event.</p>
            </div>
          </div>
        </section>

        {/* Final Notes */}
        <section className="final-notes-section">
          <div className="section-header">
            <BookOpen className="section-icon" />
            <h2 className="section-title">Final Notes</h2>
          </div>
          <div className="final-notes-content">
            <div className="note-item">
              <Sparkles size={20} />
              <span>This is a collaborative, innovative and learning-first hackathon</span>
            </div>
            <div className="note-item">
              <Shield size={20} />
              <span>Respect the schedule, venue rules and fellow participants</span>
            </div>
            <div className="note-item">
              <Users size={20} />
              <span>Target audience: College students and young innovators</span>
            </div>
          </div>
        </section>

        <div className="cta-banner">
          <a href="https://forms.gle/k9WmRjaxUubhgcPH9" target="_blank" rel="noopener noreferrer" className="army-button glow-effect">Register Your Team</a>
          <a href="#contact" className="learn-more-btn"><Video size={16} /> Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Details;