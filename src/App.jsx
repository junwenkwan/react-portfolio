import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Work/>
        <Projects/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
