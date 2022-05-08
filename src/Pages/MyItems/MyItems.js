import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [restock, setRestock] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getRestock = async () => {
            const email = user.email;
            const url = `http://localhost:4000/restock?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setRestock(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getRestock();
    }, [user])
    return (
        <Container>
            <h2 className='text-center mt-4'>Manage Inventory Items</h2>
            <Row className="d-flex justify-content-center mt-4">
                <h2>Your Stoked Items: {restock.length}</h2>
            </Row>
        </Container>
    );
};

export default MyItems;