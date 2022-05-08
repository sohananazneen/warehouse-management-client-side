import React from 'react';
import { Button, Table } from 'react-bootstrap';

const AllInventory = ({ inventory }) => {
    const { _id, name, short_description, price, quantity, supplier } = inventory;

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Short Description</th>
                        <th>Supplier Name</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{short_description}</td>
                        <td>{supplier}</td>
                        <td><Button className='btn btn-success'>Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>

    );
};

export default AllInventory;