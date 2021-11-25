import { Container, Navbar, Image, Nav, Row, Col } from "react-bootstrap";
import "./NavBar.scss";
// images
import logo from "../../assets/images/logo-colored.png";
import bellIcon from "../../assets/images/bell.png";
import menuIcon from "../../assets/images/menu.png";
import avatar from "../../assets/images/mock-avatar.png";

import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import NavItem from "./NavItem";
function NavBar(props: any) {
  return (
    <div>
      <Navbar expand="lg" className="nav-container">
        <Navbar.Brand href="#">
          <Image src={logo} className="app-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
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

            <Nav.Link className="nav-item-start">
              <NavItem
                customIcon={<DashboardIcon />}
                path="/support"
                text="Support"
              />
            </Nav.Link>
          </Nav>

          <Nav className="justify-content-end nav-end">
            <Row>
              <Col>
                <Image src={menuIcon} className="nav-icon-end nav-item-end" />
              </Col>
              <Col>
                <Image src={bellIcon} className="nav-icon-end nav-item-end" />
              </Col>
              <Col>
                <Image src={avatar} className="nav-item-avatar" />
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="nav-divider"></div>
    </div>
  );
}

export default NavBar;
