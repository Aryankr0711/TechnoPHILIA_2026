import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Get in touch with the TechnoPHILIA 2026 organising committee</p>
          <p>MIT Academy of Engineering, Pune, Maharashtra, India</p>
        </div>

        <div className="coordinators-section">
          <h3>Faculty Coordinators</h3>
          <div className="faculty-grid">
            <div className="coordinator-card">
              <h4>Prof. Shilpa Rudrawar</h4>
              <p>Designation: Assistant Professor, Department of E&TC Engineering</p>
              <p>📞 +91 94218 51242</p>
              <p>✉️ <a href="mailto:skrudrawar@mitaoe.ac.in">skrudrawar@mitaoe.ac.in</a></p>
            </div>
            <div className="coordinator-card">
              <h4>Dr. Sneha Pokharkar</h4>
              <p>Designation: Assistant Professor, Department of E&TC Engineering</p>
              <p>📞 +91 98901 57594</p>
              <p>✉️ <a href="mailto:sneha.pokharkar@mitaoe.ac.in">sneha.pokharkar@mitaoe.ac.in</a></p>
            </div>
          </div>

          <h3>Student Coordinators</h3>
          <div className="student-grid">
            <div className="coordinator-card">
              <h4>Aryan Kumar</h4>
              <p>📞 +91 8789978957</p>
              <p>✉️ <a href="mailto:202301070164@mitaoe.ac.in">202301070164@mitaoe.ac.in</a></p>
            </div>
            <div className="coordinator-card">
              <h4>Kanak Panchal</h4>
              <p>📞 +91 93272 94119</p>
              <p>✉️ <a href="mailto:202301070135@mitaoe.ac.in">202301070135@mitaoe.ac.in</a></p>
            </div>
            <div className="coordinator-card">
              <h4>Satish Swami</h4>
              <p>📞 +91 93228 55846</p>
              <p>✉️ <a href="mailto:satishswami125@gmail.com">satishswami125@gmail.com</a></p>
            </div>
            <div className="coordinator-card">
              <h4>Shrutika Dhondge</h4>
              <p>📞 +91 96991 06244</p>
              <p>✉️ <a href="mailto:shrutikadhondge04@gmail.com">shrutikadhondge04@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
