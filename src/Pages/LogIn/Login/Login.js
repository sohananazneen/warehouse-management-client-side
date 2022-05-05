import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <Container>
            <div className='w-50 mx-auto my-4 text-center'>
                <h2 className='text-success text-center mt-2'>Please Login</h2>
                <Form onSubmit={handleSubmit} className='border border-success rounded-pill p-5 my-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="success w-50 mx-auto d-block mb-2 border border-success rounded-pill" type="submit">
                        Sign In
                    </Button>
                </Form>

                <p>New to Halal Grocery? <Link to="/register" className='text-success pe-auto text-decoration-none' > Please Register</Link> </p>

                <p>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' >Reset Password</button> </p>
                <SocialLogin></SocialLogin>
            </div>
        </Container>
    );
};

export default Login;