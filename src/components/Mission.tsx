import React from 'react';
import { Shield, Target, Cpu, Users, AlertTriangle, Zap, CheckCircle2, Layers, BookOpen, Award, Clock, MapPin } from 'lucide-react';
import '../styles/mission.css';

const Mission: React.FC = () => {
  return (
    <div className="mission-page">
      {/* Hero Section */}
      <div className="mission-hero">
        <div className="container">
          <h1>
            Mission Briefing: <span style={{color: '#9ACD32'}}>DefenseHack 2025</span>
          </h1>
          <p className="mission-subtitle">AI for Armed Forces - A National Security Innovation Challenge</p>
          <div className="mission-classification">
            <Shield size={20} />
            <span>CLASSIFICATION: OPEN SOURCE INNOVATION</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Problem Statement */}
        <section className="mission-section">
          <div className="section-header">
            <Target className="section-icon" />
            <h2 className="section-title">Problem Statement</h2>
          </div>
          <div className="content-card">
            <div className="problem-overview">
              <h3>The Challenge</h3>
              <p className="problem-description">
                In an era of evolving security threats and technological advancement, the Indian Armed Forces require 
                cutting-edge digital solutions to maintain operational superiority. Traditional defense systems face 
                challenges in real-time data processing, secure communication, threat assessment, and soldier support 
                in high-risk environments.
              </p>
              
              <div className="challenge-stats">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Surveillance Requirement</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Border Checkpoints</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Service Branches</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Innovation Potential</span>
                </div>
              </div>
            </div>

            <div className="critical-areas">
              <h3 style={{color: '#9ACD32', marginTop: '40px'}}>Critical Areas Requiring Innovation</h3>
              <div className="areas-grid">
                <div className="area-card">
                  <Shield size={40} />
                  <h4>Real-time Surveillance</h4>
                  <p>Advanced monitoring systems for border security, threat detection, and situational awareness using AI-powered analytics.</p>
                </div>
                <div className="area-card">
                  <Users size={40} />
                  <h4>Secure Communication</h4>
                  <p>Encrypted, reliable communication networks that ensure seamless coordination between units and command centers.</p>
                </div>
                <div className="area-card">
                  <AlertTriangle size={40} />
                  <h4>Threat Detection</h4>
                  <p>Intelligent systems for early warning, anomaly detection, and predictive threat assessment using machine learning.</p>
                </div>
                <div className="area-card">
                  <Cpu size={40} />
                  <h4>Soldier Support</h4>
                  <p>Digital assistance for personnel in high-risk zones including navigation, health monitoring, and tactical support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Objectives */}
        <section className="mission-section">
          <div className="section-header">
            <Zap className="section-icon" />
            <h2 className="section-title">Mission Objectives</h2>
          </div>
          <div className="content-card">
            <div className="primary-objective">
              <h3 style={{color: '#9ACD32', fontSize: '22px'}}>Primary Mission</h3>
              <p className="problem-description">
                Design and develop a <strong style={{color: '#9ACD32'}}>scalable, secure, and intelligent digital ecosystem</strong> that can 
                revolutionize how the Indian Armed Forces operate, communicate, and respond to threats in the modern battlefield.
              </p>
            </div>

            <div className="secondary-objectives">
              <h3 style={{color: '#9ACD32', fontSize: '20px', marginTop: '30px'}}>Secondary Objectives</h3>
              <div className="objectives-list">
                <div className="objective-item">
                  <CheckCircle2 size={20} />
                  <span>Enhance operational efficiency through AI-driven automation</span>
                </div>
                <div className="objective-item">
                  <CheckCircle2 size={20} />
                  <span>Improve decision-making with real-time data analytics</span>
                </div>
                <div className="objective-item">
                  <CheckCircle2 size={20} />
                  <span>Strengthen national security through innovative technology</span>
                </div>
                <div className="objective-item">
                  <CheckCircle2 size={20} />
                  <span>Create cost-effective solutions for defense applications</span>
                </div>
                <div className="objective-item">
                  <CheckCircle2 size={20} />
                  <span>Foster collaboration between academia and defense sector</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Problem Analysis */}
        <section className="mission-section">
          <div className="section-header">
            <AlertTriangle className="section-icon" />
            <h2 className="section-title">Deep Dive: Problem Analysis</h2>
          </div>
          <div className="content-card">
            <div className="problem-analysis">
              <h3 style={{color: '#9ACD32', fontSize: '22px', marginBottom: '20px'}}>The Current Defense Landscape</h3>
              <p className="problem-description">
                India's defense infrastructure spans across diverse terrains, from the icy heights of Siachen to the dense forests of the Northeast, 
                from the vast deserts of Rajasthan to the extensive coastlines of the Arabian Sea and Bay of Bengal. Each of these environments 
                presents unique challenges that require sophisticated technological solutions. Traditional defense systems, while robust, often 
                operate in silos, creating gaps in communication, delayed response times, and inefficient resource allocation.
              </p>
              
              <p className="problem-description">
                The modern battlefield is no longer confined to physical territories. Cyber warfare, information warfare, and hybrid threats 
                have expanded the definition of national security. Our armed forces need to simultaneously monitor physical borders, cyber 
                infrastructure, communication networks, and intelligence feeds - all while ensuring the safety and effectiveness of our personnel 
                in high-risk operational zones.
              </p>

              <h3 style={{color: '#9ACD32', fontSize: '22px', marginTop: '40px', marginBottom: '20px'}}>Scale of the Challenge</h3>
              <p className="problem-description">
                Consider the magnitude: India has over 15,000 kilometers of land borders with seven countries, a coastline of 7,516 kilometers, 
                and an Exclusive Economic Zone of over 2 million square kilometers. Monitoring and securing this vast expanse requires coordination 
                between the Army, Navy, Air Force, Coast Guard, and various paramilitary forces. Each service has its own communication protocols, 
                data formats, and operational procedures, making seamless integration a complex challenge.
              </p>

              <p className="problem-description">
                The human element adds another layer of complexity. Our armed forces comprise over 1.4 million active personnel deployed across 
                diverse environments - from high-altitude posts where temperatures drop to -50°C to desert outposts where they soar above 50°C. 
                These brave men and women need real-time support, accurate intelligence, reliable communication, and immediate assistance during 
                emergencies. Current systems often fail to provide this level of integrated support.
              </p>

              <h3 style={{color: '#9ACD32', fontSize: '22px', marginTop: '40px', marginBottom: '20px'}}>Technological Gaps in Current Systems</h3>
              <p className="problem-description">
                Legacy defense systems were designed for a different era. Many still rely on manual processes, paper-based reporting, and 
                fragmented communication channels. While these systems have served us well, they are increasingly inadequate for modern threats. 
                Data silos prevent comprehensive threat assessment, delayed information flow hampers quick decision-making, and lack of predictive 
                capabilities means we're often reactive rather than proactive.
              </p>

              <p className="problem-description">
                Intelligence gathering and analysis, crucial for national security, often involves processing vast amounts of data from satellites, 
                drones, ground sensors, human intelligence, and open-source information. Current systems struggle to correlate this information 
                in real-time, identify patterns, predict threats, and provide actionable insights to field commanders and policy makers.
              </p>

              <p className="problem-description">
                Communication between different units, especially in remote areas, faces challenges due to terrain, weather conditions, and 
                infrastructure limitations. A patrol unit in Ladakh might lose contact with their base station, a naval vessel in the Indian 
                Ocean might face communication blackouts, or an air force squadron might need to coordinate with ground forces using incompatible 
                communication systems.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Problem Statement */}
        <section className="mission-section">
          <div className="section-header">
            <Target className="section-icon" />
            <h2 className="section-title">Why We Chose This Problem Statement</h2>
          </div>
          <div className="content-card">
            <div className="problem-justification">
              <h3 style={{color: '#9ACD32', fontSize: '22px', marginBottom: '20px'}}>National Security Imperative</h3>
              <p className="problem-description">
                In an increasingly connected world, national security has become more complex and multifaceted. The traditional approach of 
                having separate systems for different aspects of defense is no longer sufficient. We chose this problem statement because it 
                addresses the fundamental need for an integrated, intelligent defense ecosystem that can adapt to modern threats while supporting 
                our armed forces with cutting-edge technology.
              </p>

              <p className="problem-description">
                Recent global conflicts have demonstrated the critical importance of real-time intelligence, seamless communication, and rapid 
                response capabilities. Nations with advanced integrated defense systems have shown superior operational effectiveness, reduced 
                casualties, and better resource utilization. India, as a rising global power with complex security challenges, needs such 
                systems to maintain its strategic advantage and protect its interests.
              </p>

              <h3 style={{color: '#9ACD32', fontSize: '22px', marginTop: '40px', marginBottom: '20px'}}>The AI Revolution in Defense</h3>
              <p className="problem-description">
                Artificial Intelligence is revolutionizing every sector, and defense is no exception. AI can process vast amounts of data in 
                seconds, identify patterns invisible to human analysts, predict potential threats, and automate routine tasks to free up human 
                resources for critical decision-making. However, implementing AI in defense requires careful consideration of security, reliability, 
                and ethical implications.
              </p>

              <p className="problem-description">
                We chose to focus on AI for armed forces because it represents the next frontier in defense technology. Machine learning algorithms 
                can analyze satellite imagery to detect unusual activities, natural language processing can sift through intelligence reports to 
                identify threats, computer vision can enhance surveillance capabilities, and predictive analytics can help in strategic planning 
                and resource allocation.
              </p>

              <p className="problem-description">
                The timing is perfect for this transformation. India has a thriving AI ecosystem, world-class technical talent, and a government 
                committed to digital transformation. By focusing on AI for defense, we're not just solving current problems but preparing for 
                future challenges and opportunities.
              </p>

              <h3 style={{color: '#9ACD32', fontSize: '22px', marginTop: '40px', marginBottom: '20px'}}>Student Innovation Potential</h3>
              <p className="problem-description">
                We specifically chose this problem statement for a student hackathon because it offers the perfect balance of complexity and 
                accessibility. Students bring fresh perspectives, innovative thinking, and familiarity with cutting-edge technologies. They're 
                not constrained by existing systems or traditional approaches, allowing them to think outside the box and propose revolutionary 
                solutions.
              </p>

              <p className="problem-description">
                Defense technology has historically been developed by large corporations and government agencies. However, some of the most 
                innovative solutions in recent years have come from startups and individual innovators. By engaging students in defense 
                innovation, we're tapping into a vast pool of creativity and technical expertise that might otherwise remain untapped.
              </p>

              <p className="problem-description">
                This problem statement also serves an educational purpose. It exposes students to real-world challenges, helps them understand 
                the complexity of national security, and encourages them to think about how their technical skills can contribute to national 
                service. Many participants might discover a passion for defense technology and choose to pursue careers in this critical sector.
              </p>

              <h3 style={{color: '#9ACD32', fontSize: '22px', marginTop: '40px', marginBottom: '20px'}}>Societal Impact and Future Vision</h3>
              <p className="problem-description">
                The solutions developed for defense applications often have broader societal benefits. GPS technology, originally developed for 
                military use, now powers everything from ride-sharing apps to precision agriculture. Similarly, AI systems developed for defense 
                can be adapted for disaster management, border security, cybersecurity, and public safety.
              </p>

              <p className="problem-description">
                By choosing this problem statement, we're not just asking students to build defense solutions; we're asking them to envision 
                the future of national security. Their innovations today could become the foundation of India's defense capabilities tomorrow. 
                This hackathon is an investment in both technological advancement and human capital development.
              </p>

              <p className="problem-description">
                Furthermore, this problem statement aligns with India's broader strategic goals: becoming a global technology leader, achieving 
                self-reliance in defense (Atmanirbhar Bharat), and leveraging our demographic dividend. When students work on defense AI solutions, 
                they're contributing to all these national objectives while developing skills that will serve them throughout their careers.
              </p>

              <h3 style={{color: '#9ACD32', fontSize: '22px', marginTop: '40px', marginBottom: '20px'}}>The Urgency Factor</h3>
              <p className="problem-description">
                The geopolitical landscape is rapidly evolving, and India faces complex security challenges on multiple fronts. Climate change 
                is creating new types of conflicts, cyber threats are becoming more sophisticated, and emerging technologies are changing the 
                nature of warfare. We cannot afford to wait for solutions to emerge gradually; we need accelerated innovation.
              </p>

              <p className="problem-description">
                This hackathon represents an opportunity to fast-track innovation by bringing together diverse minds to work intensively on 
                critical problems. The 48-hour format creates urgency and forces participants to focus on practical, implementable solutions 
                rather than theoretical concepts. The competitive environment encourages participants to push their limits and think creatively 
                under pressure - skills that are essential in both technology development and defense operations.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Areas */}
        <section className="mission-section">
          <div className="section-header">
            <Cpu className="section-icon" />
            <h2 className="section-title">Innovation Focus Areas</h2>
          </div>
          <div className="content-card">
            <div className="innovation-intro">
              <p style={{fontSize: '16px', color: '#cccccc', marginBottom: '30px'}}>Teams are encouraged to explore cutting-edge technologies and innovative approaches in these key areas:</p>
            </div>
            
            <div className="innovation-areas">
              <div className="innovation-area">
                <h4>Artificial Intelligence & Machine Learning</h4>
                <ul>
                  <li>Computer Vision for surveillance and reconnaissance</li>
                  <li>Natural Language Processing for intelligence analysis</li>
                  <li>Predictive analytics for threat assessment</li>
                  <li>Autonomous systems and robotics</li>
                </ul>
              </div>
              
              <div className="innovation-area">
                <h4>Cybersecurity & Encryption</h4>
                <ul>
                  <li>Quantum-resistant encryption methods</li>
                  <li>Blockchain for secure communications</li>
                  <li>Zero-trust security architectures</li>
                  <li>Biometric authentication systems</li>
                </ul>
              </div>
              
              <div className="innovation-area">
                <h4>IoT & Edge Computing</h4>
                <ul>
                  <li>Sensor networks for perimeter security</li>
                  <li>Edge AI for real-time processing</li>
                  <li>Drone swarm coordination</li>
                  <li>Wearable technology for soldiers</li>
                </ul>
              </div>
              
              <div className="innovation-area">
                <h4>Data Analytics & Visualization</h4>
                <ul>
                  <li>Real-time dashboards for command centers</li>
                  <li>Geospatial analysis and mapping</li>
                  <li>Pattern recognition in large datasets</li>
                  <li>Predictive maintenance systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mission-section">
          <div className="section-header">
            <Award className="section-icon" />
            <h2 className="section-title">Evaluation Criteria</h2>
          </div>
          <div className="content-card">
            <div className="criteria-intro">
              <p style={{fontSize: '16px', color: '#cccccc', marginBottom: '30px'}}>Solutions will be evaluated by a panel of defense experts, technology leaders, and academic professionals based on the following criteria:</p>
            </div>
            
            <div className="criteria-breakdown">
              <div className="criteria-item">
                <div className="criteria-weight">25%</div>
                <div className="criteria-details">
                  <h4>Innovation & Creativity</h4>
                  <p>Uniqueness of approach, creative problem-solving, and novel use of technology</p>
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
                  <p>Practicality, implementability, and technical soundness of the solution</p>
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
                  <p>Potential for actual deployment, societal benefit, and long-term value</p>
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

        {/* Success Stories & Inspiration */}
        <section className="mission-section">
          <div className="section-header">
            <BookOpen className="section-icon" />
            <h2 className="section-title">Inspiration & Success Stories</h2>
          </div>
          <div className="content-card">
            <div className="inspiration-intro">
              <p style={{fontSize: '16px', color: '#cccccc', marginBottom: '30px'}}>Draw inspiration from successful defense technology innovations and think about how your solution could make a similar impact:</p>
            </div>
            
            <div className="success-examples">
              <div className="example-card">
                <h4>Drone Technology</h4>
                <p>From surveillance to reconnaissance, drones have revolutionized modern warfare and border security operations.</p>
              </div>
              
              <div className="example-card">
                <h4>Satellite Communication</h4>
                <p>Secure, global communication networks enabling coordination across vast geographical areas.</p>
              </div>
              
              <div className="example-card">
                <h4>Cyber Defense Systems</h4>
                <p>AI-powered cybersecurity solutions protecting critical infrastructure from digital threats.</p>
              </div>
              
              <div className="example-card">
                <h4>Predictive Analytics</h4>
                <p>Machine learning systems that anticipate threats and optimize resource allocation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mission-cta-section">
          <div className="cta-content">
            <h3>Ready to Accept the Mission?</h3>
            <p>Join us in developing the next generation of defense technology solutions. Your innovation could help protect our nation and support our armed forces.</p>
            
            <div className="cta-buttons">
              <a href="https://forms.gle/k9WmRjaxUubhgcPH9" target="_blank" rel="noopener noreferrer" className="army-button">
                <Shield size={20} />
                Register Your Team
              </a>
              <a href="/details" className="learn-more-btn">
                <BookOpen size={16} />
                View Full Details
              </a>
            </div>
            
            <div className="mission-stats">
              <div className="mission-stat">
                <Clock size={20} />
                <span>48 Hours to Change Defense Technology</span>
              </div>
              <div className="mission-stat">
                <Users size={20} />
                <span>Teams of 2-5 Innovators</span>
              </div>
              <div className="mission-stat">
                <MapPin size={20} />
                <span>NMIET, Bhubaneswar</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;