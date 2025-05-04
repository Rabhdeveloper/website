import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Card from './components/Card';
import Page from './components/Page';

// import Query from './components/ProductQueryForm';
import Login from './components/Login';
import Register from './components/Register';
import Catalogue from './components/Catalogue';






function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/catalogue" element={<Catalogue />} />

          <Route path="/page/:machineId" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
