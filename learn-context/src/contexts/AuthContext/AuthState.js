import { useReducer } from "react";
import { AuthContext } from "./authContext";
import { initialState, reducer } from "./authReducer";

const AuthState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

// redux-like
