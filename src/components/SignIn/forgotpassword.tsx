import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {HelpBlock} from "react-bootstrap";
import { FormGroup, FormControl, FormLabel, Container, Col, Image } from "react-bootstrap";
import LoaderButton from "../LoaderButton/LoaderButton";
import { useFormFields } from "../../lib/hooksLib";
import { onError } from "../../lib/errorLib";

import './signin.scss';
import imagelogo from '../../assets/images/image-logo.png';

export default function ResetPassword() {
    const ImageSection = () => {
        return (
            <div className="img-wrapper">
                <Image src={imagelogo} alt="Beat Bridge Image" />
            </div>
        )
    }

    const [fields, handleFieldChange] = useFormFields({
        code: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [codeSent, setCodeSent] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSendingCode, setIsSendingCode] = useState(false);

    function validateCodeForm() {
        return fields.email.length > 0;
    }

    function validateResetForm() {
        return (
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    async function handleSendCodeClick(event: any) {
        event.preventDefault();
        setIsSendingCode(true);

        // try {
        //   await Auth.forgotPassword(fields.email);
        //   setCodeSent(true);
        // } catch (error) {
        //   onError(error);
        //   setIsSendingCode(false);
        // }

        setCodeSent(true);
    }

    async function handleConfirmClick(event: any) {
        event.preventDefault();

        setIsConfirming(true);

        try {
            //   await Auth.forgotPasswordSubmit(
            //     fields.email,
            //     fields.code,
            //     fields.password
            //   );
            setConfirmed(true);
        } catch (error) {
            onError(error);
            setIsConfirming(false);
        }

        setConfirmed(true);
    }

    function renderRequestCodeForm() {
        return (
            <div>
                <form onSubmit={handleSendCodeClick}>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={fields.email}
                            onChange={handleFieldChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        type="submit"
                        isLoading={isSendingCode}
                        disabled={!validateCodeForm()}
                    >
                        Send Confirmation
                    </LoaderButton>
                </form>
                <div className="sign-up">
                    Don't have an account?
                    <Link className="sign-up-link" to={{ pathname: '/signup' }}>
                        Signup
                    </Link>
                </div>
            </div>
        );
    }

    function renderConfirmationForm() {
        return (
            <form onSubmit={handleConfirmClick}>
                <FormGroup controlId="code">
                    <FormLabel>Confirmation Code</FormLabel>
                    <FormControl
                        autoFocus
                        type="tel"
                        value={fields.code}
                        onChange={handleFieldChange}
                    />
                    {/* <HelpBlock>
                        Please check your email ({fields.email}) for the confirmation code.
                    </HelpBlock> */}
                </FormGroup>
                <hr />
                <FormGroup controlId="password">
                    <FormLabel>New Password</FormLabel>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                        type="password"
                        value={fields.confirmPassword}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    isLoading={isConfirming}
                    disabled={!validateResetForm()}
                >
                    Confirm
                </LoaderButton>
            </form>
        );
    }

    function renderSuccessMessage() {
        return (
            <div className="success">
                <p>Your password has been reset.</p>
                <p>
                    <Link to="/signin">
                        Click here to login with your new credentials.
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <Container className="signin-wrapper">
            <ImageSection />
            <Col>
                <div className="login-form col-sm-12 col-md">
                    <div className="labels">
                        <h4>HEY WELCOME</h4>
                        <h1>Login to DashBoard</h1>
                    </div>
                    <div className="ResetPassword">
                        {!codeSent
                            ? renderRequestCodeForm()
                            : !confirmed
                                ? renderConfirmationForm()
                                : renderSuccessMessage()}
                    </div>
                </div>
            </Col>
        </Container>
    );
}
