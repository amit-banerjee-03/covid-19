import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap'
import coronaImage from '../images/corona-image.png'

const NavBar = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="/"><img src={coronaImage} width="50px" height="50px"/> Covid-19 Monitor</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    <Nav.Link href="/country">Countries</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBar;