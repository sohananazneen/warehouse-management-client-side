import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <Container>
            <div className='w-50 mx-auto my-4 text-center'>
                <h2 className='text-success text-center mt-2'>Please Login</h2>
                <Form onSubmit={handleSubmit} className='border border-success rounded-pill p-5 my-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                    </Form.Group>
                    <Button variant="success w-50 mx-auto d-block mb-2 border border-success rounded-pill" type="submit">
                        Sign In
                    </Button>
                </Form>
                {errorElement}
                <p>Don't have Account? <Link to="/register" className='text-success pe-auto text-decoration-none' onClick={navigateRegister} > Please Register</Link> </p>

                <p>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</button> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default Login;