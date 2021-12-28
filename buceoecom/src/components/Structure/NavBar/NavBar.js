import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "../Cartwidget/CartWidget";



function NavBar() {
  return (
    <div>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Tienda Buceo </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#shop"> Shop </Nav.Link>
            <Nav.Link href="#login"> Log In </Nav.Link>
            <Nav.Link href="#login"> <CartWidget /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
//

// function NavBar() {
//     return (
//     <Navbar bg="primary" variant="dark"></Navbar>
//     )
// }
// export default NavBar;

// import React from "react"; // usar rfce

// import Navbar from "react-bootstrap/Navbar";
//
//

// const NavBar = () => {
//     return (

//   );
// };

// export default NavBar;
