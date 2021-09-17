import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import {
  Wrapper,
  Form,
  Label,
  Input,
  Button,
  Text,
} from "./LoginForm.elements";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <Wrapper>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Label for="email">Ingrese su Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            required
          />
          <Label for="password">Ingrese su contraseña</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.password);
            }}
            placeholder="Enter Password"
            required
          />
          <Button>`INGRESAR`</Button>
          <Text>
            Eres nuevo? <Link to="/register">Registrate!</Link>
          </Text>
        </Form>
      </Wrapper>
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default LoginForm;
