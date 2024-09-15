import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/mainpage';

import MainPage from './pages/substianble/main';

import Idea1 from './pages/substianble/idea1';
import Idea2 from './pages/substianble/idea2';
import Idea3 from './pages/substianble/idea3';
import SoilTestForm from './pages/soildata';
import LandingPage from './pages/landing/landing';
<<<<<<< HEAD

=======
import LanguageSwitcher from './Languageswitcher';
>>>>>>> backend
import  { SignIn } from './pages/signin';
import Water from './water';
import DataOpti from './pages/dataopti';
import { SignUp } from './pages/signup';
//import MachineLearningAnalysis from './pages/analysis';
<<<<<<< HEAD
import { ForgotPassword } from './pages/updatepassword/forgot';
=======
import ForgotPassword from './pages/updatepassword/forgot';
//import FertilizerRecommendation from './pages/recomm';
>>>>>>> backend
import Income from './pages/income';
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<SignIn />} />
=======
        <Route path="/signin" element={<SignIn />} />
>>>>>>> backend
        {/* <Route path="/soilhealth" element={<SoilDataForm />} /> */}
        { <Route path="/waterconservation" element={<Water />} />}
        <Route path="/machine-learning-analysis" element={<SoilTestForm />} />
        <Route path="/home" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/crop-yield" element={<Income />} />
        <Route path="/sign-up" element={<SignUp />} />
=======
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/crop-yield" element={<Income />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/ferti" element={<FertilizerRecommendation />} /> */}
        <Route path="/language" element={<LanguageSwitcher />} />
>>>>>>> backend
        
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
