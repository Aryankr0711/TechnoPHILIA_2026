import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = ['Home', 'About us', 'Key Dates', 'Registration', 'Prizes', 'Contact Us'];

  const handleNavClick = (item, e) => {
    e.preventDefault();
    if (item === 'Contact Us') {
      setActiveSection('contact');
    } else if (item === 'Key Dates') {
      setActiveSection('key-dates');
    } else if (item === 'Home') {
      setActiveSection('home');
    } else if (item === 'About us') {
      setActiveSection('about-us');
    } else if (item === 'Prizes') {
      setActiveSection('prizes');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="left-logos">
          <img src="/IEEE Logo.png" alt="IEEE Logo" className="logo" />
          <img src="/ISA_logo.png" alt="ISA Logo" className="logo" />
        </div>
        
        <nav className="navigation">
          <ul>
            {navItems.map((item, index) => {
              const isActive = (item === 'Home' && activeSection === 'home') ||
                             (item === 'About us' && activeSection === 'about-us') ||
                             (item === 'Key Dates' && activeSection === 'key-dates') ||
                             (item === 'Prizes' && activeSection === 'prizes') ||
                             (item === 'Contact Us' && activeSection === 'contact');
              return (
                <li key={index}>
                  <a href="#" className={isActive ? 'active' : ''} onClick={(e) => handleNavClick(item, e)}>{item}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="right-logo">
          <img src="/MIT_AOE_LOGO.png" alt="MIT AOE Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
