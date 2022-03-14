import axios from "axios";

const baseApi = process.env.REACT_APP_RUNTIME_ENV === "electron"
    ? "http://localhost:10086"
    : "/api";

const service = axios.create({
  baseURL: baseApi,
  timeout: 4 * 1000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) =>
    // 在发送请求之前做些什么
    config,
  (error) =>
    // 对请求错误做些什么
    Promise.reject(error),
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) =>
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    response,
  (error) =>
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    Promise.reject(error),
);

export default service;
