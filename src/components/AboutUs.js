import React, { useState } from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mitaoe');
  const [activeYear, setActiveYear] = useState('2024');

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
          <button 
            className={`tab-btn ${activeTab === 'supista' ? 'active' : ''}`}
            onClick={() => setActiveTab('supista')}
          >
            SUPISTA
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
                <h3>Glimpses of TechnoPHILIA</h3>
                <div className="year-buttons">
                  {['2024', '2023', '2021', '2019', '2018', '2017'].map(year => (
                    <button 
                      key={year}
                      className={`year-btn ${activeYear === year ? 'active' : ''}`}
                      onClick={() => setActiveYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
                {activeYear === '2024' && (
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
                )}
                {activeYear === '2017' && (
                  <div className="photo-gallery">
                    <div className="photo-item">
                      <img src="/photos/2017/1.png" alt="Inauguration 2017" />
                      <div className="photo-overlay">
                        <h4>Inauguration</h4>
                        <p>TechnoPHILIA 2017</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/2.png" alt="Inauguration 2017" />
                      <div className="photo-overlay">
                        <h4>Inauguration</h4>
                        <p>TechnoPHILIA 2017</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/4.png" alt="Judges with participants" />
                      <div className="photo-overlay">
                        <h4>Judges & Participants</h4>
                        <p>Paper presentation & project competition</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/5.png" alt="Judges with participants" />
                      <div className="photo-overlay">
                        <h4>Judges & Participants</h4>
                        <p>Paper presentation & project competition</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/6.png" alt="Faculty and participants" />
                      <div className="photo-overlay">
                        <h4>Faculty & Participants</h4>
                        <p>Mr. Ravi Maknikar, Mrs. Shilpa Rudrawar, Mr. Pramod Ubare, Mr. Sagar Shinde</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/7.png" alt="Felicitation ceremony" />
                      <div className="photo-overlay">
                        <h4>Felicitation Ceremony</h4>
                        <p>Dr. M. D. Goudar felicitating Mr. Rupesh Gupta, Managing Director, Klug Avelon</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/8.png" alt="Panel of judges" />
                      <div className="photo-overlay">
                        <h4>Panel of Judges</h4>
                        <p>Dr. M. D. Goudar, Mr. Sandeep Shroff, Mr. Rupesh Gupta, Mr. Ravi Maknikar, Mr. Bhushan Pawar</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2017/new.png" alt="Prize winners" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥈 2nd Place</div>
                        <h4>Prize Winners</h4>
                        <p>Rameel Khan and Abhay Bhujbal</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeYear === '2018' && (
                  <div className="photo-gallery">
                    <div className="photo-item">
                      <img src="/photos/2018/1 (1).png" alt="Inauguration 2018" />
                      <div className="photo-overlay">
                        <h4>Inauguration</h4>
                        <p>TechnoPHILIA 2018</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (2).png" alt="Inauguration 2018" />
                      <div className="photo-overlay">
                        <h4>Inauguration</h4>
                        <p>TechnoPHILIA 2018</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (3).png" alt="Judges 2018" />
                      <div className="photo-overlay">
                        <h4>Judges of TechnoPHILIA 2018</h4>
                        <p>Mr. Amit Saxena, Mr. Aloukh Pawar, Mr. Ramani Iyer, Mr.Anand Iyer, Mr. Vinod Joshi, Mr. Sandeep Shroff, Mrs. Shilpa Rudrawar</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/18.png" alt="Paper presentation judges" />
                      <div className="photo-overlay">
                        <h4>Judges of Paper Presentation</h4>
                        <p>Mr. Sandeep Shroff, Mr. Vinod Joshi, Mr. Ramani Iyer</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (4).png" alt="Participant presenting" />
                      <div className="photo-overlay">
                        <h4>Paper Presentation</h4>
                        <p>Participant presenting paper</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (5).png" alt="Participant presenting" />
                      <div className="photo-overlay">
                        <h4>Paper Presentation</h4>
                        <p>Participant presenting paper</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (6).png" alt="Skype presentation" />
                      <div className="photo-overlay">
                        <h4>Skype Presentation</h4>
                        <p>Remote presentation session</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (7).png" alt="Project evaluation" />
                      <div className="photo-overlay">
                        <h4>Project Competition Judges</h4>
                        <p>Mr. Amit Saxena, Mr. Aloukh Pawar, Mr.Anand Iyer</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (8).png" alt="Project demonstration" />
                      <div className="photo-overlay">
                        <h4>Project Demonstration</h4>
                        <p>Participants demonstrating their project</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (9).png" alt="Project demonstration" />
                      <div className="photo-overlay">
                        <h4>Project Demonstration</h4>
                        <p>Participants demonstrating their project</p>
                      </div>
                    </div>
                    
                    <div className="photo-item winner">
                      <img src="/photos/2018/1 (10).png" alt="1st prize winner" />
                      <div className="photo-overlay">
                        <div className="award-badge">🏆 1st Place</div>
                        <h4>Project Competition Winner</h4>
                        <p>1st Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item runner-up">
                      <img src="/photos/2018/1 (11).png" alt="2nd prize winner" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥈 2nd Place</div>
                        <h4>Project Competition Winner</h4>
                        <p>2nd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item third-place">
                      <img src="/photos/2018/1 (12).png" alt="3rd prize winner" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥉 3rd Place</div>
                        <h4>Project Competition Winner</h4>
                        <p>3rd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (13).png" alt="All participants" />
                      <div className="photo-overlay">
                        <h4>Group Photo</h4>
                        <p>All participants, Judges and team TechnoPHILIA</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2018/1 (14).png" alt="All participants" />
                      <div className="photo-overlay">
                        <h4>Group Photo</h4>
                        <p>All participants, Judges and team TechnoPHILIA</p>
                      </div>
                    </div>
                    
                    <div className="photo-item winner">
                      <img src="/photos/2018/1 (15).png" alt="Paper presentation 1st prize" />
                      <div className="photo-overlay">
                        <div className="award-badge">🏆 1st Place</div>
                        <h4>Paper Presentation Winner</h4>
                        <p>1st Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item runner-up">
                      <img src="/photos/2018/1 (16).png" alt="Paper presentation 2nd prize" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥈 2nd Place</div>
                        <h4>Paper Presentation Winner</h4>
                        <p>2nd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item third-place">
                      <img src="/photos/2018/1 (17).png" alt="Paper presentation 3rd prize" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥉 3rd Place</div>
                        <h4>Paper Presentation Winner</h4>
                        <p>3rd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item coordinators">
                      <img src="/photos/2018/19.png" alt="Team TechnoPHILIA" />
                      <div className="photo-overlay">
                        <div className="award-badge">👥 Team</div>
                        <h4>Team TechnoPHILIA</h4>
                        <p>Event organizers and coordinators</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeYear === '2019' && (
                  <div className="photo-gallery">
                    <div className="photo-item">
                      <img src="/photos/2019/1 (1).png" alt="Inauguration 2019" />
                      <div className="photo-overlay">
                        <h4>Inauguration</h4>
                        <p>TechnoPHILIA 2019</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (2).png" alt="Inauguration 2019" />
                      <div className="photo-overlay">
                        <h4>Inauguration</h4>
                        <p>TechnoPHILIA 2019</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (3).png" alt="Judges 2019" />
                      <div className="photo-overlay">
                        <h4>Judges of TechnoPHILIA 2019</h4>
                        <p>Mr. Ravi Maknikar, Mr. Ramani Iyer, Mr. Vinod Joshi, Mr. Milind Thuse with Team TechnoPHILIA</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (4).png" alt="Paper presentation judges" />
                      <div className="photo-overlay">
                        <h4>Judges of Paper Presentation</h4>
                        <p>Mr. Ravi Maknikar, Mr. Ramani Iyer</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (5).png" alt="Participant presenting" />
                      <div className="photo-overlay">
                        <h4>Paper Presentation</h4>
                        <p>Participant presenting paper</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (6).png" alt="Skype presentation" />
                      <div className="photo-overlay">
                        <h4>Skype Presentation</h4>
                        <p>Remote presentation session</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (7).png" alt="Skype presentation" />
                      <div className="photo-overlay">
                        <h4>Skype Presentation</h4>
                        <p>Remote presentation session</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (8).png" alt="Project demonstration" />
                      <div className="photo-overlay">
                        <h4>Project Demonstration</h4>
                        <p>Participants demonstrating their project to judge Mr. Milind Thuse</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (9).png" alt="Project demonstration" />
                      <div className="photo-overlay">
                        <h4>Project Demonstration</h4>
                        <p>Participants demonstrating their project to judge Mr. Vinod Joshi</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (10).png" alt="Project setup" />
                      <div className="photo-overlay">
                        <h4>Project Setup</h4>
                        <p>Participants with their project setup</p>
                      </div>
                    </div>
                    
                    <div className="photo-item winner">
                      <img src="/photos/2019/1 (11).png" alt="1st prize winner" />
                      <div className="photo-overlay">
                        <div className="award-badge">🏆 1st Place</div>
                        <h4>Project Competition Winner</h4>
                        <p>1st Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item runner-up">
                      <img src="/photos/2019/1 (12).png" alt="2nd prize winner" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥈 2nd Place</div>
                        <h4>Project Competition Winner</h4>
                        <p>2nd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item third-place">
                      <img src="/photos/2019/1 (13).png" alt="3rd prize winner" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥉 3rd Place</div>
                        <h4>Project Competition Winner</h4>
                        <p>3rd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item participant">
                      <img src="/photos/2019/1 (14).png" alt="Consolation prize" />
                      <div className="photo-overlay">
                        <div className="award-badge">🎖️ Consolation</div>
                        <h4>Project Competition</h4>
                        <p>Consolation prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item winner">
                      <img src="/photos/2019/1 (15).png" alt="Paper presentation 1st prize" />
                      <div className="photo-overlay">
                        <div className="award-badge">🏆 1st Place</div>
                        <h4>Paper Presentation Winner</h4>
                        <p>1st Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item third-place">
                      <img src="/photos/2019/1 (16).png" alt="Paper presentation 3rd prize" />
                      <div className="photo-overlay">
                        <div className="award-badge">🥉 3rd Place</div>
                        <h4>Paper Presentation Winner</h4>
                        <p>3rd Prize winner</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (17).png" alt="All participants" />
                      <div className="photo-overlay">
                        <h4>Group Photo</h4>
                        <p>All participants, Judges and team TechnoPHILIA</p>
                      </div>
                    </div>
                    
                    <div className="photo-item">
                      <img src="/photos/2019/1 (18).png" alt="All participants" />
                      <div className="photo-overlay">
                        <h4>Group Photo</h4>
                        <p>All participants, Judges and team TechnoPHILIA</p>
                      </div>
                    </div>
                    
                    <div className="photo-item coordinators">
                      <img src="/photos/2019/1 (19).png" alt="Team TechnoPHILIA" />
                      <div className="photo-overlay">
                        <div className="award-badge">👥 Team</div>
                        <h4>Team TechnoPHILIA</h4>
                        <p>Event organizers and coordinators</p>
                      </div>
                    </div>
                    
                    <div className="photo-item coordinators">
                      <img src="/photos/2019/1(20).png" alt="Team TechnoPHILIA" />
                      <div className="photo-overlay">
                        <div className="award-badge">👥 Team</div>
                        <h4>Team TechnoPHILIA</h4>
                        <p>Event organizers and coordinators</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeYear === '2021' && (
                  <div className="photo-gallery">
                    {Array.from({length: 21}, (_, i) => i + 1).map(num => (
                      <div key={num} className="photo-item">
                        <img src={`/photos/2021/${num}.png`} alt={`TechnoPHILIA 2021 - ${num}`} />
                        <div className="photo-overlay">
                          <h4>TechnoPHILIA 2021</h4>
                          <p>Event Photo {num}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeYear === '2023' && (
                  <div className="photo-gallery">
                    {Array.from({length: 5}, (_, i) => i + 1).map(num => (
                      <div key={num} className="photo-item">
                        <img src={`/photos/2023/${num}.jpeg`} alt={`TechnoPHILIA 2023 - ${num}`} />
                        <div className="photo-overlay">
                          <h4>TechnoPHILIA 2023</h4>
                          <p>Event Photo {num}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeYear !== '2024' && activeYear !== '2017' && activeYear !== '2018' && activeYear !== '2019' && activeYear !== '2021' && activeYear !== '2023' && (
                  <div className="coming-soon">
                    <p>Photos for {activeYear} will be added soon!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'supista' && (
            <div className="supista-content">
              <div className="about-intro">
                <h3>SUPISTA – Our Proud Sponsor</h3>
                <p>
                  A major highlight of Technophilia'26 is the support of our sponsor SUPISTA — a company dedicated to empowering businesses through data-driven insights and innovation. Supista believes that data is the key to unlocking growth, and through advanced business intelligence solutions, they help organisations convert complex data into meaningful insights and smarter decisions.
                </p>
                <p>
                  By supporting Technophilia'26, SUPISTA actively encourages young innovators to explore emerging technologies, build impactful projects, and present research-driven ideas that can shape the future. Their vision strongly aligns with the spirit of Technophilia — Ignite. Innovate. Inspire.
                </p>
                <p>
                  With this collaboration, Technophilia'26 becomes more than just a competition — it becomes a platform where students connect with real-world innovation and industry-driven thinking.
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
