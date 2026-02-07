import React, { useState } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    } else if (item === 'Registration') {
      setActiveSection('registration');
    } else if (item === 'Prizes') {
      setActiveSection('prizes');
    }
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="left-logos">
            <img src="/ISA_logo_new.png" alt="ISA Logo" className="logo" />
            <img src="/NEW_IEEE_Logo.png" alt="IEEE Logo" className="logo" />
            <img src="/supista_logo.png" alt="Supista Logo" className="logo" />
          </div>
          
          <nav className="navigation desktop-nav">
            <ul>
              {navItems.map((item, index) => {
                const isActive = (item === 'Home' && activeSection === 'home') ||
                               (item === 'About us' && activeSection === 'about-us') ||
                               (item === 'Key Dates' && activeSection === 'key-dates') ||
                               (item === 'Registration' && activeSection === 'registration') ||
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
          
          <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className="right-logo">
            <img src="/MIT_AOE_LOGO.png" alt="MIT AOE Logo" className="logo" />
          </div>
        </div>
      </header>
      
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>TechnoPHILIA'26</h3>
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>&times;</button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item, index) => {
              const isActive = (item === 'Home' && activeSection === 'home') ||
                             (item === 'About us' && activeSection === 'about-us') ||
                             (item === 'Key Dates' && activeSection === 'key-dates') ||
                             (item === 'Registration' && activeSection === 'registration') ||
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
      </div>
      
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
    </>
  );
};

export default Header;