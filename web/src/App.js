import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

import { Food } from './links/Food'
import { Travel } from './links/Travel';

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Projects />
    </>
  );
}


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
