import { useEffect, useReducer } from "react";
import AuthServices from "../../services/authServices";
import axiosInstance from "../../services/axiosInstance";
import actionCreator from "../../utils/actionCreator";
import { GET_USER_INFO } from "../types";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token") ? true : false,
  user: null,
};

const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["token"] = token;
  } else {
  }
};

const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const verifyToken = async () => {
    const verifyToken = await AuthServices.verifyToken();
    dispatch(actionCreator(GET_USER_INFO, verifyToken.data));
  };

  useEffect(() => {
    setAuthToken(state.token);
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
