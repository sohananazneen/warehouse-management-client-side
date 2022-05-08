import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../hooks/useInventoryDetails';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetails(id);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/manageInventories`);
    }

    const handleRestock = event => {
        event.preventDefault();
        const restock = {
            inventoryId: inventory._id,
            email: user.email,
            quantity: inventory.quantity
        }
        axios.post('http://localhost:4000/restock', restock)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Restock Item');
                    event.target.reset();
                }
            })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={inventory.img} className="img-fluid rounded w-50" />
                            <Card.Body>
                                <Card.Title>{inventory.name}</Card.Title>
                                <Card.Text><strong> || Price: $ {inventory.price} ||</strong></Card.Text>
                                <Card.Text>Quantity: {inventory.quantity}</Card.Text>
                                <Card.Text>Supplier Name: {inventory.supplier}</Card.Text>
                                <Card.Text>{inventory.description}</Card.Text>
                                <Card.Text>Sold:</Card.Text>
                                <div className='text-center mx-2'>
                                    <Link to={`/delivered/${id}`}>
                                        <button className='btn btn-success'>Delivered</button>
                                    </Link>
                                    <Button onClick={() => navigateToManage()} className='btn btn-success mx-2'>Manage Inventories</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <h2>Restock the items</h2>
                        <Form onSubmit={handleRestock} className='border border-success  rounded-pill p-5 my-4'>
                            <input className='w-100 mb-2' type="number" name="quantity" placeholder='Enter Quantity' required />
                            <br />
                            <input className='btn btn-primary' type="submit" value="Restock" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InventoryDetails;