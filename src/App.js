import logo from "./assets/img/logo.svg";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { SkillSection } from "./components/SkillSection/SkillSection";
import {Projects} from "./components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillSection />
      <Projects/>
    </div>
  );
}

export default App;
