import React from 'react';
import Nav from './componentes/header/Nav';
import Home from './componentes/home/Home';
import AboutMe from './componentes/aboutme/AboutMe';
import Experience from './componentes/experience/Experience';
import Projects from './componentes/myprojects/MyProjects';
import Services from './componentes/services/Services';
import TechStack from './componentes/techStack/TechStack';
import Education from './componentes/education/Education';
import ContactMe from './componentes/contactMe/ContactMe';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen">
      <Nav />
      <main>
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Services />
        <TechStack />
        <Education />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
