import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Covid-19 Monitor</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBar;