import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import appStorImage from '../../../Images/Footer/app-store.png';
import googlePlayImage from '../../../Images/Footer/google-play.png';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer bg='success'>
            <div className="p-5">
                <Container>
                    <Row>
                        <Col xs={6} md={2}>
                            <h2>Links</h2>
                            <Nav>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/items">Items</Nav.Link>
                                <Nav.Link as={Link} to="about">About</Nav.Link>
                                <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="login">
                                    Sign In
                                </Nav.Link>
                                <Nav.Link as={Link} to="register">
                                    Register
                                </Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={6} md={5}>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h2 className='text-success'>Halal Grocery</h2>
                                    <small>copyright &copy; {year} All rights reserved.</small>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={5}>
                            <div className="d-flex justify-content-end">
                                <div>
                                    <h5>Get the App</h5>
                                    <div className="mb-2">
                                        <a
                                            href="https://apps.apple.com/us/app/finch-self-care-widget-pet/id1528595748" rel=''>
                                            <img src={appStorImage} alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.github.android" rel=''>
                                            <img src={googlePlayImage} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;