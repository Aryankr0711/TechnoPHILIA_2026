import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Association from './components/Association';
import KeyDates from './components/KeyDates';
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
      {activeSection === 'key-dates' && <KeyDates />}
      {activeSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;