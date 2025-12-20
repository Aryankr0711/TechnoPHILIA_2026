import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About MIT Academy of Engineering (MITAOE)</h2>
        </div>

        <div className="about-content">
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
