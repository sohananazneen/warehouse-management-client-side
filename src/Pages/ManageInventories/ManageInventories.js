import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';
import AllInventory from '../AllInventory/AllInventory';

const ManageInventories = () => {
    const [inventory, setInventory] = useInventory();
    return (
        <div>
            <Container>
                <h2 className='text-center mt-4'>All Inventory Items</h2>
                <Button className='btn btn-success me-auto'>Add new item</Button>
                <Row className="d-flex justify-content-center mt-4">{
                    inventory.slice(0, 6).map(inventory => <AllInventory
                        key={inventory._id}
                        inventory={inventory}
                    ></AllInventory>)}
                </Row>
            </Container>
        </div>
    );
};

export default ManageInventories;