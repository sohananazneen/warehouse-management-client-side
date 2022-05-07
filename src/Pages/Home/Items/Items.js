import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div id="items" className='my-4'>
            <Container>
                <h2 className='text-center mt-4'>Items</h2>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </Row>
            </Container>
        </div>
    );
};
export default Items;