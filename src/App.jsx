import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar.jsx";
import Introduction from "./pages/introduction.jsx";
import About from './pages/about.jsx';
import Skills from './pages/skills.jsx';
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <section id="introduction">
          <Introduction/>
        </section>
        {/* <section id="about">
          <About/>
        </section> */}
        {/* <section id="skills">
          <Skills/>
        </section> */}
        {/* <section id="services">
          <Services/>
        </section> */}
        {/* <section id="contact">
          <Contact/>
        </section> */}
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
