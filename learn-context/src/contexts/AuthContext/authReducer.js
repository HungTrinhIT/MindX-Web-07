import { LOGIN } from "../types";

export const initialState = {
  user: null,
  isAuthenticated: false,
  token: "",
};
export const reducer = (state = initialState, action) => {
  console.log({ action });
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return;
    case "SIGNUP":
      return;
    default:
      return;
  }
};
