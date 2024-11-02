import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Experience from "./components/experience/Experience";
import VideoGrid from "./components/videos/videossection";
import GraphicsGrid from "./components/graphics/graphics";

const App = () => {
  return (
   
        <>
            <Header></Header>
            <main className='main'>
              <Home></Home>
              <About></About>
              <Experience/>
              <GraphicsGrid/>
              <VideoGrid/>
              <Skills></Skills>
              <Services></Services>
              <Qualification></Qualification>
              <Contact></Contact>
              <Footer></Footer>
              <Scrollup></Scrollup>
            </main>
        </>
   
  );
}

export default App;