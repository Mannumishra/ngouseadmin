
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import DonationList from './components/Donation/DonationList';
import Signup from './components/UserProfile/Signup';
import DirectDonation from './components/Donation/DirectDonation';
import UserView from './components/Donation/UserView';
import Earning from './components/Earning/Earning';
import Withdrawal from './components/Withdrawal/Withdrawal';
import UpdateProfile from './components/UserProfile/UpdateProfile';
import PersonalDetails from './components/Dashboard/PersonalDetails';
import UserProfile from './components/UserProfile/UserProfile';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
// import Login from './components/UserProfile/Login';
// import TotalUsers from './components/TotalUsers/TotalUsers';
import EmptySignup from './components/UserProfile/EmptySignup';


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); 
  };

   // Function to toggle sidebar visibility
  // const toggleSidebar = (state) => {
  //   setIsSidebarOpen(state);  // Set the state to either true (open) or false (close)
  // };
   // Function to toggle sidebar visibility
   
   // Function to toggle sidebar visibility
  //  const toggleSidebar = (state) => {
  //   setIsSidebarOpen(state);  // Set the state to either true (open) or false (close)
  // };
  
  return (
    
    <Router>
      <div className="dashboard">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 
        <div className={`content ${isSidebarOpen ? '' : 'full-width'}`}>
          <Header toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="Login" element={<Login/>}/> */}
            <Route path="Table" element={<Table/>}/>
            {/* <Route path="TotalUsers" element={<TotalUsers/>}/> */}
            <Route path="" element={<PersonalDetails/>}/>
            <Route path="DonationList" element={<DonationList/>}/>
            <Route path="DirectDonation" element={<DirectDonation/>}/>
            <Route path="Earning" element={<Earning/>}/>
            <Route path="Withdrawal" element={<Withdrawal/>}/>
            <Route path="UpdateProfile" element={<UpdateProfile/>}/>
            <Route path="UserProfile" element={<UserProfile/>}/>
            <Route path="UserView" element={<UserView/>}/>
            {/* <Route path="UserView" element={UserView/>}/> */}
            <Route path="SignUp" element={<Signup/>}/>
            <Route path="NewSignUp" element={<EmptySignup/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  
  );
}

export default App;
