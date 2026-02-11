import React, { useState } from 'react';

const Registration = () => {
  const [activeTab, setActiveTab] = useState('register');

  return (
    <section id="registration" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Registration</h2>
        </div>

        <div className="about-tabs">
          <button 
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register Now
          </button>
          <button 
            className={`tab-btn ${activeTab === 'poster' ? 'active' : ''}`}
            onClick={() => setActiveTab('poster')}
          >
            Poster Guidelines
          </button>
          <button 
            className={`tab-btn ${activeTab === 'presentation' ? 'active' : ''}`}
            onClick={() => setActiveTab('presentation')}
          >
            Presentation Guidelines
          </button>
        </div>

        <div className="about-content">
          {activeTab === 'register' && (
            <div className="registration-content">
              <div className="about-intro">
                <h3>Register for TechnoPHILIA 2026</h3>
                <p>
                  Join us for the 9ᵗʰ edition of TechnoPHILIA, the premier national-level technical conference. 
                  Register now to showcase your innovative projects and compete for exciting prizes worth up to ₹15,000.
                </p>
                <p>
                  Registration is open from 1ˢᵗ February 2026 to 20ᵗʰ March 2026. Don't miss this opportunity to 
                  present your work to a national audience and network with industry professionals.
                </p>
              </div>

              <div className="registration-button-section">
                <div className="hero-buttons">
                  <button 
                    className="btn"
                    onClick={() => window.open('https://forms.gle/shMWauwRfedXerKk9', '_blank')}
                  >
                    Register Now
                  </button>
                  <button 
                    className="btn"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = `${process.env.PUBLIC_URL}/Brochure_TechnoPHILIA26_MITAOE.pdf`;
                      link.download = 'Brochure_TechnoPHILIA26_MITAOE.pdf';
                      link.click();
                    }}
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="tracks-section">
                <h3>Project and Poster Tracks</h3>
                <div className="theme-box">
                  <h4>Available Tracks for Both Project Competition and Poster Presentation</h4>
                  <ul>
                    <li>Track 1: Artificial Intelligence and Machine Learning</li>
                    <li>Track 2: Communication Systems and Networks</li>
                    <li>Track 3: Internet of Things (IoT) and Smart Systems</li>
                    <li>Track 4: Signal and Image Processing</li>
                    <li>Track 5: Embedded Systems and VLSI</li>
                    <li>Track 6: Cyber Security and Blockchain</li>
                    <li>Track 7: Data Science and Big Data Analytics</li>
                    <li>Track 8: Cloud, Edge, and Fog Computing</li>
                    <li>Track 9: 5G/6G Technologies</li>
                    <li>Track 10: Robotics and Intelligent Systems</li>
                    <li>Track 11: Power, Energy, and Sustainable Technologies</li>
                    <li>Track 12: Biomedical Signal Processing and Healthcare Technologies</li>
                  </ul>
                </div>
              </div>

              <div className="registration-info">
                <h3>Registration Details</h3>
                <div className="theme-box">
                  <h4>Important Information</h4>
                  <ul>
                    <li>Registration opens: 1ˢᵗ February 2026</li>
                    <li>Registration closes: 20ᵗʰ March 2026</li>
                    <li>Competition date: 27ᵗʰ March 2026</li>
                    <li>Venue: MIT Academy of Engineering, Alandi(D), Pune</li>
                    <li>Categories: Poster Presentation & Project Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'poster' && (
            <div className="guidelines-content">
              <div className="about-intro">
                <h3>9ᵗʰ National Level Technical Event- Project competition and Poster Presentation</h3>
                <h4>TechnoPHILIA'25</h4>
                <h4>Guidelines for Poster Completion</h4>
              </div>

              <div className="guidelines-section">
                <div className="theme-box">
                  <ol>
                    <li><strong>Attire:</strong> Participants should wear formal attire during their presentation.</li>
                    <li><strong>Identification:</strong> Participants must have valid ID proof available during the presentation.</li>
                    <li><strong>Team Size:</strong> Maximum of 4 members allowed in a team.</li>
                    <li><strong>Certificate:</strong> All participants who have registered and presented their work in competition will be eligible for certificates.</li>
                    <li><strong>Submission Deadline:</strong> The presentation must be submitted by the specified deadline, adhering to all formatting guidelines.</li>
                    <li><strong>Poster Format:</strong> Participants must prepare and submit a Poster with your own creativity. Ensure posters adhere to specified standards and dimensions (A3, 24" x 36").</li>
                    <li><strong>Content Organization:</strong> Clearly define sections such as introduction, research objectives, methodologies, results, and conclusions. Ensure a logical flow of information from one section to another.</li>
                    <li><strong>Font and Layout:</strong> Use legible fonts such as Arial or Times New Roman. Maintain consistency in font size and style throughout the poster. Avoid overcrowding; allow sufficient white space for readability.</li>
                    <li><strong>Visual Elements:</strong> Utilize visuals like charts, graphs, images, and diagrams to convey information effectively. Ensure all visuals are of high quality and relevant to the content.</li>
                    <li><strong>Text:</strong> Keep text concise and to the point; use bullet points or short paragraphs. Use clear and simple language understandable to a diverse audience.</li>
                    <li><strong>Title and Author Information:</strong> Include a clear and prominent title that reflects the content of the poster. List authors' names, affiliations, and contact information below the title.</li>
                    <li><strong>References:</strong> Provide a list of references for any cited sources or literature.</li>
                    <li><strong>Proofreading:</strong> Double-check for spelling and grammar errors. Have colleagues or mentors review the poster for clarity and coherence.</li>
                    <li><strong>Printing:</strong> Ensure the poster is printed on high-quality paper or material for optimal presentation.</li>
                    <li><strong>Presentation Delivery:</strong> Participants should be prepared to deliver their Poster confidently and professionally during the competition within 7 min.</li>
                  </ol>
                  <p><strong>Note:</strong> Adherence to these guidelines will ensure a smooth and professional presentation experience.</p>
                </div>

                <div className="benefits-box">
                  <h4>Judging Criteria:</h4>
                  <ul>
                    <li><strong>Innovation in Concept:</strong> Novelty and uniqueness of the presented concept (10 points)</li>
                    <li><strong>Creativity and Originality:</strong> Creative approach or perspective demonstrated in the presentation (10 points)</li>
                    <li><strong>Visual Impact and Design:</strong> Visual appeal and effectiveness in conveying information (10 points)</li>
                    <li><strong>Clarity of Message:</strong> Clear and understandable communication of key ideas and findings (10 points)</li>
                    <li><strong>Engaging Presentation and Explanation:</strong> Ability to captivate the audience and maintain interest throughout the presentation (10 points)</li>
                  </ul>
                </div>
                
                <div className="registration-button-section">
                  <div className="hero-buttons">
                    <button 
                      className="btn"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Sample_Poster_Format.pdf';
                        link.download = 'Sample_Poster_Format.pdf';
                        link.click();
                      }}
                    >
                      Sample Poster
                    </button>
                    <button 
                      className="btn"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/TechnoPHIILIA25_Guidelines for Poster Presentation.pdf';
                        link.download = 'TechnoPHIILIA25_Guidelines for Poster Presentation.pdf';
                        link.click();
                      }}
                    >
                      Download Guidelines
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'presentation' && (
            <div className="guidelines-content">
              <div className="about-intro">
                <h3>9th National Level Technical Event- Project competition and Poster Presentation</h3>
                <h4>TechnoPHILIA'25</h4>
                <h4>Guidelines for Project Completion</h4>
              </div>

              <div className="guidelines-section">
                <div className="theme-box">
                  <ol>
                    <li><strong>Attire:</strong> Participants should wear formal attire during their presentation.</li>
                    <li><strong>Identification:</strong> Participants must have valid ID proof available during the presentation.</li>
                    <li><strong>Team Size:</strong> Maximum of 4 members allowed in a team.</li>
                    <li><strong>Certificate:</strong> All participants who have registered and presented their work in competition will be eligible for certificates.</li>
                    <li><strong>Submission Deadline:</strong> The presentation must be submitted by the specified deadline, adhering to all formatting guidelines.</li>
                    <li><strong>Progress Requirement:</strong> Projects should be at least 70% completed in both hardware and software components. Projects should demonstrate significant progress in hardware and/or software elements, showcasing functionality and practicality.</li>
                    <li><strong>Presentation Format & Content Organization:</strong> Participants must prepare and submit a PowerPoint presentation according to the given format. The presentation should be well-structured, covering key aspects such as project objectives, methodology, implementation details, and preliminary results.</li>
                    <li><strong>Visual Clarity:</strong> Visual aids, diagrams, and illustrations should be used effectively to enhance understanding and clarity of the project.</li>
                    <li><strong>Technical Depth:</strong> The presentation should delve into technical aspects with sufficient depth, showcasing the complexity and sophistication of the project.</li>
                    <li><strong>Compliance:</strong> All submissions must comply with the specified format and guidelines provided by the organizers.</li>
                    <li><strong>Presentation Delivery:</strong> Participants should be prepared to deliver their presentations confidently and professionally during the competition within 7 min.</li>
                  </ol>
                  <p><strong>Note:</strong> We only provide certificates to participating students. We do not issue certificates to your project guides.</p>
                </div>

                <div className="benefits-box">
                  <h4>Judging Criteria:</h4>
                  <ul>
                    <li><strong>Innovation and Originality:</strong> Uniqueness and creativity of the project idea (10 points)</li>
                    <li><strong>Technical Complexity:</strong> Complexity of technical aspects involved in project development (10 points)</li>
                    <li><strong>Practical Application:</strong> Potential real-world application and impact of the project (10 points)</li>
                    <li><strong>Problem Solving:</strong> Effectiveness in addressing a specific problem or need (10 points)</li>
                    <li><strong>Methodology:</strong> Soundness of the approach and methodology used in project development (10 points)</li>
                    <li><strong>Implementation:</strong> Quality and functionality of the project's working model or prototype (10 points)</li>
                    <li><strong>Engaging Presentation and Explanation:</strong> Ability to captivate the audience and maintain interest throughout the presentation</li>
                  </ul>
                </div>
                
                <div className="registration-button-section">
                  <div className="hero-buttons">
                    <button 
                      className="btn"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/TechnoPHILIA25_Project PPT Templete.pptx.pptx';
                        link.download = 'TechnoPHILIA25_Project PPT Templete.pptx.pptx';
                        link.click();
                      }}
                    >
                      Sample Presentation
                    </button>
                    <button 
                      className="btn"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/TechnoPHIILIA25_Guidelines for Project Completion_OCR.pdf';
                        link.download = 'TechnoPHIILIA25_Guidelines for Project Completion_OCR.pdf';
                        link.click();
                      }}
                    >
                      Download Guidelines
                    </button>
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

export default Registration;