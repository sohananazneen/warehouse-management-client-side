import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { itemId } = useParams();
    const [item, setitem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setitem(data));
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={item.img} className="img-fluid rounded w-50" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text><strong> || Price: $ {item.price} ||</strong></Card.Text>
                                <Card.Text>Quantity: {item.quantity}</Card.Text>
                                <Card.Text>Supplier Name: {item.supplier}</Card.Text>
                                <Card.Text>{item.description}</Card.Text>
                                <Button className='btn btn-success'>Delivered</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Inventory;