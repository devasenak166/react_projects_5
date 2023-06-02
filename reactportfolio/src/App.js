
import React from "react";
import './App.css';

import About from './component/About'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Test from './component/Testimonial'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
function App() {
  return (
    <main class="bg-dark">
       <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h2 class="display-6 fw-semibold text-white mb-4">Welcome!...Everyone</h2>
      <div class="col-lg-6 mx-auto">
        <p class="fs-6 mb-3 text-white">Welcome to my portfolio website! I'm Devasena, an aspiring IT professional with a passion for web development and a thirst for knowledge. Explore my portfolio to see how my skills and experiences can contribute to your projects.</p>
       
      </div>
    </div>
  </div>
    <Navbar/>
     <About/>
     <Projects/>
     <Skills/>
     <Test/>
     <Contact/>
     <Footer/>
    </main>
   
  );
}

export default App;
