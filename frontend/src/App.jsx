// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Project/Projects';
import Contact from './pages/Contact/Contact';

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
