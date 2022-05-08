import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Home/Inventory/Inventory';

const ManageInventories = () => {

    const [inventory, setInventory] = useInventory();
    const navigate = useNavigate();
    const navigateToAdd = () => {
        navigate(`/addItem`);
    }

    return (
        <Container>
            <h2 className='text-center mt-4'>Manage Inventory Items</h2>
            <Button onClick={() => navigateToAdd()} className='btn btn-success me-auto'>Add new item</Button>
            <Row className="d-flex justify-content-center mt-4">
                {
                    inventory.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </Row>
        </Container>
    );
};

export default ManageInventories;