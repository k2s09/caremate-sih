import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';

import PricingPlans from './pages/PricingPlans';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/caremateplus" element={<PricingPlans />} /> 
       
        <Route path="/team" element ={<Team />} />
        
      </Routes> 
    </Router>
  );
};

export default App;

