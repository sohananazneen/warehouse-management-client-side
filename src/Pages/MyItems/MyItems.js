import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Home/Inventory/Inventory';

const MyItems = () => {
    const [inventory, setInventory] = useInventory();
    const navigate = useNavigate();
    return (
        <Container>
            <h2 className='text-center mt-4'>Manage Inventory Items</h2>
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

export default MyItems;