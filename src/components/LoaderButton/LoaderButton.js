import React from "react";
import { Button } from "react-bootstrap";
import '../SignIn/signin.scss';

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}login-btn mt-3`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading}
      {props.children}
    </Button>
  );
}
