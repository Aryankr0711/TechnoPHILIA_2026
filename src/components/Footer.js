import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/MIT_AOE_LOGO.png" alt="MITAOE Logo" className="footer-logo" />
          <h3>MIT Academy of Engineering</h3>
          <p>Alandi(D), Pune, Maharashtra, India</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>info@mitaoe.ac.in</p>
          <p>+91-20-27475000</p>
          <p>Alandi(D), Pune - 412105</p>
        </div>
        
        <div className="footer-section">
          <h4>TechnoPHILIA'26</h4>
          <p>9th National Level Competition</p>
          <p>March 27, 2026</p>
          <p>Organized by IEEE & ISA</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 TechnoPHILIA | MIT Academy of Engineering, Alandi(D), Pune, Maharashtra, India</p>
      </div>
    </footer>
  );
};

export default Footer;