import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import {
  Wrapper,
  Form,
  Label,
  Input,
  Button,
  Text,
} from "./RegisterForm.elements";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <>
      <Wrapper>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Label for="name">Ingrese su Nombre de Usuario</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Name"
            required
          />
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
          <Button>`REGISTRARME`</Button>
          <Text>
            Have an account? <Link to="/login">Login</Link>
          </Text>
        </Form>
      </Wrapper>
    </>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default RegisterForm;
