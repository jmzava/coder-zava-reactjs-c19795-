import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Logo from "../Images/logo/scuba.png";
import "./NavBar.css";
import CartWidget from "../Cartwidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className='navBarColor'>
        <Container>
          <Navbar.Brand>
              <img src={Logo} className="d-inline-block logo" alt="logo" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" bg="dark">
            <Nav.Link eventKey="2" as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Tienda" id="collasible-nav-dropdown" bg="dark">
              <Nav.Link eventKey="2" as={Link} to="/categoria/Visor">Visores</Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/categoria/Aletas">Aletas</Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/categoria/Varios">Varios</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey="2" as={Link} to="/categoria/todos">Todos</Nav.Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="cartLogo" eventKey="2" as={Link} to="/cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
