import React,{useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";

import SignIn from "./components/SignIn/signin";
import SignUp from "./components/signup/signup";
import ForgotPassword from "./components/SignIn/forgotpassword";
import Dashboard from './components/dashboard-page/dashboard';
import Users from './components/users-page/Users';
import Support from './components/support/Support';
import ResetPassword from './components/SignIn/forgotpassword';

function App() {



  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path ="/dashboard" element ={<Dashboard/>} />
            <Route path ="/users" element ={<Users/>} />
            <Route path ="/support" element ={<Support/>} />
          </Routes>
        </div>
      </div>
    </div></Router>
  );
}

export default App;