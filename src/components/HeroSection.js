import React from 'react';

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'brochure.pdf';
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
          <div className="event-date">27th March 2026</div>
          <div className="organizers">Organised by ISA Pune Section and IEEE Student Branch and Supista (STB60211939)</div>
          <div className="venue">MIT Academy of Engineering, Alandi(D), Pune, Maharashtra, India</div>
          <div className="department">Department of Electronics and Telecommunication Engineering</div>
          <div className="hero-buttons">
            <button className="btn download-btn" onClick={handleDownload}>Download Brochure</button>
            <button className="btn registration-btn" onClick={handleRegistration}>Registration</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
