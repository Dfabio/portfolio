import logo from "./assets/img/logo.svg";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { SkillSection } from "./components/SkillSection/SkillSection";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillSection />
    </div>
  );
}

export default App;
