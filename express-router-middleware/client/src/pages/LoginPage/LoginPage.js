import React, { useState, useContext } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import AuthServices from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthState/AuthContext";
import { LOGIN } from "../../contexts/types";
import actionCreator from "../../utils/actionCreator";
import PageContainer from "../../components/PageContainer/PageContainer";

const LoginPage = (props) => {
  const [loginError, setLoginError] = useState(null);
  const [loginInProgress, setLoginInProgress] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLoginHandler = async (values) => {
    setLoginInProgress(true);
    try {
      const loginRes = await AuthServices.login(values);
      dispatch(actionCreator(LOGIN, loginRes.data));
      setLoginInProgress(false);
      navigate("/");
    } catch (error) {
      setLoginError(error.response.data.msg);
      setLoginInProgress(false);
    }
  };
  return (
    <PageContainer>
      <LoginForm
        onSubmit={onLoginHandler}
        inProgress={loginInProgress}
        error={loginError}
      />
    </PageContainer>
  );
};

export default LoginPage;
