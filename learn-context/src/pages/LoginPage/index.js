import React from "react";
import { useAuthContext } from "../../contexts/AuthContext/authContext";
import LoginForm from "./LoginForm/LoginForm";

const LoginPage = () => {
  const authContext = useAuthContext();

  return (
    <div>
      LoginPage
      <LoginForm />
    </div>
  );
};

export default LoginPage;
