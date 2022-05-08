import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import AllInventory from '../AllInventory/AllInventory';

const ManageInventories = () => {
    const [inventory, setInventory] = useInventory();
    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/addItem`);
    }
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
        }
    }
    return (
        <div>
            <Container>
                <h2 className='text-center mt-4'>All Inventory Items</h2>
                <Button onClick={() => navigateToManage()} className='btn btn-success me-auto'>Add new item</Button>
                <Row className="d-flex justify-content-center mt-4">
                    {/* {
                    inventory.map(inventory => <AllInventory
                        key={inventory._id}
                        inventory={inventory}
                    ></AllInventory>)} */}

                    {
                        inventory.map(inventory => <div key={inventory._id}>
                            <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>X</button></h5>

                        </div>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default ManageInventories;