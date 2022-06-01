import axios from "axios";

const baseApi = process.env.REACT_APP_RUNTIME_ENV === "electron"
  ? "http://localhost:10000"
  : "/";

const service = axios.create({
  baseURL: baseApi,
  timeout: 4 * 1000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
