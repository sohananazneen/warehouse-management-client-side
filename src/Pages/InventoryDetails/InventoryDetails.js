import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetails(id);
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
                                <div className='text-center'>
                                    <Link to={`/delivered/${id}`}>
                                        <button className='btn btn-primary'>Delivered</button>
                                    </Link>
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