import React, { useState } from 'react';
import './about.css';
import { AboutIRCSSection, HistorySection, MumbaiSection, ComSection, EmblemSection, FundaSection, UpSection } from './aboutContents';

const About = () => {
  const [activeSection, setActiveSection] = useState('About the Indian Red Cross Society');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'history':
        return <HistorySection />;
      case 'AboutIRCS':
        return <AboutIRCSSection />;
      // Add other cases for each section
      case 'IRCS Mumbai':
        return <MumbaiSection />;
      case 'Managing Committee':
        return <ComSection />;
      case 'Emblem':
        return <EmblemSection />;
      case '7 Fundamental Principles':
        return <FundaSection />;
      case 'Tie Ups':
         return <UpSection />;
      default:
        return <AboutIRCSSection />;
    }
  };

  return (
    <div className='about-container'>
      <header className='about-header'>
        <h1>About Our Organization</h1>
      </header>
      <div className='about-content'>
        <nav className='about-nav'>
        <button className={`nav-button ${activeSection === 'AboutIRCS' ? 'active' : ''}`} onClick={() => handleClick('AboutIRCS')}>About IRCS</button>
          <button className={`nav-button ${activeSection === 'history' ? 'active' : ''}`} onClick={() => handleClick('history')}>History</button>
          <button className={`nav-button ${activeSection === 'IRCS Mumbai'? 'active':''}`} onClick={() => handleClick('IRCS Mumbai')}>IRCS Mumbai</button>
          <button className={`nav-button ${activeSection === 'Managing Committee' ? 'active' : ''}`} onClick={() => handleClick('Managing Committee')}>Managing Committee</button>
          <button className={`nav-button ${activeSection === 'Emblem' ? 'active' : ''}`} onClick={() => handleClick('Emblem')}>Emblem</button>
          <button className={`nav-button ${activeSection === '7 Fundamental Principles' ? 'active' : ''}`} onClick={() => handleClick('7 Fundamental Principles')}>7 Fundamental Principles</button>
          <button className={`nav-button ${activeSection === 'Tie Ups' ? 'active' : ''}`} onClick={() => handleClick('Tie Ups')}>Tie Ups</button>
        </nav>
        <main className='about-main'>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// const HistorySection = () => (
//   <section>
//     <h2>Our History</h2>
//     <p>Content about the organization's history...</p>
//   </section>
// );

// const AboutIRCSSection = () => (
//   <section>
//     <h2>About IRCS</h2>
//     <p>Information about IRCS...</p>
//   </section>
// );

// Add other section components

export default About;