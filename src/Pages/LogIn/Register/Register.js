import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <Container>
            <div className='w-50 mx-auto my-4 text-center'>
                <h2 className='text-success text-center mt-2'>Please Register</h2>
                <Form onSubmit={handleRegister} className='border border-success rounded-pill p-5 my-4'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    {/* Terms & condition checkbox */}
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & conditions" onClick={() => setAgree(!agree)} name="terms" className={`ps-2 ${agree ? '' : 'text-danger'}`}
                    />
                </Form.Group> */}
                    <Button variant="success border border-success rounded-pill w-50 mx-auto d-block mb-2" type="submit"
                        value="Register">
                        Register
                    </Button>
                </Form>

                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </Container>
    );
};

export default Register;