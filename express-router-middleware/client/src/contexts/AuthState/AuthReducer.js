import { LOGIN, LOG_OUT } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
      };
    }
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
