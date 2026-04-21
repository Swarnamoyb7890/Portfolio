import React from 'react';
import './style.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillStrip from './components/SkillStrip/SkillStrip';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export function App() {
  return (
    <>
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              '--duration': `${Math.random() * 3 + 2}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <Navbar />
      <main>
        <Hero />
        <SkillStrip />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
