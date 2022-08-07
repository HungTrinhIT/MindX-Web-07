import { createContext, useContext } from "react";

const initialState = {
  user: null,
  isAuthenticated: false,
};
const AuthContext = createContext(initialState);

export const useAuthContext = () => {
  const authCtx = useContext(AuthContext);
  return authCtx;
};

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={initialState}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
