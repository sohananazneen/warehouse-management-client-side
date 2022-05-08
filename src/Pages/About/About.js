import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../Images/about.jpg'

const About = () => {
    return (
        <Container>
            <Row>
                <h1 className="text-center my-4">About us</h1>
                <Col md={6}>
                    <img src={about} className="w-100" alt="" />
                </Col>
                <Col md={6}>
                    <p>The grocery business is a rapidly changing area of the retail industry. The rising tide of digital commerce is creating unprecedented roadblocks for many grocery store owners worldwide. Embracing technology is the only solution to fight this challenge.

                        We enable grocery businesses to stay ahead in the competitive market of grocery retail with powerful software solutions. Whether you want to build an online grocery, a grocery shopping app, or an inventory management solution, we’re ready to deliver your needs.

                        We’ve built software solutions for small grocery stores, medium-sized grocery retailers, and large supermarket chains. With over two decades of software development experience, we know what best suits your business.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;