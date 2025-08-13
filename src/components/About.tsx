import React from 'react';
import { Target, Shield, Zap, Users, Eye, Radio, AlertTriangle, UserCheck, Cpu, Lock, Bug, CloudCog, Network, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="background-video"
        >
          <source src="/trt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-ribbon">Mission Brief</div>
            <h2 className="military-heading section-title">About The <span className="green-text">Hackathon</span></h2>
            <p className="about-description">Design a <span className="green-text">scalable, secure, and intelligent digital ecosystem</span> that can assist the Indian Armed Forces in <span className="army-text">real-time surveillance, secure communication, threat detection, and soldier support</span> in high-risk zones.</p>

            <div className="about-badges">
              <span className="stat-chip"><Cpu size={16} /> AI-First</span>
              <span className="stat-chip"><Lock size={16} /> Zero-Trust Security</span>
              <span className="stat-chip"><Network size={16} /> Edge + Cloud</span>
              <span className="stat-chip"><Terminal size={16} /> Hacker Mindset</span>
            </div>

            <p className="about-inclusivity"><span className="green-text">Open to all colleges and universities</span> across India. Form your team and contribute to building tomorrow's defence technology.</p>
            
            <div className="about-features">
              <div className="feature-item fade-in-up">
                <Eye className="feature-icon army-text" />
                <h3>Real-time Surveillance</h3>
                <p>Advanced monitoring and threat detection systems</p>
              </div>
              <div className="feature-item fade-in-up">
                <Radio className="feature-icon army-text" />
                <h3>Secure Communication</h3>
                <p>Encrypted and protected military communications</p>
              </div>
              <div className="feature-item fade-in-up">
                <AlertTriangle className="feature-icon army-text" />
                <h3>Threat Detection</h3>
                <p>AI-powered early warning and response systems</p>
              </div>
              <div className="feature-item fade-in-up">
                <UserCheck className="feature-icon army-text" />
                <h3>Soldier Support</h3>
                <p>Real-time assistance for high-risk operations</p>
              </div>
            </div>

            <div className="intel-strip">
              <span>Encrypted Ops • Live Intel • Mentor Rounds • 24x7 Vigil</span>
            </div>

            <div className="spec-grid">
              <div className="spec-card">
                <Shield className="spec-icon" />
                <h4>Security First</h4>
                <p>Defense-grade encryption, access control, and audit trails.</p>
              </div>
              <div className="spec-card">
                <CloudCog className="spec-icon" />
                <h4>Scalable Stack</h4>
                <p>Edge inference with cloud orchestration for reliability.</p>
              </div>
              <div className="spec-card">
                <Bug className="spec-icon" />
                <h4>Resilience</h4>
                <p>Graceful degradation under adversarial and network stress.</p>
              </div>
              <div className="spec-card">
                <Zap className="spec-icon" />
                <h4>Real-time</h4>
                <p>Low-latency processing for mission-critical decisions.</p>
              </div>
            </div>
          </div>
          
          <div className="about-visuals">
            <div className="why-chosen-content">
              <h3 className="military-heading">
                Why We Chose <span className="green-text">This Topic</span>
              </h3>
              <p className="challenge-context">
                We chose this challenge because India's national security is at a crucial point, with rising tensions from certain neighboring countries and increasing threats from cross-border infiltration, terrorism, and cyber warfare.
              </p>
              
              <p className="challenge-need">
                Our Armed Forces need next-generation technology that not only reacts to threats but anticipates them. By building a secure, scalable, and intelligent defense ecosystem, we aim to:
              </p>
              
              <div className="objectives-list">
                <div className="objective-item">
                  <Shield className="objective-icon army-text" />
                  <div>
                    <h4>Strengthen Border Protection</h4>
                    <p>Detect and neutralize threats before they escalate</p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <Users className="objective-icon army-text" />
                  <div>
                    <h4>Empower Soldiers in the Field</h4>
                    <p>Provide real-time support in high-risk situations</p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <Target className="objective-icon army-text" />
                  <div>
                    <h4>Protect Sensitive Information</h4>
                    <p>Ensure communication remains secure against cyber espionage</p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <Zap className="objective-icon army-text" />
                  <div>
                    <h4>Respond Faster in Emergencies</h4>
                    <p>Reduce decision-making time with AI-powered insights</p>
                  </div>
                </div>
              </div>
              
              <p className="challenge-vision">
                In today's volatile geopolitical environment, technology is no longer an option but a necessity for safeguarding our nation. Our solution envisions giving the Indian Armed Forces a digital shield that complements their physical strength, ensuring the safety, sovereignty, and dignity of our country.
              </p>
              <div className="intel-strip subtle">
                <span>Operate • Adapt • Overcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);