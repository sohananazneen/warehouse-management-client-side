import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FAQ from '../FAQ/FAQ';
import Item from '../Item/Item';

const Home = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <Banner></Banner>
            <Container>
                <h2 className='text-center mt-4'>Items</h2>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </Row>
            </Container>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;