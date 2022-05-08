import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import useInventory from '../../../hooks/useInventory';

const Inventory = ({ inventory }) => {
    const { _id, name, img, short_description, price, quantity, supplier } = inventory;

    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    const [user] = useAuthState(auth);
    const [setInventory] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:4000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventory.filter(inventory => inventory._id !== id);
                    setInventory(remaining);
                })
            toast('Item Deleted');
        }
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
                    <Card.Text>{short_description}</Card.Text>
                    <Button onClick={() => navigateToUpdate(_id)} className='btn btn-success mx-2'>Update</Button>
                    {
                        user && <>
                            <Button className='btn btn-danger mx-2' onClick={() => handleDelete(inventory._id)}>Delete</Button>
                        </>
                    }
                    <ToastContainer />
                </Card.Body>
            </Card>
        </Col>
    );
};
export default Inventory;