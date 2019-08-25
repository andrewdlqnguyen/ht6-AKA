import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavigationBar.css'
import logo from '../../Logo.jpg';

export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img className="logo_image" src={logo} alt="logo"/> {'AKA - Hackathon'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/devices">How To</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/andrewdlqnguyen/ht6-AKA" target="_blank">GitHub Source Code</NavDropdown.Item>
                        <NavDropdown.Item href="/account/configuration">Configuration</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logging_out">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">ht6-AKA Admin</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}