import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className='my-4'>
            <hr />
            <h2 className='text-center'>Get In Touch</h2>
            <div className='d-flex justify-content-center'>
                <Form className='w-50 border border-success rounded-pill text-center p-5 m-5'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Button variant="success" type="submit" className='mx-auto d-block'>
                        Submit
                    </Button>
                </Form>
            </div>
            <hr />
        </div>
    );
};

export default ContactUs;