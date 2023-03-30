import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Books from './Components/Books';
import Authors from './Components/Authors';
import About from './Components/About';
import FooterSection from './Components/FooterSection';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/authors" component={Authors} />
          <Route path="/about" component={About} />
        </Routes>
        
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;


