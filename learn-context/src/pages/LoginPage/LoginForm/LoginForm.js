import React, { useReducer, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext/authContext";
import { LOGIN } from "../../../contexts/types";
import { useNavigate } from "react-router-dom";

const BASIC_AUTH = {
  username: "admin",
  password: "admin",
};
const initialState = { username: "", password: "" };

const LoginForm = (props) => {
  const [user, setUser] = useState(initialState);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    const { username, password } = user;
    if (username === BASIC_AUTH.username && password === BASIC_AUTH.password) {
      const action = {
        type: LOGIN,
        payload: user,
      };

      dispatch(action);
      navigate("/");
    } else {
      alert("Ban da nhap sai vui long nhap lai nha");
      setUser(initialState);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitLoginForm}>
        <div className="form-control">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
