import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,

  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // config.headers.Authorization = token || "london dreams";
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response.data,

  (error) => Promise.reject(error)
);

export default instance;
