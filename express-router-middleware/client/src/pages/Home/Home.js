import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthState/AuthContext";
import { LOG_OUT } from "../../contexts/types";
import actionCreator from "../../utils/actionCreator";

const Home = (props) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    const action = actionCreator(LOG_OUT);
    dispatch(action);
    navigate("/login");
  };
  return (
    <div>
      <Button type="primary" onClick={onLogoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
