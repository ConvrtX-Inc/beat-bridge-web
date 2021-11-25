import React, { Component } from "react";
import { Container} from "react-bootstrap";
import NavBar from "../navbar/NavBar";

import "./Users.scss";

export default class Users extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="users-container">
          <Container className="container">Users Page</Container>
        </div>
      </div>
    );
  }
}
