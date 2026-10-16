import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/About';
import { TechStack } from './components/TechStack';
import { Estadistic } from './components/Estadistic';
import { Projects } from './components/Projects';
import { Experiments } from './components/Experiments'; 
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import './App.css';

export default function App() {
  return (
    <div className="presentation-container">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <TechStack />
        <Estadistic/>
        <Projects />
        <Experiments /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}