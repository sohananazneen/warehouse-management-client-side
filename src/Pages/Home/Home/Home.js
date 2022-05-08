import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FAQ from '../FAQ/FAQ';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [inventory, setInventory] = useInventory();

    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/inventory`);
    }
    return (
        <div>
            <Banner></Banner>
            <Container>
                <h2 className='text-center mt-4'>Items</h2>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        inventory.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                    <Button onClick={() => navigateToManage()} className='btn btn-success'>Manage Inventories</Button>
                </Row>
            </Container>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;