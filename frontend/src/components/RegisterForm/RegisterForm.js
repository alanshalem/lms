import axios from "axios";
import PropTypes from "prop-types"; // ES6
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  Text,
  Wrapper,
} from "./RegisterForm.elements";

const RegisterForm = () => {
  const [name, setName] = useState("Alan");
  const [email, setEmail] = useState("alan@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table([name, email, password]);
    const { data } = await axios.post(`http://localhost:8000/api/register`);
    console.log(`REGISTER RESPONSE`, data);
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
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default RegisterForm;
