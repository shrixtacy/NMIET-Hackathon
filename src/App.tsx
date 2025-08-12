import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Mission from './components/Mission';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';
import './styles/team.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;