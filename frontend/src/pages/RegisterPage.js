import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Jumbotron title="Registrate">
        <RegisterForm />
      </Jumbotron>
    </>
  );
};

export default RegisterPage;
