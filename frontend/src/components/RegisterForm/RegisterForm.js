import React, { useState } from "react";
import { Wrapper, Form, Label, Input, Button } from "./RegisterForm.elements";
const RegisterForm = () => {
  const [dados, setDados] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dados);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDados(Object.assign(dados, { [name]: value }));
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label for="email">Ingrese su Email</Label>
          <Input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
          <Label for="password">Ingrese su contraseña</Label>
          <Input
            type="password"
            name="password"
            value={dados.password}
            onChange={handleChange}
          />
          <Button>Entrar</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
