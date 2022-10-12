import axios from "axios";
import { BASE_URL } from "../config/domain";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
