import React from 'react';
import Nav from './componentes/header/Nav';
import Home from './componentes/home/Home';
import AboutMe from './componentes/aboutme/AboutMe';
import Projects from './componentes/myprojects/MyProjects';
import Footer from './componentes/footer/Footer';
import Education from './componentes/education/Education';
import TechStack from './componentes/techStack/TechStack';
import ContactMe from './componentes/contactMe/ContactMe';
function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Home />
      <AboutMe />
      <Projects />
      <Education/>
      <TechStack/>
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
