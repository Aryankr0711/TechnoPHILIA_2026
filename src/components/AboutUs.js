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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
