import React from "react";
import "./NavBar.css";
import Logo from "../Images/logo/scuba.png";
import { NavDropdown, Navbar, Nav,  Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import CartWidget from "../Cartwidget/CartWidget";

function NavBar() {
  const {globoCarrito} =  useCartContext()
  const globoCart = globoCarrito()

  return (
    <Navbar fixed="top" className='navBarColor'>
        <Container>
          <Navbar.Brand>
              <img src={Logo} className="d-inline-block logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" bg="dark">
                <Nav.Link eventKey="2" as={Link} to="/">Inicio</Nav.Link>
                <NavDropdown title="Tienda" id="collasible-nav-dropdown" bg="dark">
                  <Nav.Link eventKey="2" as={Link} to="/productos/Visor">Visores</Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="/productos/Aletas">Aletas</Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="/productos/Varios">Varios</Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link eventKey="2" as={Link} to="/productos">Todos</Nav.Link>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link className="cartLogo" eventKey="2" as={Link} to="/cart">
                  <CartWidget />
                </Nav.Link>
                  {globoCart > 0 ? <div className="cartNumber"> {globoCart} </div> : <div></div>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
export default NavBar;
