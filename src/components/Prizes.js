import React from 'react';

const Prizes = () => {
  return (
    <section id="prizes" className="prizes-section">
      <div className="prizes-container">
        <div className="prizes-header">
          <h2>🏆 Prizes & Recognition</h2>
          <p>Exciting rewards and opportunities await the most innovative minds at TechnoPHILIA 2026!</p>
        </div>
        
        <div className="prizes-content">
          <div className="prizes-benefits">
            <div className="benefits-box">
              <div className="prize-items">
                <div className="prize-item">
                  <span className="prize-icon">✨</span>
                  <div className="prize-text">
                    <h4>Exciting Prizes</h4>
                    <p>Money up to ₹15,000</p>
                  </div>
                </div>
                <div className="prize-item">
                  <span className="prize-icon">🎁</span>
                  <div className="prize-text">
                    <h4>Special Goodies</h4>
                    <p>For winners</p>
                  </div>
                </div>
                <div className="prize-item">
                  <span className="prize-icon">💼</span>
                  <div className="prize-text">
                    <h4>Internship Opportunity</h4>
                    <p>The winning team may get the internship opportunity</p>
                  </div>
                </div>
                <div className="prize-item">
                  <span className="prize-icon">📜</span>
                  <div className="prize-text">
                    <h4>Certificates</h4>
                    <p>For all participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Special Awards Section */}
          <div className="special-awards">
            <div className="section-header">
              <h3>⭐ Special Awards & Benefits</h3>
              <p>Additional recognition and opportunities for all participants</p>
            </div>
            
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-icon">💼</div>
                <h4>Internship Opportunities</h4>
                <p>Winning teams get priority consideration for internships at SUPISTA and partner companies</p>
              </div>
              
              <div className="award-card">
                <div className="award-icon">🎓</div>
                <h4>Participation Certificates</h4>
                <p>All participants receive official certificates from MIT Academy of Engineering</p>
              </div>
              
              <div className="award-card">
                <div className="award-icon">🤝</div>
                <h4>Industry Networking</h4>
                <p>Connect with industry professionals, judges, and fellow innovators</p>
              </div>
              
              <div className="award-card">
                <div className="award-icon">📚</div>
                <h4>Mentorship Program</h4>
                <p>Top performers get access to exclusive mentorship sessions with industry experts</p>
              </div>
              
              <div className="award-card">
                <div className="award-icon">🌟</div>
                <h4>Innovation Recognition</h4>
                <p>Outstanding projects may be featured in college publications and social media</p>
              </div>
              
              <div className="award-card">
                <div className="award-icon">🎁</div>
                <h4>Exclusive Goodies</h4>
                <p>All winners receive special merchandise and goodies from sponsors</p>
              </div>
            </div>
          </div>
          
          {/* Sponsor Highlight */}
          <div className="sponsor-highlight">
            <div className="sponsor-content">
              <h3>🤝 Proudly Sponsored by SUPISTA</h3>
              <p>SUPISTA, our esteemed sponsor, is committed to fostering innovation and providing real-world opportunities to emerging talent. Their support makes these exciting prizes and opportunities possible.</p>
              <div className="sponsor-benefits">
                <div className="benefit-item">
                  <span>💡</span>
                  <span>Industry Exposure</span>
                </div>
                <div className="benefit-item">
                  <span>🚀</span>
                  <span>Career Opportunities</span>
                </div>
                <div className="benefit-item">
                  <span>🎯</span>
                  <span>Skill Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
