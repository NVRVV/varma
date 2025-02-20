// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import './index.css';
import About from './components/pages/About/About';
import Education from './components/pages/Education/Education';
import Projects from './components/pages/Project/Projects';
import Contact from './components/pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /> <About /><Projects/><Education/><Contact/></>} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
