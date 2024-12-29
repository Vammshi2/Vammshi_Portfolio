import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Achievements from './Components/Achievements/Achievements';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <MyWork />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
