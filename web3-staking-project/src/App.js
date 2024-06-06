import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import HowItWorks from './Components/HowItWorks';
import NFTStaking from './Components/NFTStaking';
import "@fontsource/poppins";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/NFTStaking" element={<NFTStaking />} />
      </Routes>
    </Router>
  );
};

export default App;
