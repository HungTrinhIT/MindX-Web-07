import axiosInstance from "./axiosInstance";

const AuthServices = {
  login: (authInfo) => {
    return axiosInstance.post("/auth/login", authInfo);
  },
};

export default AuthServices;
