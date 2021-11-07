import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './signin.scss';
import imagelogo from '../../assets/images/image-logo.png';
// import image from '../../assets/images/image.png';
// import logo from '../../assets/images/logo.png';

const ImageSection = () => {
    return (
        <div className="img-wrapper">
            <Image src={imagelogo} alt="Beat Bridge Image" />
        </div>
    )
}

const LoginFormSection = () => {
    return (
        <div className="login-form col-sm-12 col-md">
            <div className="labels">
                <h4>HEY WELCOME</h4>
                <h1>Login to DashBoard</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email here"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Email Password</Form.Label>
                    <Form.Control type="password" placeholder="Password here"></Form.Control>
                </Form.Group>
                <div className="rememberMe-container">
                    <div>
                        <Form.Group className="mb-3" controlId="rememberMeCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </div>
                    <div>
                        <Link className="forgot-password" to={{ pathname: '/forgotpassword' }}>
                            Forgot password?
                        </Link>
                    </div>
                </div>
                <Button className="login-btn mt-3" type="submit">Sign In</Button>
            </Form>
            <div className="sign-up">
                Don't have an account?
                <Link className="sign-up-link" to={{ pathname: '/signup' }}>
                    Signup
                </Link>
            </div>
        </div>
    )
}

const SignIn = () => {
    return (
        <Container className="signin-wrapper">
            <ImageSection />
            <Col className="d-flex">
                <LoginFormSection />
            </Col>
        </Container>
    )
}

export default SignIn