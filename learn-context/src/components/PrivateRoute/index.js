import { useAuthContext } from "../../contexts/AuthContext/authContext";
import { Navigate } from "react-router-dom";

//Higher order component HOC
const PrivateRoute = ({ component: Component }) => {
  const authContext = useAuthContext();
  const { isAuthenticated } = authContext;

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
