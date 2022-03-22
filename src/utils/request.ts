import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseApi = process.env.REACT_APP_RUNTIME_ENV === "electron"
    ? "http://localhost:10086"
    : "/api";

const service = axios.create({
  baseURL: baseApi,
  timeout: 2 * 1000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const { config } = error;
    // If config does not exist or the retry option is not set, reject
    if (!config?.retry) return Promise.reject(error);

    // Set the variable for keeping track of the retry count
    config.retryCount = config.retryCount || 0;

    // Check if we've maxed out the total number of retries
    if (config.retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(error);
    }

    // Increase the retry count
    config.retryCount += 1;

    // Create new promise to handle exponential backoff
    const backoff = new Promise<void>((resolve) => {
      setTimeout(() => resolve(), config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(() => axios(config));
  },
);

export default service;
