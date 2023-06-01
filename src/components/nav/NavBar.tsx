import { Container, Navbar, Image, Nav, Row, Col, Dropdown } from "react-bootstrap";
import "./NavBar.scss";
// images
import logo from "../../assets/images/logo-colored.png";
import bellIcon from "../../assets/images/bell.png";
import menuIcon from "../../assets/images/menu.png";
import avatar from "../../assets/images/mock-avatar.png";

import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import NavItem from "./NavItem";
import { Link, useNavigate } from "react-router-dom";

function NavBar(props: any) {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();   
    navigate('/');    
  }
  
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

          <Nav className="justify-content-end nav-end ">
            <Row className="align-items-center">
              <Col>
                <Link to="#">
                  <Image src={menuIcon} className="nav-icon-end nav-item-end" />
                </Link>
              </Col>
              <Col>
                <Link to="#">
                  <Image src={bellIcon} className="nav-icon-end nav-item-end" />
                </Link>
              </Col>

              <Col>
                <Dropdown
                  align="end"
                >
                  <Dropdown.Toggle
                    className="p-0 bg-transparent border-0"
                    variant="success"
                    id="dropdown-basic"
                  >
                    <Image src={avatar} className="nav-icon-end nav-item-end" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/" onClick={logout} >Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
