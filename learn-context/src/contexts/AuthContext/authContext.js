import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  const authCtx = useContext(AuthContext);
  return authCtx;
};
