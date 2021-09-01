import Preloader from "./components/preloader/Preloader"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Footer from "./components/footer/Footer"
import "./app.scss"
import {useState, useEffect} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000);
  })

  return (
    <div className="app">
      {
        isLoading === true?
        <Preloader/>:
        <div className="sections">
          <Intro/>
          <About/>
          <Work/>
          <Projects/>
          <Skills/>
          <Footer/>
        </div>
      }

    </div>
  );
}

export default App;
