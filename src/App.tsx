import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn/signin";
import SignUp from "./components/SignUp/signup";
import ForgotPassword from "./components/SignIn/forgotpassword";
import Dashboard from './components/dashboard-page/dashboard';
import Users from './components/users-page/Users';
import Support from './components/support/Support';

function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path ="/dashboard" component ={Dashboard} />
            <Route path ="/users" component ={Users} />
            <Route path ="/support" component ={Support} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;