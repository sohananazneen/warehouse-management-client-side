import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id="items" className='my-4'>
            <Container>
                <h2 className='text-center mt-4'>Items</h2>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        items.map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }
                </Row>
            </Container>
        </div>
    );
};
export default Items;