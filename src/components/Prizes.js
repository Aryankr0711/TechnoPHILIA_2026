import React from 'react';

const Prizes = () => {
  return (
    <section id="prizes" className="prizes-section">
      <div className="prizes-container">
        <div className="prizes-header">
          <h2>Prizes</h2>
          <p>Exciting rewards await the winners of TechnoPHILIA 2026</p>
        </div>

        <div className="prizes-content">
          <div className="prize-categories">
            <div className="prize-card winner">
              <div className="prize-position">🏆 1st Prize</div>
              <div className="prize-amount">₹10,000</div>
              <div className="prize-description">Certificate of Excellence + Trophy</div>
            </div>

            <div className="prize-card runner-up">
              <div className="prize-position">🥈 2nd Prize</div>
              <div className="prize-amount">₹7,500</div>
              <div className="prize-description">Certificate of Excellence + Trophy</div>
            </div>

            <div className="prize-card third-place">
              <div className="prize-position">🥉 3rd Prize</div>
              <div className="prize-amount">₹5,000</div>
              <div className="prize-description">Certificate of Excellence + Trophy</div>
            </div>
          </div>

          <div className="special-prizes">
            <h3>Special Category Prizes</h3>
            <div className="special-prize-grid">
              <div className="special-prize-card">
                <h4>Best Innovation Award</h4>
                <p>₹3,000 + Special Recognition</p>
              </div>
              <div className="special-prize-card">
                <h4>Best Design Award</h4>
                <p>₹3,000 + Special Recognition</p>
              </div>
              <div className="special-prize-card">
                <h4>People's Choice Award</h4>
                <p>₹2,000 + Special Recognition</p>
              </div>
            </div>
          </div>

          <div className="prizes-note">
            <p>* All participants will receive participation certificates</p>
            <p>* Prize money is subject to applicable taxes</p>
            <p>* Decision of the judges will be final and binding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
