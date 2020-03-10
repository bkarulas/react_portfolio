import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Brad Karulas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Navigation;