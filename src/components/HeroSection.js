import React from 'react';

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TechnoPHILIA 24_MITAOE.pdf';
    link.download = 'TechnoPHILIA 24_MITAOE.pdf';
    link.click();
  };

  const handleRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeQjA-N8p6rD3NZz4RrWb0RLAgOcG1i13kc3jGClErF4Hcmyw/closedform', '_blank');
  };

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>TechnoPHILIA'26</h1>
          <h2>9th National Level Poster Presentation & Project Competition</h2>
          <div className="event-date">17th March 2026</div>
          <div className="organizers">Organised by IEEE Student Branch (STB60211939) and ISA</div>
          <div className="venue">MIT Academy of Engineering, Alandi(D), Pune, Maharashtra, India</div>
          <div className="hero-buttons">
            <button className="btn registration-btn" onClick={handleRegistration}>Registration</button>
            <button className="btn download-btn" onClick={handleDownload}>Download Brochure</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;