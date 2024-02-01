import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {
    const cartProducts=useSelector(state=>state.cart);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary border fw-bold">
      <Container>
        <Navbar.Brand href="#home">SM-REDUX</Navbar.Brand>
        <Nav>
            <Nav.Link as={Link} to={"/products"} >
                Products
            </Nav.Link>
        </Nav>
        <Navbar.Toggle  />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            <Nav.Link as={Link} to={"/cart"}>Cart {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar