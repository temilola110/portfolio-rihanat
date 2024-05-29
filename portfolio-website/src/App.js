import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
 
 

function App() {
  return (
    <div className="App">
     
      <Header />
      <Intro />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
     
    </div>
  );
}

export default App
 