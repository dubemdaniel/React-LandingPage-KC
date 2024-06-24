import "./App.css";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import Projects from "./components/pages/projects/Projects";
import Certification from "./components/pages/certifications/Certification";
import Contact from "./components/pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/gallery" Component={Gallery} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="/certifications" Component={Certification} />
        <Route exact path="/contacts" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
