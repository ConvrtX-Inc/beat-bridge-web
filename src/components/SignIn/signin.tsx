import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from '../../api/axios';
import './signin.scss';
import imagelogo from '../../assets/images/image-logo.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ImageSection = () => {
    return (
        <div className="img-wrapper">
            <Image src={imagelogo} alt="Beat Bridge Image" />
        </div>
    )
}

const LoginFormSection = () => {
    const [user, setuser] = useState('');
    const [pwd, setpwd] = useState('');
    const navigate = useNavigate();

    const userInput = (event: any) => {
        setuser(event.target.value);
    }

    const passwodInput = (event: any) => {
        setpwd(event.target.value);
    }

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            if (user == "admin@gmail.com" && pwd == "12345678") {
                var res = await axios.post('/api/v1/auth/email/login', {
                    email: user,
                    password: pwd,
                    latitude: "0",
                    longitude: "0"
                })
            }else{
                throw console.error("Error");
                
            }
            if (res) {
                localStorage.setItem('login', JSON.stringify(res));
                navigate("/dashboard");
                toast.success("Login Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("Incorrect Login Details", {
                position: "top-center",
                autoClose: 2000,
            });
        }
        setuser("");
        setpwd("");
    }
    return (
        <div className="login-form col-sm-12 col-md">
            <div className="labels">
                <h4>HEY WELCOME</h4>
                <h1>Login to DashBoard</h1>
            </div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email here" value={user} onChange={userInput}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password here" value={pwd} onChange={passwodInput}></Form.Control>
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
            {/* <div className="sign-up">
                Don't have an account?
                <Link className="sign-up-link" to={{ pathname: '/signup' }}>
                    Signup
                </Link>
            </div> */}
        </div>
    )
}

const SignIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate("/");
        }
        else {
            navigate("/dashboard");
        }
    }, [])

    return (
        <Container className="signin-wrapper">
            <ImageSection />
            <Col className="d-flex">
                <LoginFormSection />
            </Col>
            <ToastContainer />
        </Container>
    )
}

export default SignIn