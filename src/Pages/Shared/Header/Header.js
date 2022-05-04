import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" fixed='top' className='headerBg' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h2>Halal Grocery</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="home#items">Items</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="login">
                                Sign In
                            </Nav.Link>
                            <Nav.Link as={Link} to="register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;