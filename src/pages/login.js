import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { createTheme } from "@mui/system";
import { Alert } from "bootstrap";
import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import classes from "./login.module.css";
const LogIn = () => {
  const [usernameIn, setUsername] = useState("");
  const [passwordIn, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/home");
  };

  const payload = {
    username: usernameIn,
    password: passwordIn,
  };

  return (
    <div className={classes.container}>
      
      <Form onSubmit={loginHandler}>
      <h2>Login</h2>
        <Form.Group
          className="mb-3"
          controlId="formBasicUsername"
          value={usernameIn}
          onChange={(e) => setUsername(e.target.value)}
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          value={passwordIn}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/register" className={classes.register_link}>
          <p>register</p>
        </Link>
        <Button variant="primary" type="submit" className={classes.submit_btn}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
