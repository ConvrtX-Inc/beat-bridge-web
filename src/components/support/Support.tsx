import { Component } from "react";
import { Container} from "react-bootstrap";
import NavBar from "../nav/NavBar";

import "./Support.scss";

export default class Support extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="users-container">
          <Container className="container">Support Page</Container>
        </div>
      </div>
    );
  }
}
