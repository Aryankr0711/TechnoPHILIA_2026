import React from 'react';

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Brochure_final.pdf`;
    link.download = 'Brochure_final.pdf';
    link.click();
  };

  const handleRegistration = () => {
    window.open('https://forms.gle/shMWauwRfedXerKk9', '_blank');
  };

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>TechnoPHILIA'26</h1>
          <h2>9ᵗʰ National Level Poster Presentation & Project Competition</h2>
          <div className="event-date">27ᵗʰ March 2026</div>
          <div className="organizers">Organised by ISA Pune Section, IEEE Student Branch (STB60211939) and Supista </div>
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
