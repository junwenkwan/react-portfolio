import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work"

import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Work/>
      </div>
    </div>
  );
}

export default App;
