import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [restock, setRestock] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getRestock = async () => {
            const email = user.email;
            const url = `http://localhost:4000/restock?email=${email}`;
            try {
                const { data } = await axios.get(url);
                setRestock(data);
            }
            catch (error) {

            }
        }
        getRestock();
    }, [user])
    return (
        <Container>
            <h2 className='text-center mt-4'>Manage Inventory Items</h2>
            <Row className="d-flex justify-content-center mt-4">
                <h2>Restoked Item: {restock.length}</h2>
            </Row>
        </Container>
    );
};

export default MyItems;