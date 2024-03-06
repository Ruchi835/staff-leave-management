// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import StaffPage from './Components/StaffPage';
import LeaveType from './Components/LeaveType';
import Addstaff from './Components/Addstaff';
import Leave from './Components/Leave';
import Hodhome from './Components/Hodhome';
import EditStaff from './Components/EditStaff';
import AlternateArrangement from './Components/AlternateArrangement';
import ManageLeave from './Components/ManageLeave';
import Hodstaff from './Components/Hodstaff';
import Hodedit from './Components/Hodedit';
<<<<<<< HEAD
import PendingLeave from './Components/PendingLeave';
import ApprovedLeave from './Components/ApprovedLeave';
import DeclinedLeave from './Components/DeclinedLeave';
=======
>>>>>>> 89b83e746de8d3e527045fe1fcb3c35df4164c60

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/leavetype" element={<LeaveType />} />
        <Route path="/addstaff" element={<Addstaff />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/Hodhome" element={<Hodhome />} />
        <Route path="/editstaff/:staffId" element={<EditStaff />} />
        <Route path="/alternate-arrangement" element={<AlternateArrangement />} />
        <Route path="/manageleave" element={<ManageLeave />} />
        <Route path="/Hodstaff" element={<Hodstaff/>} />
        <Route path="/Hodedit/:staffId" element={<Hodedit />} />
<<<<<<< HEAD
        <Route path="/pendingleave" element={<PendingLeave />} />
        <Route path="/approvedleave" element={<ApprovedLeave />} />
        <Route path="/declinedleave" element={<DeclinedLeave />} />
=======
>>>>>>> 89b83e746de8d3e527045fe1fcb3c35df4164c60
      </Routes>
    </Router>
  );
}

export default App;