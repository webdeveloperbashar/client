import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const menuActive = {
    borderBottom: "2px solid #c1c0c0",
    color: "#c1c0c0",
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              <NavLink exact to="/">
                <img src="https://i.ibb.co/6RnfxPV/logo-light.png" className="img-fluid" alt="logo" />
              </NavLink>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <NavLink activeStyle={menuActive} exact to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <Link>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link>
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link>
                  Blog
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <NavLink activeStyle={menuActive} to="/admin">
                  Admin
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px 15px",
                    borderRadius: "2px",
                  }}
                  to="/login"
                >
                  Login
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
