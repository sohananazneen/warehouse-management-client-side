import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import faqImage from '../../../Images/faq.jpg';
const FAQ = () => {
    return (
        <div className='my-4'>
            <Container>
                <h2 className='text-center my-4'>FAQ</h2>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <img src={faqImage} className='w-100' alt="" />
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is grocery inventory management?</Accordion.Header>
                                <Accordion.Body>
                                    Inventory management is critical to maximizing revenue and maintaining desired customer service quality grocery retailing. Retailers should make sure that products are always on the shelf and properly priced. We provide efficient grocery inventory management solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How competitive is your pricing?</Accordion.Header>
                                <Accordion.Body>
                                    We have some of the lowest prices you can find on the market and even offer wholesale pricing. If you find a cheaper price for an item email us a picture to match or even beat that price.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do I creat an account?</Accordion.Header>
                                <Accordion.Body>
                                    To create an account, click on Login at the top right side of the website and select Create an account. Fill up all the required information as indicated in the fields, then click submit button.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Halal Trusted?</Accordion.Header>
                                <Accordion.Body>
                                    All deliver only hand slaughtered HALAL certified meat.All our vendors are certified Halal.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Standards?</Accordion.Header>
                                <Accordion.Body>
                                    We maintain highest standard and hygiene in all our products and services. Our executives are well trained and professionals.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FAQ;