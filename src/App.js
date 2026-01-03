import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Association from './components/Association';
import AboutUs from './components/AboutUs';
import KeyDates from './components/KeyDates';
import Registration from './components/Registration';
import Prizes from './components/Prizes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'home' && (
        <>
          <HeroSection />
          <Association />
        </>
      )}
      {activeSection === 'about-us' && <AboutUs />}
      {activeSection === 'key-dates' && <KeyDates />}
      {activeSection === 'registration' && <Registration />}
      {activeSection === 'prizes' && <Prizes />}
      {activeSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
