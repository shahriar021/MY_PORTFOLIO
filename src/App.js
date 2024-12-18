import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/screen/About';
import Projects from './components/screen/Projects';
import Footer from './components/Footer';
import Contact from './components/screen/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Define routes, including the default index route for About */}
        <Routes>
          <Route index element={<About />} /> {/* This will render About at the root */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
