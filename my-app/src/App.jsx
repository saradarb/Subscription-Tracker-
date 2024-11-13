import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './pages/Profile1/Profile1';
import AboutUs from './pages/AboutUs/AboutUs';
import AddSubscription from './pages/AddSubscription/AddSubscription';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile1 from './pages/Profile1/Profile1';
import HomePage from './pages/HomePage/HomePage';
import Subscriptions from './pages/Subscriptions/Subscriptions'






function App() {
    return <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Profile1" element={<Profile1 />} />
      <Route path="/AddSubscription" element={<AddSubscription />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Subscriptions" element={<Subscriptions />} />
      





        

      

      </Routes>
       
      
    
    </Router>

}

export default App;
