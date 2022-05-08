import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
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
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/items">Items</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manageInventories">
                                        Manage Item
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="addItem">
                                        Add Item
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="myItems">
                                        My items
                                    </Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <>
                                        <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>

                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="login">
                                            Login
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="register">
                                            Register
                                        </Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;