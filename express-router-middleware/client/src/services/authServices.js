import axiosInstance from "./axiosInstance";

const AuthServices = {
  login: (authInfo) => {
    return axiosInstance.post("/auth/login", authInfo);
  },
  verifyToken: () => {
    return axiosInstance.get("/auth");
  },
};

export default AuthServices;
