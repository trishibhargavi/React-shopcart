import React from "react";
import {Navbar,Container,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";
// import Collapse from 'react-bootstrap/Collapse';
// import { Products } from "./features/products/Products";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux"
import { NavLink,Link } from "react-router-dom";
import { useState, useEffect } from "react";



function Navigation()
{  
  const state = useSelector((state:any)=> state.handleCart)
  
return(

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="#Shoppee">SHOPPEE</Navbar.Brand>&nbsp;&nbsp;
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">HOME</Nav.Link>&nbsp;&nbsp;
      <NavDropdown title="CATEGORY" id="collasible-nav-dropdown">
        <NavDropdown.Item to="/Electronics" as={Link}>Electronis</NavDropdown.Item>
        
        <NavDropdown.Item to="/Men" as={Link} >Men's Clothing</NavDropdown.Item>
        <NavDropdown.Item to="/Jewellery" as={Link}>Jewellery</NavDropdown.Item>
        <NavDropdown.Item to="/Women" as={Link}>Women's Clothing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item to="/All" as={Link}>All</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  
    <div className="buttons">
    <NavLink to="/cart" className="btn btn-outline-light ms-2 px-3 py-2">
                        Cart ({state.length})
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </NavLink>
        <i className="fa fa-shopping-cart-in me-1"></i>
      
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>


    )
}

export default Navigation;