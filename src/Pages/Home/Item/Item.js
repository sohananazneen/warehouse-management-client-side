import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { id, name, img, short_description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <Col md={4} className="mb-4">
            <Card style={{ height: '650px' }}>
                <Card.Img variant="top" src={img} className="img-fluid rounded" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> || Price: $ {price} ||</strong></Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>Supplier Name: {supplier}</Card.Text>
                    <Card.Text>
                        {short_description}
                    </Card.Text>
                    <Button onClick={() => navigateToUpdate(id)} className='btn btn-success'>Update</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default Item;