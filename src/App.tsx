import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn/signin";
import SignUp from "./components/SignUp/signup";
import ForgotPassword from "./components/SignIn/forgotpassword";

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
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;