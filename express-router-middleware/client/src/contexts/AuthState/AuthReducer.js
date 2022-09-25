import { LOGIN, LOG_OUT } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      const { token, isAuthenticated } = payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        isAuthenticated,
        token,
      };
    }
    case LOG_OUT: {
      console.log("I am in logout function");
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;