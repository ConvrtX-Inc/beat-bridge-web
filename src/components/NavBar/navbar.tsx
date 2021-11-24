import React, { Component } from "react";
import { Container, Navbar, Image, Nav } from "react-bootstrap";

import "./navbar.scss";

// images
import logo from "../../assets/images/logo-colored.png";
import bellIcon from "../../assets/images/bell.png";
import menuIcon from "../../assets/images/menu.png";
import avatar from "../../assets/images/mock-avatar.png";
// import dashboardIcon from "../../assets/images/dashboard.png";
import usersIcon from "../../assets/images/users.png";
import supportIcon from "../../assets/images/support.png";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import NavItem from "../NavItem/NavItem";
function NavBar(props: any) {
  return (
    <Navbar expand="lg">
      <Container className="container">
        <Navbar.Brand href="#">
          <Image src={logo} className="app-logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav-item-start">
            <NavItem
              customIcon={<DashboardIcon />}
              path="/dashboard"
              text="Dashboard"
              
            />
          </Nav.Link>

          <Nav.Link className="nav-item-start">
            <NavItem
              customIcon={<DashboardIcon />}
              path="/users"
              text="Users"
             
            />
          </Nav.Link>
          
          <Nav.Link  className="nav-item-start">
            <NavItem
              customIcon={<DashboardIcon />}
              path="/support"
              text="Support"
            />
          </Nav.Link>
        </Nav>

        <Nav className="justify-content-end nav-end">
          <Nav.Item>
            <Image src={menuIcon} className="nav-icon-end nav-item-end" />
          </Nav.Item>

          <Nav.Item>
            <Image src={bellIcon} className="nav-icon-end nav-item-end" />
          </Nav.Item>

          <Nav.Item>
            <Container className="nav-item-avatar">
              <Image src={avatar} />
            </Container>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
