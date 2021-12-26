import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Footer from "./components/footer/Footer"
import "./app.scss"

function App() {
  return (
    <div className="app">
      {
        <div className="sections">
          <Intro/>
          <About/>
          <Work/>       
          <Skills/>
          <Projects/>
          <Footer/>
        </div>
      }

    </div>
  );
}

export default App;
