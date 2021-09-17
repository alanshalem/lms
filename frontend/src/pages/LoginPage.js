import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Jumbotron title="Login">
        <LoginForm />
      </Jumbotron>
    </>
  );
};

export default LoginPage;
