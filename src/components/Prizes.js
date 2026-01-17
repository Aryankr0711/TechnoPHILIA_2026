import React from 'react';

const Prizes = () => {
  return (
    <section id="prizes" className="prizes-section">
      <div className="prizes-container">
        <div className="prizes-header">
          <h2>🏆 Prizes & Recognition</h2>
          <p>Exciting rewards and opportunities await the most innovative minds at TechnoPHILIA 2026!</p>
          <div className="total-prize-pool">
            <span className="prize-amount">Total Prize Pool: ₹32,000+</span>
          </div>
        </div>
        
        <div className="prizes-content">
          {/* Project Competition Section */}
          <div className="competition-section">
            <div className="section-header">
              <h3>🚀 Project Competition</h3>
              <p>Showcase your innovative projects and compete for exciting prizes</p>
            </div>
            
            <div className="prize-tiers">
              <div className="prize-tier first-place">
                <div className="tier-header">
                  <div className="rank-badge">🥇</div>
                  <h4>First Prize</h4>
                </div>
                <div className="prize-amount">₹10,000</div>
                <div className="prize-details">
                  <ul>
                    <li>Cash Prize: ₹10,000</li>
                    <li>Winner's Trophy</li>
                    <li>Certificate of Excellence</li>
                    <li>Special Goodies Package</li>
                    <li>Internship Opportunity at SUPISTA</li>
                    <li>Mentorship Session with Industry Experts</li>
                  </ul>
                </div>
              </div>
              
              <div className="prize-tier second-place">
                <div className="tier-header">
                  <div className="rank-badge">🥈</div>
                  <h4>Second Prize</h4>
                </div>
                <div className="prize-amount">₹7,000</div>
                <div className="prize-details">
                  <ul>
                    <li>Cash Prize: ₹7,000</li>
                    <li>Runner-up Trophy</li>
                    <li>Certificate of Achievement</li>
                    <li>Goodies Package</li>
                    <li>Industry Networking Opportunity</li>
                  </ul>
                </div>
              </div>
              
              <div className="prize-tier third-place">
                <div className="tier-header">
                  <div className="rank-badge">🥉</div>
                  <h4>Third Prize</h4>
                </div>
                <div className="prize-amount">₹5,000</div>
                <div className="prize-details">
                  <ul>
                    <li>Cash Prize: ₹5,000</li>
                    <li>Third Place Trophy</li>
                    <li>Certificate of Recognition</li>
                    <li>Goodies Package</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Paper Presentation Section */}
          <div className="competition-section">
            <div className="section-header">
              <h3>📄 Paper Presentation</h3>
              <p>Present your research ideas and technical innovations</p>
            </div>
            
            <div className="prize-tiers">
              <div className="prize-tier first-place">
                <div className="tier-header">
                  <div className="rank-badge">🥇</div>
                  <h4>First Prize</h4>
                </div>
                <div className="prize-amount">₹3,000</div>
                <div className="prize-details">
                  <ul>
                    <li>Cash Prize: ₹3,000</li>
                    <li>Best Paper Award</li>
                    <li>Certificate of Excellence</li>
                    <li>Publication Opportunity</li>
                  </ul>
                </div>
              </div>
              
              <div className="prize-tier second-place">
                <div className="tier-header">
                  <div className="rank-badge">🥈</div>
                  <h4>Second Prize</h4>
                </div>
                <div className="prize-amount">₹2,000</div>
                <div className="prize-details">
                  <ul>
                    <li>Cash Prize: ₹2,000</li>
                    <li>Certificate of Achievement</li>
                    <li>Research Recognition</li>
                  </ul>
                </div>
              </div>
              
              <div className="prize-tier third-place">
                <div className="tier-header">
                  <div className="rank-badge">🥉</div>
                  <h4>Third Prize</h4>
                </div>
                <div className="prize-amount">₹1,000</div>
                <div className="prize-details">
                  <ul>
                    <li>Cash Prize: ₹1,000</li>
                    <li>Certificate of Recognition</li>
                  </ul>
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
