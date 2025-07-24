"use client";

import LoginContainer from "../LoginContainer";
import LoginForm from "./LoginForm";

const Login = () => {
  return <LoginForm />;
};

const LoginPage = () => {
  return (
    <LoginContainer.Provider>
      <Login />
    </LoginContainer.Provider>
  );
};

export default LoginPage;
