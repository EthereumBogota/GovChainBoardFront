import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <p>If you like our job give us a star in our github⭐</p>
          </NavItem>
          <NavItem>
            <NavLink href="/landing/">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/landing/">
              Our team
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          <p>For a world more descentralizated,<span style={{color: "#ba54f5", paddingLeft:"4px"}}>for a better web.</span></p> 
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
