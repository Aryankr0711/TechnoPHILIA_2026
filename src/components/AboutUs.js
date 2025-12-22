import React, { useState } from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mitaoe');

  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Us</h2>
        </div>

        <div className="about-tabs">
          <button 
            className={`tab-btn ${activeTab === 'mitaoe' ? 'active' : ''}`}
            onClick={() => setActiveTab('mitaoe')}
          >
            MITAOE
          </button>
          <button 
            className={`tab-btn ${activeTab === 'technophilia' ? 'active' : ''}`}
            onClick={() => setActiveTab('technophilia')}
          >
            TechnoPHILIA
          </button>
        </div>

        <div className="about-content">
          {activeTab === 'mitaoe' && (
            <>
              <div className="about-intro">
            <p>
              MIT Academy of Engineering (MITAOE) is a premier engineering institute located in Alandi (D), Pune, Maharashtra, India. The institute is situated in a serene academic environment near the historic town of Alandi, approximately 25 km from Pune city, providing an ideal setting for focused learning and innovation.
            </p>

            <p>
              MITAOE is an autonomous institute affiliated with Savitribai Phule Pune University (SPPU) and is approved by the All India Council for Technical Education (AICTE). The autonomous status enables the institute to design industry-relevant curricula, adopt modern teaching methodologies, and continuously upgrade academic content in line with emerging technologies.
            </p>

            <p>
              The institute was established in 1999 under the MAEER's MIT Group of Institutions, with a vision to develop competent engineers who are technically sound, ethically responsible, and socially aware.
            </p>
              </div>

              <div className="academic-programs">
            <h3>Academic Programs Offered</h3>
            <p>
              MITAOE offers a wide range of undergraduate and postgraduate engineering programs, designed to meet current industry and research demands:
            </p>

                <div className="programs-section">
              <h4>Undergraduate (B.Tech) Programs</h4>
                  <div className="programs-grid">
                    <div className="program-item">Computer Engineering</div>
                    <div className="program-item">Information Technology</div>
                    <div className="program-item">Electronics & Telecommunication Engineering</div>
                    <div className="program-item">Mechanical Engineering</div>
                    <div className="program-item">Civil Engineering</div>
                    <div className="program-item">Electrical Engineering</div>
                    <div className="program-item">Artificial Intelligence & Data Science</div>
                  </div>
                </div>
              </div>

              <div className="vision-mission">
            <h3>MITAOE Mission & Vision</h3>

                <div className="vision-box">
              <h4>VISION</h4>
              <p>To be a new age learning center for holistic development of students into professional engineers, to cater to the changing needs of techno-society.</p>
                </div>

                <div className="mission-box">
              <h4>MISSION</h4>
              <ul>
                    <li>Providing new age infrastructural facilities blended with skill-based curriculum and activity based pedagogical approaches to develop competitive engineering professionals to solve real world problems.</li>
                    <li>Preparing students for lifelong learning by transforming educational practices.</li>
                    <li>Promoting an ethical and moral values by involving students into community services.</li>
                    <li>Inculcating an entrepreneurship and managerial skills by strengthening industry institute interaction.</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'technophilia' && (
            <div className="technophilia-content">
              <div className="about-intro">
                <h3>TechnoPHILIA 2026 – Conference Overview</h3>
                <p>
                  TechnoPHILIA 2026 is a national-level technical conference organized by the SPARK Club, School of Electronics & Telecommunication Engineering, MIT Academy of Engineering (MITAOE), Alandi, Pune.
                </p>
                <p>
                  The event continues the legacy of TechnoPHILIA as a flagship annual technical conference, and 2026 marks the 9th edition of the TechnoPHILIA conference series.
                </p>
              </div>

              <div className="theme-vision">
                <h3>Theme and Vision</h3>
                <div className="theme-box">
                  <h4>Theme: Ignite. Innovate. Inspire.</h4>
                  <p>The conference aims to:</p>
                  <ul>
                    <li>Encourage innovation and creativity among young engineers</li>
                    <li>Provide a national platform for showcasing technical projects and research ideas</li>
                    <li>Promote interaction between students, faculty, and industry experts</li>
                    <li>Expose participants to emerging trends in technology and engineering</li>
                  </ul>
                </div>
              </div>

              <div className="participation-benefits">
                <h3>Participation Benefits</h3>
                <div className="benefits-box">
                  <h4>Participants of TechnoPHILIA 2026 will receive:</h4>
                  <ul>
                    <li>Opportunity to present projects to a national audience</li>
                    <li>Exciting prizes worth up to ₹15,000</li>
                    <li>Certificates for all participants</li>
                    <li>Networking with industry professionals, faculty, and peers</li>
                    <li>Exposure to latest technological advancements</li>
                  </ul>
                </div>
              </div>

              <div className="glimpses-section">
                <h3>Glimpses of TechnoPHILIA 2024</h3>
                <div className="photo-gallery">
                  <div className="photo-item winner">
                    <img src="/photos/photo1.jpeg" alt="Winner Team" />
                    <div className="photo-overlay">
                      <div className="award-badge">🏆 1st Place</div>
                      <h4>New Invention Innovators</h4>
                      <p>Automatic Abdominal Retractor for Surgery</p>
                    </div>
                  </div>
                  
                  <div className="photo-item runner-up">
                    <img src="/photos/photo2.jpeg" alt="2nd Runner Up" />
                    <div className="photo-overlay">
                      <div className="award-badge">🥈 2nd Place</div>
                      <h4>Team MESWCOE</h4>
                      <p>Design and Development of Customised Battery Pack with PCM Cooling Arrangement</p>
                    </div>
                  </div>
                  
                  <div className="photo-item third-place">
                    <img src="/photos/photo3.jpeg" alt="3rd Runner Up" />
                    <div className="photo-overlay">
                      <div className="award-badge">🥉 3rd Place</div>
                      <h4>PVG</h4>
                      <p>Multipurpose Agriculture Rover</p>
                    </div>
                  </div>
                  
                  <div className="photo-item participant">
                    <img src="/photos/photo4.jpeg" alt="Participant" />
                    <div className="photo-overlay">
                      <div className="award-badge">🎖️ Participant</div>
                      <h4>BIOCREW</h4>
                      <p>Fire Resistant Botanic Resin Composite for Household Buildings</p>
                    </div>
                  </div>
                  
                  <div className="photo-item participant">
                    <img src="/photos/photo5.jpeg" alt="Participant" />
                    <div className="photo-overlay">
                      <div className="award-badge">🎖️ Participant</div>
                      <h4>Retro_Active</h4>
                      <p>Waste Classification and Management using Deep Learning</p>
                    </div>
                  </div>
                  
                  <div className="photo-item participant">
                    <img src="/photos/photo7.jpeg" alt="Participant" />
                    <div className="photo-overlay">
                      <div className="award-badge">🎖️ Participant</div>
                      <h4>VLSI Developers</h4>
                      <p>Design of Low Power and High Speed Generic Reversible BCD Adder on FPGA</p>
                    </div>
                  </div>
                  
                  <div className="photo-item participant last-participant">
                    <img src="/photos/photo9.jpeg" alt="Participant" />
                    <div className="photo-overlay">
                      <div className="award-badge">🎖️ Participant</div>
                      <h4>SKYFLYERS</h4>
                      <p>RISAT-1 Satellite Re-entry Prediction and Simulation</p>
                    </div>
                  </div>
                  
                  <div className="photo-item coordinators">
                    <img src="/photos/photo8_team.jpeg" alt="Team Coordinators" />
                    <div className="photo-overlay">
                      <div className="award-badge">👥 Coordinators</div>
                      <h4>TechnoPHILIA 2024 Team</h4>
                      <p>Event Coordinators & Organizers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
