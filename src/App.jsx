import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects/>
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;
