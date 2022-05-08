import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetails(id);
    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/manageInventories`);
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
                </Row>
            </Container>

        </div>
    );
};

export default InventoryDetails;