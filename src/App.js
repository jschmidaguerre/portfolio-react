import Header from "./componentes/header/Header";
import Presentation from "./componentes/aboutme/Presentation";
import MyProjects from "./componentes/myprojects/MyProjects";
import Education from "./componentes/education/Education";
import AboutMe from "./componentes/aboutme/AboutMe";
function App() {
  return (
    <div>
      <Header/>
      <Presentation/>
      <AboutMe/>
      <MyProjects/>
      <Education/>
    </div>
  );
}

export default App;
