import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/mainpage';

import MainPage from './pages/substianble/main';

import Idea1 from './pages/substianble/idea1';
import Idea2 from './pages/substianble/idea2';
import Idea3 from './pages/substianble/idea3';
import SoilTestForm from './pages/soildata';

import LoginPage from './pages/signin';
import Water from './water';
import DataOpti from './pages/dataopti';
//import SignupPage from './pages/sign up';
//import MachineLearningAnalysis from './pages/analysis';
import Income from './pages/income';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/soilhealth" element={<SoilDataForm />} /> */}
        { <Route path="/waterconservation" element={<Water />} />}
        <Route path="/machine-learning-analysis" element={<SoilTestForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/crop-yield" element={<Income />} />
       
        <Route path="/sustainable-agriculture" element={<MainPage />} />
        <Route path="/idea1" element={<Idea1 />} />
        <Route path="/idea2" element={<Idea2 />} />
        <Route path="/idea3" element={<Idea3 />} />
        <Route path="/data-driven-solution" element={<DataOpti />} />
      </Routes>
    </Router>
  );
}

export default App;
