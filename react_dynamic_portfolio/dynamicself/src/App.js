import Home from './componennts/Home';
import About from './componennts/About';
import Contact from './componennts/Contact';
import Testimonial from './componennts/Testimonial';
import Skills from './componennts/Skills';
import Projects from './componennts/Projects';
import Navbar from './componennts/Navbar';
import Footer from './componennts/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
        
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/skills" element={<Skills />}/>
            <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
