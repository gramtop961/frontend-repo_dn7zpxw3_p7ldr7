import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkShowcase from './components/WorkShowcase';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-white">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Hero />
      <About />
      <Skills />
      <WorkShowcase />
      <ContactFooter />
    </div>
  );
}

export default App;
