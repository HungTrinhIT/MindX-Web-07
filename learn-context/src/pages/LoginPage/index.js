import React from "react";
import { useAuthContext } from "../../contexts/AuthContext/authContext";

const LoginPage = () => {
  const authContext = useAuthContext();
  console.log(authContext);
  return <div>LoginPage</div>;
};

export default LoginPage;
