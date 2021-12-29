import React, { Component } from "react";
import { Col, Container, Row, Image, Table } from "react-bootstrap";
import NavBar from "../nav/NavBar";
import { BsTrash } from 'react-icons/bs';

import "./Users.scss";
import usersImage from "../../assets/images/users-image.png";
import DashboardStats from "../dashboard-stats/DashboardStats";

import avatar from "../../assets/images/mock-avatar.png";
const userData = [
  {
    image: avatar,
    name: "John Doe",
    email: "john@gmail.com",
    number: "+971 80 9890 9876",
    location: "Texas, USA"
  },
  {
    image: avatar,
    name: "Marvin Rahmir",
    email: "marvin@convrtx.com",
    number: "+971 80 9890 9876",
    location: "Manila, Philippines"
  },
  {
    image: avatar,
    name: "Talal UX Guy",
    email: "talaal@hotmail.com",
    number: "+971 80 9890 9876",
    location: "Lahore, Pakistan"
  },
  {
    image: avatar,
    name: "Hadi Altaf",
    email: "hadi@convrtx.com",
    number: "+971 80 9890 9876",
    location: "Dubai, UAE"
  },
];

const User = (props: any) => (
  <tr>
    <td><img src={props.data.image}></img></td>
    <td>{props.data.name}</td>
    <td>{props.data.email}</td>
    <td>{props.data.number}</td>
    <td>{props.data.location}</td>
    <td><BsTrash /></td>
  </tr>
)

export default class Users extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="users-container">
          <DashboardStats />
          <Row className="text-start">
            <Col className="welcome-container">
              <Image src={usersImage} />
              <div className="title-text-container">
                <h1>Users</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mb-8">
              <Table hover>
                <tbody>
                  {userData.map((x, i) => <User key={i} data={x} />)}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
