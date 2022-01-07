import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../Images/logo/scuba.png"
import CartWidget from "../Cartwidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-left"
          alt="logo"
        />
      </Navbar.Brand>
    </Container>
    </Navbar>
   
  );
}

export default NavBar;

{/* <div>
<Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand> Tienda Buceo </Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/">
        <Nav> Home </Nav>
      </Link>
      <Link to="detalle">
        <Nav>Shop </Nav>
      </Link>
      <Nav.Link href="#login"> Log In </Nav.Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </Nav>
  </Container>
</Navbar>
</div> */}