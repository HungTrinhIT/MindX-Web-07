import { GET_USER_INFO, LOGIN, LOG_OUT } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      const { token, isAuthenticated, user } = payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        isAuthenticated,
        token,
        user,
      };
    }
    case LOG_OUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    }
    case GET_USER_INFO: {
      const { data } = payload;
      return {
        ...state,
        user: data,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
