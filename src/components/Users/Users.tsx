import React, { Component } from "react";
import { Container, Navbar, Image, Nav, Row, Col, Card } from "react-bootstrap";
import NavBar from "../NavBar/navbar";

import "./Users.scss";
 
export default class Users extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="container">
           Users Page
        </Container>
      </div>
    );
  }
}
